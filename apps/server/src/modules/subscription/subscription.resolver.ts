import { Relations } from 'src/core/decorators/Relations';
import { SubscriptionService } from './subscription.service';
import { Resolver, Query } from '@nestjs/graphql';
import { AuthUserId } from 'src/core/decorators/AuthUserId';
import { AuthGuard } from '../auth/guard/AuthGuard';
import { Subscription } from './subscription.entity';
import { SubscriptionModel } from './subscription.model';
import { UseGuards } from '@nestjs/common';

@Resolver(() => SubscriptionModel)
export class SubscriptionResolver {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @UseGuards(AuthGuard)
  @Query(() => [SubscriptionModel])
  async subscriptions(
    @Relations() relations: any,
    @AuthUserId() userId: number,
  ): Promise<Subscription[]> {
    return this.subscriptionService.getAll({ relations });
  }
}

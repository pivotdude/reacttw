import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//
import { SubscriptionRepository } from './subscription.repository';
import { SubscriptionService } from './subscription.service';
import { SubscriptionResolver } from './subscription.resolver';
import { Subscription } from './subscription.entity';
//
import { UserModule } from '@m/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription]), UserModule],
  providers: [
    SubscriptionRepository,
    SubscriptionService,
    SubscriptionResolver,
  ],
})
export class SubscriptionModule {}

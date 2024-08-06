import { Injectable } from '@nestjs/common';
import { SubscriptionRepository } from './subscription.repository';

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async getAll({ relations }: { relations: any }) {
    console.log(relations);
    return this.subscriptionRepository.getAll({ relations });
  }
}

import { Injectable, NotAcceptableException } from '@nestjs/common';
import { SubscriptionRepository } from './subscription.repository';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async getAll({ relations }: { relations: any }) {
    return this.subscriptionRepository.getAll({ relations });
  }

  async follow(userId: number, authUserId: number, relations: any[]) {
    const exists = await this.subscriptionRepository.findOne({
      where: {
        author: { id: userId },
        user: { id: authUserId },
      },
    });

    if (!exists) {
      const author = await this.userRepository.findOne({
        where: { id: userId },
      });
      const user = await this.userRepository.findOne({
        where: { id: authUserId },
      });
      const subscription = await this.subscriptionRepository.save({
        author,
        user,
      });
      return this.subscriptionRepository.findOne({
        where: { id: subscription.id },
        relations,
      });
    } else {
      throw new NotAcceptableException('Already subscribed');
    }
  }

  async unfollow(userId: number, authUserId: number, relations: any[]) {
    const subscription = await this.subscriptionRepository.findOne({
      where: {
        author: { id: userId },
        user: { id: authUserId },
      },
      relations,
    });

    if (subscription) {
      await this.subscriptionRepository.delete(subscription.id);
      return subscription;
    } else {
      throw new NotAcceptableException('Already unsubscribed');
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';
import { BaseRepository } from '@/core/BaseRepository';

type ISubscriptionRepository = Repository<Subscription>;

@Injectable()
export class SubscriptionRepository extends BaseRepository<
  ISubscriptionRepository,
  Subscription
> {
  constructor(
    @InjectRepository(Subscription) public model: ISubscriptionRepository,
  ) {
    super(model);
  }
}

import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../core/BaseRepository';

type IUserRepository = Repository<User>;

@Injectable()
export class UserRepository extends BaseRepository<IUserRepository, User> {
  constructor(@InjectRepository(User) public model: IUserRepository) {
    super(model);
  }

  async getSubscribeCounts(userId: number) {
    return this.model
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.subscriptions', 'subscriptions')
      .leftJoinAndSelect('user.subscribers', 'subscribers')
      .where('user.id = :userId', { userId })
      .loadRelationCountAndMap('user.subscriptionsCount', 'user.subscriptions')
      .loadRelationCountAndMap('user.subscribersCount', 'user.subscribers')
      .getOne();
  }

  async findByLogin(login: string, relations?: any): Promise<User | null> {
    return this.model.findOne({
      where: { login },
      relations,
    });
  }

  async checkSubscribe(id: number, userId: number) {
    return this.model.findOne({
      where: { id, subscribers: { user: { id: userId } } },
      relations: { subscribers: true },
    });
  }

  async findByEmail(email: string) {
    return this.model.findOne({ where: { email } });
  }
}

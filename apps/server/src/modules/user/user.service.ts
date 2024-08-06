import { exceptionCodes } from 'src/data/exceptionCodes';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { count } from 'console';

export interface IUserProfile extends User {
  isUserProfile?: boolean;
  isUserFollow: boolean;
  subscribersCount: number;
  subscriptionsCount: number;
}

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async update(id: number, data: any) {
    return this.userRepository.update(id, { avatar: data.avatarId });
  }

  async findByLogin(
    login: string,
    userId: number,
    relations: any,
  ): Promise<IUserProfile> {
    const user = await this.userRepository.findByLogin(login, relations);

    if (!user) {
      throw new NotFoundException(exceptionCodes.notFound);
    }

    const subscribers = await this.userRepository.checkSubscribe(
      user.id,
      userId,
    );
    const counts = await this.userRepository.getSubscribeCounts(user.id);

    const isUserProfile = userId ? userId === user.id : false;
    console.log(counts);
    const isUserFollow = !!subscribers;
    return {
      ...user,
      isUserProfile,
      isUserFollow,
      // @ts-expect-error ts(2322)
      subscribersCount: counts.subscribersCount || 0,
      // @ts-expect-error ts(2322)
      subscriptionsCount: counts.subscriptionsCount || 0,
    };
  }

  async findById(id: number, relations?: any) {
    return this.userRepository.findById(id, relations);
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async create(data: User): Promise<User> {
    return this.userRepository.create(data);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}

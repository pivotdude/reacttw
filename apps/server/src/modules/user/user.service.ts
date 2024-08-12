import { Injectable, NotFoundException } from '@nestjs/common';
import { exceptionCodes } from '@/data/exceptionCodes';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

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

    let isUserFollow = false;
    let isUserProfile = false;

    if (userId) {
      const subscribers = await this.userRepository.checkSubscribe(
        user.id,
        userId,
      );
      isUserFollow = !!subscribers;
      isUserProfile = userId ? userId === user.id : false;
    }

    const counts = await this.userRepository.getSubscribeCounts(user.id);
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

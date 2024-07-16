import { exceptionCodes } from 'src/data/exceptionCodes';
import { UserInput } from '../auth/input/user.input';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

export interface IUserProfile extends User {
  isUserProfile?: boolean;
}

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  // async findByInput(
  //   input: UserInput,
  //   userId: number,
  // ): Promise<IUserProfile | null> {
  //   if (input?.id) {
  //     return this.userRepository.findById(input.id);
  //   }
  //   if (input?.login) {
  //   }
  //   throw new Error('wasd');
  // }

  async findByLogin(login: string, userId: number): Promise<IUserProfile> {
    const user = await this.userRepository.findByLogin(login);

    if (!user) {
      throw new NotFoundException(exceptionCodes.notFound);
    }

    const isUserProfile = userId ? userId === user.id : false;
    return { ...user, isUserProfile };
  }

  async findById(id: number) {
    return this.userRepository.findById(id);
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

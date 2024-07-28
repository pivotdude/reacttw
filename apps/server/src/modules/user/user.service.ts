import { exceptionCodes } from 'src/data/exceptionCodes';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { getRelations } from './user.relations';

export interface IUserProfile extends User {
  isUserProfile?: boolean;
}

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async update(id: number, data: any) {
    console.log(id, data);
    return this.userRepository.update(id, { avatar: data.avatarId });
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

  async findByLogin(
    login: string,
    userId: number,
    info: GraphQLResolveInfo,
  ): Promise<IUserProfile> {
    const relations = getRelations(info);
    const user = await this.userRepository.findByLogin(login, relations);

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

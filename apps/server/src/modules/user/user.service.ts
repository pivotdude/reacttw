import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async findById(id: number): Promise<User|null> {
    return this.userRepository.findById(id);
  }

  async create(data: any): Promise<User> {
    return this.userRepository.create(data);
  }
}

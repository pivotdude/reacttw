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

  async findByLogin(login: string, relations?: any): Promise<User | null> {
    return this.model.findOne({
      where: { login },
      relations,
    });
  }

  async findByEmail(email: string) {
    return this.model.findOne({ where: { email } });
  }
}

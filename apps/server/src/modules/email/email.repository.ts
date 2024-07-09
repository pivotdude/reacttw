import { Injectable } from '@nestjs/common';
import { Email } from './email.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../core/BaseRepository';

type IEmailRepository = Repository<Email>;

@Injectable()
export class EmailRepository extends BaseRepository<IEmailRepository, Email> {
  constructor(@InjectRepository(Email) public model: IEmailRepository) {
    super(model);
  }

  async findLastByEmail(email: string) {
    return this.model.findOne({
      where: {
        email,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }
}

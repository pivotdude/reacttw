import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailType } from './emailType.entity';
import { BaseRepository } from '@/core/BaseRepository';

type IEmailRepository = Repository<EmailType>;

@Injectable()
export class EmailTypeRepository extends BaseRepository<
  IEmailRepository,
  EmailType
> {
  constructor(@InjectRepository(EmailType) public model: IEmailRepository) {
    super(model);
  }

  async findByType(type: string) {
    return this.model.findOne({
      where: {
        code: type,
      },
    });
  }
}

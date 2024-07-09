import { Injectable } from '@nestjs/common';
import { EmailTypeRepository } from './emailType.repository';

@Injectable()
export class EmailTypeService {
  constructor(private emailTypeRepository: EmailTypeRepository) {}

  async findByType(type: string) {
    return this.emailTypeRepository.findByType(type);
  }
}

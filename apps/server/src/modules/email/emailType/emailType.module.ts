import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailType } from './emailType.entity';
import { EmailTypeService } from './emailType.service';
import { EmailTypeRepository } from './emailType.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EmailType])],
  providers: [EmailTypeService, EmailTypeRepository],
  exports: [EmailTypeService],
})
export class EmailTypeModule {}

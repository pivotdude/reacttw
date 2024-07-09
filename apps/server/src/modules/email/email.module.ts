import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { EmailService } from './email.service';
import { EmailRepository } from './email.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from './email.entity';
import { createMailerModule } from '../imports/mailer.module';
import { EmailTypeModule } from './emailType/emailType.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    EmailTypeModule,
    TypeOrmModule.forFeature([Email]),
    createMailerModule(),
  ],
  providers: [EmailService, EmailRepository],
  exports: [EmailService],
})
export class EmailModule {}

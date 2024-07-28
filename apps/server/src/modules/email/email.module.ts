import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { EmailService } from './email.service';
import { EmailRepository } from './email.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from './email.entity';
import { EmailTypeModule } from './emailType/emailType.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { getMailerConfig } from '../config/mailer.config';

@Module({
  imports: [
    forwardRef(() => UserModule),
    EmailTypeModule,
    TypeOrmModule.forFeature([Email]),
    MailerModule.forRootAsync({
      useFactory: () => getMailerConfig(),
    }),
  ],
  providers: [EmailService, EmailRepository],
  exports: [EmailService],
})
export class EmailModule {}

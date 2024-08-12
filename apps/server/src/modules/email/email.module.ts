import { forwardRef, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
//
import { EmailService } from './email.service';
import { Email } from './email.entity';
import { EmailRepository } from './email.repository';
//
import { UserModule } from '@m/user/user.module';
import { EmailTypeModule } from './emailType/emailType.module';
import { getMailerConfig } from '@m/config/mailer.config';

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

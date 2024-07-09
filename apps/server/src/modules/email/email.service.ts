import { Injectable } from '@nestjs/common';
import { EmailRepository } from './email.repository';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailTypeService } from './emailType/emailType.service';

type ITemplates = 'confirmLogin' | 'confirmRegistration';
type IEmailType = 'LOGIN' | 'REGISTER';

@Injectable()
export class EmailService {
  constructor(
    private emailRepository: EmailRepository,
    private readonly mailerService: MailerService,
    private emailTypeService: EmailTypeService,
  ) {}

  async findLast(email: string) {
    return this.emailRepository.findLastByEmail(email);
  }

  async findEmailTypeByName(type: string) {
    return this.emailTypeService.findByType(type);
  }

  async send(data: {
    email: string;
    type: IEmailType;
    context: {
      name: string;
      code: string;
    };
  }) {
    const emailType = await this.findEmailTypeByName(data.type);
    const { subject, template } = this.getThemeAndTemplateByType(data.type);
    await this.mailerService.sendMail({
      to: data.email,
      subject,
      template,
      context: data.context,
    });
    return this.emailRepository.create({
      email: data.email,
      data: { code: data.context.code },
      type: emailType,
    });
  }

  private getThemeAndTemplateByType(type: IEmailType): {
    subject: string;
    template: ITemplates;
  } {
    switch (type) {
      case 'REGISTER':
        return {
          subject: 'Sign up',
          template: 'confirmRegistration',
        };
      case 'LOGIN':
        return {
          subject: 'Sign in',
          template: 'confirmLogin',
        };
    }
  }
}

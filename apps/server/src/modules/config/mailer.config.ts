import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

const templatePath = process.cwd() + '/dist/data/emailTemplates';

export const getMailerConfig = (): MailerOptions => {
  return {
    transport: process.env.MAIL_URL,
    defaults: {
      from: '"nest-modules" <modules@nestjs.com>',
    },
    preview: false,
    template: {
      dir: templatePath,
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  };
};

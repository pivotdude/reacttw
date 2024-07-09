import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { DynamicModule } from '@nestjs/common';

const templatePath = process.cwd() + '/dist/data/emailTemplates';

export const createMailerModule = (): DynamicModule => {
  return NestMailerModule.forRootAsync({
    useFactory: () => {
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
    },
  });
};

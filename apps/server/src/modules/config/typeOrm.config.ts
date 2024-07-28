import { User } from '../user/user.entity';
import { Media } from '../media/media.entity';
import { Email } from '../email/email.entity';
import { EmailType } from '../email/emailType/emailType.entity';
import { Photo } from '../photos/photo.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'test',
    entities: [User, Media, EmailType, Email, Photo],
    synchronize: true,
  };
};

import { User } from '../user/user.entity';
import { Media } from '../media/media.entity';
import { Email } from '../email/email.entity';
import { EmailType } from '../email/emailType/emailType.entity';
import { Photo } from '../photo/photo.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Comment } from '../photo/comment/comment.entity';
import { PhotoLike } from '../photo/photoLike/photoLike.entity';
import { Subscription } from '../subscription/subscription.entity';

export const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
      Subscription,
      User,
      Media,
      EmailType,
      Email,
      Comment,
      Photo,
      PhotoLike,
    ],
    synchronize: true,
  };
};

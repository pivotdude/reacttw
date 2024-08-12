import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '@m/user/user.entity';
import { Media } from '@m/media/media.entity';
import { Email } from '@m/email/email.entity';
import { EmailType } from '@m/email/emailType/emailType.entity';
import { Photo } from '@m/photo/photo.entity';

import { Comment } from '@m/photo/comment/comment.entity';
import { PhotoLike } from '@m/photo/photoLike/photoLike.entity';
import { Subscription } from '@m/subscription/subscription.entity';
import { PhotoSaves } from '@m/photo/photoSaves/photoSaves.entity';

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
      PhotoSaves,
    ],
    synchronize: true,
  };
};

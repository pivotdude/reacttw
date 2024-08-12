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
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: {
      rejectUnauthorized: process.env.POSTGRES_SSL === 'true',
    },
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

import { TypeOrmModule as TypeOrm } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Media } from '../media/media.entity';
import { Photo } from '../photo/photo.entity';
import { Email } from '../email/email.entity';
import { EmailType } from '../email/emailType/emailType.entity';

export const TypeOrmModule = TypeOrm.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test',
  entities: [User, Media, Photo, EmailType, Email],
  synchronize: true,
});

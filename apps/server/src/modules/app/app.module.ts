import { TypeOrmModule } from '../imports/typeorm.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { GraphqlModule } from '../imports/grpahql.module';
import { ConfigModule } from '../imports/config.module';
import { MediaModule } from '../media/media.module';
import { AuthModule } from '../auth/auth.module';
import { EmailModule } from '../email/email.module';
import { PhotoModule } from '../photos/photo.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    GraphqlModule,
    EmailModule,
    AuthModule,
    MediaModule,
    UserModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

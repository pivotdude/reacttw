import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { MediaModule } from '../media/media.module';
import { EmailModule } from '../email/email.module';
import { PhotoModule } from '../photo/photo.module';
import { ConfigModule } from '@nestjs/config';
import { getConfigMConfig } from '../config/configM.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from '../config/typeOrm.config';
import { GraphQLModule } from '@nestjs/graphql';
import { getGraphqlConfig } from '../config/graphql.config';
import { AuthModule } from '../auth/auth.module';
import { SubscriptionModule } from '../subscription/subscription.module';

@Module({
  imports: [
    ConfigModule.forRoot(getConfigMConfig()),
    TypeOrmModule.forRoot(getTypeOrmConfig()),
    GraphQLModule.forRoot(getGraphqlConfig()),
    AuthModule,
    EmailModule,
    MediaModule,
    UserModule,
    PhotoModule,
    SubscriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

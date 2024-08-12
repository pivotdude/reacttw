import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//
import { AppController } from './app.controller';
import { AppService } from './app.service';
//
import { UserModule } from '@m/user/user.module';
import { MediaModule } from '@m/media/media.module';
import { EmailModule } from '@m/email/email.module';
import { PhotoModule } from '@m/photo/photo.module';
import { AuthModule } from '@m/auth/auth.module';
import { SubscriptionModule } from '@m/subscription/subscription.module';
//
import { getConfigMConfig } from '../config/configM.config';
import { getTypeOrmConfig } from '../config/typeOrm.config';
import { getGraphqlConfig } from '../config/graphql.config';

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

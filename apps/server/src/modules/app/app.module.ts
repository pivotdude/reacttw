import { TypeOrmModule } from '../imports/typeorm.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { GraphqlModule } from '../imports/grpahql.module';
import { ConfigModule } from '../imports/config.module';

@Module({
  imports: [TypeOrmModule, GraphqlModule, ConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { TypeOrmModule } from '../imports/typeorm.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { GraphqlModule } from '../imports/grpahql.module';

@Module({
  imports: [TypeOrmModule, GraphqlModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

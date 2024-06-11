import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrm } from '@nestjs/typeorm';
import { User } from '../user/user.entity';

@Module({
  imports: [
    TypeOrm.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class TypeOrmModule {}

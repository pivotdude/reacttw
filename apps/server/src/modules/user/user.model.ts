import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class UserModel implements User {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

import { Field, InputType } from '@nestjs/graphql';
import { User } from '../user.entity';

@InputType()
export class UserCreateInput {
  @Field()
  name?: string;

  @Field()
  login: string;

  @Field()
  email: string;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

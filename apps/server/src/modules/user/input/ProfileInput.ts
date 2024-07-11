import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../user.entity';

@ObjectType()
export class ProfileInput implements User {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field()
  login: string;

  @Field()
  email: string;

  @Field()
  isActive: boolean;

  @Field()
  isUserProfile: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

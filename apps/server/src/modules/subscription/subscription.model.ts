import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserModel } from '@m/user/user.model';

@ObjectType()
export class SubscriptionModel {
  @Field(() => Int)
  id: number;

  @Field(() => UserModel)
  author: UserModel;

  @Field(() => UserModel)
  user: UserModel;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

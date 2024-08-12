import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';
import { MediaModel } from '../media/media.model';

@ObjectType()
export class UserModel implements User {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => MediaModel, { nullable: true })
  avatar?: MediaModel;

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

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediaModel } from '@m/media/media.model';
import { UserModel } from '@m/user/user.model';

@ObjectType()
export class findPhotoModel {
  @Field(() => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => MediaModel, { nullable: true })
  media: MediaModel;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => Int)
  likeCount: number;

  @Field(() => Int)
  dislikeCount: number;

  @Field(() => Boolean)
  userLiked: boolean;

  @Field(() => Boolean)
  userDisliked: boolean;

  @Field(() => Boolean)
  userSaved: boolean;
}

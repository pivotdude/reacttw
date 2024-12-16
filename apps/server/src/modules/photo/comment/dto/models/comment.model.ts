import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PhotoModel } from '@m/photo/input/photo.model';
import { UserModel } from '@m/user/user.model';
import { PhotoLikeModel } from '@/modules/photo/photoLike/photoLike.model';

@ObjectType()
export class CommentModel {
  @Field(() => Int)
  id: number;

  @Field()
  text: string;

  @Field(() => PhotoModel, { nullable: true })
  photo: PhotoModel;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => [PhotoLikeModel], { nullable: true })
  likes: PhotoLikeModel;

  @Field(() => Int, { nullable: true })
  likeCount: number;

  @Field(() => Int, { nullable: true })
  dislikeCount: number;

  @Field(() => [CommentModel], { nullable: true })
  comments: CommentModel[];

  @Field(() => CommentModel, { nullable: true })
  parrent: CommentModel;

  @Field()
  userLiked: boolean;

  @Field()
  userDisliked: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediaModel } from 'src/modules/media/media.model';
import { UserModel } from 'src/modules/user/user.model';
import { PhotoLikeModel } from '../photoLike/photoLike.model';

@ObjectType()
export class PhotoModel {
  @Field((type) => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => MediaModel, { nullable: true })
  media: MediaModel;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => [PhotoLikeModel], { nullable: true })
  likes: PhotoLikeModel;
}

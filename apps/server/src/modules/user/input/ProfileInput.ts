import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediaModel } from 'src/modules/media/media.model';
import { PhotoModel } from 'src/modules/photo/input/photo.model';
import { PhotoLikeModel } from 'src/modules/photo/photoLike/photoLike.model';

@ObjectType()
export class ProfileInput {
  @Field(() => Int)
  id: number;

  @Field(() => [PhotoModel], { nullable: true })
  photos: PhotoModel[];

  @Field({ nullable: true })
  name?: string;

  @Field(() => MediaModel, { nullable: true })
  avatar?: MediaModel;

  @Field(() => [PhotoLikeModel], { nullable: true })
  photosLikes?: PhotoLikeModel[];

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

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediaModel } from '@m/media/media.model';
import { PhotoModel } from '@m/photo/input/photo.model';
import { PhotoLikeModel } from '@m/photo/photoLike/photoLike.model';
import { PhotoSavesModel } from '@m/photo/photoSaves/photoSaves.model';
import { SubscriptionModel } from '@m/subscription/subscription.model';

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

  @Field(() => [PhotoSavesModel], { nullable: true })
  savedPhotos?: PhotoSavesModel[];

  @Field(() => [PhotoLikeModel], { nullable: true })
  photosLikes?: PhotoLikeModel[];

  @Field(() => [SubscriptionModel], { nullable: true })
  subscriptions?: SubscriptionModel[];

  @Field(() => [SubscriptionModel], { nullable: true })
  subscribers?: SubscriptionModel[];

  @Field(() => Int)
  subscriptionsCount?: number;

  @Field(() => Int)
  subscribersCount?: number;

  @Field()
  login: string;

  @Field()
  email: string;

  @Field()
  isActive: boolean;

  @Field()
  isUserProfile: boolean;

  @Field()
  isUserFollow: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

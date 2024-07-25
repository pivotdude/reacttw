import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PhotoModel } from 'src/modules/photos/input/photo.model';

@ObjectType()
export class ProfileInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => [PhotoModel], { nullable: true })
  photos: PhotoModel[];

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

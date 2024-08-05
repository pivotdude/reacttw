import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class addPhotoLikeInput {
  @Field(() => Int)
  photoId: number;
}

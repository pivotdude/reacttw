import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PhotoSavesInput {
  @Field(() => Int)
  photo: number;
}

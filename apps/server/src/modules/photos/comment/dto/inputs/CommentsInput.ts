import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CommentsInput {
  @Field((type) => Int)
  photoId: number;
}

import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddCommentLikeInput {
  @Field(() => Int)
  commentId: number;
}

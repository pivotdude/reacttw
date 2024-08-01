import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field()
  text: string;

  @Field((type) => Int)
  photo: number;
}

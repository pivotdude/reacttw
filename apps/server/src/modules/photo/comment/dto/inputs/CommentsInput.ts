import { Field, InputType, Int } from '@nestjs/graphql';
import { PaginationInput } from '@/core/input/pagination.input';

@InputType()
export class CommentsInput {
  @Field(() => Int)
  photoId: number;

  @Field(() => PaginationInput, { nullable: true })
  pagination?: PaginationInput;
}

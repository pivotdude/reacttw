import { Field, InputType, Int } from '@nestjs/graphql';
import { PaginationInput } from '@/core/input/pagination.input';

@InputType()
export class CommentsInput {
  @Field((type) => Int)
  photoId: number;

  @Field((type) => PaginationInput, { nullable: true })
  pagination?: PaginationInput;
}

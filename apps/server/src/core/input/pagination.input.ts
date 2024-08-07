import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  @Field((type) => Int, { nullable: true })
  offset?: number;

  @Field((type) => Int, { nullable: true })
  limit?: number;
}

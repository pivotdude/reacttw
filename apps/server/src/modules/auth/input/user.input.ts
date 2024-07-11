import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  login?: string;
}

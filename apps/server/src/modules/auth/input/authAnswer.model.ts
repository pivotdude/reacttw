import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthAnswer {
  @Field()
  message: string;

  @Field()
  ok: boolean;
}

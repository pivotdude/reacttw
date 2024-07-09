import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginAnswerModel {
  @Field()
  message: string;

  @Field()
  ok: boolean;

  @Field()
  accessToken: string;
}

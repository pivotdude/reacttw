import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConfirmLoginCodeInput {
  @Field()
  code: string;

  @Field()
  email: string;
}

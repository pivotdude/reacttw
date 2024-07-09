import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendRegisterCodeInput {
  @Field()
  email: string;
}

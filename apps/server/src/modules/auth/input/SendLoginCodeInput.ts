import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendLoginCodeInput {
  @Field()
  email: string;
}

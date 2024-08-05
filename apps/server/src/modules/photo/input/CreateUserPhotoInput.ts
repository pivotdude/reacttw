import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserPhotoInput {
  @Field(() => [Number], { description: 'Array of photo IDs' })
  photoIds: number[];
}

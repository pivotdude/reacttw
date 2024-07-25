import { Media } from './media.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MediaModel implements Media {
  @Field((type) => Int)
  id: number;

  @Field()
  url: string;

  @Field()
  size: number;

  @Field()
  name: string;

  @Field()
  mimeType: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

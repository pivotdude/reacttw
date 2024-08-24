import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CommentModel } from '../dto/models/comment.model';

@ObjectType()
export class CommentLikeModel {
  @Field(() => Int)
  id: number;

  @Field()
  isLike: boolean;

  @Field(() => CommentModel)
  comment: CommentModel;
}

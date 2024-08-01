import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PhotoModel } from 'src/modules/photos/input/photo.model';
import { UserModel } from 'src/modules/user/user.model';

@ObjectType()
export class CommentModel {
  @Field((type) => Int)
  id: number;

  @Field()
  text: string;

  @Field((type) => PhotoModel, { nullable: true })
  photo: PhotoModel;

  @Field((type) => UserModel)
  user: UserModel;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

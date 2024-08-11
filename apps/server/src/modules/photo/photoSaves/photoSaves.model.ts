import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PhotoModel } from '../input/photo.model';
import { UserModel } from 'src/modules/user/user.model';

@ObjectType()
export class PhotoSavesModel {
  @Field(() => Int)
  id: number;

  @Field(() => PhotoModel)
  photo: PhotoModel;

  @Field(() => UserModel)
  user: UserModel;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

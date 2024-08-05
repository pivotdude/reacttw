import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PhotoLike } from './photoLike.entity';
import { PhotoModel } from '../input/photo.model';
import { Photo } from '../photo.entity';
import { UserModel } from 'src/modules/user/user.model';

@ObjectType()
export class PhotoLikeModel implements PhotoLike {
  @Field(() => Int)
  id: number;

  @Field()
  isLike: boolean;

  @Field(() => PhotoModel)
  photo: Photo;

  @Field(() => UserModel)
  user: UserModel;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediaModel } from 'src/modules/media/media.model';
import { UserModel } from 'src/modules/user/user.model';

@ObjectType()
export class PhotoModel {
  @Field((type) => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field((type) => MediaModel, { nullable: true })
  media: MediaModel;

  @Field((type) => UserModel)
  user: UserModel;
}

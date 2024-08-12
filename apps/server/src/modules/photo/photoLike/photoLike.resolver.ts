import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PhotoLikeService } from './photoLike.service';
import { PhotoLikeModel } from './photoLike.model';
import { addPhotoLikeInput } from '@/core/classes/Like/input/addPhotoLike.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@/core/guards';
import { AuthUserId, Relations } from '@/core/decorators';

@Resolver(() => PhotoLikeModel)
export class PhotoLikeResolver {
  constructor(private readonly photoLikeService: PhotoLikeService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => PhotoLikeModel)
  async addPhotoLike(
    @Args('input') input: addPhotoLikeInput,
    @AuthUserId() userId: number,
    @Relations() relations: any,
  ) {
    return this.photoLikeService.addLike({ input, userId, relations });
  }

  @UseGuards(AuthGuard)
  @Mutation(() => PhotoLikeModel)
  async addPhotoDislike(
    @Args('input') input: addPhotoLikeInput,
    @AuthUserId() userId: number,
    @Relations() relations: any,
  ) {
    return this.photoLikeService.addDislike({ input, userId, relations });
  }

  @UseGuards(AuthGuard)
  @Mutation(() => PhotoLikeModel)
  async deletePhotoLike(
    @Args('input') input: addPhotoLikeInput,
    @AuthUserId() userId: number,
  ) {
    return this.photoLikeService.deleteLike({ input, userId });
  }
}

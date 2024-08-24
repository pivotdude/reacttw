import { AuthUserId, Relations } from '@/core/decorators';
import { AuthGuard } from '@/core/guards';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CommentLikeService } from './commentLike.service';
import { PhotoLikeModel } from '../../photoLike/photoLike.model';
import { AddCommentLikeInput } from './addCommentLikeInput';

@Resolver(() => PhotoLikeModel)
export class CommentLikeResolver {
  constructor(private readonly commentLikeService: CommentLikeService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => PhotoLikeModel)
  async addCommentLike(
    @Args('input') input: AddCommentLikeInput,
    @AuthUserId() userId: number,
    @Relations() relations: any,
  ) {
    return this.commentLikeService.addLike({ input, userId, relations });
  }

  @UseGuards(AuthGuard)
  @Mutation(() => PhotoLikeModel)
  async addCommentDislike(
    @Args('input') input: AddCommentLikeInput,
    @AuthUserId() userId: number,
    @Relations() relations: any,
  ) {
    return this.commentLikeService.addDislike({ input, userId, relations });
  }

  @UseGuards(AuthGuard)
  @Mutation(() => PhotoLikeModel)
  async deleteCommentLike(
    @Args('input') input: AddCommentLikeInput,
    @AuthUserId() userId: number,
  ) {
    return this.commentLikeService.deleteLike({ input, userId });
  }
}

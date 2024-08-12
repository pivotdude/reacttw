import {
  Args,
  Context,
  Info,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { UseGuards } from '@nestjs/common';
//
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { CreateCommentInput } from './dto/inputs/CreateCommentInput';
import { CommentModel } from './dto/models/comment.model';
import { TokenGuard } from '@/core/guards';
import { CommentsInput } from './dto/inputs/CommentsInput';
import { Relations } from '@/core/decorators/Relations';
import { AuthUserId } from '@/core/decorators/AuthUserId';

@Resolver(() => CommentModel)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(TokenGuard)
  @Mutation(() => CommentModel)
  async createComment(
    @Args('input') input: CreateCommentInput,
    @AuthUserId() userId: number,
    @Relations() relations: any,
  ): Promise<Comment> {
    return this.commentService.create({ input, userId, relations });
  }

  @Query(() => [CommentModel])
  async comments(
    @Args('input') input: CommentsInput,
    @Relations() relations: any,
  ) {
    return this.commentService.getAll({ input, relations });
  }
}

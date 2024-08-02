import {
  Args,
  Context,
  Info,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { CreateCommentInput } from './dto/inputs/CreateCommentInput';
import { CommentService } from './comment.service';
import { CommentModel } from './dto/models/comment.model';
import { TokenGuard } from 'src/modules/auth/guard/TokenGuard';
import { UseGuards } from '@nestjs/common';
import { Comment } from './comment.entity';
import { CommentsInput } from './dto/inputs/CommentsInput';
import { GraphQLResolveInfo } from 'graphql';

@Resolver((of) => CommentModel)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(TokenGuard)
  @Mutation((returns) => CommentModel)
  async createComment(
    @Args('input') input: CreateCommentInput,
    @Context('req') req: any,
    @Info() info: GraphQLResolveInfo,
  ): Promise<Comment> {
    return this.commentService.create({ input, userId: req?.user?.id, info });
  }

  @Query((returns) => [CommentModel])
  async comments(
    @Args('input') input: CommentsInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    return this.commentService.getAll({ input, info });
  }
}

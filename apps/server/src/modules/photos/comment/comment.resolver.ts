import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCommentInput } from './dto/inputs/CreateCommentInput';
import { CommentService } from './comment.service';
import { CommentModel } from './dto/models/comment.model';
import { TokenGuard } from 'src/modules/auth/guard/TokenGuard';
import { UseGuards } from '@nestjs/common';
import { Comment } from './comment.entity';

@Resolver((of) => CommentModel)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(TokenGuard)
  @Mutation((returns) => CommentModel)
  async createComment(
    @Args('input') input: CreateCommentInput,
    @Context('req') req: any,
  ): Promise<Comment> {
    return this.commentService.create(input, req?.user?.id);
  }
}

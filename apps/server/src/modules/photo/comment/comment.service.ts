import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentsInput } from './dto/inputs/CommentsInput';
import { CommentLikeService } from './commentLike/commentLike.service';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly commentLikeService: CommentLikeService,
  ) {}

  async getAll({ input, userId }: { input: CommentsInput; userId: number }) {
    const comments = await this.commentRepository.getByPhotoIdSQL({
      photoId: input.photoId,
      pagination: input.pagination,
      userId,
    });

    return comments;
  }

  async create({ input, userId, relations }) {
    return this.commentRepository.create({ ...input, user: userId }, relations);
  }
}

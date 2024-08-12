import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentsInput } from './dto/inputs/CommentsInput';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async getAll({ relations, input }: { input: CommentsInput; relations: any }) {
    return this.commentRepository.getByPhotoId({
      relations,
      pagination: input.pagination,
      photoId: input.photoId,
    });
  }

  async create({ input, userId, relations }) {
    return this.commentRepository.create({ ...input, user: userId }, relations);
  }
}

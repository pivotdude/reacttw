import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async create(data, userId) {
    return this.commentRepository.create({ ...data, user: userId });
  }
}

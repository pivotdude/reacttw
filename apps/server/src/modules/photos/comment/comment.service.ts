import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { getRelations } from 'src/utils/getRelations';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async getAll({ info, input }) {
    const relations = getRelations(info);
    return this.commentRepository.getByPhotoId({
      photoId: input.photoId,
      relations,
    });
  }

  async create({ input, userId, info }) {
    const relations = getRelations(info);
    return this.commentRepository.create({ ...input, user: userId }, relations);
  }
}

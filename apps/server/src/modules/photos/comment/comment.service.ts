import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { getRelations } from 'src/utils/getRelations';
import { CommentsInput } from './dto/inputs/CommentsInput';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async getAll({
    info,
    input,
  }: {
    input: CommentsInput;
    info: GraphQLResolveInfo;
  }) {
    const relations = getRelations(info);
    return this.commentRepository.getByPhotoId({
      relations,
      pagination: input.pagination,
      photoId: input.photoId,
    });
  }

  async create({ input, userId, info }) {
    const relations = getRelations(info);
    return this.commentRepository.create({ ...input, user: userId }, relations);
  }
}

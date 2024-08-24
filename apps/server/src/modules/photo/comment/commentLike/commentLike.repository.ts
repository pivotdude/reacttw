import { BaseRepository } from '@/core/BaseRepository';
import { Repository } from 'typeorm';
import { CommentLike } from './commentLike.entity';
import { Injectable } from '@nestjs/common';
import { AddCommentLikeInput } from './addCommentLikeInput';
import { InjectRepository } from '@nestjs/typeorm';

type IRepository = Repository<CommentLike>;

@Injectable()
export class CommentLikeRepository extends BaseRepository<
  IRepository,
  CommentLike
> {
  constructor(@InjectRepository(CommentLike) public model: IRepository) {
    super(model);
  }

  async getLikeCount(commentId: number) {
    return this.model.count({
      where: { comment: { id: commentId, likes: { isLike: true } } },
    });
  }

  async getDisLikeCount(commentId: number) {
    return this.model.count({
      where: { comment: { id: commentId, likes: { isLike: false } } },
    });
  }

  async deleteLike({
    input,
    userId,
  }: {
    input: AddCommentLikeInput;
    userId: number;
  }) {
    const existingLike = await this.model.findOne({
      where: { user: { id: userId }, comment: { id: input.commentId } },
    });

    if (existingLike) {
      await this.model.delete(existingLike.id);
      return existingLike;
    }
    return null;
  }

  async upsertOrChange(data: any) {
    const { userId, commentId, isLike, relations } = data;

    const existingLike = await this.model.findOne({
      where: { user: { id: userId }, comment: { id: commentId } },
    });

    if (existingLike && existingLike?.id) {
      const updatedRow = await this.model.save({ id: existingLike.id, isLike });
      return this.findById(updatedRow.id, relations);
    } else {
      const createdRow = await this.model.save({
        user: userId,
        comment: commentId,
        isLike,
      });
      return this.findById(createdRow.id, relations);
    }
  }
}

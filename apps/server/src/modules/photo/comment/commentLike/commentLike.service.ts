import { Injectable } from '@nestjs/common';
import { CommentLikeRepository } from './commentLike.repository';
import { AddCommentLikeInput } from './addCommentLikeInput';

interface IAddReview {
  input: AddCommentLikeInput;
  userId: number;
  relations: any;
}

@Injectable()
export class CommentLikeService {
  constructor(private readonly commentLikeRepository: CommentLikeRepository) {}

  async addLike({ input, userId, relations }: IAddReview) {
    return this.commentLikeRepository.upsertOrChange({
      ...input,
      userId,
      isLike: true,
      relations,
    });
  }

  async addDislike({ input, userId, relations }: IAddReview) {
    return this.commentLikeRepository.upsertOrChange({
      ...input,
      userId,
      isLike: false,
      relations,
    });
  }

  async deleteLike({
    input,
    userId,
  }: {
    input: AddCommentLikeInput;
    userId: number;
  }) {
    return this.commentLikeRepository.deleteLike({ input, userId });
  }

  async getLikeCount(commentId: number) {
    return this.commentLikeRepository.getLikeCount(commentId);
  }

  async getDisLikeCount(commentId: number) {
    return this.commentLikeRepository.getDisLikeCount(commentId);
  }
}

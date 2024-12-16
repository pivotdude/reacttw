import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentsInput } from './dto/inputs/CommentsInput';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async getAll({ input, userId }: { input: CommentsInput; userId: number }) {
    const comments = await this.commentRepository.getByPhotoIdSQL({
      photoId: input.photoId,
      pagination: input.pagination,
      userId,
    });
    const organizedComments = this.formatComments(comments);
    return organizedComments;
  }

  async create({ input, userId, relations }) {
    return this.commentRepository.create({ ...input, user: userId }, relations);
  }
  formatComments(comments: any): Comment[] {
    const commentMap = new Map();

    // Создаем карту комментариев
    comments.forEach((comment) => {
      commentMap.set(comment.id, { ...comment, comments: [] });
    });

    // Строим иерархию
    const result: Comment[] = [];
    commentMap.forEach((comment) => {
      if (comment.parentId === null) {
        result.push(comment);
      } else {
        const parentComment = commentMap.get(comment.parentId);
        if (parentComment) {
          parentComment.comments.push(comment);
        }
      }
    });

    return result;
  }
}

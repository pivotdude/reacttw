import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//
import { BaseRepository } from '@/core/BaseRepository';
import { Comment } from './comment.entity';
import { IsAny } from 'typeorm';
import { IPagination } from '@/core/models';

type ICommentRepository = Repository<Comment>;

@Injectable()
export class CommentRepository extends BaseRepository<
  ICommentRepository,
  Comment
> {
  constructor(@InjectRepository(Comment) public model: ICommentRepository) {
    super(model);
  }

  async getByPhotoId({ photoId, relations, pagination }) {
    return this.model.find({
      where: {
        photo: { id: photoId },
      },
      relations,
      ...this.getPagination(pagination),
    });
  }

  async getByPhotoIdSQL({
    photoId,
    userId,
    pagination,
  }: {
    photoId: number;
    userId: number;
    pagination: { offset?: number; limit?: number };
  }) {
    const comments = await this.model.query(
      `
      SELECT
        c.*,
        json_build_object(
          'id', u.id,
          'name', u.name,
          'login', u.login,
          'email', u.email,
          'isActive', u."isActive",
          'createdAt', u."createdAt",
          'updatedAt', u."updatedAt",
          'avatarId', u."avatarId"
          ) as "user",
        EXISTS (SELECT 1 FROM "comment_like" WHERE "commentId" = c.id AND "userId" = $2 AND "isLike" = 'true') as "userLiked",
        EXISTS (SELECT 1 FROM "comment_like" WHERE "commentId" = c.id AND "userId" = $2 AND "isLike" = 'false') as "userDisliked",
        CAST((SELECT count(*) FROM "comment_like" WHERE "commentId" = c.id AND "isLike" = 'true') AS INTEGER) as "likeCount",
        CAST((SELECT count(*) FROM "comment_like" WHERE "commentId" = c.id AND "isLike" = 'false') AS INTEGER) as "dislikeCount"
      FROM "comment" c
      JOIN "user" u ON u.id = c."userId"
      WHERE c."photoId" = $1
      ORDER BY c."createdAt" DESC  -- добавлено упорядочивание, если нужно
      OFFSET $3
      LIMIT $4
    `,
      [photoId, userId, pagination?.offset || 0, pagination?.limit || 20], // photoId, userId, offset, limit
    );
    return comments;
  }
}

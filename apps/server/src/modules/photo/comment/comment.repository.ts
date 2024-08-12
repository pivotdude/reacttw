import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//
import { BaseRepository } from '@/core/BaseRepository';
import { Comment } from './comment.entity';

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
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/core/BaseRepository';
import { Repository } from 'typeorm';
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
}

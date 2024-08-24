import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//
import { Comment } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { CommentLikeModule } from './commentLike/commentLike.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), CommentLikeModule],
  providers: [CommentRepository, CommentService, CommentResolver],
})
export class CommentModule {}

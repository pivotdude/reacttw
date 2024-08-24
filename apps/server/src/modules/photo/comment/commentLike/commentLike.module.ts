import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//
import { CommentLikeRepository } from './commentLike.repository';
import { CommentLikeService } from './commentLike.service';
import { CommentLikeResolver } from './commentLike.resolver';
import { CommentLike } from './commentLike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentLike])],
  providers: [CommentLikeRepository, CommentLikeService, CommentLikeResolver],
  exports: [CommentLikeRepository, CommentLikeService],
})
export class CommentLikeModule {}

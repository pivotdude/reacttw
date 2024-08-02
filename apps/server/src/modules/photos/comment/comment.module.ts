import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { PhotoModule } from '../photo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentRepository, CommentService, CommentResolver],
})
export class CommentModule {}

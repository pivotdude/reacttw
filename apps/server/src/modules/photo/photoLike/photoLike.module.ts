import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoLike } from './photoLike.entity';
import { PhotoLikeRepository } from './photoLike.repository';
import { PhotoLikeService } from './photoLike.service';
import { PhotoLikeResolver } from './photoLike.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoLike])],
  providers: [PhotoLikeRepository, PhotoLikeService, PhotoLikeResolver],
})
export class PhotoLikeModule {}

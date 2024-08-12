import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//
import { PhotoService } from './photo.service';
import { PhotoRepository } from './photo.repository';
import { Photo } from './photo.entity';
import { PhotoResover } from './photo.resolver';
//
import { CommentModule } from './comment/comment.module';
import { PhotoLikeModule } from './photoLike/photoLike.module';
import { PhotoSavesModule } from './photoSaves/photoSaves.module';
import { UserModule } from '@m/user/user.module';
import { MediaModule } from '@m/media/media.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo]),
    UserModule,
    MediaModule,
    CommentModule,
    PhotoLikeModule,
    PhotoSavesModule,
  ],
  providers: [PhotoRepository, PhotoService, PhotoResover],
})
export class PhotoModule {}

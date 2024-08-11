import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoRepository } from './photo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { UserModule } from '../user/user.module';
import { MediaModule } from '../media/media.module';
import { PhotoResover } from './photo.resolver';
import { CommentModule } from './comment/comment.module';
import { PhotoLikeModule } from './photoLike/photoLike.module';
import { PhotoSavesModule } from './photoSaves/photoSaves.module';

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

import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoRepository } from './photo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { UserModule } from '../user/user.module';
import { MediaModule } from '../media/media.module';
import { PhotoResover } from './photo.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), UserModule, MediaModule],
  providers: [PhotoRepository, PhotoService, PhotoResover],
})
export class PhotoModule {}

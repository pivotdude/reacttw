import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../../user/user.module';
import { PhotoSavesRepository } from './photoSaves.repository';
import { PhotoSavesService } from './photoSaves.service';
import { PhotoSavesResolver } from './photoSaves.resolver';
import { PhotoSaves } from './photoSaves.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoSaves]), UserModule],
  providers: [PhotoSavesRepository, PhotoSavesService, PhotoSavesResolver],
})
export class PhotoSavesModule {}

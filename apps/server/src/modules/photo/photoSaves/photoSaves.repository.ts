import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/core/BaseRepository';
import { PhotoSaves } from './photoSaves.entity';

type IPhotoSavesRepository = Repository<PhotoSaves>;

@Injectable()
export class PhotoSavesRepository extends BaseRepository<
  IPhotoSavesRepository,
  PhotoSaves
> {
  constructor(
    @InjectRepository(PhotoSaves) public model: IPhotoSavesRepository,
  ) {
    super(model);
  }
}

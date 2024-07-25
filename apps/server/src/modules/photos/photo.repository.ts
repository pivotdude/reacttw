import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/core/BaseRepository';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

type IPhotoRepository = Repository<Photo>;

@Injectable()
export class PhotoRepository extends BaseRepository<IPhotoRepository, Photo> {
  constructor(@InjectRepository(Photo) public model: IPhotoRepository) {
    super(model);
  }
}

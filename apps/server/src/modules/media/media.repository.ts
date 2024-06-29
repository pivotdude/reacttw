import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/core/BaseRepository';
import { Media } from './media.entity';
import { Repository } from 'typeorm';

type IMediaRepository = Repository<Media>;

@Injectable()
export class MediaRepository extends BaseRepository<IMediaRepository, Media> {
  constructor(@InjectRepository(Media) public model: IMediaRepository) {
    super(model);
  }
}

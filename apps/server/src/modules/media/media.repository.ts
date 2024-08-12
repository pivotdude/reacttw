import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from '@/core/BaseRepository';
import { Media } from './media.entity';

type IMediaRepository = Repository<Media>;

@Injectable()
export class MediaRepository extends BaseRepository<IMediaRepository, Media> {
  constructor(@InjectRepository(Media) public model: IMediaRepository) {
    super(model);
  }
}

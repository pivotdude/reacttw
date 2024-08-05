import { BaseRepository } from 'src/core/BaseRepository';
import { Photo } from 'src/modules/photo/photo.entity';
import { PhotoLike } from 'src/modules/photo/photoLike/photoLike.entity';
import { And, Repository } from 'typeorm';

export class LikeRepository<M, R extends Repository<M>> extends BaseRepository<
  R,
  M
> {}

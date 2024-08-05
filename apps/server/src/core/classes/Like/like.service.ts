import { addPhotoLikeInput } from './input/addPhotoLike.input';
import { LikeRepository } from './like.repository';

export class LikeService<R extends LikeRepository<any, any>> {
  public likeRepository: R;

  constructor(likeRepository: R) {
    this.likeRepository = likeRepository;
  }
}

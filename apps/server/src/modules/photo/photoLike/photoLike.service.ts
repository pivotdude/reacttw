import { Injectable } from '@nestjs/common';
import { LikeService } from '@/core/classes/Like/like.service';
import { PhotoLikeRepository } from './photoLike.repository';
import { addPhotoLikeInput } from 'src/core/classes/Like/input/addPhotoLike.input';

interface IAddReview {
  input: addPhotoLikeInput;
  userId: number;
  relations: any;
}

@Injectable()
export class PhotoLikeService extends LikeService<PhotoLikeRepository> {
  constructor(private readonly photoLikeRepository: PhotoLikeRepository) {
    super(photoLikeRepository);
  }

  async addLike({ input, userId, relations }: IAddReview) {
    return this.likeRepository.upsertOrChange({
      ...input,
      userId,
      isLike: true,
      relations,
    });
  }

  async addDislike({ input, userId, relations }: IAddReview) {
    return this.likeRepository.upsertOrChange({
      ...input,
      userId,
      isLike: false,
      relations,
    });
  }

  async deleteLike({
    input,
    userId,
  }: {
    input: addPhotoLikeInput;
    userId: number;
  }) {
    return this.photoLikeRepository.deleteLike({ input, userId });
  }
}

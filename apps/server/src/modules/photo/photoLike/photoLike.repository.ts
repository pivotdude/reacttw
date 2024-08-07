import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoLike } from './photoLike.entity';
import { LikeRepository } from 'src/core/classes/Like/like.repository';
import { addPhotoLikeInput } from 'src/core/classes/Like/input/addPhotoLike.input';

type IRepository = Repository<PhotoLike>;

@Injectable()
export class PhotoLikeRepository extends LikeRepository<
  PhotoLike,
  IRepository
> {
  constructor(@InjectRepository(PhotoLike) public model: IRepository) {
    super(model);
  }

  async deleteLike({
    input,
    userId,
  }: {
    input: addPhotoLikeInput;
    userId: number;
  }) {
    const existingLike = await this.model.findOne({
      where: { user: { id: userId }, photo: { id: input.photoId } },
    });

    if (existingLike) {
      await this.model.delete(existingLike.id);
      return existingLike;
    }
    return null;
  }

  async upsertOrChange(data: any) {
    const { userId, photoId, isLike, relations } = data;

    const existingLike = await this.model.findOne({
      where: { user: { id: userId }, photo: { id: photoId } },
    });

    if (existingLike && existingLike?.id) {
      const updatedRow = await this.model.save({ id: existingLike.id, isLike });
      return this.findById(updatedRow.id, relations);
    } else {
      const createdRow = await this.model.save({
        user: userId,
        photo: photoId,
        isLike,
      });
      return this.findById(createdRow.id, relations);
    }
  }
}

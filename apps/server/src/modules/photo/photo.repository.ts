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
  async findByIdAuthUser(id: number, relations: string[], userId: number) {
    // Проверяем наличие likes для данной фотографии и пользователя
    const hasLikes = await this.model
      .createQueryBuilder('photo')
      .leftJoinAndSelect('photo.likes', 'likes')
      .leftJoinAndSelect('likes.user', 'user')
      .where('photo.id = :id', { id })
      .andWhere('user.id = :userId', { userId })
      .getCount();

    if (hasLikes > 0) {
      // Если likes существуют, выполняем запрос с присоединением likes
      return this.model
        .createQueryBuilder('photo')
        .leftJoinAndSelect('photo.likes', 'likes')
        .leftJoinAndSelect('likes.user', 'user')
        .where('photo.id = :id', { id })
        .andWhere('user.id = :userId', { userId })
        .getOne();
    } else {
      // Если likes отсутствуют, выполняем запрос без присоединения likes
      return this.model
        .createQueryBuilder('photo')
        .where('photo.id = :id', { id })
        .getOne();
    }
  }
}

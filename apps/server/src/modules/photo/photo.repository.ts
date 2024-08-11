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
    const photo = await this.model.query(
      `
        SELECT p.*,
       (SELECT count(*) FROM "photo_like" WHERE "photoId" = p.id AND "isLike" = 'true') as "likeCount",
       (SELECT count(*) FROM "photo_like" WHERE "photoId" = p.id AND "isLike" = 'false') as "dislikeCount",
       EXISTS (SELECT 1 FROM "photo_like" WHERE "photoId" = p.id AND "userId" = $1 AND "isLike" = 'true') as "userLiked",
       EXISTS (SELECT 1 FROM "photo_like" WHERE "photoId" = p.id AND "userId" = $1 AND "isLike" = 'false') as "userDisliked",
       EXISTS (SELECT 1 FROM "photo_saves" WHERE "photoId" = p.id AND "userId" = $1) as "userSaved"
FROM photo p
JOIN media m ON m.id = p."mediaId"
WHERE p.id = $2;
      `,
      [userId, id],
    );

    return photo[0];
  }
}

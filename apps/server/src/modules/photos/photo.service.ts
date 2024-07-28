import { Injectable } from '@nestjs/common';
import { PhotoRepository } from './photo.repository';
import { UserService } from '../user/user.service';
import { MediaService } from '../media/media.service';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    private readonly photoRepository: PhotoRepository,
    private readonly userService: UserService,
    private readonly mediaService: MediaService,
  ) {}

  async createUserPhotos(photoIds: number[], userId: number): Promise<Photo[]> {
    const user = await this.userService.findById(userId);
    const result = [];
    console.log(photoIds);

    for (const photoId of photoIds) {
      const media = await this.mediaService.findById(photoId);
      console.log(user, media);
      const photo = await this.photoRepository.create({ user, media });
      result.push(photo);
    }

    return result;
  }
}

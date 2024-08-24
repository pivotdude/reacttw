import { Injectable } from '@nestjs/common';
import { PhotoRepository } from './photo.repository';
import { UserService } from '@m/user/user.service';
import { MediaService } from '@m/media/media.service';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    private readonly photoRepository: PhotoRepository,
    private readonly userService: UserService,
    private readonly mediaService: MediaService,
  ) {}

  async findById(id: number, relations: any, userId: number) {
    const result = await this.photoRepository.findByIdAuthUser(
      id,
      relations,
      userId,
    );
    return result;
  }

  async findAll({ relations }: { relations: any; userId: number }) {
    return this.photoRepository.getAll({
      relations,
    });
  }

  async createUserPhotos(photoIds: number[], userId: number): Promise<Photo[]> {
    const user = await this.userService.findById(userId);
    const result = [];

    for (const photoId of photoIds) {
      const media = await this.mediaService.findById(photoId);
      const photo = await this.photoRepository.create({ user, media });
      result.push(photo);
    }

    return result;
  }
}

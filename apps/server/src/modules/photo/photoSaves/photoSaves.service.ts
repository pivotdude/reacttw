import { Injectable } from '@nestjs/common';
import { PhotoSavesRepository } from './photoSaves.repository';
import { PhotoSaves } from './photoSaves.entity';
import { PhotoSavesInput } from './inputs/photoSaves.input';

@Injectable()
export class PhotoSavesService {
  constructor(private readonly savesRepository: PhotoSavesRepository) {}

  async getAll(): Promise<PhotoSaves[]> {
    return this.savesRepository.getAll();
  }

  async create({ user, photo }): Promise<PhotoSaves> {
    return this.savesRepository.create({ user, photo });
  }

  async delete(input: PhotoSavesInput, userId: number): Promise<PhotoSaves> {
    const save = await this.savesRepository.findOne({
      where: { photo: { id: input.photo }, user: { id: userId } },
    });

    if (!save) {
      throw new Error('Save not found or not yours');
    }

    await this.savesRepository.delete(save.id);
    return save;
  }
}

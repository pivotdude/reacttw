import { Injectable } from '@nestjs/common';
import {
  UploadcareFile,
  uploadFile as uploadFileCard,
} from '@uploadcare/upload-client';
import { MediaRepository } from './media.repository';

@Injectable()
export class MediaService {
  constructor(private readonly mediaRepository: MediaRepository) {}

  public async findById(id: number) {
    return this.mediaRepository.findById(id);
  }

  public async uploadFile(file: Express.Multer.File) {
    const createdFile = await this.uploadFileOnS3(file.buffer, {
      name: file.originalname,
      mimeType: file.mimetype,
    });
    return this.createFile(createdFile);
  }

  private async createFile(file: UploadcareFile) {
    return this.mediaRepository.create({
      name: file.name,
      mimeType: file.mimeType,
      size: file.size,
      url: file.cdnUrl,
    });
  }

  private async uploadFileOnS3(
    buffer: Buffer,
    data: { name: string; mimeType: string },
  ) {
    return uploadFileCard(buffer, {
      publicKey: process.env.S3_PUBLIC_KEY,
      store: 'auto',
      fileName: data.name,
      contentType: data.mimeType,
    });
  }
}

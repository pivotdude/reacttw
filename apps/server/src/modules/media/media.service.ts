import { Injectable } from '@nestjs/common';
import { uploadFile as uploadFileCard } from '@uploadcare/upload-client';

@Injectable()
export class MediaService {
  async uploadFile(buffer: Buffer, metadata: any) {
    const result = await uploadFileCard(buffer, {
      publicKey: process.env.S3,
      store: 'auto',
      metadata: {
        size: metadata.size,
        encoding: metadata.encoding,
      },
      fileName: metadata.name,
      contentType: metadata.mimetype,
    });
    console.log(`URL: ${result.cdnUrl}`);
    console.log(`file: ${result}`);

    return result;
  }
}

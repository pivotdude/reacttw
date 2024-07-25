import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { PhotoService } from './photo.service';
import { PhotoModel } from './input/photo.model';
import { CreateUserPhotoInput } from './input/CreateUserPhotoInput';
import { Photo } from './photo.entity';
import { UseGuards } from '@nestjs/common';
import { TokenGuard } from '../auth/guard/TokenGuard';

@Resolver((of) => PhotoModel)
export class PhotoResover {
  constructor(private readonly photoService: PhotoService) {}

  @UseGuards(TokenGuard)
  @Mutation((returns) => [PhotoModel])
  async createUserPhotos(
    @Args('input') input: CreateUserPhotoInput,
    @Context('req') req: any,
  ): Promise<Photo[]> {
    return this.photoService.createUserPhotos(input.photoIds, req?.user?.id);
  }
}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoModel } from './input/photo.model';
import { CreateUserPhotoInput } from './input/CreateUserPhotoInput';
import { Photo } from './photo.entity';
import { findPhotoModel } from './input/findPhotoModel';
import { AuthUserId, Relations } from '@/core/decorators';
import { TokenGuard } from '@/core/guards';

@Resolver(() => PhotoModel)
export class PhotoResover {
  constructor(private readonly photoService: PhotoService) {}

  @UseGuards(TokenGuard)
  @Query(() => [PhotoModel])
  async photos(
    @AuthUserId() userId: number,
    @Relations() relations: any,
  ): Promise<Photo[]> {
    return this.photoService.findAll({ userId, relations });
  }

  @UseGuards(TokenGuard)
  @Query(() => findPhotoModel)
  async photo(
    @Args('id', { type: () => Int }) id: number,
    @Relations() relations: any,
    @AuthUserId() userId: number,
  ): Promise<Photo> {
    return this.photoService.findById(id, relations, userId);
  }

  @UseGuards(TokenGuard)
  @Mutation(() => [PhotoModel])
  async createUserPhotos(
    @Args('input') input: CreateUserPhotoInput,
    @AuthUserId() userId: number,
  ): Promise<Photo[]> {
    return this.photoService.createUserPhotos(input.photoIds, userId);
  }
}

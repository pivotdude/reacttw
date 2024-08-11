import {
  Args,
  Context,
  Info,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { PhotoService } from './photo.service';
import { PhotoModel } from './input/photo.model';
import { CreateUserPhotoInput } from './input/CreateUserPhotoInput';
import { Photo } from './photo.entity';
import { UseGuards } from '@nestjs/common';
import { TokenGuard } from '../auth/guard/TokenGuard';
import { GraphQLResolveInfo } from 'graphql';
import { AuthUserId } from 'src/core/decorators/AuthUserId';
import { Relations } from 'src/core/decorators/Relations';
import { findPhotoModel } from './input/findPhotoModel';

@Resolver((of) => PhotoModel)
export class PhotoResover {
  constructor(private readonly photoService: PhotoService) {}

  @UseGuards(TokenGuard)
  @Query(() => [PhotoModel])
  async photos(
    @AuthUserId() userId: number,
    @Info() info: GraphQLResolveInfo,
  ): Promise<Photo[]> {
    return this.photoService.findAll({ userId, info });
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

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PhotoSavesService } from './photoSaves.service';
import { UseGuards } from '@nestjs/common';
import { TokenGuard } from '../../auth/guard/TokenGuard';
import { PhotoSaves } from './photoSaves.entity';
import { PhotoSavesModel } from './photoSaves.model';
import { AuthGuard } from 'src/modules/auth/guard/AuthGuard';
import { AuthUserId } from 'src/core/decorators/AuthUserId';
import { PhotoSavesInput } from './inputs/photoSaves.input';

@Resolver(() => PhotoSavesModel)
export class PhotoSavesResolver {
  constructor(private readonly photoSavesService: PhotoSavesService) {}

  @UseGuards(TokenGuard)
  @Query(() => PhotoSavesModel)
  async saves(): Promise<PhotoSaves[]> {
    return this.photoSavesService.getAll();
  }

  @UseGuards(AuthGuard)
  @Mutation(() => PhotoSavesModel)
  async createPhotoSaves(
    @Args('input') input: PhotoSavesInput,
    @AuthUserId() userId: number,
  ): Promise<PhotoSaves> {
    return this.photoSavesService.create({ user: userId, ...input });
  }

  @UseGuards(AuthGuard)
  @Mutation(() => PhotoSavesModel)
  async deletePhotoSaves(
    @Args('input') input: PhotoSavesInput,
    @AuthUserId() userId: number,
  ): Promise<PhotoSaves> {
    return this.photoSavesService.delete(input, userId);
  }
}

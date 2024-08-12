import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PhotoSavesService } from './photoSaves.service';
import { PhotoSaves } from './photoSaves.entity';
import { PhotoSavesModel } from './photoSaves.model';
import { PhotoSavesInput } from './inputs/photoSaves.input';
import { AuthGuard, TokenGuard } from '@/core/guards';
import { AuthUserId } from '@/core/decorators';

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

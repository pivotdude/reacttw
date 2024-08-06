import { create } from 'zustand';
import { FetchPhotoDetailsResponse } from '../api/fetchPhotoDetails';

type IData = FetchPhotoDetailsResponse['photo'];

interface IPhotoDetailsStore {
  imageId: number;
  setImageId: (imageId: number) => void;
  data?: IData;
  setData: (data: any) => void;
  isLikeActive: boolean;
  setIsLikeActive: (isLikeActive: boolean) => void;
}

export const usePhotoDetailsStore = create<IPhotoDetailsStore>((set) => ({
  imageId: 0,
  setImageId: (imageId: number) => set({ imageId }),
  data: undefined,
  setData: (data: any) => set({ data }),
  isLikeActive: false,
  setIsLikeActive: (isLikeActive: boolean) => set({ isLikeActive }),
}));

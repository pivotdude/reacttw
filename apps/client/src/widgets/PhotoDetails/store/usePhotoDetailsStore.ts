import { create } from 'zustand';

interface IPhotoDetailsStore {
  imageId: number;
  setImageId: (imageId: number) => void;
  data: any;
  setData: (data: any) => void;
  isLikeActive: boolean;
  setIsLikeActive: (isLikeActive: boolean) => void;
}

export const usePhotoDetailsStore = create<IPhotoDetailsStore>((set) => ({
  imageId: 0,
  setImageId: (imageId: number) => set({ imageId }),
  data: null,
  setData: (data: any) => set({ data }),
  isLikeActive: false,
  setIsLikeActive: (isLikeActive: boolean) => set({ isLikeActive }),
}));

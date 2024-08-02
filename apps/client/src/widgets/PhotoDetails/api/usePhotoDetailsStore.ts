import { create } from 'zustand';

interface IPhotoDetailsStore {
  imageId: number;
  setImageId: (imageId: number) => void;
}

export const usePhotoDetailsStore = create<IPhotoDetailsStore>((set) => ({
  imageId: 0,
  setImageId: (imageId: number) => set({ imageId }),
}));

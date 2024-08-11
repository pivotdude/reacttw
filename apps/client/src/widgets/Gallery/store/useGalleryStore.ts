import { create } from 'zustand';
import { IPhoto, ISavedPhoto } from '../types';

interface IGaleryStore {
  profilePhotos: IPhoto[];
  setProfilePhotos: (profilePhotos: IPhoto[]) => void;
  savedPhotos: ISavedPhoto[];
  setSavedPhotos: (savedPhotos: ISavedPhoto[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useGalleryStore = create<IGaleryStore>((set) => ({
  profilePhotos: [],
  setProfilePhotos: (profilePhotos: IPhoto[]) => set({ profilePhotos }),
  savedPhotos: [],
  setSavedPhotos: (savedPhotos: ISavedPhoto[]) => set({ savedPhotos }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

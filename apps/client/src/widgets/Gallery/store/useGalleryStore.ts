import { create } from 'zustand';

interface IPhoto {
  id: number;
  media: {
    url: string;
    name: string;
  };
  user: {
    login: string;
    avatar: {
      url: string;
    };
  };
}

interface IGaleryStore {
  profilePhotos: IPhoto[] | null;
  setProfilePhotos: (profilePhotos: IPhoto[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useGalleryStore = create<IGaleryStore>((set) => ({
  profilePhotos: null,
  setProfilePhotos: (profilePhotos: IPhoto[]) => set({ profilePhotos }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

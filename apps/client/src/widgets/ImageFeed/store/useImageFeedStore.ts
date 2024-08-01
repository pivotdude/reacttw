import { create } from 'zustand';
import { IPhoto } from '../model';

export interface IImageListStore {
  photos: IPhoto[];
  setPhotos: (photos: IPhoto[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string) => void;
}

export const useImageFeedStore = create<IImageListStore>((set) => ({
  photos: [],
  setPhotos: (photos: IPhoto[]) => set({ photos }),
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
  error: null,
  setError: (error: string) => set({ error }),
}));

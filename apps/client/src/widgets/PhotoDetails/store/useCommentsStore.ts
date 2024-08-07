import { create } from 'zustand';
import { IComment } from '../models';

interface IPhotoDetails {
  comments: IComment[];
  setComments: (data: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: any) => void;
}

export const useCommentsStore = create<IPhotoDetails>((set) => ({
  comments: [],
  setComments: (comments: IComment[]) => set({ comments }),
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  error: null,
  setError: (error: any) => set({ error }),
}));

import { create } from 'zustand';
import { IComment } from '../model';

interface IPhotoDetails {
  comments: IComment[];
  setComments: (data: any) => void;
}

export const usePhotoDetails = create<IPhotoDetails>((set) => ({
  comments: [],
  setComments: (comments: IComment[]) => set({ comments }),
}));

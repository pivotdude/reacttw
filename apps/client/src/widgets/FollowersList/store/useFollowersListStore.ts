import { create } from 'zustand';

export interface IFollower {
  id: number;
  createdAt: string;
  user: {
    name: string;
    login: string;
    avatar: {
      url: string;
    };
  };
}

interface IFollowersListStore {
  followers: IFollower[];
  setFollowers: (followers: IFollower[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useFollowersListStore = create<IFollowersListStore>((set) => ({
  followers: [],
  setFollowers: (followers: any) => set({ followers }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

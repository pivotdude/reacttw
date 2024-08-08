import { create } from 'zustand';

export interface IFollowing {
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

interface IFollowingListStore {
  followings: IFollowing[];
  setFollowings: (followers: IFollowing[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useFollowingListStore = create<IFollowingListStore>((set) => ({
  followings: [],
  setFollowings: (followings: any) => set({ followings }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

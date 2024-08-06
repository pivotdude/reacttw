import { create } from 'zustand';
import { IFriend } from '../types';

export interface IFriendsListState {
  friends: IFriend[];
}

export const useFriendsList = create<IFriendsListState>(() => ({
  friends: [
    {
      name: 'terylucas',
      description: 'Hello my friend',
      src: 'https://github.com/shadcn.png',
    },
    {
      name: 'terylucas',
      description: 'Hello my friend',
      src: 'https://github.com/shadcn.png',
    },
    {
      name: 'terylucas',
      description: 'Hello my friend',
      src: 'https://github.com/shadcn.png',
    },
  ],
}));

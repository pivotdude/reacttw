import { create } from 'zustand';
import { IPost } from '../../../entities/post/types/IPost';

export interface IPostsListState {
  posts: IPost[];
}

export const usePostFeed = create<IPostsListState>(() => ({
  posts: [
    {
      user: {
        name: 'terylucas',
        avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
      },
      image:
        'https://avatars.mds.yandex.net/i?id=7299497125bb9eb032d7c464afb912d8_l-4936976-images-thumbs&n=13',
    },
    {
      user: {
        name: 'terylucas',
        avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
      },
      image:
        'https://avatars.mds.yandex.net/i?id=7299497125bb9eb032d7c464afb912d8_l-4936976-images-thumbs&n=13',
    },
    {
      user: {
        name: 'terylucas',
        avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
      },
      image:
        'https://avatars.mds.yandex.net/i?id=7299497125bb9eb032d7c464afb912d8_l-4936976-images-thumbs&n=13',
    },
    {
      user: {
        name: 'terylucas',
        avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
      },
      image:
        'https://avatars.mds.yandex.net/i?id=7299497125bb9eb032d7c464afb912d8_l-4936976-images-thumbs&n=13',
    },
    {
      user: {
        name: 'terylucas',
        avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
      },
      image:
        'https://avatars.mds.yandex.net/i?id=7299497125bb9eb032d7c464afb912d8_l-4936976-images-thumbs&n=13',
    },
    {
      user: {
        name: 'terylucas',
        avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
      },
      image:
        'https://avatars.mds.yandex.net/i?id=7299497125bb9eb032d7c464afb912d8_l-4936976-images-thumbs&n=13',
    },
  ],
}));

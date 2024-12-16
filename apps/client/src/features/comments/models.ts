export interface IComment {
  id: number;
  text: string;
  // comments: IComment[];
  createdAt: string;
  userLiked: boolean;
  userDisliked: boolean;
  likeCount: number;
  parrent: IComment | null;
  dislikeCount: number;
  user: {
    login: string;
    avatar: {
      name: string;
      url: string;
    };
  };
}

export type PartialIComment = Partial<IComment>;

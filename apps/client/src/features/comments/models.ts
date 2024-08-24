export interface IComment {
  id: number;
  text: string;
  createdAt: string;
  userLiked: boolean;
  userDisliked: boolean;
  likeCount: number;
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
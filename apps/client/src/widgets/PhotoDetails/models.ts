export interface IComment {
  id: number;
  text: string;
  createdAt: string;
  user: {
    login: string;
    avatar: {
      name: string;
      url: string;
    };
  };
}

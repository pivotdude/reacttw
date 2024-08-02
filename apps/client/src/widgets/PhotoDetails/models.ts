export interface IComment {
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

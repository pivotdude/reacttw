export interface IComment {
  id: string;
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

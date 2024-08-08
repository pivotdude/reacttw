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

export interface IImage {
  id: number;
}

export interface IPhoto {
  id: number;
  media: {
    name: string;
    url: string;
  };
  user: {
    login: string;
    avatar: {
      url: string;
    };
  };
}

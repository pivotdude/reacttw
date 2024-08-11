export interface IComment {}

export interface IPhoto {
  id: number;
  media: {
    url: string;
    name: string;
  };
  user: {
    login: string;
    avatar: {
      url: string;
    };
  };
}

export interface ISavedPhoto {
  photo: IPhoto;
}

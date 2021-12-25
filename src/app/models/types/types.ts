export type User = {
  name: string;
  nickName: string;
  following: number;
  followers: number;
  photo: string;
  background: string;
  id: string;
  post: { user: string; photo: string; text: string; postPhotos: string[] }[];
  about: string;
};

export type Post = {
  user: string;
  photo: string;
  text: string;
  postPhotos: string[];
};

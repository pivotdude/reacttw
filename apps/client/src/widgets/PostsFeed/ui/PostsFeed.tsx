import { IPost } from "@/entities/post";
import { UserPost } from "./UserPost";

export function PostsFeed() {
  const post1 = {
    user: {
      name: "terylucas",
      avatar: "https://avatars.githubusercontent.com/u/124599?v=4"
    },
    image:
      "https://avatars.mds.yandex.net/i?id=7299497125bb9eb032d7c464afb912d8_l-4936976-images-thumbs&n=13"
  } as IPost;
  const post2 = {
    user: {
      name: "terylucas",
      avatar: "https://avatars.githubusercontent.com/u/124599?v=4"
    },
    image:
      "https://avatars.mds.yandex.net/i?id=7299497125bb9eb032d7c464afb912d8_l-4936976-images-thumbs&n=13"
  } as IPost;
  const posts = [post1, post2] as IPost[];

  const postsList = posts.map((post: IPost) => <UserPost post={post} />);

  return <div className="space-y-4">{postsList}</div>;
}

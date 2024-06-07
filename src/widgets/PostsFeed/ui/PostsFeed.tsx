import { IPost } from "@/entities/post";
import { Post } from "@/entities/post";

export function PostsFeed() {
  const post1 = {
    user: {
      name: "terylucas",
      avatar: "https://avatars.githubusercontent.com/u/124599?v=4"
    },
    image:
      "https://i.pinimg.com/originals/33/42/ab/3342ab64321ec192e86fcd0fbe2051d1.jpg"
  } as IPost;
  const post2 = {
    user: {
      name: "terylucas",
      avatar: "https://avatars.githubusercontent.com/u/124599?v=4"
    },
    image:
      "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fkk8io3x75ql31.jpg"
  } as IPost;
  const posts = [post1, post2] as IPost[];

  const postsList = posts.map((post: IPost) => <Post post={post} />);

  return <div className="space-y-4">{postsList}</div>;
}

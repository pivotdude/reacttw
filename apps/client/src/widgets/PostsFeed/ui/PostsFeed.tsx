import { IPost } from "@/entities/post";
import { UserPost } from "./UserPost";
import { IPostsListState, usePostFeed } from "@/widgets/PostsFeed/store/usePostFeed";

export function PostsFeed() {
  const posts = usePostFeed((state: IPostsListState) => state.posts);
  const postsList = posts.map((post: IPost) => <UserPost post={post} />);

  return <div className="space-y-4">{postsList}</div>;
}

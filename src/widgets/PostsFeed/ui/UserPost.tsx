import { IPost, Post } from "@/entities/post";
import { UserCard } from "@/entities/user/ui/UserCard";
import { UserDropdown } from "@/features/user/userDropdown/ui/UserDropdown";

interface UserPostProps {
  post: IPost;
}

export function UserPost({ post }: UserPostProps) {
  return (
    <>
      <Post
        post={{
          image: post.image,
          user: { name: post.user.name, avatar: post.user.avatar }
        }}
        header={
          <div className="w-full flex items-center justify-between mb-2">
            <UserCard
              user={{ name: post.user.name, avatar: post.user.avatar }}
            />
            <UserDropdown />
          </div>
        }
      />
    </>
  );
}

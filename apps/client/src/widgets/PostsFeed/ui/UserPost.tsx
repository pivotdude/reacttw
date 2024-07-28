import { IPost, Post } from '@/entities/post';
import { UserCard } from '@/entities/user/ui/UserCard';
import { LikePostButton } from '@/features/likePost';
import { SavePostButton } from '@/features/savePost';
import { SharePostButton } from '@/features/sharePost';
import { UserDropdown } from '@/features/user/userDropdown/ui/UserDropdown';

interface UserPostProps {
  post: IPost;
}

export function UserPost({ post }: UserPostProps) {
  return (
    <>
      <Post
        post={{
          image: post.image,
          user: { name: post.user.name, avatar: post.user.avatar },
        }}
        header={
          <div className="w-full flex items-center justify-between mb-2">
            <UserCard
              user={{ name: post.user.name, avatar: post.user.avatar }}
            />
            <UserDropdown />
          </div>
        }
        actions={
          <>
            <LikePostButton postId={1} />
            <SharePostButton postId={1} />
            <SavePostButton postId={1} />
          </>
        }
      />
    </>
  );
}

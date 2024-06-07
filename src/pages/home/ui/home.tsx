import { FriendsList } from "@/widgets/FriendsList/ui/FriendsList";
import { PostsFeed } from "@/widgets/PostsFeed";
import { Sidebar } from "@/widgets/sidebar";

export function HomePage() {
  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-6 h-full py-2 pl-20  gap-x-10 gap-y-4">
        <div className="h-full col-span-3">
          <PostsFeed />
        </div>
        <div className="h-full col-span-1">
          <FriendsList />
        </div>
      </div>
    </>
  );
}

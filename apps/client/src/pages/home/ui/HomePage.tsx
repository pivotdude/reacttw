import { FriendsList } from '@/widgets/FriendsList/ui/FriendsList';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { PostsFeed } from '@/widgets/PostsFeed';

export function HomePage() {
  return (
    <div className="px-4 md:px-8 lg:px-10">
      <Navbar />
      <div className="grid grid-cols-3 h-full py-2 gap-x-10 gap-y-4 px-0 md:px-10 xl:px-48 2xl:px-64">
        <div className="h-full col-span-2">
          <PostsFeed />
        </div>
        <div className="h-full col-span-1">
          <FriendsList />
        </div>
      </div>
    </div>
  );
}

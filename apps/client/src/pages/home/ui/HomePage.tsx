import { FriendsList } from '@/widgets/FriendsList/ui/FriendsList';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { PostsFeed } from '@/widgets/PostsFeed';

export function HomePage() {
  return (
    <div className="px-4 md:px-8 lg:px-10">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 h-full py-2 gap-x-10 gap-y-4">
        <div className="h-full col-span-2">
          <PostsFeed />
        </div>
        <div className="h-full col-span-2 md:col-span-1">
          <FriendsList />
        </div>
      </div>
    </div>
  );
}

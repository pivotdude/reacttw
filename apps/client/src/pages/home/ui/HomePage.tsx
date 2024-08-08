import { FriendsList } from '@/widgets/FriendsList/ui/FriendsList';
import { ImageFeed } from '@/widgets/ImageFeed/ui/ImageFeed';
import { Layout } from '@/widgets/Layout/ui/Layout';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';

export function HomePage() {
  return (
    <Layout>
      <div className="px-2 md:px-8 lg:px-10">
        <Navbar />
        <div className="grid grid-cols-3 h-full py-2 gap-x-10 gap-y-4 px-0 md:px-10 xl:px-48 2xl:px-64">
          <div className="h-full col-span-3 md:col-span-2">
            <ImageFeed />
          </div>
          <div className="h-full col-span-1 md:block hidden">
            <FriendsList />
          </div>
        </div>
      </div>
    </Layout>
  );
}

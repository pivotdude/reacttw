import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { Layout } from '@/widgets/Layout/ui/Layout';
import { TypographyH3 } from '@/shared/ui/Typography';
import { ProfileHeader } from '@/widgets/ProfileHeader';
import { FollowingList } from '@/widgets/followingsList/ui/FollowingList';

export function FollowingPage() {
  return (
    <Layout>
      <div className="px-4 md:px-8 lg:px-10 w-full">
        <Navbar />
        <div className="px-0 md:px-10 xl:px-48 2xl:px-[23%]">
          <ProfileHeader />
          <div className="mt-20">
            <TypographyH3>Followers list</TypographyH3>
            <div className="mt-8">
              <FollowingList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

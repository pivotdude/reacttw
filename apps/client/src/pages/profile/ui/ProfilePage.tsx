import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { ProfileHeader } from '@/widgets/ProfileHeader';
import { UploadPhoto } from '@/widgets/UploadPhoto/ui/UploadPhoto';
import { Layout } from '@/widgets/Layout/ui/Layout';
import { UserGallery } from '@/widgets/Gallery';
import { useProfileStore } from '@/widgets/ProfileHeader/store/useProfileStore';

export function ProfilePage() {
  const profile = useProfileStore((store) => store.profile);

  return (
    <Layout>
      <div className="px-4 md:px-8 lg:px-10 w-full">
        <Navbar />
        <div className="px-0 md:px-10 xl:px-48 2xl:px-[23%]">
          <ProfileHeader />
          <div className="mt-10">
            {profile?.isUserProfile && <UploadPhoto />}
            <UserGallery />
          </div>
        </div>
      </div>
    </Layout>
  );
}

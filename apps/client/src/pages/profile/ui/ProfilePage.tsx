import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { useProfileStore } from '../store/useProfileStore';
import { NotFoundPage } from '@/pages/notFound/ui/NotFoundPage';
import { ProfileHeader } from '@/widgets/ProfileHeader';
import { fetchProfile } from '../api/fetchProfile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { UploadPhoto } from '@/widgets/UploadPhoto/ui/UploadPhoto';
import { Layout } from '@/widgets/Layout/ui/Layout';
import { UserGallery } from '@/widgets/Gallery';
import { LoadingScreen } from '@/shared/components/Loader';

export function ProfilePage() {
  const params = useParams();
  const { profile, setProfile, error, setErrorMessage, loading, setLoading } =
    useProfileStore(
      useShallow((store) => ({
        profile: store.profile,
        setProfile: store.setProfile,
        error: store.error,
        setErrorMessage: store.setErrorMessage,
        loading: store.loading,
        setLoading: store.setLoading,
      })),
    );

  // @ts-ignore
  const photos = profile?.photos?.map((photo) => ({
    src: photo.media.url,
    alt: photo.media.name,
    ...photo,
  })) as { src: string; alt: string }[];

  useEffect(() => {
    setLoading(true);
    fetchProfile(params.name as string)
      .then((result) => {
        setProfile(result.profile);
      })
      .catch((e) => {
        console.error('ee', e.response.errors[0].message);
        setErrorMessage(e.response.errors[0].message);
      })
      .finally(() => setLoading(false));
  }, [params]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error === 'NOT_FOUND' || !profile) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <div className="px-4 md:px-8 lg:px-10 w-full">
        <Navbar />
        <div className="px-0 md:px-10 xl:px-48 2xl:px-[23%]">
          {/* @ts-ignore */}
          <ProfileHeader profile={profile} />
          <div className="mt-10">
            <UploadPhoto />
            <UserGallery photos={photos} profile={profile} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

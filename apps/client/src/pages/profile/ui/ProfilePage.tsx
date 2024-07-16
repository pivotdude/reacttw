import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { UserGallery } from '@/entities/user';
import { useProfileStore } from '../store/useProfileStore';
import { NotFoundPage } from '@/pages/notFound/ui/NotFoundPage';
import { ProfileHeader } from '@/widgets/ProfileHeader';
import { fetchProfile } from '../api/fetchProfile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '@/shared/components/Loader';
import { useShallow } from 'zustand/react/shallow';

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

  useEffect(() => {
    setLoading(true);
    fetchProfile(params.name as string)
      .then((result) => {
        console.log('current profile', profile);
        setProfile(result.profile);
      })
      .catch((e) => {
        console.error('ee', e.response.errors[0].message);
        setErrorMessage(e.response.errors[0].message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error === 'NOT_FOUND') {
    return <NotFoundPage />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="px-4 md:px-8 lg:px-10 w-full">
      <Navbar />
      <div className="px-0 md:px-10 xl:px-48 2xl:px-96">
        {/* @ts-ignore */}
        <ProfileHeader profile={profile} />
        <div className="w-full m-auto py-2">
          <UserGallery photos={[]} />
        </div>
      </div>
    </div>
  );
}

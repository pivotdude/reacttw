import { Navbar } from '@/widgets/Navbar/ui/Navbar';
// import { useParams } from "react-router-dom";
import { UserGallery, UserProfileHeader } from '@/entities/user';
import { photos } from '../data/photos';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfile } from '../api/fetchProfile';
import { useProfileStore } from '../store/useProfileStore';
import { Button } from '@/shared/ui/button';

export function ProfilePage() {
  const params = useParams();
  const setProfile = useProfileStore((store) => store.setProfile);
  const profile = useProfileStore((store) => store.profile);

  console.log('ppp', profile);
  useEffect(() => {
    fetchProfile(params.name as string)
      .then((result) => {
        console.log('zxc', profile);
        setProfile(result.profile);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (!profile) {
    return <p>Loading</p>;
  }

  return (
    <div className="px-4 md:px-8 lg:px-10 w-full">
      <Navbar />
      <div className="px-0 md:px-10 xl:px-48 2xl:px-96">
        <UserProfileHeader
          user={{
            name: profile.login,
            fullName: profile?.name || '',
            avatar:
              'https://photo9.wambacdn.net/41/43/04/1779403414/2029152310_huge.jpg?hash=5GmA4nwenP8KlpSs7tOQpQ&expires=64060578000&updated=1699170483',
            posts: 0,
            followers: 0,
            following: 0,
          }}
          actions={
            <div className="space-x-2">
              <Button>Edit</Button>
            </div>
          }
        />
        <div className="w-full m-auto py-2">
          <UserGallery photos={[]} />
        </div>
      </div>
    </div>
  );
}

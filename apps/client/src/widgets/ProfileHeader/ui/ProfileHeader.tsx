import { UserProfileHeader } from '@/entities/user';
import { Button } from '@/shared/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { FollowButton } from './FollowButton';
import { StartDialogButton } from '@/features/startDialog';
import { useFetchProfile } from '../hooks/useFetchProfile';
import { useEffect } from 'react';
import { useProfileStore } from '../store/useProfileStore';
import { LoadingScreen, LoadingSpinner } from '@/shared/components/Loader';

export function ProfileHeader() {
  const params = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { fetchData } = useFetchProfile();
  const profile = useProfileStore((store) => store.profile);

  useEffect(() => {
    if (params.name) {
      fetchData(params.name);
    }
  }, [params.name]);

  if (!profile) {
    return <LoadingSpinner />;
  }

  return (
    <UserProfileHeader
      user={{
        name: profile.login,
        fullName: profile?.name || '',
        avatar: profile?.avatar?.url || '',
        followers: profile.subscribersCount,
        following: profile.subscriptionsCount,
      }}
      actions={
        profile.isUserProfile ? (
          <div className="space-x-2">
            <Button onClick={() => navigate('/settings')}>Edit</Button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <FollowButton />
            <StartDialogButton />
          </div>
        )
      }
    />
  );
}

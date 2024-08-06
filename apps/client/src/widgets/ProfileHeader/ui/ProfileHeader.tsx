import { UserProfileHeader } from '@/entities/user';
import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { FollowButton } from './FollowButton';
import { StartDialogButton } from '@/features/startDialog';
import { useProfileStore } from '@/pages/profile/store/useProfileStore';
import { LoadingSpinner } from '@/shared/components/Loader';

export function ProfileHeader() {
  const profile = useProfileStore((store) => store.profile);
  const navigate = useNavigate();
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

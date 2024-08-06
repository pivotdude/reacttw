import { UserProfileHeader } from '@/entities/user';
import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { FollowButton } from './FollowButton';
import { StartDialogButton } from '@/features/startDialog';

interface ProfileHeaderProps {
  profile: {
    login: string;
    name?: string;
    avatar?: {
      url: string;
    };
    counts: {
      posts: number;
      followers: number;
      following: number;
    };
    isUserProfile: boolean;
  };
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const navigate = useNavigate();
  return (
    <UserProfileHeader
      user={{
        name: profile.login,
        fullName: profile?.name || '',
        avatar: profile?.avatar?.url || '',
        posts: 0,
        followers: 0,
        following: 0,
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

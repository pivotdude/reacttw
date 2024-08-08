import { useParams } from 'react-router-dom';
import { useFetchFollowersList } from '../hook/useFetchFollowersList';
import { useEffect } from 'react';
import { useFollowersListStore } from '../store/useFollowersListStore';
import { LoadingSpinner } from '@/shared/components/Loader';
import { FollowerList } from '@/entities/followers/ui/FollowerList';

export function FollowersList() {
  const params = useParams<{ name: string }>();
  const { fetchData } = useFetchFollowersList();
  const followers = useFollowersListStore((store) => store.followers);
  const isLoading = useFollowersListStore((store) => store.isLoading);

  useEffect(() => {
    if (params.name) {
      fetchData(params.name);
    }
  }, []);

  if (followers.length === 0 && isLoading) {
    return <LoadingSpinner />;
  }

  if (followers.length === 0) {
    return <p className="text-md">No followers</p>;
  }

  return <FollowerList followers={followers} />;
}

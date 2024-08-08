import { useParams } from 'react-router-dom';
import { useFetchFollowersList } from '../hook/useFetchFollowingList';
import { useEffect } from 'react';
import { LoadingSpinner } from '@/shared/components/Loader';
import { FollowerList } from '@/entities/followers/ui/FollowerList';
import { useFollowingListStore } from '../store/useFollowingListStore';

export function FollowingList() {
  const params = useParams<{ name: string }>();
  const { fetchData } = useFetchFollowersList();
  const followings = useFollowingListStore((store) => store.followings);
  const isLoading = useFollowingListStore((store) => store.isLoading);

  useEffect(() => {
    if (params.name) {
      fetchData(params.name);
    }
  }, []);

  if (followings.length === 0 && isLoading) {
    return <LoadingSpinner />;
  }

  if (followings.length === 0) {
    return <p className="text-md">No following</p>;
  }

  return <FollowerList followers={followings} />;
}

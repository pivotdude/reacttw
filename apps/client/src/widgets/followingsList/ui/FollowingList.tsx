import { useParams } from 'react-router-dom';
import { useFetchFollowingList } from '../hook/useFetchFollowingList';
import { useEffect } from 'react';
import { LoadingSpinner } from '@/shared/components/Loader';
import { useFollowingListStore } from '../store/useFollowingListStore';
import { FollowerItem } from '@/entities/followers/ui/FollowerItem';

export function FollowingList() {
  const params = useParams<{ name: string }>();
  const { fetchData } = useFetchFollowingList();
  const followings = useFollowingListStore((store) => store.followings);
  const isLoading = useFollowingListStore((store) => store.isLoading);

  useEffect(() => {
    if (params.name) {
      fetchData(params.name);
    }
  }, [params]);

  if (followings.length === 0 && isLoading) {
    return <LoadingSpinner />;
  }

  if (followings.length === 0) {
    return <p className="text-md">No following</p>;
  }

  const followingsList = followings.map((following) => (
    <FollowerItem
      key={following.id}
      createdAt={following.createdAt}
      user={following.author}
    />
  ));

  return <div className="space-y-8">{followingsList}</div>;
}

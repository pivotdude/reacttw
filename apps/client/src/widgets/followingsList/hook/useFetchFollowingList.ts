import { useShallow } from 'zustand/react/shallow';
import { useFollowingListStore } from '../store/useFollowingListStore';
import { fetchFollowingList } from '../api/fetchFollowingList';

export function useFetchFollowersList() {
  const { setFollowers, setIsLoading } = useFollowingListStore(
    useShallow((store) => ({
      setFollowers: store.setFollowers,
      setIsLoading: store.setIsLoading,
    })),
  );

  const fetchData = (login: string) => {
    setIsLoading(true);
    fetchFollowingList(login)
      .then((profile) => setFollowers(profile.user.subscribers))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { fetchData };
}

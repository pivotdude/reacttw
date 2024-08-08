import { useShallow } from 'zustand/react/shallow';
import { useFollowingListStore } from '../store/useFollowingListStore';
import { fetchFollowingList } from '../api/fetchFollowingList';

export function useFetchFollowingList() {
  const { setFollowings, setIsLoading } = useFollowingListStore(
    useShallow((store) => ({
      setFollowings: store.setFollowings,
      setIsLoading: store.setIsLoading,
    })),
  );

  const fetchData = (login: string) => {
    setIsLoading(true);
    fetchFollowingList(login)
      .then((profile) => setFollowings(profile.user.subscriptions))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { fetchData };
}

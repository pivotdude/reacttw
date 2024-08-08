import { useShallow } from 'zustand/react/shallow';
import { useFollowersListStore } from '../store/useFollowersListStore';
import { fetchFollowersList } from '../api/fetchFollowersList';

export function useFetchFollowersList() {
  const { setFollowers, setIsLoading } = useFollowersListStore(
    useShallow((store) => ({
      setFollowers: store.setFollowers,
      setIsLoading: store.setIsLoading,
    })),
  );

  const fetchData = (login: string) => {
    setIsLoading(true);
    fetchFollowersList(login)
      .then((profile) => setFollowers(profile.user.subscribers))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { fetchData };
}

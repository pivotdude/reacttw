import { useProfileStore } from '../store/useProfileStore';
import { useShallow } from 'zustand/react/shallow';
import { fetchProfile } from '../api/fetchProfile';

export function useFetchProfile() {
  const { setProfile, setErrorMessage, setLoading } = useProfileStore(
    useShallow((store) => ({
      setProfile: store.setProfile,
      setErrorMessage: store.setErrorMessage,
      setLoading: store.setLoading,
    })),
  );

  const fetchData = async (login: string) => {
    setLoading(true);
    fetchProfile(login)
      .then((result) => {
        setProfile(result.user);
      })
      .catch((e) => {
        console.error('ee', e.response.errors[0].message);
        setErrorMessage(e.response.errors[0].message);
      })
      .finally(() => setLoading(false));
  };

  return { fetchData };
}

import { useShallow } from 'zustand/react/shallow';
import { useGalleryStore } from '../store/useGalleryStore';
import { fetchSavedPhotos } from '../api/fetchSavedPhotos';

export function useFetchSavedPhotos() {
  const { setSavedPhotos, setIsLoading } = useGalleryStore(
    useShallow((store) => ({
      setSavedPhotos: store.setSavedPhotos,
      setIsLoading: store.setIsLoading,
    })),
  );

  const fetchData = (login: string) => {
    setIsLoading(true);
    fetchSavedPhotos(login)
      .then((profile) => setSavedPhotos(profile.user.savedPhotos))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { fetchData };
}

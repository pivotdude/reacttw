import { useShallow } from 'zustand/react/shallow';
import { fetchPhotos } from '../api/fetchPhotos';
import { useGalleryStore } from '../store/useGalleryStore';

export function useFetchPhotos() {
  const { setProfilePhotos, setIsLoading } = useGalleryStore(
    useShallow((store) => ({
      setProfilePhotos: store.setProfilePhotos,
      setIsLoading: store.setIsLoading,
    })),
  );

  const fetchData = (login: string) => {
    setIsLoading(true);
    fetchPhotos(login)
      .then((profile) => setProfilePhotos(profile.profile.photos))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { fetchData };
}

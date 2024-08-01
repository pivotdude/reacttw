import { useShallow } from 'zustand/react/shallow';
import { useImageFeedStore } from '../store/useImageFeedStore';
import { fetchImageFeed } from './fetchImageFeed';

interface useFetchImagesReturn {
  loading: boolean;
  fetchData: () => void;
}

export function useFetchImages(): useFetchImagesReturn {
  const { loading, setLoading, setPhotos, setError } = useImageFeedStore(
    useShallow((store) => ({
      loading: store.loading,
      setLoading: store.setLoading,
      setPhotos: store.setPhotos,
      setError: store.setError,
    })),
  );

  const fetchData = () => {
    setLoading(true);
    fetchImageFeed()
      .then((result) => {
        setPhotos(result.photos);
      })
      .catch((e) => {
        setError(e.response.errors[0].message);
      })
      .finally(() => setLoading(false));
  };

  return { loading, fetchData };
}

import { useShallow } from 'zustand/react/shallow';
import { fetchComments } from './fetchComments';
import { usePhotoDetails } from '../store/usePhotoDetails';

interface useFetchImagesReturn {
  loading: boolean;
  fetchData: (photoId: number) => void;
}

export function useFetchComments(): useFetchImagesReturn {
  const { setComments, loading, setLoading, setError } = usePhotoDetails(
    useShallow((store) => ({
      setComments: store.setComments,
      loading: store.loading,
      setLoading: store.setLoading,
      setError: store.setError,
    })),
  );

  const fetchData = (photoId: number) => {
    setLoading(true);
    fetchComments(photoId)
      .then((result) => {
        setComments(result.comments);
      })
      .catch((e) => {
        setError(e.response.errors[0].message);
      })
      .finally(() => setLoading(false));
  };

  return { loading, fetchData };
}

import { useShallow } from 'zustand/react/shallow';
import { fetchComments } from './fetchComments';
import { useCommentsStore } from '../store/useCommentsStore';

interface useFetchImagesReturn {
  loading: boolean;
  fetchData: (photoId: number, page: number) => void;
}

export function useFetchComments(limit = 20): useFetchImagesReturn {
  const { setComments, loading, setLoading, setError } = useCommentsStore(
    useShallow((store) => ({
      setComments: store.setComments,
      loading: store.loading,
      setLoading: store.setLoading,
      setError: store.setError,
    })),
  );

  const fetchData = (photoId: number, page: number) => {
    setLoading(true);
    fetchComments(photoId, { page, limit })
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

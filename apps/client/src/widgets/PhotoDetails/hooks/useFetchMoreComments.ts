import { useShallow } from 'zustand/react/shallow';
import { fetchComments } from '../api/fetchComments';
import { useCommentsStore } from '../store/useCommentsStore';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';

interface useFetchMoreCommentsReturn {
  fetchData: (offset: number, limit?: number) => Promise<void>;
  fetchNewData: (offset: number, limit?: number) => Promise<void>;
}

export function useFetchMoreComments(): useFetchMoreCommentsReturn {
  const imageId = usePhotoDetailsStore((store) => store.imageId);
  const { comments, setComments, setLoading } = useCommentsStore(
    useShallow((store) => ({
      comments: store.comments,
      setComments: store.setComments,
      setLoading: store.setLoading,
    })),
  );

  const fetchData = async (offset: number, limit = 20) => {
    setLoading(true);
    fetchComments(imageId, { offset, limit })
      .then((result) => {
        setComments([...comments, ...result.comments]);
      })
      .finally(() => setLoading(false));
  };

  const fetchNewData = async (offset: number, limit = 20) => {
    setLoading(true);
    fetchComments(imageId, { offset, limit })
      .then((result) => {
        setComments(result.comments);
      })
      .finally(() => setLoading(false));
  };

  return { fetchData, fetchNewData };
}

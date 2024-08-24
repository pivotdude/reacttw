import { useShallow } from 'zustand/react/shallow';
import { fetchComments } from '../api/fetchComments';
import { useCommentsStore } from '../store/useCommentsStore';

interface useFetchMoreCommentsReturn {
  fetchData: (offset: number, limit?: number) => Promise<void>;
  fetchNewData: (offset: number, limit?: number) => Promise<void>;
}

export function useFetchMoreComments(imageId: number): useFetchMoreCommentsReturn {
  const { comments, setComments, setLoading, setIsNewCommentsLoading } =
    useCommentsStore(
      useShallow((store) => ({
        comments: store.comments,
        setComments: store.setComments,
        setLoading: store.setLoading,
        setIsNewCommentsLoading: store.setIsNewCommentsLoading,
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
    setIsNewCommentsLoading(true);
    fetchComments(imageId, { offset, limit })
      .then((result) => {
        setComments(result.comments);
      })
      .finally(() => setIsNewCommentsLoading(false));
  };

  return { fetchData, fetchNewData };
}

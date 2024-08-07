import { useShallow } from 'zustand/react/shallow';
import { fetchComments } from '../api/fetchComments';
import { useCommentsStore } from '../store/useCommentsStore';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';

interface useFetchMoreCommentsReturn {
  fetchData: (offset: number, limit?: number) => Promise<void>;
  fetchNewData: (offset: number, limit?: number) => Promise<void>;
}

export function useFetchMoreComments(limit = 20): useFetchMoreCommentsReturn {
  const imageId = usePhotoDetailsStore((store) => store.imageId);
  const { comments, setComments } = useCommentsStore(
    useShallow((store) => ({
      comments: store.comments,
      setComments: store.setComments,
    })),
  );

  const fetchData = async (offset: number, limit = 20) => {
    fetchComments(imageId, { offset, limit }).then((result) => {
      setComments([...comments, ...result.comments]);
    });
  };

  const fetchNewData = async (offset: number, limit = 20) => {
    fetchComments(imageId, { offset, limit }).then((result) => {
      setComments(result.comments);
    });
  };

  return { fetchData, fetchNewData };
}

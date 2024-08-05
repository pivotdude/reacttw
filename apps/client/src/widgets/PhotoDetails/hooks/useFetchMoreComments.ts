import { useShallow } from 'zustand/react/shallow';
import { fetchComments } from '../api/fetchComments';
import { useCommentsStore } from '../store/useCommentsStore';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';

interface useFetchMoreCommentsReturn {
  fetchMoreData: () => void;
}

export function useFetchMoreComments(limit = 20): useFetchMoreCommentsReturn {
  const imageId = usePhotoDetailsStore((store) => store.imageId);
  const { page, setPage, comments, setComments } = useCommentsStore(
    useShallow((store) => ({
      page: store.page,
      setPage: store.setPage,
      comments: store.comments,
      setComments: store.setComments,
    })),
  );

  const fetchData = () => {
    console.log('fetching');
    fetchComments(imageId, { page, limit }).then((result) => {
      setComments([...comments, ...result.comments]);
    });
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    fetchData();
    setPage(nextPage);
  };

  return { fetchMoreData };
}

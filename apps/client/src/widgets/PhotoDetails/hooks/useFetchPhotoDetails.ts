import { useShallow } from 'zustand/react/shallow';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';
import { fetchPhotoDetails } from '../api/fetchPhotoDetails';

interface useFetchImagesReturn {
  fetchData: (photoId: number) => void;
}

export function useFetchPhotoDetails(): useFetchImagesReturn {
  const { setData } = usePhotoDetailsStore(
    useShallow((store) => ({
      setData: store.setData,
    })),
  );

  const fetchData = (photoId: number) => {
    // setLoading(true);
    fetchPhotoDetails(photoId).then((result) => {
      setData(result);
    });
    // .catch((e) => {
    //   setError(e.response.errors[0].message);
    // })
    // .finally(() => setLoading(false));
  };

  return { fetchData };
}

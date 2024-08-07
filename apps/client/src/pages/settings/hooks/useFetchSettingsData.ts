import { fetchSettingsInfo } from '@/pages/settings/api/fetchSettingsInfo';
import { useSettingsStore } from '@/pages/settings/store/useSettingsStore';
import { useShallow } from 'zustand/react/shallow';

export function useFetchSettingsData() {
  const { loading, setLoading, setData, setError } = useSettingsStore(
    useShallow((store) => ({
      loading: store.loading,
      setLoading: store.setLoading,
      setData: store.setData,
      setError: store.setError,
    })),
  );

  const fetchData = () => {
    setLoading(true);
    fetchSettingsInfo()
      .then((result) => {
        setData(result.account);
      })
      .catch((e) => {
        setError(e.response.errors[0].message);
      })
      .finally(() => setLoading(false));
  };

  return { loading, fetchData };
}

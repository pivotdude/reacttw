import { fetchAccount } from '../api/fetchAccount';
import { useNavigationStore } from '../store/useNavigationStore';

interface useFetchAccountReturn {
  fetchData: () => void;
}

export function useFetchAccount(): useFetchAccountReturn {
  const setAccount = useNavigationStore((store) => store.setAccount);

  const fetchData = () => {
    fetchAccount()
      .then((response) => {
        setAccount(response.account);
      })
      .catch((e) => {
        console.log('ee', e.response.errors[0].message);
        // setErrorMessage(e.response.errors[0].message);
      });
  };

  return { fetchData };
}

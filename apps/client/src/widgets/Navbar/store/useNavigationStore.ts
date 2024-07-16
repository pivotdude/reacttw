import { create } from 'zustand';
import { FetchAccoutResponse } from '../api/fetchAccount';

type AccountT = FetchAccoutResponse['account'];

interface INavigationState {
  account?: AccountT;
  setAccount: (account: AccountT) => void;
}

export const useNavigationStore = create<INavigationState>((set) => ({
  account: undefined,
  setAccount: (account: AccountT) => set({ account }),
}));

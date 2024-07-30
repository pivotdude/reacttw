import { SettingsType } from '@/widgets/SettingsMenu';
import { create } from 'zustand';
import { FetchSettingsInfoResponse } from '../api/fetchSettingsInfo';

type IAccountData = FetchSettingsInfoResponse['account'];

interface ISettingsStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  data?: IAccountData;
  setData: (data: IAccountData) => void;
  type: SettingsType;
  setType: (type: SettingsType) => void;
  error?: string | null;
  setError: (error: string) => void;
}

export const useSettingsStore = create<ISettingsStore>((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
  data: undefined,
  setData: (data: any) => set({ data }),
  error: undefined,
  setError: (error: string) => set({ error }),
  type: 'account',
  setType: (type: SettingsType) => set({ type }),
}));

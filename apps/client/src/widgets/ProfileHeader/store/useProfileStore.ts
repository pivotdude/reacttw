import { create } from 'zustand';
import { FetchProfileResponse } from '../api/fetchProfile';

export type ProfileT = FetchProfileResponse['profile'];

interface IProfileStore {
  profile: ProfileT | null;
  setProfile: (profile: ProfileT) => void;
  setErrorMessage: (error: string) => void;
  error: string | null;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const useProfileStore = create<IProfileStore>((set) => ({
  profile: null,
  setProfile: (profile: ProfileT) => set({ profile }),
  setErrorMessage: (error: string) => set({ error }),
  error: null,
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));

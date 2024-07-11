import { create } from 'zustand';
import { FetchProfileResponse } from '../api/fetchProfile';

type ProfileT = FetchProfileResponse['user'];

interface IProfileStore {
  profile: ProfileT | null;
  setProfile: (profile: ProfileT) => void;
}

export const useProfileStore = create<IProfileStore>((set) => ({
  profile: null,
  setProfile: (profile: ProfileT) => set({ profile }),
}));

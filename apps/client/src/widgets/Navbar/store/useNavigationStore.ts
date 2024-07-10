import { create } from 'zustand';
import { FetchProfileResponse } from '../api/fetchProfile';

type ProfileT = FetchProfileResponse['profile'];

interface INavigationState {
  profile?: ProfileT;
  setProfile: (profile: ProfileT) => void;
}

export const useNavigationStore = create<INavigationState>((set) => ({
  profile: undefined,
  setProfile: (profile: ProfileT) => set({ profile }),
}));

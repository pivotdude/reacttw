import { SettingsType } from '@/widgets/SettingsMenu';
import { create } from 'zustand';

interface ISettingsStore {
  type: SettingsType;
  setType: (type: SettingsType) => void;
}

export const useSettingsStore = create<ISettingsStore>((set) => ({
  type: 'account',
  setType: (type: SettingsType) => set({ type }),
}));

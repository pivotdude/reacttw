import { create } from 'zustand';

interface IAvatarEditState {
  image?: string;
  setImage: (image: string) => void;

  step: number;
  setStep: (step: number) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  scale: number;
  incrementScale: () => void;
  decrimentScale: () => void;

  clear: () => void;
}

const SCALE_VALUE = 0.5;
const DEFAULT_SCALE = 1;

export const useAvatarEditStore = create<IAvatarEditState>((set) => ({
  image: undefined,
  setImage: (image: string) => set({ image }),

  step: 1,
  setStep: (step: number) => set({ step }),

  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),

  scale: DEFAULT_SCALE,
  incrementScale: () => set((state) => ({ scale: state.scale + SCALE_VALUE })),
  decrimentScale: () => set((state) => ({ scale: state.scale - SCALE_VALUE })),

  clear: () => set({ scale: DEFAULT_SCALE, step: 1, image: undefined }),
}));

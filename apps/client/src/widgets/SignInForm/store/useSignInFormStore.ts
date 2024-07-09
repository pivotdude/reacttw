import { create } from 'zustand';
import { ISignInFormData } from '../types/ISignInFormData';

interface ISignInFormState {
  step: number;
  nextStep: () => void;
  data?: ISignInFormData;
  setData: (data: ISignInFormData) => void;
}

export const useSignInFormStore = create<ISignInFormState>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  data: undefined,
  setData: (data: ISignInFormData) => set({ data: data }),
}));

import { create } from 'zustand';
import { ISignUpFormData } from '../types/ISignUpFormState';

interface ISignUpFormState {
  step: number;
  nextStep: () => void;
  data?: ISignUpFormData;
  setData: (data: ISignUpFormData) => void;
}

export const useSignUpFormStore = create<ISignUpFormState>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  data: undefined,
  setData: (data: ISignUpFormData) => set({ data: data }),
}));

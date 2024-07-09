import { create } from 'zustand';

interface ISignUpFormData {
  user: {
    name;
  };
}

interface ISignUpFormState {
  step: number;
  nextStep: () => void;
  data?: ISignUpFormData;
  setData: (data: ISignUpFormData) => void;
}

export const useSignUpFormStore = create<ISignUpFormState>((set) => ({
  data: undefined,
  setData: (data: ISignUpFormData) => set({ data: data }),
}));

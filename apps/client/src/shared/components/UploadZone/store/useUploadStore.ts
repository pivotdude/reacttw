import { create } from 'zustand';
import { IUploadedFile } from '../model';

interface IUploadStore {
  files: IUploadedFile[];
  setFiles: (files: IUploadedFile[]) => void;
  updateFile: (id: number, updatedFile: Partial<IUploadedFile>) => void;
  clear: () => void;
}

export const useUploadStore = create<IUploadStore>((set) => ({
  files: [],
  setFiles: (files: IUploadedFile[]) => set({ files }),
  updateFile: (id: number, updatedFile: Partial<IUploadedFile>) =>
    set((state) => ({
      files: state.files.map((file) =>
        file.id === id ? { ...file, ...updatedFile } : file,
      ),
    })),
  clear: () => set({ files: [] }),
}));

import { uploadFileToServer } from '../api/uploadFileToServer';
import { IFile, IUploadedFile } from '../model';

export const uploadFile = async (file: IFile): Promise<IUploadedFile> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const result = await uploadFileToServer(formData);
    return result;
  } catch (error) {
    console.error('Ошибка при загрузке файла:', error);
    // @ts-ignore
    return { ...file, status: 'error', error: (error as Error).message };
  }
};

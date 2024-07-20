export interface IFile extends File {
  lastModifiedDate: number;
  webkitRelativePath: string;
}

export interface IUploadedFile extends IFile {
  id: number;
  status: 'loading' | 'success' | 'error';
  result?: IFileResult;
  error?: string;
}

interface IFileResult {
  id: number;
  name: string;
  mimeType: string;
  size: number;
  url: string;
  createdAt: string;
  updatedAt: string;
}

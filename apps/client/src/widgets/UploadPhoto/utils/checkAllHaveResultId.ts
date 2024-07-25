import { IUploadedFile } from '@/shared/components/UploadZone/model';

export function checkAllHaveResultId(array: IUploadedFile[]) {
  return array.every((item) => item.result && item.result.id);
}

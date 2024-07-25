import { UploadZone } from '@/shared/components/UploadZone';
import { useUploadStore } from '@/shared/components/UploadZone/store/useUploadStore';
import { Button } from '@/shared/ui/button';
import { checkAllHaveResultId } from '../utils/checkAllHaveResultId';
import { createUserPhotos } from '../api/createUserPhotos';

export function UploadPhoto() {
  const files = useUploadStore((store) => store.files);

  const filesIds = files.map((file) => file?.result?.id as number);
  const allFilesOk = checkAllHaveResultId(files);

  const onContinue = () => {
    createUserPhotos(filesIds)
      .then((result) => {
        alert(JSON.stringify(result));
        // setProfile(result.profile);
      })
      .catch((e) => {
        // @ts-ignore
        alert('error', e.response.errors[0].message);
        console.error('ee', e.response.errors[0].message);
        // setErrorMessage(e.response.errors[0].message);
      });
  };

  return (
    <>
      <UploadZone />
      {files.length > 0 && (
        <div className="flex mt-4 space-x-2">
          {allFilesOk && (
            <Button
              variant="success"
              disabled={!allFilesOk}
              onClick={onContinue}
            >
              Continue
            </Button>
          )}
        </div>
      )}
    </>
  );
}

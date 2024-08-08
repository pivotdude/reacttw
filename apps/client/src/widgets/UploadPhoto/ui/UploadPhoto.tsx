import { UploadZone } from '@/shared/components/UploadZone';
import { useUploadStore } from '@/shared/components/UploadZone/store/useUploadStore';
import { Button } from '@/shared/ui/button';
import { checkAllHaveResultId } from '../utils/checkAllHaveResultId';
import { createUserPhotos } from '../api/createUserPhotos';
import { useToast } from '@/shared/ui/use-toast';
import { useFetchPhotos } from '@/widgets/Gallery/hooks/useFetchPhotos';
import { useParams } from 'react-router-dom';

export function UploadPhoto() {
  const files = useUploadStore((store) => store.files);
  const params = useParams<{ name: string }>();
  const { toast } = useToast();

  const filesIds = files.map((file) => file?.result?.id as number);
  const allFilesOk = checkAllHaveResultId(files);
  const clear = useUploadStore((store) => store.clear);

  const { fetchData } = useFetchPhotos();

  const onContinue = () => {
    if (!params.name) {
      return;
    }
    createUserPhotos(filesIds)
      .then((result) => {
        fetchData(params.name as string);
        toast({
          variant: 'success',
          title: 'Phoot uploaded',
          description: 'Your photos have been uploaded',
        });
        clear();
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

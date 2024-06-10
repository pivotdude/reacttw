import {
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/shared/ui/dialog";

interface UserPhotoDetailsProps {
  src: string;
}

export function UserPhotoDetails(props: UserPhotoDetailsProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogDescription>
          <div>
            <img src={props.src} className="w-full h-full" alt="" />
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}

import { MessageCircle } from "lucide-react";

export function StartDialogButton() {
  return (
    <div className="flex items-center justify-center col-span-1 cursor-pointer mx-2 group">
      <MessageCircle className="group-hover:text-gray-400" />
    </div>
  );
}

import { Button } from '@/shared/ui/button';
import { MessageCircle } from 'lucide-react';

export function StartDialogButton() {
  return (
    <Button variant="ghost" className="cursor-pointer group">
      <MessageCircle className="group-hover:text-gray-400" />
    </Button>
  );
}

import { UserAvatar } from "@/entities/user";
import { IPost } from "../types/IPost";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  return (
    <div>
      <div className="w-full flex justify-between items-center px-4 py-4 bg-white">
        <div className="flex items-center space-x-2">
          <UserAvatar src={post.user.avatar} fallback={post.user.name} />
          <p>{post.user.name}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <img src={post.image} alt="" className="w-full" />
    </div>
  );
}

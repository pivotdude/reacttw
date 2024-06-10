import { IPost } from "../types/IPost";
import { Heart, MessageCircle, Send } from "lucide-react";
import { ReactNode } from "react";

interface PostProps {
  post: IPost;
  header?: ReactNode;
}

export function Post({ post, header }: PostProps) {
  return (
    <div>
      {header}
      <img src={post.image} alt="" className="w-full" />
      <div className="flex space-x-4 py-3">
        <Heart className="cursor-pointer" />
        <MessageCircle className="cursor-pointer" />
        <Send className="cursor-pointer" />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-500">100 likes</p>
        <p className="text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eius
          alias dolorem? Modi in cum, dignissimos totam officiis quae labore
          dolor a excepturi veritatis, odio doloribus sed illum quo molestias!
        </p>
        <p className="text-sm text-gray-600">1 hour ago</p>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">Coments</p>
          <p className="cursor-pointer text-sm">Add your comment</p>
        </div>
      </div>
    </div>
  );
}

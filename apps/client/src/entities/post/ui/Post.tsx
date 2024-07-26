import { IPost } from '../types/IPost';
import { Heart, MessageCircle, Send } from 'lucide-react';
import { ReactNode, useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

interface PostProps {
  post: IPost;
  header?: ReactNode;
}

export function Post({ post, header }: PostProps) {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef && imageRef.current) {
      const viewer = new Viewer(imageRef.current, {
        fullscreen: true,
      });
    }
  }, [imageRef]);

  return (
    <div>
      {header}
      <img
        ref={imageRef}
        src={post.image}
        alt=""
        className="w-full cursor-zoom-in"
      />
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

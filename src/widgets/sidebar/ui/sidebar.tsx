import { ReactNode } from "react";
import { Compass, Heart, Home, Plus } from "lucide-react";
import { UserAvatar } from "@/entities/user";

interface ILink {
  href: string;
  child: ReactNode;
}

export function Sidebar() {
  const links = [
    {
      href: "/",
      child: <Home />
    },
    {
      href: "/photo/add",
      child: <Plus />
    },
    {
      href: "/compass",
      child: <Compass />
    },
    {
      href: "/likes",
      child: <Heart />
    }
  ] as ILink[];

  const linksElements = links.map((link: ILink) => (
    <a
      className="w-12 h-12 cursor-pointer flex flex-col items-center justify-center"
      href={link.href}
    >
      {link.child}
    </a>
  ));

  return (
    <div className="flex flex-col items-center fixed w-16 h-full bg-sky-300">
      <div className="flex flex-col items-center mt-4 space-y-2">
        <UserAvatar src="https://github.com/shadcn.png" fallback="fs" />
        {linksElements}
      </div>
    </div>
  );
}

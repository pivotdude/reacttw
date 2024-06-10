// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger
// } from "@/shared/ui/navigation-menu";
import { ILink, links } from "../data/links";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/input";
import { Search } from "lucide-react";

export function Navbar() {
  const linksElements = links.map((link: ILink) => (
    <a
      className="w-12 h-12 cursor-pointer hover:text-gray-500 flex items-center justify-center"
      href={link.href}
    >
      {link.child}
    </a>
  ));

  return (
    <div className="flex f-full justify-between items-center">
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
      <div></div>
      <div className="flex w-80 items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit" size="sm">
          <Search />
        </Button>
      </div>
      <div className="flex">{linksElements}</div>
    </div>
  );
}

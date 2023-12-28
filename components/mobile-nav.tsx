"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface MobileNavProps {
  data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="sm-flex md:hidden lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu className="cursor-pointer hover:scale-110" size="30" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-48 mr-5 mt-1 bg-white animate-slide-down-and-fade"
          forceMount
        >
          <DropdownMenuLabel className="font-bold">
            <p>Categories</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200" />
          <DropdownMenuGroup>
            {routes.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium cursor-pointer transition-colors hover:text-black",
                    item.active ? "text-black" : "text-neutral-500"
                  )}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;

"use client";

import { Category } from "@/types";
import { Menu } from "@headlessui/react";
import { MenuSquare } from "lucide-react";

interface MobileNavProps {
  data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
  return (
    <Menu>
      <Menu.Button>
        <MenuSquare className="h-8 w-8" />
      </Menu.Button>
      <Menu.Items>
        {data.map((item) => (
          <Menu.Item>{({ active }) => <div>{item.name}</div>}</Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default MobileNav;

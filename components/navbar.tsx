import Link from "next/link";

import getCategories from "@/actions/get-categories";
import getStore from "@/actions/get-store";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Container from "@/components/ui/container";
import MobileNav from "./mobile-nav";

const Navbar = async () => {
  const categories = await getCategories();
  const store = await getStore();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">{store?.name?.toUpperCase()}</p>
          </Link>
          <div className="hidden lg:block">
            <MainNav data={categories} />
          </div>
          <div className="sm:block lg:hidden">
            <MobileNav data={categories} />
          </div>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

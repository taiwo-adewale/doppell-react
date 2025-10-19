import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import { NavMenu } from "./NavMenu";
import { CartWidget } from "./cart";
import { MobileNav } from "./MobileNav";
import doppellLogo from "/assets/doppell-logo.png";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 bg-white/75 backdrop-blur-sm shadow-lg">
      <div className="container h-20 flex justify-between items-center gap-8">
        <Link to="/" className="w-40 shrink-0">
          <img src={doppellLogo} alt="Doppell Logo" className="w-full" />
        </Link>

        <NavMenu />

        <CartWidget />

        <MobileNav>
          <Button variant="ghost" size="icon">
            <Menu className="size-6" />
          </Button>
        </MobileNav>
      </div>
    </header>
  );
}

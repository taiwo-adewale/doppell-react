import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { navItems } from "./navItems";
import { SearchBar } from "./SearchBar";
import { useIsMobile } from "@/hooks/use-mobile";

type MobileNavProps = {
  children: React.ReactNode;
};

export function MobileNav({ children }: MobileNavProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>{children}</SheetTrigger>

        <SheetContent
          side="right"
          className="w-full max-w-70 sm:max-w-70 bg-white/95 backdrop-blur-sm overflow-y-auto"
        >
          <ul className="pt-8 pb-20 flex flex-col">
            <li className="p-5">
              <SearchBar onSearch={closeMobileNav} />
            </li>

            {navItems.map((navItem) => (
              <li className="border-b" key={"mobile-" + navItem.title}>
                {navItem.children ? (
                  <Accordion type="single" collapsible>
                    <AccordionItem value={navItem.title}>
                      <AccordionTrigger className="text-sm px-5 py-4 uppercase rounded-none hover:text-accent-foreground hover:bg-black/5 duration-300 data-[state=open]:text-accent-foreground data-[state=open]:bg-black/5">
                        {navItem.title}
                      </AccordionTrigger>

                      <AccordionContent className="bg-black/5 pb-7">
                        {/* Prevents the first item's focus ring from being clipped by the overflow-hidden parent */}
                        <div className="pt-1" />

                        {navItem.children.map((navSubItem) => (
                          <Link
                            onClick={closeMobileNav}
                            to={navSubItem.href}
                            className="block text-base pl-8 pr-5 py-1.5 captialize hover:text-accent-foreground duration-300"
                          >
                            {navSubItem.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    onClick={closeMobileNav}
                    to={navItem.href}
                    className="block text-sm font-medium px-5 py-4 uppercase hover:text-accent-foreground hover:bg-black/5 duration-300"
                  >
                    {navItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

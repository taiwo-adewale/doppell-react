"use client";

import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { navItems } from "./navItems";
import { SearchBar } from "./SearchBar";

export function NavMenu() {
  return (
    <NavigationMenu className="hidden lg:flex" viewport={false}>
      <NavigationMenuList>
        {navItems.map((navItem) => (
          <NavigationMenuItem key={navItem.title}>
            {navItem.children ? (
              <Fragment>
                <NavigationMenuTrigger className="uppercase">
                  {navItem.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="px-5 py-3">
                  <ul className="flex flex-col min-w-50">
                    {navItem.children.map((navSubItem) => (
                      <li
                        key={navSubItem.href}
                        className="border-b last:border-b-0"
                      >
                        <NavigationMenuLink
                          asChild
                          className="capitalize px-5 py-2.5 w-full text-foreground rounded-none"
                        >
                          <Link to={navSubItem.href}>{navSubItem.title}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </Fragment>
            ) : (
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "data-[active=true]:focus:bg-transparent data-[active=true]:hover:bg-transparent data-[active=true]:bg-transparent hover:bg-transparent focus:bg-transparent"
                )}
                asChild
              >
                <NavLink to={navItem.href} className={"uppercase"}>
                  {navItem.title}
                </NavLink>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem key="search">
          <NavigationMenuTrigger>
            <Search className="size-4" />
          </NavigationMenuTrigger>

          <NavigationMenuContent className="p-5 -left-32 after:left-37 before:left-37">
            <SearchBar className="w-56" />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

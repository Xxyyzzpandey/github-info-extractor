"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/pages/secondpage">Input page</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">about us</HoveredLink>
            <HoveredLink href="/pages/secondpage">Contact us</HoveredLink>
            <HoveredLink href="/pages/secondpage">Feedback</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="credentials">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">sign in</HoveredLink>
            <HoveredLink href="/individual">sign up</HoveredLink>
            <HoveredLink href="/team">logout</HoveredLink>
            <HoveredLink href="/enterprise">share</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

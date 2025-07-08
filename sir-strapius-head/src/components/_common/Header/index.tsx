"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/_ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/_ui/sheet";

import { Logo } from "./Logo";
import { NavigationLink } from "./NavigationLink";
import { NavigationLinkInSheet } from "./NavigationLinkInSheet";

interface HeaderProps {
  pathname?: string;
}

export function Header({ pathname = "/" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomeActive = pathname === "/";
  const isArticlesActive = pathname === "/articles";
  const isCategoriesActive = pathname === "/categories";
  const isAboutActive = pathname === "/about";

  const navigationItems = [
    { href: "/articles", label: "Articles", isActive: isArticlesActive },
    { href: "/categories", label: "Categories", isActive: isCategoriesActive },
    { href: "/about", label: "About", isActive: isAboutActive },
  ];

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo isActive={isHomeActive} />

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 sm:flex">
          {navigationItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              isActive={item.isActive}
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] px-6 sm:hidden">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="mt-16 flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <NavigationLinkInSheet
                  key={item.href}
                  href={item.href}
                  isActive={item.isActive}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavigationLinkInSheet>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

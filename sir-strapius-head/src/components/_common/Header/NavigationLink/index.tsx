"use client";

import Link from "next/link";

import { Button } from "@/components/_ui/button";

interface NavigationLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

export function NavigationLink({
  href,
  isActive,
  children,
}: NavigationLinkProps) {
  return (
    <Link href={href} className="group relative">
      <Button
        variant={isActive ? "default" : "ghost"}
        className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
          isActive
            ? "bg-primary text-primary-foreground animate-navigation-link-active shadow-lg"
            : "hover:bg-accent/50"
        }`}
      >
        <span className="relative z-10">{children}</span>
        {isActive && (
          <div
            className="from-primary/20 to-primary/40 absolute inset-0 animate-pulse bg-gradient-to-r"
            style={{
              animationDelay: "0.2s",
              animationDuration: "2s",
            }}
          ></div>
        )}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
      </Button>
    </Link>
  );
}

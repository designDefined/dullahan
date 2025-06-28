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
    <Link href={href} className="relative group">
      <Button
        variant={isActive ? "default" : "ghost"}
        className={`relative overflow-hidden transition-all duration-300 ${
          isActive
            ? "bg-primary text-primary-foreground shadow-lg"
            : "hover:bg-accent/50"
        }`}
      >
        <span className="relative z-10">{children}</span>
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 animate-pulse"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </Button>
    </Link>
  );
}

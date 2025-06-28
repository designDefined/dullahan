import { Logo } from "./Logo";
import { NavigationLink } from "./NavigationLink";

interface HeaderProps {
  pathname?: string;
}

export function Header({ pathname = "/" }: HeaderProps) {
  const isHomeActive = pathname === "/";
  const isArticlesActive = pathname === "/articles";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo isActive={isHomeActive} />

        <nav className="flex items-center space-x-4">
          <NavigationLink href="/articles" isActive={isArticlesActive}>
            {isArticlesActive ? "Reading..." : "Read"}
          </NavigationLink>
        </nav>
      </div>
    </header>
  );
}

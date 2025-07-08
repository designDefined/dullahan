import { Logo } from "./Logo";
import { NavigationLink } from "./NavigationLink";

interface HeaderProps {
  pathname?: string;
}

export function Header({ pathname = "/" }: HeaderProps) {
  const isHomeActive = pathname === "/";
  const isArticlesActive = pathname === "/articles";
  const isCategoriesActive = pathname === "/categories";
  const isAboutActive = pathname === "/about";

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center gap-32 px-4">
        <Logo isActive={isHomeActive} />
        <nav className="flex items-center space-x-8">
          <NavigationLink href="/articles" isActive={isArticlesActive}>
            Articles
          </NavigationLink>
          <NavigationLink href="/categories" isActive={isCategoriesActive}>
            Categories
          </NavigationLink>
          <NavigationLink href="/about" isActive={isAboutActive}>
            About
          </NavigationLink>
        </nav>
      </div>
    </header>
  );
}

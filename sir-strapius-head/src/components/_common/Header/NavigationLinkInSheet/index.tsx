import Link from "next/link";

interface NavigationLinkInSheetProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavigationLinkInSheet({
  href,
  isActive,
  children,
  onClick,
}: NavigationLinkInSheetProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-3 text-lg transition-all duration-200 ${
        isActive
          ? "text-foreground decoration-primary font-extrabold underline decoration-2 underline-offset-4"
          : "text-foreground hover:decoration-foreground font-medium opacity-75 hover:underline hover:decoration-2 hover:underline-offset-4"
      }`}
    >
      {children}
    </Link>
  );
}

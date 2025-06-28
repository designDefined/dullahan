import Link from "next/link";

interface LogoProps {
  isActive: boolean;
}

export function Logo({ isActive }: LogoProps) {
  return (
    <Link href="/" className="group relative flex items-center space-x-2">
      <div className="relative">
        <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          The Funnel
        </span>
        <div
          className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
            isActive
              ? "w-full bg-gradient-to-r from-primary to-primary/60"
              : "w-0 bg-gradient-to-r from-primary to-primary/60 group-hover:w-full"
          }`}
        ></div>
      </div>
    </Link>
  );
}

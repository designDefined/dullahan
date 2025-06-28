import Link from "next/link";

interface LogoProps {
  isActive: boolean;
}

export function Logo({ isActive }: LogoProps) {
  return (
    <Link href="/" className="group relative flex items-center space-x-2">
      <div className="relative">
        <span className="text-foreground group-hover:text-primary text-xl font-extralight tracking-tight transition-colors">
          The Funnel
        </span>
        <div
          className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ${
            isActive
              ? "from-primary to-primary/60 w-full bg-gradient-to-r"
              : "from-primary to-primary/60 w-0 bg-gradient-to-r group-hover:w-full"
          }`}
        ></div>
      </div>
    </Link>
  );
}

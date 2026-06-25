import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-forest text-white hover:bg-navy",
    secondary: "bg-white text-navy ring-1 ring-gold/35 hover:bg-mist",
    ghost: "border border-gold/55 text-navy hover:bg-gold/20",
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}


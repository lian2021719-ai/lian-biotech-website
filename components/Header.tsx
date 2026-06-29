"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-navy/95 backdrop-blur">
      <div className="container-x flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex min-w-0 flex-col rounded-sm">
          <span className="text-sm font-black text-white sm:text-base">{site.name}</span>
          <span className="hidden text-xs font-medium text-gold sm:block">GMP Manufacturing Partner</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.filter((item) => item.href !== "/").map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-sm text-sm font-semibold text-white transition hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${site.tel}`}
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-gold/45 px-4 text-sm font-bold text-white transition hover:border-gold hover:text-gold"
          >
            <Phone size={17} />
            {site.tel}
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/35 text-white lg:hidden"
          aria-label={open ? "關閉選單" : "開啟選單"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/20 bg-navy lg:hidden">
          <nav className="container-x grid py-4">
            {navItems.filter((item) => item.href !== "/").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-1 py-3 text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}


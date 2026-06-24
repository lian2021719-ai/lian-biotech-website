import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { navItems, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            專注 GMP 中藥與保健食品委託製造，協助品牌從配方、製程、品質到交貨建立穩定可信的產品供應。
          </p>
        </div>
        <div>
          <p className="font-bold">網站導覽</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/72">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">聯絡資訊</p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><Phone size={18} />{site.tel}</li>
            <li className="flex gap-3"><Mail size={18} />{site.email}</li>
            <li className="flex gap-3"><MapPin size={18} />{site.address}</li>
            <li className="flex gap-3"><Clock size={18} />{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/58">
        Copyright © 2026 LI-AN BIOTECHNOLOGY PHARMACEUTICAL CO., LTD. All rights reserved.
      </div>
    </footer>
  );
}

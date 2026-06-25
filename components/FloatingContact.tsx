import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2 sm:right-6">
      <a
        href={`tel:${site.tel}`}
        className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-soft transition hover:bg-forest"
        aria-label="撥打電話"
      >
        <Phone size={21} />
      </a>
      <Link
        href="/contact"
        className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-soft transition hover:bg-clay"
        aria-label="前往聯絡表單"
      >
        <MessageCircle size={21} />
      </Link>
    </div>
  );
}


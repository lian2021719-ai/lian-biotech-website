import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "聯絡我們",
  description: "聯絡立安生物科技製藥，洽詢中藥 GMP 製造、保健食品代工、膠囊代工、粉劑代工與 OEM ODM 服務。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="聯絡我們"
        description="請留下產品需求與預估時程，立安將協助您評估適合的委託製造方式。"
        image="/images/gmp-manufacturing.png"
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Inquiry"
              title="OEM／ODM 洽詢"
              description="請留下產品需求與預估時程，立安將協助您評估適合的 OEM／ODM 委託製造方式。"
            />
            <div className="mt-8 rounded-md bg-mist p-6">
              <ContactForm />
            </div>
          </div>
          <div>
            <div className="rounded-md border border-navy/10 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-navy">公司資訊</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-ink/72">
                <li className="flex gap-3"><Phone className="mt-1 text-forest" size={20} />電話：{site.tel}</li>
                <li className="flex gap-3"><Printer className="mt-1 text-forest" size={20} />傳真：{site.fax}</li>
                <li className="flex gap-3"><Mail className="mt-1 text-forest" size={20} />Email：{site.email}</li>
                <li className="flex gap-3"><MapPin className="mt-1 text-forest" size={20} />{site.address}</li>
                <li className="flex gap-3"><Clock className="mt-1 text-forest" size={20} />{site.hours}</li>
              </ul>
            </div>
            <div className="mt-6">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

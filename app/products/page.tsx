import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "產品介紹",
  description: "立安產品與劑型介紹，包含丸劑、散劑、膠囊、膏劑與保健食品製造服務。",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="中藥與保健食品劑型介紹"
        description="以品牌需求、配方特性與市場定位為基礎，選擇適合商業化量產的產品劑型。"
        image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Dosage Forms"
            title="主要製造項目"
            description="立安支援多種中藥與保健食品劑型，可依不同產品定位進行開發與製造規劃。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.name} className="rounded-md border border-navy/10 bg-white p-7 shadow-sm">
                  <Icon className="text-forest" size={30} />
                  <h2 className="mt-5 text-2xl font-black text-navy">{item.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

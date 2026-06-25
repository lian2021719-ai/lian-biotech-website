import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { factoryAreas } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "GMP 製造環境",
  description: "立安 GMP 製造環境介紹，包含生產區、包裝區、品管室與倉儲區，支援中藥與保健食品代工。",
  path: "/gmp",
});

export default function GmpPage() {
  return (
    <>
      <PageHero
        eyebrow="GMP Facility"
        title="符合製藥思維的製造環境"
        description="以清楚動線、製程管理與品質檢驗支援 OEM／ODM 量產，讓每一批產品都有可追溯的品質基礎。"
        image="https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Factory Areas"
            title="廠房區域規劃"
            description="依照製造流程配置生產、包裝、品質與倉儲作業，降低交叉污染風險並提升批次管理效率。"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {factoryAreas.map((area) => (
              <article key={area.title} className="overflow-hidden rounded-md border border-navy/10 bg-white shadow-sm">
                <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${area.image})` }} />
                <div className="p-6">
                  <h2 className="text-2xl font-black text-navy">{area.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/65">
                    以標準作業流程管理人員、物料、設備與紀錄，支援穩定製造與出貨前品質確認。
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

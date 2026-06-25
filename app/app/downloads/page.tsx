import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { downloads } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "PDF 下載中心",
  description: "下載立安 OEM ODM 洽詢需求表、委託製造流程與品質管理系統簡介。",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="PDF 下載中心"
        description="提供 OEM／ODM 洽詢、製造流程與品質管理相關資料下載版位。"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Resources" title="資料下載" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {downloads.map((item) => (
              <a key={item.name} href={item.href} className="focus-ring rounded-md border border-navy/10 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <Download className="text-forest" size={28} />
                <h2 className="mt-5 text-xl font-black text-navy">{item.name}</h2>
                <p className="mt-3 text-sm font-bold text-ink/55">{item.type}</p>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink/55">
            PDF 檔案可於正式上線前放入 public/downloads 目錄，連結結構已預留。
          </p>
        </div>
      </section>
    </>
  );
}

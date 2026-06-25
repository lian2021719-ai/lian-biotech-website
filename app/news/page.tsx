import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { news } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "最新消息",
  description: "立安最新消息、服務公告、品質專欄與保健食品代工市場觀察。",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="最新消息"
        description="掌握立安服務公告、品質管理資訊與中藥保健食品代工趨勢。"
        image="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Updates" title="消息列表" align="center" />
          <div className="mt-10 grid gap-5">
            {news.map((item) => (
              <article key={item.title} className="grid gap-4 rounded-md border border-navy/10 p-6 shadow-sm md:grid-cols-[160px_1fr]">
                <div>
                  <p className="text-sm font-bold text-forest">{item.category}</p>
                  <time className="mt-2 block text-sm text-ink/55">{item.date}</time>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-navy">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

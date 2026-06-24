import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { qualityItems } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "品質管理",
  description: "立安品質管理系統介紹，包含 GMP、SOP、原料管理、製程管理、檢驗設備與成品檢驗。",
  path: "/quality",
});

export default function QualityPage() {
  const systems = ["GMP", "SOP", "品質系統", "原料管理", "檢驗設備"];

  return (
    <>
      <PageHero
        eyebrow="Quality Management"
        title="以品質系統建立製造信任"
        description="品質不是最後一道檢查，而是從原料、製程、紀錄、設備到成品放行的完整管理方式。"
        image="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="System"
            title="品質管理架構"
            description="透過標準作業流程、製程監控、批次紀錄與檢驗確認，協助品牌降低製造不確定性。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {qualityItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-md border border-navy/10 p-6 shadow-sm">
                  <Icon className="text-forest" size={26} />
                  <h2 className="mt-4 text-xl font-black text-navy">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-ink/65">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-mist py-16">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {systems.map((item) => (
              <div key={item} className="rounded-md bg-white px-5 py-6 text-center text-lg font-black text-navy shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

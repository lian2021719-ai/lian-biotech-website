import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "關於立安",
  description: "認識立安生物科技製藥股份有限公司，中藥製造背景、GMP 品質精神與台南官田製造基地。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About LI-AN"
        title="以專業製藥精神，承接品牌信任"
        description="立安深耕中藥與保健食品製造，結合傳統中草藥知識與現代化品質管理，成為品牌客戶穩定可靠的製造夥伴。"
        image="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Brand Story"
            title="從中藥專業到 GMP 製造"
            description="立安生物科技製藥股份有限公司位於台南官田工業區，長期投入中藥與保健食品製造，服務品牌開發、委託製造與品質管理需求。"
          />
          <div className="space-y-5 text-base leading-8 text-ink/72">
            <p>
              公司承襲中藥專業背景，並以現代化製程與品質系統提升產品穩定度。公開資料顯示，立安廠房面積約 1200 坪、建廠面積約 800 坪，並以 ISO9001 與 GMP 管理精神建立產品製造標準。
            </p>
            <p>
              今日的立安以「GMP 中藥與保健食品專業製造夥伴」為定位，協助客戶處理配方討論、劑型規劃、打樣測試、生產製造與成品檢驗，讓品牌能更安心地推進上市流程。
            </p>
          </div>
        </div>
      </section>
      <section className="bg-mist py-16">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {[
            ["專業", "熟悉中藥與保健食品製造需求，支援品牌端產品規劃。"],
            ["品質", "重視原料、製程、檢驗與紀錄，維持批次一致性。"],
            ["信賴", "以清楚流程與穩定溝通建立長期合作關係。"],
          ].map(([title, text]) => (
            <article key={title} className="rounded-md bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/65">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

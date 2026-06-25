import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { oemSteps } from "@/content/site";
import { createMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "OEM／ODM 委託製造",
  description: "立安提供中藥製造、保健食品代工、膠囊代工、粉劑代工、OEM 與 ODM 服務，支援配方、打樣、量產與品質檢驗。",
  path: "/oem-odm",
});

export default function OemPage() {
  const services = ["中藥製造", "保健食品代工", "膠囊代工", "粉劑代工", "OEM", "ODM"];
  const faqs = [
    ["可以協助配方開發嗎？", "可依品牌需求討論劑型、原料方向、口感與製程可行性，並安排打樣測試。"],
    ["適合哪些客戶？", "保健食品品牌、中藥品牌、通路商、研發單位與需要穩定製造夥伴的企業。"],
    ["洽詢需要準備什麼？", "建議提供產品類型、目標劑型、預估數量、上市時程與是否已有配方。"],
  ];

  return (
    <>
      <JsonLd data={serviceSchema("OEM／ODM 委託製造", "中藥與保健食品 OEM／ODM 委託製造服務。")} />
      <PageHero
        eyebrow="OEM / ODM"
        title="從配方到量產的委託製造服務"
        description="支援中藥製造、保健食品代工、膠囊代工與粉劑代工，協助品牌將產品想法轉化為可穩定交付的商品。"
        image="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Process" title="委託流程" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {oemSteps.map((step, index) => (
              <div key={step} className="rounded-md border border-navy/10 bg-white p-5 text-center shadow-sm">
                <p className="text-sm font-black text-forest">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-black text-navy">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-mist">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <SectionHeading
            eyebrow="Services"
            title="服務項目與劑型"
            description="依產品策略選擇適合劑型，並規劃從打樣到量產的製造路徑。"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-md bg-white px-5 py-4 text-base font-black text-navy shadow-sm">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading eyebrow="FAQ" title="常見問題" />
            <div className="mt-8 space-y-4">
              {faqs.map(([q, a]) => (
                <article key={q} className="rounded-md border border-navy/10 p-5">
                  <h2 className="font-black text-navy">{q}</h2>
                  <p className="mt-2 text-sm leading-7 text-ink/65">{a}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-md bg-mist p-6">
            <SectionHeading eyebrow="Inquiry" title="洽詢表單" description="留下需求後，可再串接 Email、CRM 或 AI 客服自動分流。" />
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

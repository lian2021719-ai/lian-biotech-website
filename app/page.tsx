import { ArrowDown, CheckCircle2, Phone } from "lucide-react";
import { AiSupportTeaser } from "@/components/AiSupportTeaser";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { MapEmbed } from "@/components/MapEmbed";
import { SectionHeading } from "@/components/SectionHeading";
import { advantages, capabilities, factoryAreas, oemSteps, qualityItems, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-[var(--header-height)] text-white">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-36"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=82)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/86 to-navy/28" />
        <div className="container-x grid min-h-[calc(100svh-40px)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.8fr]">
          <FadeIn>
            <p className="text-sm font-bold text-white/75">GMP 中藥與保健食品專業製造夥伴</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
              GMP 中藥與保健食品專業製造
            </h1>
            <p className="mt-5 text-2xl font-bold text-white">品質、專業、值得信賴</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              從配方開發、品質管理到委託製造，提供值得信賴的 OEM／ODM 解決方案。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="secondary">立即洽詢</ButtonLink>
              <ButtonLink href="/oem-odm" variant="ghost">委託製造</ButtonLink>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} className="hidden lg:block">
            <div className="border-l border-white/25 pl-8">
              <p className="text-sm font-bold text-white/70">Manufacturing Scope</p>
              <div className="mt-5 grid gap-3">
                {["丸劑", "散劑", "膠囊", "膏劑", "保健食品"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-lg font-bold">
                    <CheckCircle2 className="text-forest" size={21} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Strengths"
            title="四大核心優勢"
            description="以製藥級品質觀念支援品牌客戶，讓產品開發、製造、檢驗與交付都有清楚流程與穩定標準。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-md border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-forest/10 text-forest">
                      <Icon size={25} />
                    </div>
                    <h3 className="mt-5 text-xl font-black text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/65">{item.text}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Manufacturing"
            title="製造能力"
            description="支援中藥與保健食品多元劑型，依品牌需求規劃打樣、量產與包裝服務。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="rounded-md bg-white p-5 shadow-sm">
                  <Icon className="text-forest" size={25} />
                  <h3 className="mt-4 text-lg font-black text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/65">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="OEM Process"
            title="委託製造流程"
            description="從需求確認到品質檢驗與交貨，讓品牌方在每個階段都能掌握進度與決策重點。"
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {oemSteps.map((step, index) => (
              <div key={step} className="relative rounded-md border border-navy/10 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 font-black text-navy">{step}</p>
                {index < oemSteps.length - 1 ? (
                  <ArrowDown className="mx-auto mt-4 text-forest lg:absolute lg:-right-4 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:-rotate-90" size={22} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy text-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="GMP Quality System"
            title="GMP 品質系統"
            description="以標準化流程建立可追溯、可檢核、可穩定交付的製造品質，協助品牌客戶降低上市風險。"
            tone="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {qualityItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-md border border-white/12 bg-white/8 p-5">
                  <Icon className="text-white" size={25} />
                  <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/68">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Factory View"
            title="廠房實景"
            description="以真實製造場域的視覺語言建立專業感，聚焦生產、包裝、品管與倉儲動線。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {factoryAreas.map((area) => (
              <article key={area.title} className="group overflow-hidden rounded-md bg-navy">
                <div
                  className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${area.image})` }}
                />
                <div className="p-5">
                  <h3 className="text-lg font-black text-white">{area.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="聯絡立安"
              description="如需中藥 GMP 製造、保健食品代工、膠囊代工或 OEM／ODM 規劃，歡迎與我們聯繫。"
            />
            <div className="mt-8 space-y-3 text-base font-semibold text-ink/78">
              <p className="flex items-center gap-3"><Phone className="text-forest" size={20} />{site.tel}</p>
              <p>{site.address}</p>
              <p>{site.hours}</p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact">填寫洽詢表單</ButtonLink>
            </div>
          </div>
          <MapEmbed />
        </div>
      </section>

      <AiSupportTeaser />
    </>
  );
}

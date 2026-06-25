import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { AiSupportTeaser } from "@/components/AiSupportTeaser";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { MapEmbed } from "@/components/MapEmbed";
import { SectionHeading } from "@/components/SectionHeading";
import { advantages, capabilities, factoryAreas, oemSteps, qualityItems, site } from "@/content/site";

export default function HomePage() {
  const supportItems = [
    "品牌新品開發",
    "中藥產品製造",
    "保健食品代工",
    "膠囊與粉劑量產",
    "既有產品轉廠",
    "OEM／ODM 長期合作",
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-[var(--header-height)] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_28%,rgba(212,175,55,0.24),transparent_34%),linear-gradient(120deg,#0D2233_0%,#0D2233_58%,#14394a_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[24%] bg-mist" />
        <div className="container-x grid min-h-[calc(100svh-24px)] items-center gap-12 py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <FadeIn>
            <p className="text-sm font-bold text-gold">Herbal Biotechnology Manufacturing</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">
              中藥底蘊 × 現代生技的 OEM／ODM 製造夥伴
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              以 GMP 品質系統承接草本配方、膠囊、粉劑、丸劑與保健食品製造，協助品牌從概念、打樣到量產交貨。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">立即洽詢</ButtonLink>
              <ButtonLink href="/oem-odm" variant="secondary">查看合作流程</ButtonLink>
            </div>
            <div className="mt-10 grid gap-4 border-y border-gold/45 py-6 sm:grid-cols-2">
              {["GMP 品質管理", "多劑型製造", "研發打樣支援", "台南官田製造基地"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-white">
                  <CheckCircle2 className="text-gold" size={19} />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="overflow-hidden rounded-md border border-gold/60 bg-white/95 p-2 shadow-soft">
              <div
                className="min-h-[360px] bg-cover bg-center lg:min-h-[560px]"
                style={{
                  backgroundImage:
                    "url(/images/hero-herbal-biotech.png)",
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="container-x grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-4xl">
              我們協助品牌完成從概念到量產的製造任務
            </h2>
            <p className="mt-4 text-base leading-8 text-ink/68">
              不只是介紹工廠能力，而是協助品牌把產品需求整理成可開發、可打樣、可生產、可交付的合作流程。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {supportItems.map((item) => (
              <div key={item} className="rounded-md border border-gold/25 bg-white px-5 py-4 text-sm font-black text-navy shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Strengths"
            title="讓品牌放心委託製造的四個理由"
            description="以清楚流程、穩定製程與品質管理支援品牌客戶，讓產品開發、製造與交付都有可信依據。"
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-md border border-gold/25 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold">
                      <Icon size={25} />
                    </div>
                    <h3 className="mt-6 text-xl font-black text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/65">{item.text}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Manufacturing"
            title="可承接的製造能力"
            description="依產品定位、配方特性與上市時程，規劃適合的劑型、打樣與量產方式。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="rounded-md border border-gold/25 bg-white p-6 shadow-sm">
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
            title="從洽詢到交貨的合作流程"
            description="讓品牌方在每個階段都能掌握重點，降低開發與製造的不確定性。"
            align="center"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {oemSteps.map((step, index) => (
              <div key={step} className="relative rounded-md border border-gold/25 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-black text-gold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 font-black text-navy">{step}</p>
                {index < oemSteps.length - 1 ? (
                  <ArrowRight className="mx-auto mt-4 text-gold lg:absolute lg:-right-4 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2" size={22} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="GMP Quality System"
            title="以 GMP 品質系統支撐長期合作"
            description="品質不是最後一道檢查，而是從原料、製程、紀錄到成品放行的完整管理方式。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {qualityItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-md border border-gold/25 bg-white p-6 shadow-sm">
                  <Icon className="text-gold" size={25} />
                  <h3 className="mt-4 text-lg font-black text-navy">{item.title}</h3>
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
            eyebrow="Factory View"
            title="真實製造場域建立合作信任"
            description="以生產、包裝、品管與倉儲場域呈現專業感，讓委託製造不只停留在文字說明。"
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {factoryAreas.map((area) => (
              <article key={area.title} className="group overflow-hidden rounded-md border border-gold/25 bg-white shadow-sm">
                <div
                  className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${area.image})` }}
                />
                <div className="p-5">
                  <h3 className="text-lg font-black text-navy">{area.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="開始討論您的委託製造需求"
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
          <div className="overflow-hidden rounded-md border border-gold/30 bg-white p-2 shadow-sm">
            <MapEmbed />
          </div>
        </div>
      </section>

      <AiSupportTeaser />
    </>
  );
}


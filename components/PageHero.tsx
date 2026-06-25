import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-mist pt-[var(--header-height)] text-ink">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[30%] bg-navy lg:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-white" />
      <div className="container-x grid min-h-[430px] items-center gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-navy sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/68">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">立即洽詢</ButtonLink>
            <ButtonLink href="/oem-odm" variant="secondary">委託製造</ButtonLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-md border border-gold/45 bg-white p-2 shadow-soft">
          <div
            className="h-[300px] bg-cover bg-center sm:h-[360px]"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      </div>
    </section>
  );
}

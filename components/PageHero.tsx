import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-[var(--header-height)] text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-28"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/88 to-navy/35" />
      <div className="container-x flex min-h-[390px] items-center py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-white/75">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="secondary">立即洽詢</ButtonLink>
            <ButtonLink href="/oem-odm" variant="ghost">委託製造</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

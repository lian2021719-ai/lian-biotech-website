type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-navy" : "text-navy";
  const descriptionColor = tone === "dark" ? "text-ink/68" : "text-ink/68";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-8 sm:text-lg ${descriptionColor}`}>{description}</p> : null}
    </div>
  );
}

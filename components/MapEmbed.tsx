import { site } from "@/content/site";

export function MapEmbed() {
  return (
    <iframe
      title="立安生物科技製藥 Google Map"
      src={site.mapUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-[360px] w-full rounded-md border-0"
    />
  );
}

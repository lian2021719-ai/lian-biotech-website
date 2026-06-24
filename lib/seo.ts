import type { Metadata } from "next";
import { site } from "@/content/site";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: SeoInput = {}): Metadata {
  const pageTitle = title ? `${title}｜${site.shortName}` : `${site.shortName}｜GMP 中藥與保健食品專業製造`;
  const url = new URL(path, site.url).toString();
  const pageDescription = description ?? site.description;

  return {
    metadataBase: new URL(site.url),
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "zh_TW",
      url,
      siteName: site.shortName,
      title: pageTitle,
      description: pageDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    telephone: site.tel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      postalCode: "720",
      addressRegion: "台南市",
      addressLocality: "官田區",
      streetAddress: "工業路3號",
      addressCountry: "TW",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    makesOffer: [
      "中藥 GMP 製造",
      "保健食品代工",
      "膠囊代工",
      "粉劑代工",
      "OEM ODM",
    ],
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "Taiwan",
    serviceType: ["GMP 製藥廠", "中藥代工", "台南保健食品代工"],
  };
}

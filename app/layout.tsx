import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, organizationSchema } from "@/lib/seo";

const notoSansTc = Noto_Sans_TC({
  subsets: ["chinese-traditional", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-TW" className={notoSansTc.variable}>
      <body>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

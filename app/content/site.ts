import {
  BadgeCheck,
  Beaker,
  ClipboardCheck,
  Factory,
  FlaskConical,
  PackageCheck,
  Pill,
  Scale,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Truck,
} from "lucide-react";

export const site = {
  name: "立安生物科技製藥股份有限公司",
  shortName: "立安生物科技製藥",
  url: "https://www.lian6981929.com.tw",
  description:
    "立安生物科技製藥提供 GMP 中藥、保健食品、膠囊、粉劑與丸劑 OEM／ODM 委託製造服務，從配方開發、品質管理到生產交付，協助品牌建立值得信賴的產品。",
  address: "720 台南市官田區工業路3號",
  tel: "06-6981929",
  email: "service@lian6981929.com.tw",
  hours: "星期一～星期五 08:00–17:00",
  mapUrl:
    "https://www.google.com/maps?q=%E5%8F%B0%E5%8D%97%E5%B8%82%E5%AE%98%E7%94%B0%E5%8D%80%E5%B7%A5%E6%A5%AD%E8%B7%AF3%E8%99%9F&output=embed",
};

export const navItems = [
  { label: "首頁", href: "/" },
  { label: "關於立安", href: "/about" },
  { label: "GMP 製造環境", href: "/gmp" },
  { label: "OEM／ODM", href: "/oem-odm" },
  { label: "產品介紹", href: "/products" },
  { label: "品質管理", href: "/quality" },
  { label: "最新消息", href: "/news" },
  { label: "下載中心", href: "/downloads" },
  { label: "聯絡我們", href: "/contact" },
];

export const advantages = [
  {
    title: "GMP 品質管理",
    text: "以標準化 SOP、批次紀錄與檢驗流程，降低製造風險並提升產品一致性。",
    icon: ShieldCheck,
  },
  {
    title: "專業研發能力",
    text: "協助品牌從市場定位、劑型選擇、配方討論到打樣測試，縮短開發週期。",
    icon: FlaskConical,
  },
  {
    title: "現代化設備",
    text: "支援丸劑、散劑、膠囊、膏劑與保健食品製造，滿足不同產品規格。",
    icon: Factory,
  },
  {
    title: "OEM／ODM 服務",
    text: "從原料、製程、包裝到交貨，提供品牌客戶完整委託製造解決方案。",
    icon: PackageCheck,
  },
];

export const capabilities = [
  { name: "丸劑", icon: Sparkles, text: "適合傳統中藥與日常保健產品。" },
  { name: "散劑", icon: Beaker, text: "粉末調配、分裝與包裝製程。" },
  { name: "膠囊", icon: Pill, text: "膠囊代工與保健食品品牌需求。" },
  { name: "膏劑", icon: Scale, text: "傳統膏方與特色劑型開發。" },
  { name: "保健食品", icon: BadgeCheck, text: "支援 OEM／ODM 商業化量產。" },
];

export const oemSteps = [
  "需求洽詢",
  "配方討論",
  "打樣測試",
  "生產製造",
  "品質檢驗",
  "交貨服務",
];

export const qualityItems = [
  { title: "品質管制", text: "原料、半成品與成品依製程節點進行控管。", icon: ClipboardCheck },
  { title: "原料管理", text: "供應來源、批號、驗收與儲存條件皆納入追蹤。", icon: TestTube2 },
  { title: "製程管理", text: "以批次紀錄與製程條件管理確保穩定生產。", icon: Factory },
  { title: "成品檢驗", text: "依產品規格進行檢驗與出貨前確認。", icon: ShieldCheck },
];

export const factoryAreas = [
  {
    title: "生產區",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "包裝區",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "品管室",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "倉儲區",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const news = [
  {
    date: "2026-06-18",
    title: "OEM／ODM 委託製造洽詢流程更新",
    excerpt: "立安提供更清楚的需求確認、配方討論與打樣節點，協助品牌加速上市規劃。",
    category: "服務公告",
  },
  {
    date: "2026-05-22",
    title: "中藥與保健食品製造品質管理重點",
    excerpt: "從原料驗收、製程紀錄到成品檢驗，建立可追溯的製造品質系統。",
    category: "品質專欄",
  },
  {
    date: "2026-04-12",
    title: "膠囊與粉劑代工需求增加",
    excerpt: "面對保健食品市場變化，立安持續支援膠囊、粉劑與複合劑型開發。",
    category: "市場觀察",
  },
];

export const downloads = [
  { name: "OEM／ODM 洽詢需求表", type: "PDF", href: "/downloads/oem-inquiry.pdf" },
  { name: "委託製造流程簡介", type: "PDF", href: "/downloads/manufacturing-process.pdf" },
  { name: "品質管理系統簡介", type: "PDF", href: "/downloads/quality-system.pdf" },
];

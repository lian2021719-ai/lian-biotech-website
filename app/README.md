# 立安生物科技製藥企業形象官網

Next.js + Tailwind CSS 企業官網專案，定位為「GMP 中藥與保健食品專業製造夥伴」，支援 OEM／ODM 洽詢、SEO、Google Map、最新消息、PDF 下載中心與 AI 客服預留區。

## 技術

- Next.js App Router
- Tailwind CSS
- TypeScript
- Lucide Icons
- Framer Motion
- Noto Sans TC

## 目錄

```txt
/app          頁面、SEO metadata、sitemap、robots
/components   共用 UI 元件
/content      公司資料、導覽、消息、產品與下載資料
/lib          SEO 與 Schema helper
/public       靜態檔案與 PDF 下載中心
/styles       保留給未來全域樣式模組
```

## 本機開發

```bash
npm install
npm run dev
```

開啟 `http://localhost:3000`。

## 建置

```bash
npm run build
npm run start
```

## Vercel 部署

1. 將專案推送到 GitHub / GitLab / Bitbucket。
2. 在 Vercel 新增 Project，選擇此 repository。
3. Framework Preset 選擇 `Next.js`。
4. Build Command 使用 `npm run build`。
5. Output Directory 保持 Next.js 預設。
6. 部署完成後，將正式網域指向 Vercel。

## 上線前建議

- 將 `content/site.ts` 的 Email、正式 PDF、最新消息與圖片替換為實際資料。
- 將聯絡表單串接 Email、CRM、Google Sheet 或後端 API。
- 將遠端示意圖片替換為立安實際廠房、生產設備、品管與包裝照片。
- 若要導入 AI 客服，可從 `components/AiSupportTeaser.tsx` 延伸為聊天入口。

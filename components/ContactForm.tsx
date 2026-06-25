"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const inputClass =
  "focus-ring w-full rounded-md border border-forest/20 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/38 focus:border-forest";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navy">
          姓名
          <input required className={inputClass} name="name" placeholder="請輸入姓名" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          公司
          <input className={inputClass} name="company" placeholder="公司或品牌名稱" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navy">
          電話
          <input required className={inputClass} name="phone" placeholder="聯絡電話" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          Email
          <input required type="email" className={inputClass} name="email" placeholder="example@email.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-navy">
        需求類型
        <select required className={inputClass} name="type" defaultValue="">
          <option value="" disabled>請選擇需求</option>
          <option>中藥製造</option>
          <option>保健食品代工</option>
          <option>膠囊代工</option>
          <option>粉劑代工</option>
          <option>OEM／ODM</option>
          <option>其他合作</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-navy">
        留言
        <textarea required className={`${inputClass} min-h-36 resize-y`} name="message" placeholder="請描述產品類型、預估數量、時程或希望了解的服務。" />
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-forest px-6 text-sm font-bold text-white transition hover:bg-navy"
      >
        <Send size={18} />
        送出洽詢
      </button>
      {sent ? (
        <p className="rounded-md bg-gold/20 px-4 py-3 text-sm font-semibold text-navy">
          已收到您的洽詢資料。此範例表單已預留送出介面，可於正式上線時串接 Email、CRM 或 API。
        </p>
      ) : null}
    </form>
  );
}

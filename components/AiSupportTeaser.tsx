import { Bot, MessageSquareText } from "lucide-react";

export function AiSupportTeaser() {
  return (
    <section className="bg-white py-14">
      <div className="container-x grid gap-6 rounded-md border border-gold/25 bg-mist p-7 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-navy text-gold">
          <Bot size={28} />
        </div>
        <div>
          <p className="text-xl font-black text-navy">AI 客服預留區</p>
          <p className="mt-2 text-sm leading-7 text-ink/65">
            已預留未來串接 AI 客服、常見問題知識庫與 OEM 洽詢導流的版位，可延伸為 24 小時初步需求收集入口。
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-navy ring-1 ring-gold/35">
          <MessageSquareText size={18} />
          Ready for AI
        </div>
      </div>
    </section>
  );
}


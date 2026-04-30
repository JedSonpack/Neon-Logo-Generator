import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="flex flex-col gap-4 py-3 md:flex-row md:items-end md:justify-between">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_24px_rgba(0,213,255,0.18)] backdrop-blur-xl"
        >
          <Sparkles size={14} />
          Live Neon Studio
        </motion.div>
        <h1 className="font-display text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
          Neon Logo Generator
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          输入文字，调整光效、模糊、字距和背景，实时生成可复制 CSS 与可导出 PNG 的霓虹 Logo。
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300 sm:w-[330px]">
        {['Realtime', 'CSS Copy', 'PNG Export'].map((item) => (
          <div key={item} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-3 backdrop-blur-xl">
            {item}
          </div>
        ))}
      </div>
    </header>
  );
}

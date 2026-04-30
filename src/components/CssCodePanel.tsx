import { Copy } from 'lucide-react';

type CssCodePanelProps = {
  cssCode: string;
  onCopy: () => void;
};

export function CssCodePanel({ cssCode, onCopy }: CssCodePanelProps) {
  return (
    <aside className="glass-panel flex min-h-[360px] flex-col p-4 sm:p-5 xl:max-h-[calc(100vh-150px)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-200/85">Generated CSS</p>
          <h2 className="mt-1 text-xl font-bold text-white">代码输出</h2>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-200/[0.1] hover:shadow-[0_0_22px_rgba(0,213,255,0.22)]"
          aria-label="复制 CSS"
          title="复制 CSS"
        >
          <Copy size={17} />
        </button>
      </div>
      <pre className="min-h-0 flex-1 overflow-auto rounded-lg border border-white/10 bg-slate-950/72 p-4 text-xs leading-6 text-cyan-50 shadow-[inset_0_0_28px_rgba(0,0,0,0.35)]">
        <code>{cssCode}</code>
      </pre>
    </aside>
  );
}

import { useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { Header } from './components/Header';
import { ControlPanel } from './components/ControlPanel';
import { LogoPreview } from './components/LogoPreview';
import { CssCodePanel } from './components/CssCodePanel';
import { ActionButtons } from './components/ActionButtons';
import {
  DEFAULT_LOGO_STATE,
  buildLogoCss,
  buildRandomState,
  type LogoState,
} from './lib/neon';

function normalizeFileName(text: string): string {
  const safeName = text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return safeName || 'neon-logo';
}

export default function App() {
  const [logoState, setLogoState] = useState<LogoState>(DEFAULT_LOGO_STATE);
  const [toast, setToast] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const cssCode = useMemo(() => buildLogoCss(logoState), [logoState]);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2100);
  };

  const updateLogoState = <Key extends keyof LogoState>(key: Key, value: LogoState[Key]) => {
    setLogoState((current) => ({ ...current, [key]: value }));
  };

  const copyCss = async () => {
    await navigator.clipboard.writeText(cssCode);
    showToast('CSS 已复制');
  };

  const exportPng = async () => {
    if (!previewRef.current) {
      return;
    }

    setIsExporting(true);
    try {
      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: '#05030b',
      });
      const link = document.createElement('a');
      link.download = `${normalizeFileName(logoState.text)}.png`;
      link.href = dataUrl;
      link.click();
      showToast('PNG 已导出');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#05030b] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-app-shell" />
      <div className="fixed inset-0 -z-10 bg-noise opacity-[0.16]" />

      <main className="mx-auto flex min-h-screen w-full max-w-[1580px] flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
        <Header />

        <section className="grid flex-1 gap-5 xl:grid-cols-[380px_minmax(0,1fr)_360px]">
          <ControlPanel
            logoState={logoState}
            onChange={updateLogoState}
            onPreset={(nextState) => setLogoState(nextState)}
          />

          <div className="flex min-h-[460px] flex-col gap-4">
            <LogoPreview ref={previewRef} logoState={logoState} />
            <ActionButtons
              onCopyCss={copyCss}
              onExportPng={exportPng}
              onRandomize={() => setLogoState(buildRandomState())}
              onReset={() => setLogoState(DEFAULT_LOGO_STATE)}
              isExporting={isExporting}
            />
          </div>

          <CssCodePanel cssCode={cssCode} onCopy={copyCss} />
        </section>
      </main>

      <div
        className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-slate-950/85 px-5 py-3 text-sm text-white shadow-[0_0_28px_rgba(0,245,255,0.28)] backdrop-blur-xl transition ${
          toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        {toast}
      </div>
    </div>
  );
}

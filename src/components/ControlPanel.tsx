import { Palette, SlidersHorizontal, Type } from 'lucide-react';
import { BACKGROUNDS, PRESETS, type BackgroundId, type LogoState, type ThemeId } from '../lib/neon';
import { SliderControl } from './SliderControl';
import { ThemeSelector } from './ThemeSelector';

type ControlPanelProps = {
  logoState: LogoState;
  onChange: <Key extends keyof LogoState>(key: Key, value: LogoState[Key]) => void;
  onPreset: (state: LogoState) => void;
};

export function ControlPanel({ logoState, onChange, onPreset }: ControlPanelProps) {
  return (
    <aside className="glass-panel max-h-none overflow-auto p-4 sm:p-5 xl:max-h-[calc(100vh-150px)]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">Controls</p>
          <h2 className="mt-1 text-xl font-bold text-white">Logo 参数</h2>
        </div>
        <SlidersHorizontal className="text-pink-200" size={22} />
      </div>

      <div className="space-y-6">
        <section>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Type size={16} />
            Logo 文本
          </label>
          <input
            value={logoState.text}
            maxLength={16}
            onChange={(event) => onChange('text', event.target.value.toUpperCase())}
            className="w-full rounded-lg border border-white/10 bg-slate-950/55 px-4 py-3 font-display text-lg font-bold uppercase text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60 focus:shadow-[0_0_24px_rgba(0,213,255,0.22)]"
            placeholder="NEON"
          />
        </section>

        <section>
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Palette size={16} />
            霓虹主题
          </div>
          <ThemeSelector value={logoState.themeId} onChange={(themeId: ThemeId) => onChange('themeId', themeId)} />
        </section>

        <section className="space-y-4">
          <SliderControl
            label="字体大小"
            min={72}
            max={168}
            value={logoState.fontSize}
            unit="px"
            onChange={(value) => onChange('fontSize', value)}
          />
          <SliderControl
            label="发光强度"
            min={30}
            max={100}
            value={logoState.glowIntensity}
            unit="%"
            onChange={(value) => onChange('glowIntensity', value)}
          />
          <SliderControl
            label="模糊程度"
            min={3}
            max={24}
            value={logoState.blur}
            unit="px"
            onChange={(value) => onChange('blur', value)}
          />
          <SliderControl
            label="字母间距"
            min={0}
            max={22}
            value={logoState.letterSpacing}
            unit="px"
            onChange={(value) => onChange('letterSpacing', value)}
          />
        </section>

        <section>
          <label className="mb-2 block text-sm font-semibold text-slate-200">背景样式</label>
          <select
            value={logoState.backgroundId}
            onChange={(event) => onChange('backgroundId', event.target.value as BackgroundId)}
            className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-200/60"
          >
            {BACKGROUNDS.map((background) => (
              <option key={background.id} value={background.id}>
                {background.name}
              </option>
            ))}
          </select>
        </section>

        <section>
          <div className="mb-3 text-sm font-semibold text-slate-200">预设模板</div>
          <div className="grid gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => onPreset(preset.state)}
                className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3 text-left transition hover:border-cyan-200/40 hover:bg-cyan-200/[0.08] hover:shadow-[0_0_24px_rgba(0,213,255,0.16)]"
              >
                <span className="block text-sm font-semibold text-white">{preset.name}</span>
                <span className="mt-1 block text-xs text-slate-400">{preset.description}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}

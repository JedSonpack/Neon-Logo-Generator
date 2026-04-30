import { Check } from 'lucide-react';
import { THEMES, type ThemeId } from '../lib/neon';

type ThemeSelectorProps = {
  value: ThemeId;
  onChange: (themeId: ThemeId) => void;
};

export function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
      {THEMES.map((theme) => {
        const isActive = theme.id === value;

        return (
          <button
            key={theme.id}
            type="button"
            onClick={() => onChange(theme.id)}
            className={`group flex items-center justify-between rounded-lg border px-3 py-3 text-left transition duration-200 ${
              isActive
                ? 'border-white/30 bg-white/[0.11] shadow-[0_0_28px_var(--theme-shadow)]'
                : 'border-white/10 bg-white/[0.045] hover:border-white/20 hover:bg-white/[0.08]'
            }`}
            style={{ '--theme-shadow': theme.shadow } as React.CSSProperties}
          >
            <span className="flex items-center gap-3">
              <span
                className="h-7 w-7 rounded-full border border-white/30 shadow-[0_0_18px_currentColor]"
                style={{
                  color: theme.primary,
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              />
              <span className="text-sm font-semibold text-slate-100">{theme.name}</span>
            </span>
            {isActive ? <Check size={16} className="text-cyan-100" /> : null}
          </button>
        );
      })}
    </div>
  );
}

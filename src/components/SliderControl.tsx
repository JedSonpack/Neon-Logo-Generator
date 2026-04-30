type SliderControlProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
};

export function SliderControl({ label, value, min, max, step = 1, unit = '', onChange }: SliderControlProps) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 font-mono text-xs text-cyan-100">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="neon-range w-full"
      />
    </label>
  );
}

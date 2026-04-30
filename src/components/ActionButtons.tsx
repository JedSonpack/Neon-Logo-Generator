import { Copy, Dice5, Download, RotateCcw } from 'lucide-react';

type ActionButtonsProps = {
  isExporting: boolean;
  onCopyCss: () => void;
  onExportPng: () => void;
  onRandomize: () => void;
  onReset: () => void;
};

export function ActionButtons({ isExporting, onCopyCss, onExportPng, onRandomize, onReset }: ActionButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <button type="button" onClick={onRandomize} className="neon-button">
        <Dice5 size={18} />
        随机
      </button>
      <button type="button" onClick={onCopyCss} className="neon-button">
        <Copy size={18} />
        复制 CSS
      </button>
      <button type="button" onClick={onExportPng} disabled={isExporting} className="neon-button disabled:cursor-wait disabled:opacity-60">
        <Download size={18} />
        {isExporting ? '导出中' : '导出 PNG'}
      </button>
      <button type="button" onClick={onReset} className="neon-button">
        <RotateCcw size={18} />
        重置
      </button>
    </div>
  );
}

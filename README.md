# Neon Logo Generator

纯前端霓虹 Logo 生成器，使用 React + TypeScript + Tailwind CSS 构建。输入文字后可实时预览霓虹灯风格 Logo，支持主题、发光强度、模糊、字距、背景、预设模板、随机生成、复制 CSS 和导出 PNG。

## 技术栈

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- html-to-image
- lucide-react
- Vitest

## 安装与运行

```bash
npm install
npm run dev
```

打开终端输出的本地地址即可体验。

## 常用命令

```bash
npm test
npm run build
npm run preview
```

## 文件结构

```text
.
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components
│   │   ├── ActionButtons.tsx
│   │   ├── ControlPanel.tsx
│   │   ├── CssCodePanel.tsx
│   │   ├── Header.tsx
│   │   ├── LogoPreview.tsx
│   │   ├── SliderControl.tsx
│   │   └── ThemeSelector.tsx
│   └── lib
│       ├── neon.ts
│       └── neon.test.ts
└── dist
```

## 功能说明

- `src/lib/neon.ts`：定义主题、背景、预设、默认状态、随机状态和 CSS 生成函数。
- `src/App.tsx`：管理 Logo 状态、复制 CSS、导出 PNG、随机和重置。
- `src/components/ControlPanel.tsx`：输入框、主题选择、参数滑块、背景和预设。
- `src/components/LogoPreview.tsx`：大尺寸霓虹实时预览，包含背景网格、流光和 hover 动效。
- `src/components/CssCodePanel.tsx`：展示当前 Logo 对应 CSS，可一键复制。

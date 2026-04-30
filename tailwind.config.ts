import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'Inter', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(255, 43, 214, 0.35), inset 0 0 20px rgba(255, 255, 255, 0.05)',
      },
      keyframes: {
        floatGlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -10px, 0) scale(1.02)' },
        },
        scan: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        pulseGrid: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        floatGlow: 'floatGlow 7s ease-in-out infinite',
        scan: 'scan 5.5s linear infinite',
        pulseGrid: 'pulseGrid 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

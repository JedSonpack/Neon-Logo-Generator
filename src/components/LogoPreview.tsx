import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { buildLogoStyle, getBackgroundById, getThemeById, type LogoState } from '../lib/neon';

type LogoPreviewProps = {
  logoState: LogoState;
};

export const LogoPreview = forwardRef<HTMLDivElement, LogoPreviewProps>(function LogoPreview({ logoState }, ref) {
  const theme = getThemeById(logoState.themeId);
  const background = getBackgroundById(logoState.backgroundId);
  const logoText = logoState.text.trim() || 'NEON';

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group relative flex min-h-[460px] flex-1 overflow-hidden rounded-lg border border-white/12 bg-slate-950/70 p-3 shadow-[0_0_55px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:min-h-[560px]"
      style={{ '--preview-glow': theme.shadow } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute inset-0 rounded-lg border border-cyan-200/10 shadow-[inset_0_0_50px_rgba(255,255,255,0.045),0_0_70px_var(--preview-glow)]" />
      <div className="pointer-events-none absolute -left-1/4 top-[-18%] h-72 w-72 rounded-full opacity-45 blur-3xl" style={{ background: theme.primary }} />
      <div className="pointer-events-none absolute -bottom-1/4 right-[-12%] h-96 w-96 rounded-full opacity-35 blur-3xl" style={{ background: theme.secondary }} />

      <div ref={ref} className={`relative flex min-h-full w-full items-center justify-center overflow-hidden rounded-md ${background.className}`}>
        <div className="absolute inset-0 animate-pulseGrid bg-grid-lines" />
        <div className="absolute inset-y-0 w-1/2 animate-scan bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <motion.div
          whileHover={{ scale: 1.035 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          className="relative z-10 flex max-w-full items-center justify-center px-4 text-center"
        >
          <span
            className="neon-word font-display font-black uppercase leading-none"
            style={{
              ...buildLogoStyle(logoState),
              fontSize: 'min(var(--logo-size), 18vw)',
              '--logo-size': `${logoState.fontSize}px`,
              '--theme-primary': theme.primary,
              '--theme-secondary': theme.secondary,
            } as React.CSSProperties}
          >
            {logoText}
          </span>
        </motion.div>
        <div className="absolute bottom-5 left-5 right-5 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>
    </motion.section>
  );
});

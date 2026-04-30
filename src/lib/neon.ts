import type { CSSProperties } from 'react';

export type ThemeId =
  | 'cyber-pink'
  | 'electric-blue'
  | 'toxic-green'
  | 'purple-dream'
  | 'golden-neon';

export type BackgroundId = 'cyber-grid' | 'deep-space' | 'vaporwave' | 'carbon' | 'void';

export type LogoState = {
  text: string;
  themeId: ThemeId;
  backgroundId: BackgroundId;
  fontSize: number;
  glowIntensity: number;
  blur: number;
  letterSpacing: number;
};

export type NeonTheme = {
  id: ThemeId;
  name: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  shadow: string;
};

export type BackgroundStyle = {
  id: BackgroundId;
  name: string;
  className: string;
};

export type Preset = {
  id: string;
  name: string;
  description: string;
  state: LogoState;
};

export const THEMES: NeonTheme[] = [
  {
    id: 'cyber-pink',
    name: 'Cyber Pink',
    foreground: '#fff1fb',
    primary: '#ff2bd6',
    secondary: '#9d4dff',
    accent: '#00f5ff',
    shadow: 'rgba(255, 43, 214, 0.7)',
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    foreground: '#e8fbff',
    primary: '#00d5ff',
    secondary: '#2f7bff',
    accent: '#a8ffff',
    shadow: 'rgba(0, 213, 255, 0.72)',
  },
  {
    id: 'toxic-green',
    name: 'Toxic Green',
    foreground: '#f2ffdc',
    primary: '#80ff00',
    secondary: '#12ffb8',
    accent: '#f5ff66',
    shadow: 'rgba(128, 255, 0, 0.68)',
  },
  {
    id: 'purple-dream',
    name: 'Purple Dream',
    foreground: '#fbf0ff',
    primary: '#b85cff',
    secondary: '#ff4fd8',
    accent: '#7cf7ff',
    shadow: 'rgba(184, 92, 255, 0.7)',
  },
  {
    id: 'golden-neon',
    name: 'Golden Neon',
    foreground: '#fff7db',
    primary: '#ffd166',
    secondary: '#ff8a00',
    accent: '#fff2a6',
    shadow: 'rgba(255, 209, 102, 0.72)',
  },
];

export const BACKGROUNDS: BackgroundStyle[] = [
  { id: 'cyber-grid', name: 'Cyber Grid', className: 'bg-cyber-grid' },
  { id: 'deep-space', name: 'Deep Space', className: 'bg-deep-space' },
  { id: 'vaporwave', name: 'Vaporwave', className: 'bg-vaporwave' },
  { id: 'carbon', name: 'Carbon Glass', className: 'bg-carbon' },
  { id: 'void', name: 'Neon Void', className: 'bg-void' },
];

export const DEFAULT_LOGO_STATE: LogoState = {
  text: 'NEON',
  themeId: 'cyber-pink',
  backgroundId: 'cyber-grid',
  fontSize: 132,
  glowIntensity: 78,
  blur: 12,
  letterSpacing: 10,
};

export const PRESETS: Preset[] = [
  {
    id: 'cyber-club',
    name: 'Cyber Club',
    description: 'Hot pink signage with dense glow.',
    state: { ...DEFAULT_LOGO_STATE, text: 'NEON', themeId: 'cyber-pink', backgroundId: 'cyber-grid' },
  },
  {
    id: 'blue-terminal',
    name: 'Blue Terminal',
    description: 'Electric blue with clean spacing.',
    state: {
      text: 'NOVA',
      themeId: 'electric-blue',
      backgroundId: 'deep-space',
      fontSize: 124,
      glowIntensity: 72,
      blur: 10,
      letterSpacing: 8,
    },
  },
  {
    id: 'toxic-arcade',
    name: 'Toxic Arcade',
    description: 'Acid green arcade marquee.',
    state: {
      text: 'TOXIC',
      themeId: 'toxic-green',
      backgroundId: 'carbon',
      fontSize: 116,
      glowIntensity: 92,
      blur: 16,
      letterSpacing: 6,
    },
  },
  {
    id: 'vaporwave-sign',
    name: 'Vaporwave Sign',
    description: 'Purple dream with retro haze.',
    state: {
      text: 'VAPOR',
      themeId: 'purple-dream',
      backgroundId: 'vaporwave',
      fontSize: 126,
      glowIntensity: 86,
      blur: 14,
      letterSpacing: 12,
    },
  },
  {
    id: 'gold-rush',
    name: 'Gold Rush',
    description: 'Warm premium neon glow.',
    state: {
      text: 'LUX',
      themeId: 'golden-neon',
      backgroundId: 'void',
      fontSize: 146,
      glowIntensity: 76,
      blur: 9,
      letterSpacing: 14,
    },
  },
];

export function getThemeById(themeId: ThemeId): NeonTheme {
  return THEMES.find((theme) => theme.id === themeId) ?? THEMES[0];
}

export function getBackgroundById(backgroundId: BackgroundId): BackgroundStyle {
  return BACKGROUNDS.find((background) => background.id === backgroundId) ?? BACKGROUNDS[0];
}

export function buildTextShadow(state: LogoState): string {
  const theme = getThemeById(state.themeId);
  const intensity = state.glowIntensity / 100;
  const blur = state.blur;
  const halo = Math.round(blur * (1.8 + intensity));
  const bloom = Math.round(blur * (3.4 + intensity * 1.5));

  return [
    `0 0 ${Math.max(2, Math.round(blur * 0.35))}px ${theme.foreground}`,
    `0 0 ${blur}px ${theme.primary}`,
    `0 0 ${halo}px ${theme.primary}`,
    `0 0 ${bloom}px ${theme.secondary}`,
    `0 0 ${Math.round(bloom * 1.35)}px ${theme.shadow}`,
  ].join(', ');
}

export function buildLogoStyle(state: LogoState): CSSProperties {
  const theme = getThemeById(state.themeId);

  return {
    color: theme.foreground,
    fontSize: `${state.fontSize}px`,
    letterSpacing: `${state.letterSpacing}px`,
    textShadow: buildTextShadow(state),
    WebkitTextStroke: `1px ${theme.accent}`,
  };
}

export function buildLogoCss(state: LogoState): string {
  const style = buildLogoStyle(state);

  return `.neon-logo {
  color: ${style.color};
  font-family: "Orbitron", "Rajdhani", sans-serif;
  font-size: ${style.fontSize};
  font-weight: 900;
  letter-spacing: ${style.letterSpacing};
  text-transform: uppercase;
  -webkit-text-stroke: ${style.WebkitTextStroke};
  text-shadow: ${style.textShadow};
}`;
}

export function buildRandomState(): LogoState {
  const words = ['NEON', 'NOVA', 'FLUX', 'CYBER', 'VOLT', 'LASER', 'AFTER'];
  const randomItem = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)];
  const randomRange = (min: number, max: number) => Math.round(min + Math.random() * (max - min));

  return {
    text: randomItem(words),
    themeId: randomItem(THEMES).id,
    backgroundId: randomItem(BACKGROUNDS).id,
    fontSize: randomRange(72, 168),
    glowIntensity: randomRange(45, 100),
    blur: randomRange(5, 22),
    letterSpacing: randomRange(0, 20),
  };
}

import { describe, expect, it } from 'vitest';
import {
  DEFAULT_LOGO_STATE,
  PRESETS,
  buildLogoCss,
  buildLogoStyle,
  buildRandomState,
  getThemeById,
} from './neon';

describe('neon logo style generation', () => {
  it('builds layered glow CSS from the selected theme and controls', () => {
    const state = {
      ...DEFAULT_LOGO_STATE,
      text: 'AURORA',
      themeId: 'electric-blue' as const,
      glowIntensity: 82,
      blur: 11,
      fontSize: 112,
      letterSpacing: 12,
    };

    const style = buildLogoStyle(state);
    const css = buildLogoCss(state);

    expect(style.color).toBe('#e8fbff');
    expect(style.fontSize).toBe('112px');
    expect(style.letterSpacing).toBe('12px');
    expect(style.textShadow).toContain('0 0 11px #00d5ff');
    expect(css).toContain('font-size: 112px;');
    expect(css).toContain('letter-spacing: 12px;');
    expect(css).toContain('text-shadow:');
    expect(css).toContain('#00d5ff');
  });

  it('applies named presets as complete reusable logo states', () => {
    const vaporwave = PRESETS.find((preset) => preset.id === 'vaporwave-sign');

    expect(vaporwave).toBeDefined();
    expect(vaporwave?.state.text).toBe('VAPOR');
    expect(vaporwave?.state.themeId).toBe('purple-dream');
    expect(vaporwave?.state.backgroundId).toBe('vaporwave');
  });

  it('returns random states inside UI control ranges', () => {
    for (let index = 0; index < 20; index += 1) {
      const randomState = buildRandomState();
      const theme = getThemeById(randomState.themeId);

      expect(theme.id).toBe(randomState.themeId);
      expect(randomState.fontSize).toBeGreaterThanOrEqual(72);
      expect(randomState.fontSize).toBeLessThanOrEqual(168);
      expect(randomState.glowIntensity).toBeGreaterThanOrEqual(45);
      expect(randomState.glowIntensity).toBeLessThanOrEqual(100);
      expect(randomState.blur).toBeGreaterThanOrEqual(5);
      expect(randomState.blur).toBeLessThanOrEqual(22);
      expect(randomState.letterSpacing).toBeGreaterThanOrEqual(0);
      expect(randomState.letterSpacing).toBeLessThanOrEqual(20);
    }
  });
});

// ============================================================
// CENTRALIZED THEME CONFIGURATION
// Change colors here to update the entire website theme
// ============================================================

export type Theme = {
  name: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    accentGlow: string;
    bgDark: string;
    bgMid: string;
    bgLight: string;
    bgCard: string;
    bgGlass: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    border: string;
    borderGlow: string;
    gradientHero: string;
    gradientCard: string;
    gradientButton: string;
    gradientTextStart: string;
    gradientTextEnd: string;
    success: string;
    warning: string;
    error: string;
  };
};

// ============================================================
// DEFAULT THEME: Pale Blue + White + Dark Navy
// ============================================================
export const defaultTheme: Theme = {
  name: 'blue',
  colors: {
    primary: '#0ea5e9',        // sky-500
    primaryLight: '#38bdf8',   // sky-400
    primaryDark: '#0284c7',    // sky-600
    secondary: '#1e3a5f',      // deep navy
    accent: '#00d4ff',         // cyan glow
    accentGlow: 'rgba(0,212,255,0.3)',
    bgDark: '#050d1a',         // near-black navy
    bgMid: '#0a1628',          // dark navy
    bgLight: '#0f2040',        // medium navy
    bgCard: 'rgba(14,40,80,0.6)',
    bgGlass: 'rgba(255,255,255,0.05)',
    textPrimary: '#f0f8ff',    // alice blue white
    textSecondary: '#94c7e8',  // light blue-grey
    textMuted: '#5a8aaa',
    border: 'rgba(14,165,233,0.25)',
    borderGlow: 'rgba(0,212,255,0.5)',
    gradientHero: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0f2040 100%)',
    gradientCard: 'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(0,212,255,0.05) 100%)',
    gradientButton: 'linear-gradient(135deg, #0ea5e9 0%, #00d4ff 100%)',
    gradientTextStart: '#0ea5e9',
    gradientTextEnd: '#00d4ff',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
};

// ============================================================
// ALTERNATE THEME: Red + White + Black
// ============================================================
export const redTheme: Theme = {
  name: 'red',
  colors: {
    primary: '#ef4444',
    primaryLight: '#f87171',
    primaryDark: '#dc2626',
    secondary: '#1a0505',
    accent: '#ff6b6b',
    accentGlow: 'rgba(255,107,107,0.3)',
    bgDark: '#0a0000',
    bgMid: '#130000',
    bgLight: '#1e0505',
    bgCard: 'rgba(80,14,14,0.6)',
    bgGlass: 'rgba(255,255,255,0.05)',
    textPrimary: '#fff5f5',
    textSecondary: '#e8a0a0',
    textMuted: '#a05050',
    border: 'rgba(239,68,68,0.25)',
    borderGlow: 'rgba(255,107,107,0.5)',
    gradientHero: 'linear-gradient(135deg, #0a0000 0%, #130000 50%, #1e0505 100%)',
    gradientCard: 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(255,107,107,0.05) 100%)',
    gradientButton: 'linear-gradient(135deg, #ef4444 0%, #ff6b6b 100%)',
    gradientTextStart: '#ff6b6b',
    gradientTextEnd: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
};

// ============================================================
// ACTIVE THEME — Change this to switch themes globally
// Options: defaultTheme | redTheme
// ============================================================
export const activeTheme: Theme = defaultTheme;
// (Light variants removed to simplify available themes)

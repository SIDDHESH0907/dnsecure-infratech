import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultTheme, redTheme, Theme } from './config';

type ThemeContextValue = {
  theme: Theme;
  setThemeByName: (name: string) => void;
  toggleTheme: () => void;
  themes: Record<string, Theme>;
};

const themes: Record<string, Theme> = {
  [defaultTheme.name]: defaultTheme,
  [redTheme.name]: redTheme,
};

const defaultContext: ThemeContextValue = {
  theme: defaultTheme,
  setThemeByName: () => {},
  toggleTheme: () => {},
  themes,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContext);

const applyThemeToDocument = (theme: Theme) => {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme.name);
  Object.entries(theme.colors).forEach(([key, value]) => {
    const varName = `--color-${key}`;
    root.style.setProperty(varName, value as string);
  });
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('dn_theme');
      if (saved && themes[saved]) return themes[saved];
    } catch (e) {
      // ignore
    }
    return defaultTheme;
  });

  useEffect(() => {
    applyThemeToDocument(theme);
    try {
      localStorage.setItem('dn_theme', theme.name);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const setThemeByName = (name: string) => {
    const next = themes[name] || defaultTheme;
    setTheme(next);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev.name === defaultTheme.name ? redTheme : defaultTheme));
  };

  const ctx: ThemeContextValue = {
    theme,
    setThemeByName,
    toggleTheme,
    themes,
  };

  useEffect(() => {
    // apply once on mount in case JavaScript restored theme late
    applyThemeToDocument(theme);
  }, []);

  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>;
};

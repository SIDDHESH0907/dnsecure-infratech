import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const ThemeSwitcher: React.FC = () => {
  const { theme, setThemeByName } = useTheme();

  const cycle = () => {
    // Cycle order: dark-blue -> light-blue -> light-red -> red -> dark-blue
    if (theme.name === 'blue') setThemeByName('light');
    else if (theme.name === 'light') setThemeByName('light-red');
    else if (theme.name === 'light-red') setThemeByName('red');
    else setThemeByName('blue');
  };

  const label = theme.name === 'light' ? 'Light' : theme.name === 'light-red' ? 'Light-Red' : theme.name === 'red' ? 'Red' : 'Dark';

  return (
    <button
      onClick={cycle}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
      style={{
        color: 'var(--color-textPrimary)',
        background: 'transparent',
        border: '1px solid var(--color-border)',
      }}
      aria-label="Toggle theme"
      title={`Theme: ${label} — click to cycle`}
    >
      {theme.name === 'light' || theme.name === 'light-red' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

export default ThemeSwitcher;

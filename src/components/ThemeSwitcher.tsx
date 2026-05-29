import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const ThemeSwitcher: React.FC = () => {
  const { theme, setThemeByName } = useTheme();

  const cycle = () => {
    // Cycle order: dark-blue <-> red
    if (theme.name === 'blue') setThemeByName('red');
    else setThemeByName('blue');
  };

  const label = theme.name === 'red' ? 'Red' : 'Dark';

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
      <Moon size={16} />
    </button>
  );
};

export default ThemeSwitcher;

import React from 'react';
import { Circle, Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const ThemeSwitcher: React.FC = () => {
  const { theme, setThemeByName } = useTheme();

  const cycle = () => {
    if (theme.name === 'blue') setThemeByName('red');
    else if (theme.name === 'red') setThemeByName('white');
    else setThemeByName('blue');
  };

  const label = theme.name === 'red' ? 'Red' : theme.name === 'white' ? 'White' : 'Dark blue';
  const Icon = theme.name === 'white' ? Sun : theme.name === 'red' ? Circle : Moon;

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
      <Icon size={16} />
    </button>
  );
};

export default ThemeSwitcher;

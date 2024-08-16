import { useState, useEffect } from 'react';
import { DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';

export const useTheme = (): [DefaultTheme, () => void] => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const setMode = (mode: 'light' | 'dark') => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode === 'light' ? lightTheme : darkTheme);
  };

  const toggleTheme = () => {
    setMode(theme === lightTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setMode(localTheme as 'light' | 'dark');
    } else {
      setMode('dark'); // Default to dark mode
    }
  }, []);

  return [theme, toggleTheme];
};

import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styles from '@/components/Button/Button.module.css';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    return matchMedia('(prefers-color-scheme: dark').matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  const handleMode = (e: React.KeyboardEvent<HTMLOrSVGElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsDarkMode((prev) => !prev);
      e.preventDefault();
    }
  };
  return (
    <DarkModeSwitch
      tabIndex={0}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      onKeyDown={handleMode}
      aria-label={`현재는 ${isDarkMode ? '다크모드' : '라이트모드'}, ${
        isDarkMode ? '라이트모드로 변경' : '다크모드로 변경'
      }`}
      className={styles.toggle}
      size={30}
    />
  );
}

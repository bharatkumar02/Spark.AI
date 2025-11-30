import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

export default function ToggleMode() {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

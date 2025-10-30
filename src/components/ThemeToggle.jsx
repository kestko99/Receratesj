import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative flex items-center bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="Toggle theme"
    >
      <div className="flex items-center gap-1">
        {/* Sun Section */}
        <div
          className={`
            relative z-10 flex items-center justify-center w-11 h-11 rounded-full
            transition-all duration-300 ease-in-out
            ${!isDark 
              ? 'bg-brand-blue text-white' 
              : 'bg-transparent text-gray-400 dark:text-gray-500'
            }
          `}
        >
          <Sun size={20} className="transition-transform duration-300" />
        </div>

        {/* Moon Section */}
        <div
          className={`
            relative z-10 flex items-center justify-center w-11 h-11 rounded-full
            transition-all duration-300 ease-in-out
            ${isDark 
              ? 'bg-brand-blue text-white' 
              : 'bg-transparent text-gray-400'
            }
          `}
        >
          <Moon size={20} className="transition-transform duration-300" />
        </div>
      </div>
    </button>
  );
}

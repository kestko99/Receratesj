import { useState, useEffect } from 'react';
import { Youtube, Twitter } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors duration-500">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="16" r="6" fill="#2F54EB"/>
            <circle cx="22" cy="16" r="6" fill="#2F54EB"/>
            <path d="M10 10C10 10 14 14 16 16C18 18 22 22 22 22" stroke="#2F54EB" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
            rbxFoundry
          </span>
        </div>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="flex flex-col gap-8">
            {/* Main Title */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none text-gray-900 dark:text-white transition-colors duration-500">
              Texture<br />copier
            </h1>

            {/* Instructions Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-500">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white transition-colors duration-500">
                Copy your texture
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-500">
                Drag the "Compile Avatar" bookmark bar. Then, proceed back to the ROBLOX 
                avatar page and click on the bookmark while on the ROBLOX website. If you 
                do not see your bookmark bar, press (CTRL+SHIFT+B)
              </p>
              <a
                href="javascript:void(0)"
                className="block w-full py-4 px-8 bg-brand-blue text-white text-center text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Compile Avatar
              </a>
            </div>

            {/* Social Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 transition-colors duration-500">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white transition-colors duration-500">
                Join our social:
              </h2>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-14 h-14 bg-brand-blue text-white rounded-xl flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-brand-blue text-white rounded-xl flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-8">
            {/* Video Container */}
            <div className="relative bg-black rounded-2xl overflow-hidden aspect-video">
              <img
                src="https://via.placeholder.com/640x360/1a1a1a/ffffff?text=Roblox+Avatar+Editor+Demo"
                alt="Roblox Avatar Editor Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                  <div className="w-0 h-0 border-l-8 border-l-gray-900 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-white text-sm">0:00 / 2:13</span>
              </div>
            </div>

            {/* Feature Text */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-10 transition-colors duration-500">
              <h2 className="text-3xl md:text-4xl font-bold text-center leading-snug text-gray-900 dark:text-white transition-colors duration-500">
                Compile your avatar's textures with ease, with this brand new bookmark-based system!
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

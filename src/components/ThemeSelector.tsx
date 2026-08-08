import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';

export interface ThemeOption {
  id: string;
  name: string;
  badge: string;
  colorHex: string;
  accentHex: string;
  bgGradient: string;
}

export const THEMES: ThemeOption[] = [
  { id: 'emerald', name: 'Emerald Mint', badge: 'Fresh & Wealth', colorHex: '#059669', accentHex: '#d97706', bgGradient: 'from-emerald-50 to-amber-50' },
  { id: 'sunset', name: 'Sunset Amber', badge: 'Warm Glow', colorHex: '#ea580c', accentHex: '#e11d48', bgGradient: 'from-orange-50 to-rose-50' },
  { id: 'midnight', name: 'Midnight Dark', badge: 'Cyber Neon', colorHex: '#06b6d4', accentHex: '#10b981', bgGradient: 'from-slate-900 to-cyan-950' },
  { id: 'ruby', name: 'Royal Ruby', badge: 'Prestige Gold', colorHex: '#be123c', accentHex: '#d97706', bgGradient: 'from-rose-50 to-amber-50' },
  { id: 'sapphire', name: 'Ocean Sapphire', badge: 'Deep Azure', colorHex: '#0284c7', accentHex: '#4f46e5', bgGradient: 'from-sky-50 to-indigo-50' },
  { id: 'amethyst', name: 'Royal Violet', badge: 'Creative Luxe', colorHex: '#9333ea', accentHex: '#db2777', bgGradient: 'from-purple-50 to-pink-50' },
];

interface ThemeSelectorProps {
  currentTheme: string;
  onSelectTheme: (themeId: string) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onSelectTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('vb_theme', currentTheme);
  }, [currentTheme]);

  const activeTheme = THEMES.find(t => t.id === currentTheme) || THEMES[0];

  return (
    <div className="relative z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-bold text-slate-700 bg-white/95 hover:bg-white border border-slate-200/90 rounded-full shadow-xs hover:shadow-md transition-all group cursor-pointer"
        title="Change Color Theme"
      >
        <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 group-hover:rotate-45 transition-transform duration-300" style={{ color: activeTheme.colorHex }} />
        <span className="hidden sm:inline font-bold">Theme:</span>
        <span className="font-extrabold text-slate-900">{activeTheme.name.split(' ')[0]}</span>
        <span 
          className="w-3 h-3 rounded-full border border-white shadow-xs shrink-0" 
          style={{ background: `linear-gradient(135deg, ${activeTheme.colorHex}, ${activeTheme.accentHex})` }}
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 mt-2 w-72 p-3.5 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-100 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
              <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Select Color Theme
              </span>
              <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold">6 Palettes</span>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {THEMES.map((theme) => {
                const isActive = currentTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onSelectTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between p-2 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-slate-100/90 text-slate-900 font-bold ring-2 shadow-xs' 
                        : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                    }`}
                    style={isActive ? { borderColor: theme.colorHex, boxShadow: `0 0 0 2px ${theme.colorHex}30` } : {}}
                  >
                    <div className="flex items-center gap-2.5">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-xs border border-white"
                        style={{ background: `linear-gradient(135deg, ${theme.colorHex}, ${theme.accentHex})` }}
                      >
                        {isActive && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 leading-tight">{theme.name}</p>
                        <p className="text-[10px] text-slate-400 font-normal">{theme.badge}</p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.colorHex }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.accentHex }} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

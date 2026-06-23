import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Bell, Award, Sparkles, Search, RefreshCw } from 'lucide-react';
import { SportType } from '../types';
import { Language, translations } from '../utils/translations';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  sportFilter: SportType | 'all';
  setSportFilter: (sport: SportType | 'all') => void;
  isPremium: boolean;
  onOpenPremium: () => void;
  favoritesCount: number;
  notificationCount: number;
  onToggleNotifications: () => void;
  showNotificationsPanel: boolean;
  onClearNotifications: () => void;
  notifications: string[];
  secondsLeft: number;
  onManualRefresh: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({
  theme,
  toggleTheme,
  sportFilter,
  setSportFilter,
  isPremium,
  onOpenPremium,
  favoritesCount,
  notificationCount,
  onToggleNotifications,
  showNotificationsPanel,
  onClearNotifications,
  notifications,
  secondsLeft,
  onManualRefresh,
  language,
  setLanguage,
}: HeaderProps) {
  const t = translations[language];

  const [langOpen, setLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageOptions: Array<{ code: Language; flagUrl: string; label: string }> = [
    { code: 'en', flagUrl: 'https://flagcdn.com/w40/us.png', label: 'EN' },
    { code: 'es', flagUrl: 'https://flagcdn.com/w40/es.png', label: 'ES' },
    { code: 'pt', flagUrl: 'https://flagcdn.com/w40/pt.png', label: 'PT' },
    { code: 'fr', flagUrl: 'https://flagcdn.com/w40/fr.png', label: 'FR' }
  ];

  const sportsList: Array<{ id: SportType | 'all'; label: string; icon: string }> = [
    { id: 'all', label: t.allSports, icon: '🏆' },
    { id: 'football', label: t.football, icon: '⚽' },
    { id: 'basketball', label: t.basketball, icon: '🏀' },
    { id: 'tennis', label: t.tennis, icon: '🎾' },
    { id: 'american_football', label: t.american_football, icon: '🏈' },
    { id: 'baseball', label: t.baseball, icon: '⚾' },
    { id: 'golf', label: t.golf, icon: '⛳' },
    { id: 'hockey', label: t.hockey, icon: '🏒' },
    { id: 'world_cup', label: t.world_cup, icon: '🌍' },
  ];

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-[#05070a]/40 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo Branding */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-blue-600 text-white shadow-md shadow-emerald-500/20">
              <span className="font-display text-2xl font-black">P</span>
              <div className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Punto<span className="text-emerald-400">Vivo</span>
                </span>
                <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-xs font-semibold text-emerald-400">
                  LIVE
                </span>
              </div>
              <p className="hidden xs:block text-[9px] font-mono font-bold tracking-[0.2em] text-emerald-500 dark:text-emerald-400 uppercase leading-none mt-0.5">
                {t.livePulseActive || 'Live Pulse Active'}
              </p>
            </div>
          </div>

          {/* Quick Stats Search / Info */}
          <div className="hidden md:flex flex-1 max-w-xs relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full rounded-full border border-gray-200/60 dark:border-white/10 bg-white/10 dark:bg-white/5 pl-9 pr-4 py-1.5 text-xs outline-none transition-all placeholder:text-gray-400 focus:border-emerald-500 dark:focus:border-emerald-400 text-gray-800 dark:text-gray-200 backdrop-blur-sm"
            />
          </div>

          {/* Utility Tools */}
          <div className="flex items-center gap-3">
            
            {/* Auto-Refresh Sync Countdown */}
            <div className="flex items-center gap-2 border border-gray-200/50 dark:border-white/10 bg-white/10 dark:bg-white/5 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-sm select-none">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <div className="flex items-center gap-1">
                <span className="hidden lg:inline text-[9px] font-mono font-bold text-gray-400 tracking-wider">{t.syncIn}</span>
                <span className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 leading-none">
                  {formatTime(secondsLeft)}
                </span>
              </div>
              <button
                onClick={onManualRefresh}
                className="ml-1 cursor-pointer text-gray-400 hover:text-emerald-400 transition-all duration-300 focus:outline-none active:scale-95"
                title={t.syncButtonTooltip}
              >
                <RefreshCw className="h-3 w-3 hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>

            {/* Language Selector Custom Dropdown with Flag Images */}
            <div className="relative flex items-center" ref={langDropdownRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="h-9 flex items-center gap-1.5 text-xs font-extrabold text-gray-700 dark:text-gray-300 bg-white/10 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 rounded-lg px-2.5 outline-none hover:text-emerald-400 focus:border-emerald-500 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                title={t.languageSelectLabel}
              >
                <img
                  src={languageOptions.find(opt => opt.code === language)?.flagUrl}
                  alt={language}
                  className="w-4.5 h-3.5 object-cover rounded shadow-sm select-none border border-gray-200/30 dark:border-white/10"
                  referrerPolicy="no-referrer"
                />
                <span className="font-mono text-[10px] tracking-wider font-extrabold">
                  {languageOptions.find(opt => opt.code === language)?.label}
                </span>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/95 dark:bg-gray-950/95 p-1 shadow-xl ring-1 ring-black/5 z-50 backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-150">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLanguage(opt.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-left rounded-lg text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                        language === opt.code
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <img
                        src={opt.flagUrl}
                        alt={opt.label}
                        className="w-4.5 h-3.5 object-cover rounded shadow-sm select-none border border-gray-200/30 dark:border-white/10"
                        referrerPolicy="no-referrer"
                      />
                      <span className="font-mono text-[10px] tracking-wider">{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200/60 dark:border-white/10 text-gray-500 hover:text-emerald-400 dark:text-gray-400 bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Notification Trigger */}
            <div className="relative">
              <button
                onClick={onToggleNotifications}
                id="notifications-toggle"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200/60 dark:border-white/10 text-gray-500 hover:text-emerald-400 dark:text-gray-400 bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm"
              >
                <Bell className="h-4.5 w-4.5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* Real-time Notifications Panel */}
              {showNotificationsPanel && (
                <div className="absolute right-0 mt-2.5 w-80 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-gray-950/80 p-4 shadow-xl ring-1 ring-black/5 z-50 backdrop-blur-lg">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-900">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1.5">
                      <Bell className="h-4 w-4 text-emerald-500" />
                      {t.liveMatchAlerts}
                    </span>
                    {notifications.length > 0 && (
                      <button
                        onClick={onClearNotifications}
                        className="text-xs font-medium text-gray-400 hover:text-emerald-500"
                      >
                        {t.clearAll}
                      </button>
                    )}
                  </div>
                  <div className="mt-3 max-h-60 overflow-y-auto space-y-2.5 pr-1">
                    {notifications.length === 0 ? (
                      <div className="py-6 text-center">
                        <p className="text-xs text-gray-400">{t.noAlerts}</p>
                        <p className="text-[10px] text-gray-500 mt-1">{t.simulateAlertNotice}</p>
                      </div>
                    ) : (
                      notifications.map((notif, index) => (
                        <div
                          key={index}
                          className="p-2.5 rounded-lg bg-gray-50/55 dark:bg-white/5 border border-gray-100/30 dark:border-white/5 text-xs text-gray-700 dark:text-gray-300 relative overflow-hidden"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                          <p className="pl-1.5 font-medium leading-relaxed">{notif}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Premium Subscription Plan CTA */}
            {isPremium ? (
              <div className="hidden xs:flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Award className="h-4 w-4" />
                <span>{t.premiumPro}</span>
              </div>
            ) : (
              <button
                onClick={onOpenPremium}
                id="premium-subscribe-btn"
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-br from-emerald-400 to-blue-600 px-3 py-1.5 sm:px-4 text-xs font-bold text-white shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all cursor-pointer hover:scale-105"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t.goPro}</span>
              </button>
            )}
          </div>

        </div>

        {/* Sports Horizontal Filter Bar */}
        <div className="flex items-center overflow-x-auto py-3 gap-2 no-scrollbar border-t border-gray-100/50 dark:border-white/10">
          {sportsList.map((sport) => {
            const isActive = sportFilter === sport.id;
            return (
              <button
                key={sport.id}
                onClick={() => setSportFilter(sport.id)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 backdrop-blur-sm shadow-sm'
                    : 'bg-white/10 dark:bg-white/5 border-transparent text-gray-600 dark:text-white/60 hover:bg-white/20 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span>{sport.icon}</span>
                <span>{sport.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}

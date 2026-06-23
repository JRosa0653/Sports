import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MatchCenter from './components/MatchCenter';
import StatsSection from './components/StatsSection';
import StandingsSection from './components/StandingsSection';
import NewsSection from './components/NewsSection';
import PremiumModal from './components/PremiumModal';

import { MATCHES, STANDINGS, NEWS_ARTICLES } from './data/sportsData';
import { Match, SportType, LeagueStandings, NewsArticle } from './types';
import { Award, Bell, Shield, Sparkles } from 'lucide-react';
import { Language, translations } from './utils/translations';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('pv-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark'; // Default to a gorgeous dark theme as standard for premium sports-tech
  });

  // Language state (persisted)
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('pv-language');
    if (saved === 'en' || saved === 'es') return saved;
    return 'es'; // Default to Spanish as requested
  });

  // Sports filters state
  const [sportFilter, setSportFilter] = useState<SportType | 'all'>('all');

  // Match state (so users can simulate real-time live events and update scores!)
  const [matches, setMatches] = useState<Match[]>(() => {
    return MATCHES;
  });

  // League standings state (reacts to real-time sync with ESPN or manual score updates)
  const [standings, setStandings] = useState<LeagueStandings[]>(() => {
    return STANDINGS;
  });

  // News articles state (reacts to server-side updates)
  const [news, setNews] = useState<NewsArticle[]>(() => {
    return NEWS_ARTICLES;
  });

  // Selected Match ID for Match Center Drawer
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);

  // Favorites state (persisted)
  const [favTeams, setFavTeams] = useState<string[]>(() => {
    const saved = localStorage.getItem('pv-fav-teams');
    return saved ? JSON.parse(saved) : ['rmadrid', 'lakers', 'djokovic'];
  });

  // Premium status (persisted)
  const [isPremium, setIsPremium] = useState<boolean>(() => {
    const saved = localStorage.getItem('pv-premium');
    return saved === 'true';
  });

  const [showPremiumModal, setShowPremiumModal] = useState(false);

  // Notifications State
  const [notifications, setNotifications] = useState<string[]>(() => {
    const saved = localStorage.getItem('pv-notifications');
    return saved ? JSON.parse(saved) : [
      '¡Bienvenido a Punto Vivo! Sincroniza o simula goles en vivo para alertas en tiempo real.'
    ];
  });
  
  const [showNotificationsPanel, setShowNotificationsPanel] = useState(false);

  const t = translations[language];

  // Apply theme class to HTML element on load / toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('pv-theme', theme);
  }, [theme]);

  // Initial load of comprehensive sports data from backend
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch('/api/sports');
        const data = await response.json();
        if (data) {
          if (data.matches) setMatches(data.matches);
          if (data.standings) setStandings(data.standings);
          if (data.news) setNews(data.news);
        }
      } catch (err) {
        console.error("Failed to load initial sports data from server:", err);
      }
    };
    fetchInitialData();
  }, []);

  // Persist language
  useEffect(() => {
    localStorage.setItem('pv-language', language);
  }, [language]);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('pv-fav-teams', JSON.stringify(favTeams));
  }, [favTeams]);

  // Persist notifications
  useEffect(() => {
    localStorage.setItem('pv-notifications', JSON.stringify(notifications));
  }, [notifications]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Bookmark / Favorite team
  const toggleFavTeam = (teamId: string) => {
    setFavTeams((prev) => {
      const exists = prev.includes(teamId);
      const updated = exists ? prev.filter((id) => id !== teamId) : [...prev, teamId];
      triggerNotification(
        exists
          ? (language === 'es' ? 'Equipo eliminado de favoritos.' : 'Removed team from favorites.')
          : (language === 'es' ? '¡Equipo guardado! Los partidos en vivo se destacarán.' : 'Team added to bookmarks! Live games for this club will be highlighted.')
      );
      return updated;
    });
  };

  // Add notification toast alert
  const triggerNotification = (message: string) => {
    setNotifications((prev) => {
      const updated = [message, ...prev.slice(0, 9)]; // Keep latest 10
      return updated;
    });
    
    // Play a subtle simulation tone or flashing toast
    setShowNotificationsPanel(true);
    setTimeout(() => {
      setShowNotificationsPanel(false);
    }, 4500);
  };

  // Premium Upgrade approval callback
  const handleSubscribeSuccess = (planName: string, billingCycle: string) => {
    setIsPremium(true);
    localStorage.setItem('pv-premium', 'true');
    triggerNotification(
      language === 'es'
        ? `¡Suscripción aprobada! Bienvenido al Plan ${planName} (${billingCycle}).`
        : `Subscription approved! Welcome to ${planName} Plan (${billingCycle}).`
    );
  };

  // Clear notifications
  const handleClearNotifications = () => {
    setNotifications([]);
    localStorage.removeItem('pv-notifications');
  };

  // Handle single match state updates from live match center simulation
  const handleUpdateMatch = (updatedMatch: Match) => {
    setMatches((prev) =>
      prev.map((m) => (m.id === updatedMatch.id ? updatedMatch : m))
    );
  };

  // 30-minute auto-refresh countdown (30 * 60 = 1800 seconds)
  const [secondsLeft, setSecondsLeft] = useState(1800);
  const [isSyncing, setIsSyncing] = useState(false);

  // Sync with Backend (Gemini Grounded Search or Local Telemetry Fallback)
  const handleManualRefresh = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    try {
      const response = await fetch('/api/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data && data.success) {
        if (data.matches) {
          setMatches(data.matches);
        }
        if (data.standings) {
          setStandings(data.standings);
        }
        if (data.news) {
          setNews(data.news);
        }
        setSecondsLeft(1800);
        triggerNotification(data.message);
      }
    } catch (err) {
      console.error("Sync fetch error:", err);
      triggerNotification(
        language === 'es' 
          ? 'Error al conectar con la base de datos de Punto Vivo. Reintentando...' 
          : 'Failed to synchronize with Punto Vivo backend database. Retrying...'
      );
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setTimeout(() => handleManualRefresh(), 50);
          return 1800;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#05070a] text-gray-800 dark:text-gray-100 transition-colors duration-300 font-sans pb-16">
      
      {/* Premium Promotional Ribbon (Only if not premium) */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-rose-500 via-amber-500 to-indigo-500 p-2 text-center text-xs font-bold text-white relative z-50 flex items-center justify-center gap-1.5 shadow-md">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          <span>{t.premiumRibbonMessage}</span>
          <button
            onClick={() => setShowPremiumModal(true)}
            className="rounded bg-white/20 hover:bg-white/30 px-2 py-0.5 text-[10px] font-extrabold uppercase border border-white/20 ml-2 cursor-pointer"
          >
            {t.goPro}
          </button>
        </div>
      )}

      {/* Header Layout */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        sportFilter={sportFilter}
        setSportFilter={setSportFilter}
        isPremium={isPremium}
        onOpenPremium={() => setShowPremiumModal(true)}
        favoritesCount={favTeams.length}
        notificationCount={notifications.length}
        onToggleNotifications={() => setShowNotificationsPanel((prev) => !prev)}
        showNotificationsPanel={showNotificationsPanel}
        onClearNotifications={handleClearNotifications}
        notifications={notifications}
        secondsLeft={secondsLeft}
        onManualRefresh={handleManualRefresh}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Core Dashboard Grid Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fade-in">
        
        {/* Section 1: Hero Live Scores and schedule */}
        <HeroSection
          matches={matches}
          onSelectMatch={(id) => setSelectedMatchId(id)}
          favTeams={favTeams}
          toggleFavTeam={toggleFavTeam}
          sportFilter={sportFilter}
          language={language}
        />

        {/* Section 2: Team and Player comparative sandbox stats */}
        <div className="border-t border-gray-200 dark:border-gray-900 pt-10">
          <div className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
              📊 {t.performanceLabTitle}
            </h2>
            <p className="text-xs text-gray-400 mt-1">{t.performanceLabDesc}</p>
          </div>
          <StatsSection language={language} />
        </div>

        {/* Section 3: League Standings Tables */}
        <div className="border-t border-gray-200 dark:border-gray-900 pt-10">
          <StandingsSection language={language} standings={standings} />
        </div>

        {/* Section 4: Sports News Hub & Monetization blocks */}
        <div className="border-t border-gray-200 dark:border-gray-900 pt-10">
          <NewsSection onTriggerNotification={triggerNotification} language={language} news={news} />
        </div>

      </main>

      {/* Footer copyright */}
      <footer className="w-full h-12 px-6 border-t border-gray-200/50 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md flex items-center justify-between text-[10px] text-gray-500 dark:text-white/40 font-mono tracking-widest mt-16">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PUNTO ENGINE ACTIVE</span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-white/10">|</span>
          <span className="hidden sm:inline">LATENCY: 14MS</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">V1.4.2 STABLE</span>
          <span className="hidden md:inline text-gray-300 dark:text-white/10">|</span>
          <span>© 2026 PUNTOVIVO</span>
        </div>
      </footer>

      {/* Interactive Overlays / Modals */}
      {selectedMatchId && (
        <MatchCenter
          matchId={selectedMatchId}
          onClose={() => setSelectedMatchId(null)}
          matches={matches}
          onUpdateMatch={handleUpdateMatch}
          onTriggerNotification={triggerNotification}
          language={language}
        />
      )}

      {showPremiumModal && (
        <PremiumModal
          onClose={() => setShowPremiumModal(false)}
          onSubscribeSuccess={handleSubscribeSuccess}
          onTriggerNotification={triggerNotification}
          language={language}
        />
      )}

    </div>
  );
}

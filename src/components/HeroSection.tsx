import React from 'react';
import { Activity, MapPin, Clock, Calendar, Heart, MessageSquare, ChevronRight, Share2, Sparkles, Volume2 } from 'lucide-react';
import { Match, SportType } from '../types';
import { Language, translations } from '../utils/translations';

interface HeroSectionProps {
  matches: Match[];
  onSelectMatch: (matchId: string) => void;
  favTeams: string[];
  toggleFavTeam: (teamId: string) => void;
  sportFilter: SportType | 'all';
  language: Language;
}

export default function HeroSection({
  matches,
  onSelectMatch,
  favTeams,
  toggleFavTeam,
  sportFilter,
  language,
}: HeroSectionProps) {
  const t = translations[language];

  // Filter matches based on chosen sport
  const filteredMatches = matches.filter(
    (m) => sportFilter === 'all' || m.sport === sportFilter
  );

  const liveMatches = filteredMatches.filter((m) => m.status === 'live');
  const upcomingMatches = filteredMatches.filter((m) => m.status === 'upcoming');
  const finishedMatches = filteredMatches.filter((m) => m.status === 'finished');

  const sportIcons: Record<string, string> = {
    football: '⚽',
    basketball: '🏀',
    tennis: '🎾',
    american_football: '🏈',
    baseball: '⚾',
    golf: '⛳',
    hockey: '🏒',
    world_cup: '🌍'
  };

  return (
    <section className="space-y-8" id="hero-matches-section">
      {/* 🚀 Hero Banner: Live & Trending Matches Spotlight */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <h2 className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t.trendingSpotlight}
            </h2>
          </div>
          <p className="text-xs text-gray-400 font-mono">{t.seasonActive}</p>
        </div>

        {liveMatches.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveMatches.slice(0, 2).map((match) => {
              const isHomeFav = favTeams.includes(match.homeTeam.id);
              const isAwayFav = favTeams.includes(match.awayTeam.id);

              return (
                <div
                  key={match.id}
                  onClick={() => onSelectMatch(match.id)}
                  className="glass relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-xl hover:border-rose-500/30 cursor-pointer group animate-fade-in"
                >
                  {/* Glowing background decor for startup sports-tech look */}
                  <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-rose-500/5 blur-3xl group-hover:bg-rose-500/10 transition-colors" />

                  {/* Header info */}
                  <div className="flex items-center justify-between mb-6 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-500 font-display">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                      {t.liveBadge} • {match.time}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 font-mono tracking-wider">
                      {match.league}
                    </span>
                  </div>

                  {/* Teams & Scores */}
                  <div className="flex items-center justify-between gap-4 mb-6 z-10">
                    {/* Home Team */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="relative">
                        <img
                          src={match.homeTeam.logo}
                          alt={match.homeTeam.name}
                          className="h-16 w-16 rounded-2xl object-cover border-2 border-gray-100 dark:border-gray-800 shadow-md bg-white p-1"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavTeam(match.homeTeam.id);
                          }}
                          className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:text-rose-500 transition-colors cursor-pointer shadow-sm"
                        >
                          <Heart className={`h-4 w-4 ${isHomeFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                        </button>
                      </div>
                      <span className="font-display font-bold text-sm text-gray-900 dark:text-white mt-3 leading-tight block truncate max-w-[130px]">
                        {match.homeTeam.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 tracking-wider">
                        Rank #{isHomeFav ? 'FAV' : 'PRO'}
                      </span>
                    </div>

                    {/* Score Center */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-3.5 bg-gray-100/80 dark:bg-gray-900/80 px-4 py-2.5 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-inner">
                        <span className="font-mono text-3xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
                          {match.homeScore}
                        </span>
                        <span className="text-gray-400 font-bold font-mono">:</span>
                        <span className="font-mono text-3xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
                          {match.awayScore}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-rose-500 mt-2 font-mono uppercase tracking-widest flex items-center gap-1">
                        <Activity className="h-3 w-3 animate-bounce" />
                        {t.simulatorActive}
                      </span>
                    </div>

                    {/* Away Team */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="relative">
                        <img
                          src={match.awayTeam.logo}
                          alt={match.awayTeam.name}
                          className="h-16 w-16 rounded-2xl object-cover border-2 border-gray-100 dark:border-gray-800 shadow-md bg-white p-1"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavTeam(match.awayTeam.id);
                          }}
                          className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:text-rose-500 transition-colors cursor-pointer shadow-sm"
                        >
                          <Heart className={`h-4 w-4 ${isAwayFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                        </button>
                      </div>
                      <span className="font-display font-bold text-sm text-gray-900 dark:text-white mt-3 leading-tight block truncate max-w-[130px]">
                        {match.awayTeam.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 tracking-wider">
                        Rank #{isAwayFav ? 'FAV' : 'PRO'}
                      </span>
                    </div>
                  </div>

                  {/* Quick Venue and match analytics trailer */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-900/60 pt-4 z-10">
                    <span className="flex items-center gap-1 truncate max-w-[200px]">
                      <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                      {match.venue}
                    </span>
                    <span className="text-rose-500 font-semibold group-hover:translate-x-1.5 transition-transform flex items-center gap-0.5">
                      {t.enterMatchCenter} <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="glass rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800 animate-fade-in">
            <span className="text-3xl">📡</span>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
              {t.noLiveMatches}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {t.checkUpcomingMatches}
            </p>
          </div>
        )}
      </div>

      {/* 📅 Section 1: Today's Games / Schedule */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-rose-500" />
            {t.scheduledMatches}
          </h3>
          <span className="text-xs font-semibold text-gray-400">{filteredMatches.length} {t.matchesFound}</span>
        </div>

        <div className="space-y-4">
          {filteredMatches.map((match) => {
            const isHomeFav = favTeams.includes(match.homeTeam.id);
            const isAwayFav = favTeams.includes(match.awayTeam.id);
            const isLive = match.status === 'live';

            return (
              <div
                key={match.id}
                onClick={() => onSelectMatch(match.id)}
                className="glass rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-800/60 p-4 transition-all hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md cursor-pointer flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in"
              >
                {/* Time & Sport Details */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 dark:bg-gray-900 flex items-center justify-center border border-gray-100 dark:border-gray-800 shrink-0">
                    <span className="text-lg">
                      {sportIcons[match.sport] || '⚽'}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">{match.league}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {isLive ? (
                        <span className="inline-flex items-center rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-rose-500 animate-pulse">
                          {t.liveBadge} • {match.time}
                        </span>
                      ) : match.status === 'finished' ? (
                        <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-[10px] font-semibold text-gray-500">
                          {t.finishedBadge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-500 flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5" />
                          {match.time}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scoreboard line */}
                <div className="flex items-center justify-center gap-8 flex-1 w-full md:max-w-xl">
                  {/* Home Team */}
                  <div className="flex items-center justify-end gap-3 flex-1 min-w-0">
                    <span className={`text-sm font-semibold truncate ${isHomeFav ? 'text-rose-500 font-bold' : 'text-gray-800 dark:text-gray-200'}`}>
                      {match.homeTeam.name}
                    </span>
                    <img
                      src={match.homeTeam.logo}
                      alt={match.homeTeam.name}
                      className="h-7 w-7 rounded-md object-cover bg-white border p-0.5 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Score */}
                  <div className="bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-lg font-mono text-sm font-bold min-w-[70px] text-center border border-gray-200 dark:border-gray-800 shrink-0">
                    {match.status === 'upcoming' ? (
                      <span className="text-xs text-gray-500 font-medium font-sans">VS</span>
                    ) : (
                      <span className="text-gray-900 dark:text-gray-100">
                        {match.homeScore} - {match.awayScore}
                      </span>
                    )}
                  </div>

                  {/* Away Team */}
                  <div className="flex items-center justify-start gap-3 flex-1 min-w-0">
                    <img
                      src={match.awayTeam.logo}
                      alt={match.awayTeam.name}
                      className="h-7 w-7 rounded-md object-cover bg-white border p-0.5 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <span className={`text-sm font-semibold truncate ${isAwayFav ? 'text-rose-500 font-bold' : 'text-gray-800 dark:text-gray-200'}`}>
                      {match.awayTeam.name}
                    </span>
                  </div>
                </div>

                {/* Action panel */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 border-gray-100 dark:border-gray-900/60 pt-3 md:pt-0">
                  <div className="flex gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavTeam(match.homeTeam.id);
                      }}
                      className={`p-1.5 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-400 hover:text-rose-500 cursor-pointer ${
                        isHomeFav || isAwayFav ? 'text-rose-500 border-rose-500/20' : ''
                      }`}
                      title="Bookmark teams to highlights match"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-xs font-semibold text-rose-500 hover:underline flex items-center gap-0.5 font-display">
                    {t.statsButton} <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

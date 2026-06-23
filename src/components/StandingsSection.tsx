import React, { useState } from 'react';
import { STANDINGS } from '../data/sportsData';
import { Award, ShieldAlert, ShieldCheck } from 'lucide-react';
import { SportType, LeagueStandings } from '../types';
import { Language, translations, getFlagEmoji } from '../utils/translations';

interface StandingsSectionProps {
  language: Language;
  standings?: LeagueStandings[];
}

export default function StandingsSection({ language, standings = STANDINGS }: StandingsSectionProps) {
  const t = translations[language];
  const [selectedSport, setSelectedSport] = useState<SportType | 'all'>('all');

  const filteredLeagues = standings.filter(
    (l) => selectedSport === 'all' || l.sport === selectedSport
  );

  const sportsTabs: Array<{ id: SportType | 'all'; label: string }> = [
    { id: 'all', label: language === 'es' ? 'Todos' : 'All' },
    { id: 'football', label: t.football },
    { id: 'basketball', label: t.basketball },
    { id: 'tennis', label: t.tennis },
    { id: 'baseball', label: t.baseball },
    { id: 'golf', label: t.golf },
    { id: 'hockey', label: t.hockey },
    { id: 'world_cup', label: t.world_cup },
  ];

  const isNoDrawSport = (sport: SportType) => {
    return sport === 'basketball' || sport === 'baseball' || sport === 'hockey' || sport === 'golf' || sport === 'tennis';
  };

  // Helper to append a nationality flag for individual competitors (Tennis, Golf)
  const getCompetitorFlag = (name: string, sport: SportType): string => {
    if (sport !== 'tennis' && sport !== 'golf') return '';
    const n = name.toLowerCase();
    if (n.includes('nadal') || n.includes('alcaraz') || n.includes('rahm')) return '🇪🇸';
    if (n.includes('djokovic')) return '🇷🇸';
    if (n.includes('woods') || n.includes('scheffler') || n.includes('fritz')) return '🇺🇸';
    if (n.includes('mcilroy')) return '🇬🇧';
    if (n.includes('hovland')) return '🇳🇴';
    if (n.includes('sinner')) return '🇮🇹';
    if (n.includes('zverev')) return '🇩🇪';
    return '';
  };

  return (
    <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6" id="league-standings-section">
      
      {/* Table filters */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-100 dark:border-gray-900 pb-4">
        <div>
          <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-rose-500" />
            {t.leagueStandingsTitle}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">{t.leagueStandingsDesc}</p>
        </div>

        <div className="flex flex-wrap items-center gap-1 bg-gray-100 dark:bg-gray-900/60 p-1 rounded-xl max-w-full">
          {sportsTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSport(tab.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
                selectedSport === tab.id
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tables */}
      <div className="space-y-8">
        {filteredLeagues.length === 0 ? (
          <div className="py-12 text-center text-gray-400 text-xs">
            {t.noStandings}
          </div>
        ) : (
          filteredLeagues.map((league) => (
            <div key={league.leagueName} className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-rose-500 bg-rose-500/10 px-2.5 py-1 rounded-lg">
                  {league.leagueName}
                </span>
                <span className="text-[10px] text-gray-400 font-mono">
                  {league.sport === 'golf' ? t.scoresParNotice : t.formIndicatorsNotice}
                </span>
              </div>

              {/* Standings Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-900 bg-white/40 dark:bg-gray-950/20 backdrop-blur-sm">
                <table className="w-full text-xs text-left">
                  <thead className="bg-gray-50 dark:bg-gray-900/60 font-mono text-[10px] uppercase text-gray-400 font-bold border-b border-gray-100 dark:border-gray-900">
                    <tr>
                      <th className="py-3 px-4 text-center w-12">#</th>
                      <th className="py-3 px-4">{t.clubCompetitorHeader}</th>
                      <th className="py-3 px-4 text-center">{league.sport === 'golf' ? t.roundsHeader : 'P'}</th>
                      <th className="py-3 px-4 text-center">{league.sport === 'golf' ? t.top10Header : 'W'}</th>
                      <th className="py-3 px-4 text-center">{isNoDrawSport(league.sport) ? 'L' : 'D'}</th>
                      {!isNoDrawSport(league.sport) && <th className="py-3 px-4 text-center">L</th>}
                      <th className="py-3 px-4 text-center">
                        {league.sport === 'basketball' ? 'PPG' : league.sport === 'golf' ? t.strokesHeader : 'GD'}
                      </th>
                      <th className="py-3 px-4 text-center font-bold text-gray-900 dark:text-white">
                        {league.sport === 'golf' ? 'PAR' : 'PTS'}
                      </th>
                      <th className="py-3 px-4 text-center w-28">{t.formHeader}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-900">
                    {league.standings.map((team) => {
                      const isTopBracket = team.position <= 2;
                      const flag = getCompetitorFlag(team.teamName, league.sport);
                      return (
                        <tr
                          key={team.teamId}
                          className="hover:bg-gray-50/50 dark:hover:bg-gray-900/10 transition-colors"
                        >
                          {/* Position */}
                          <td className="py-3 px-4 text-center font-mono font-bold">
                            <span className={`inline-flex h-5 w-5 items-center justify-center rounded-md ${
                              isTopBracket
                                ? 'bg-rose-500/15 text-rose-500'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                            }`}>
                              {team.position}
                            </span>
                          </td>

                          {/* Logo and Name */}
                          <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">
                            <div className="flex items-center gap-2.5">
                              <img
                                src={team.teamLogo}
                                alt={team.teamName}
                                className="h-6 w-6 rounded object-cover bg-white p-0.5 border"
                                referrerPolicy="no-referrer"
                              />
                              <span className="truncate max-w-[150px] sm:max-w-none flex items-center gap-1">
                                {flag && <span className="text-sm">{flag}</span>}
                                {team.teamName}
                              </span>
                            </div>
                          </td>

                          {/* Stats columns */}
                          <td className="py-3 px-4 text-center font-mono">{team.played}</td>
                          <td className="py-3 px-4 text-center font-mono">{team.won}</td>
                          <td className="py-3 px-4 text-center font-mono">
                            {isNoDrawSport(league.sport) ? team.lost : team.drawn}
                          </td>
                          {!isNoDrawSport(league.sport) && (
                            <td className="py-3 px-4 text-center font-mono">{team.lost}</td>
                          )}

                          {/* Goal/Points Differential */}
                          <td className="py-3 px-4 text-center font-mono">
                            {league.sport === 'basketball' ? (
                                <span>{Math.round(team.goalsFor / team.played)}</span>
                            ) : league.sport === 'golf' ? (
                              <span>{team.goalsFor}</span>
                            ) : (
                              <span className={team.goalsFor - team.goalsAgainst >= 0 ? 'text-emerald-500' : 'text-rose-500'}>
                                {team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}
                                {team.goalsFor - team.goalsAgainst}
                              </span>
                            )}
                          </td>

                          {/* Points */}
                          <td className="py-3 px-4 text-center font-mono font-extrabold text-gray-900 dark:text-white">
                            {league.sport === 'golf' ? (
                              <span className={team.points > 0 ? 'text-emerald-500' : team.points < 0 ? 'text-rose-500' : ''}>
                                {team.points > 0 ? `-${team.points}` : team.points < 0 ? `+${Math.abs(team.points)}` : 'E'}
                              </span>
                            ) : (
                              <span>{team.points}</span>
                            )}
                          </td>

                          {/* Form indicators */}
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-center gap-1">
                              {team.form.map((outcome, idx) => (
                                <span
                                  key={idx}
                                  className={`h-5 w-5 rounded flex items-center justify-center text-[10px] font-extrabold font-mono ${
                                    outcome === 'W'
                                      ? 'bg-emerald-500/10 text-emerald-500'
                                      : outcome === 'D'
                                      ? 'bg-amber-500/10 text-amber-500'
                                      : 'bg-rose-500/10 text-rose-500'
                                  }`}
                                  title={outcome === 'W' ? 'Win' : outcome === 'D' ? 'Draw' : 'Loss'}
                                >
                                  {outcome}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

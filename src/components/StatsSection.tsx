import React, { useState } from 'react';
import { TEAMS, PLAYERS } from '../data/sportsData';
import { Sparkles, BarChart2, Star, TrendingUp, Users, ArrowRightLeft, User } from 'lucide-react';
import { Team, Player } from '../types';
import { Language, translations, getFlagEmoji } from '../utils/translations';

interface StatsSectionProps {
  language: Language;
}

export default function StatsSection({ language }: StatsSectionProps) {
  const t = translations[language];

  // Team comparison state
  const [teamAId, setTeamAId] = useState<string>('rmadrid');
  const [teamBId, setTeamBId] = useState<string>('barcelona');

  // Player comparison state
  const [playerAId, setPlayerAId] = useState<string>('lebron');
  const [playerBId, setPlayerBId] = useState<string>('curry');

  const teamA = TEAMS[teamAId] || TEAMS['rmadrid'];
  const teamB = TEAMS[teamBId] || TEAMS['barcelona'];

  const playerA = PLAYERS.find(p => p.id === playerAId) || PLAYERS[0];
  const playerB = PLAYERS.find(p => p.id === playerBId) || PLAYERS[1];

  const allTeams = Object.values(TEAMS);
  const trendingTeams = allTeams.filter(t => t.trending);
  const trendingPlayers = PLAYERS.filter(p => p.trending);

  // Helper to find a team logo by name or teamId
  const getTeamLogoByName = (teamName: string, teamId: string) => {
    const found = TEAMS[teamId] || Object.values(TEAMS).find(t => t.name === teamName);
    return found ? found.logo : 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80';
  };

  return (
    <section className="space-y-10" id="sports-stats-section">
      
      {/* 🚀 Dynamic Comparison Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Module A: Team Comparison Tool */}
        <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-500">
                <ArrowRightLeft className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                {t.teamComparisonTitle}
              </h3>
            </div>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              {t.teamComparisonDesc}
            </p>

            {/* Dropdown selectors */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">{t.squadA}</label>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-2.5">
                  <img src={teamA.logo} alt="" className="h-5 w-5 object-cover rounded bg-white p-0.5" referrerPolicy="no-referrer" />
                  <select
                    value={teamAId}
                    onChange={(e) => setTeamAId(e.target.value)}
                    className="w-full text-xs font-semibold text-gray-800 dark:text-gray-200 outline-none bg-transparent"
                  >
                    {allTeams.map(t => (
                      <option key={t.id} value={t.id} className="bg-white dark:bg-gray-950">{t.name} ({t.shortName})</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">{t.squadB}</label>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-2.5">
                  <img src={teamB.logo} alt="" className="h-5 w-5 object-cover rounded bg-white p-0.5" referrerPolicy="no-referrer" />
                  <select
                    value={teamBId}
                    onChange={(e) => setTeamBId(e.target.value)}
                    className="w-full text-xs font-semibold text-gray-800 dark:text-gray-200 outline-none bg-transparent"
                  >
                    {allTeams.map(t => (
                      <option key={t.id} value={t.id} className="bg-white dark:bg-gray-950">{t.name} ({t.shortName})</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Visual Bars Comparison */}
            <div className="space-y-4">
              <ComparisonProgressBar
                label={t.winRate}
                valA={teamA.stats.winRate}
                valB={teamB.stats.winRate}
                suffix="%"
              />
              <ComparisonProgressBar
                label={t.avgGoalOutput}
                valA={teamA.stats.goalsScored}
                valB={teamB.stats.goalsScored}
              />
              <ComparisonProgressBar
                label={t.ballPossession}
                valA={teamA.stats.possession}
                valB={teamB.stats.possession}
                suffix="%"
              />
              <ComparisonProgressBar
                label={t.avgFoulsConceded}
                valA={teamA.stats.fouls}
                valB={teamB.stats.fouls}
              />
              <ComparisonProgressBar
                label={t.yellowCardsAccumulation}
                valA={teamA.stats.yellowCards}
                valB={teamB.stats.yellowCards}
              />
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-900 mt-5 pt-3 text-[10px] font-mono text-gray-400 text-center uppercase">
            {t.optaTelemetrySource}
          </div>
        </div>

        {/* Module B: Player Comparison Tool */}
        <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-500">
                <User className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                {t.playerComparisonTitle}
              </h3>
            </div>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              {t.playerComparisonDesc}
            </p>

            {/* Dropdown selectors */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">{t.playerA}</label>
                <select
                  value={playerAId}
                  onChange={(e) => setPlayerAId(e.target.value)}
                  className="w-full text-xs font-semibold rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-2.5 text-gray-800 dark:text-gray-200 outline-none"
                >
                  {PLAYERS.map(p => (
                    <option key={p.id} value={p.id} className="bg-white dark:bg-gray-950">{p.name} ({p.position})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">{t.playerB}</label>
                <select
                  value={playerBId}
                  onChange={(e) => setPlayerBId(e.target.value)}
                  className="w-full text-xs font-semibold rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-2.5 text-gray-800 dark:text-gray-200 outline-none"
                >
                  {PLAYERS.map(p => (
                    <option key={p.id} value={p.id} className="bg-white dark:bg-gray-950">{p.name} ({p.position})</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Profile cards */}
            <div className="flex items-center justify-between gap-4 p-3 bg-gray-50 dark:bg-gray-900/40 rounded-xl border border-gray-100 dark:border-gray-900/60 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <img
                    src={playerA.image}
                    alt={playerA.name}
                    className="h-10 w-10 rounded-full object-cover border"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs">{getFlagEmoji(playerA.nationality)}</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1">
                    {playerA.name}
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <img src={getTeamLogoByName(playerA.teamName, playerA.teamId)} alt="" className="h-3.5 w-3.5 object-cover bg-white rounded p-0.5" referrerPolicy="no-referrer" />
                    {playerA.teamName}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-gray-300">VS</span>
              <div className="flex items-center gap-2.5 text-right justify-end">
                <div>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200 flex items-center justify-end gap-1">
                    {playerB.name}
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center justify-end gap-1">
                    {playerB.teamName}
                    <img src={getTeamLogoByName(playerB.teamName, playerB.teamId)} alt="" className="h-3.5 w-3.5 object-cover bg-white rounded p-0.5" referrerPolicy="no-referrer" />
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={playerB.image}
                    alt={playerB.name}
                    className="h-10 w-10 rounded-full object-cover border"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-1 -left-1 text-xs">{getFlagEmoji(playerB.nationality)}</span>
                </div>
              </div>
            </div>

            {/* Visual progress comparison */}
            <div className="space-y-4">
              <ComparisonProgressBar
                label={playerA.stats.primary.label}
                valA={playerA.stats.primary.value}
                valB={playerB.stats.primary.value}
                accent="indigo"
              />
              <ComparisonProgressBar
                label={playerA.stats.secondary.label}
                valA={playerA.stats.secondary.value}
                valB={playerB.stats.secondary.value}
                accent="indigo"
              />
              <ComparisonProgressBar
                label={playerA.stats.tertiary.label}
                valA={playerA.stats.tertiary.value}
                valB={playerB.stats.tertiary.value}
                accent="indigo"
              />
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-900 mt-5 pt-3 text-[10px] font-mono text-gray-400 text-center uppercase">
            {t.seasonCatalogSource}
          </div>
        </div>

      </div>

      {/* 🏅 Section 3/4: Top Statistics & Trending Leagues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Trending Players Cards */}
        <div className="glass rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h4 className="font-display text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5 mb-4 uppercase tracking-wider">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            {t.trendingPlayersShowcase}
          </h4>
          <div className="divide-y divide-gray-100 dark:divide-gray-900">
            {trendingPlayers.slice(0, 4).map((player, index) => (
              <div key={player.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-gray-400">0{index + 1}</span>
                  <div className="relative">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="h-8 w-8 rounded-full object-cover border"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute -bottom-1 -right-1 text-[10px]">{getFlagEmoji(player.nationality)}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-100 flex items-center gap-1.5">
                      {player.name}
                    </span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1">
                      <img src={getTeamLogoByName(player.teamName, player.teamId)} alt="" className="h-3.5 w-3.5 object-cover bg-white rounded p-0.5" referrerPolicy="no-referrer" />
                      {player.teamName} • {player.position}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-rose-500 font-mono">
                    {player.stats.primary.value}
                  </span>
                  <span className="text-[9px] text-gray-400 block font-medium font-mono">
                    {player.stats.primary.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Teams Cards */}
        <div className="glass rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h4 className="font-display text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5 mb-4 uppercase tracking-wider">
            <TrendingUp className="h-4 w-4 text-rose-500" />
            {t.trendingTeamsFormMap}
          </h4>
          <div className="divide-y divide-gray-100 dark:divide-gray-900">
            {trendingTeams.slice(0, 4).map((team, index) => (
              <div key={team.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-gray-400">0{index + 1}</span>
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="h-8 w-8 rounded-md object-cover bg-white border p-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-100">{team.name}</span>
                    <span className="text-[10px] text-gray-400 block uppercase font-mono">{team.sport}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-emerald-500 font-mono">
                    {team.stats.winRate}%
                  </span>
                  <span className="text-[9px] text-gray-400 block font-medium font-mono">
                    {t.winRate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

// -------------------------------------------------------------
// Progressive comparative visual horizontal indicator bar
// -------------------------------------------------------------
interface ComparisonProgressBarProps {
  label: string;
  valA: number;
  valB: number;
  suffix?: string;
  accent?: 'rose' | 'indigo';
}

function ComparisonProgressBar({
  label,
  valA,
  valB,
  suffix = '',
  accent = 'rose',
}: ComparisonProgressBarProps) {
  const sum = valA + valB || 1;
  const pctA = (valA / sum) * 100;
  const pctB = (valB / sum) * 100;

  const colorA = accent === 'rose' ? 'bg-rose-500' : 'bg-indigo-500';
  const colorB = 'bg-gray-400/30';

  return (
    <div className="text-xs">
      <div className="flex items-center justify-between font-mono font-semibold text-gray-500 mb-1">
        <span className="font-bold text-gray-800 dark:text-gray-200">{valA}{suffix}</span>
        <span className="text-[10px] font-sans text-gray-400 tracking-wider font-semibold uppercase">{label}</span>
        <span className="font-bold text-gray-800 dark:text-gray-200">{valB}{suffix}</span>
      </div>
      <div className="flex h-1.5 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200/20 dark:border-gray-800/20">
        <div
          className={`${colorA} h-full rounded-l-full transition-all duration-500`}
          style={{ width: `${pctA}%` }}
        />
        <div
          className="bg-emerald-400 h-full rounded-r-full transition-all duration-500"
          style={{ width: `${pctB}%` }}
        />
      </div>
    </div>
  );
}

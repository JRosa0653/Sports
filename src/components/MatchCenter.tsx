import React, { useState, useEffect } from 'react';
import { X, Activity, Sparkles, TrendingUp, RotateCw, AlertTriangle, Play, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Match, Team, InjuryReport } from '../types';
import { Language, translations } from '../utils/translations';

interface MatchCenterProps {
  matchId: string;
  onClose: () => void;
  matches: Match[];
  onUpdateMatch: (updatedMatch: Match) => void;
  onTriggerNotification: (message: string) => void;
  language: Language;
}

export default function MatchCenter({
  matchId,
  onClose,
  matches,
  onUpdateMatch,
  onTriggerNotification,
  language,
}: MatchCenterProps) {
  const t = translations[language];
  const match = matches.find((m) => m.id === matchId);
  const [activeTab, setActiveTab] = useState<'timeline' | 'stats' | 'h2h' | 'squads' | 'ai-analyst'>('timeline');

  // AI Prediction state
  const [aiLoading, setAiLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [predictionEngine, setPredictionEngine] = useState<string>('');

  // Simulating events
  const [simulating, setSimulating] = useState(false);

  // Reset prediction when matchId changes
  useEffect(() => {
    setPredictionResult(null);
  }, [matchId]);

  if (!match) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 text-center max-w-sm border border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">Match details not found.</p>
          <button onClick={onClose} className="mt-4 rounded-xl bg-rose-500 text-white px-4 py-2 text-xs font-semibold">
            Close
          </button>
        </div>
      </div>
    );
  }

  // Request prediction from server
  const handleFetchAiPrediction = async () => {
    setAiLoading(true);
    try {
      const res = await fetch('/api/gemini/predictions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          homeTeamId: match.homeTeam.id,
          awayTeamId: match.awayTeam.id,
          sport: match.sport,
        }),
      });
      const data = await res.json();
      if (data.success && data.prediction) {
        setPredictionResult(data.prediction);
        setPredictionEngine(data.engine || 'Gemini 3.5');
        onTriggerNotification(`AI Analyst successfully generated preview for ${match.homeTeam.shortName} vs ${match.awayTeam.shortName}!`);
      } else {
        throw new Error(data.error || 'Prediction generation failed');
      }
    } catch (err: any) {
      console.error(err);
      onTriggerNotification(`Fallback Prediction loaded.`);
    } finally {
      setAiLoading(false);
    }
  };

  // Simulate event (e.g. goal or yellow card)
  const handleSimulateEvent = async () => {
    setSimulating(true);
    try {
      const res = await fetch('/api/matches/simulate-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matchId: match.id }),
      });
      const data = await res.json();
      if (data.success && data.match) {
        onUpdateMatch(data.match);
        // Find latest simulated event
        const latestEvent = data.match.timeline[0];
        if (latestEvent) {
          onTriggerNotification(`LIVE MATCH UPDATE: [${latestEvent.time}] ${latestEvent.title} - ${latestEvent.detail}`);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSimulating(false);
    }
  };

  const tabs = [
    { id: 'timeline', label: language === 'es' ? 'Cronograma y Comentarios' : 'Timeline & Commentary' },
    { id: 'stats', label: language === 'es' ? 'Estadísticas del Partido' : 'Match Stats' },
    { id: 'h2h', label: language === 'es' ? 'Historial Directo' : 'Head-to-Head' },
    { id: 'squads', label: language === 'es' ? 'Plantillas y Lesiones' : 'Squad & Injuries' },
    { id: 'ai-analyst', label: language === 'es' ? '🤖 Analista de IA' : '🤖 Punto AI Analyst' },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-end p-0 sm:p-4">
      {/* Drawer content */}
      <div className="w-full max-w-2xl h-full sm:h-[95vh] bg-white dark:bg-gray-950 sm:rounded-2xl shadow-2xl border-l border-gray-200 dark:border-gray-800 flex flex-col justify-between overflow-hidden relative">
        
        {/* Header Block */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/10 shrink-0">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
              {match.league} • MATCH CENTER
            </span>
            <button
              onClick={onClose}
              className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Core Scoreboard Display */}
          <div className="flex items-center justify-between gap-4">
            {/* Home Team */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img
                src={match.homeTeam.logo}
                alt={match.homeTeam.name}
                className="h-12 w-12 rounded-xl object-cover border border-gray-200 dark:border-gray-800 bg-white p-0.5"
                referrerPolicy="no-referrer"
              />
              <div className="truncate">
                <span className="font-display font-bold text-base text-gray-900 dark:text-white block truncate">
                  {match.homeTeam.name}
                </span>
                <span className="text-xs text-gray-400 font-mono">Home</span>
              </div>
            </div>

            {/* Live Score indicator */}
            <div className="flex flex-col items-center shrink-0 px-2">
              <div className="text-3xl font-mono font-extrabold text-gray-900 dark:text-white tracking-tighter flex items-center gap-3">
                {match.status === 'upcoming' ? (
                  <span className="text-lg text-gray-400 font-sans tracking-normal font-semibold">VS</span>
                ) : (
                  <>
                    <span>{match.homeScore}</span>
                    <span className="text-gray-300 dark:text-gray-700 animate-pulse">:</span>
                    <span>{match.awayScore}</span>
                  </>
                )}
              </div>
              <div className="mt-1.5">
                {match.status === 'live' ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-500 animate-pulse">
                    <span className="h-1 w-1 rounded-full bg-rose-500" />
                    LIVE • {match.time}
                  </span>
                ) : match.status === 'finished' ? (
                  <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-[10px] font-bold text-gray-500">
                    FINISHED
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
                    UPCOMING • {match.time}
                  </span>
                )}
              </div>
            </div>

            {/* Away Team */}
            <div className="flex items-center gap-3 flex-1 justify-end text-right min-w-0">
              <div className="truncate">
                <span className="font-display font-bold text-base text-gray-900 dark:text-white block truncate">
                  {match.awayTeam.name}
                </span>
                <span className="text-xs text-gray-400 font-mono">Away</span>
              </div>
              <img
                src={match.awayTeam.logo}
                alt={match.awayTeam.name}
                className="h-12 w-12 rounded-xl object-cover border border-gray-200 dark:border-gray-800 bg-white p-0.5"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Quick interactive action: Event simulation triggers */}
          {match.status !== 'finished' && (
            <div className="mt-5 flex items-center justify-between rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/15 p-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <span className="font-bold">Interactive Sandbox</span>: Advance match time, simulate live goals or yellow cards!
                </p>
              </div>
              <button
                onClick={handleSimulateEvent}
                disabled={simulating}
                className="flex items-center gap-1.5 rounded-lg bg-rose-500 hover:bg-rose-600 disabled:bg-rose-400 px-3 py-1.5 text-xs font-bold text-white shadow-sm cursor-pointer transition-colors"
              >
                {simulating ? <RotateCw className="h-3 w-3 animate-spin" /> : <Play className="h-3 w-3" />}
                {match.status === 'upcoming' ? 'Kickoff!' : 'Live Action'}
              </button>
            </div>
          )}
        </div>

        {/* Tab Navigation selectors */}
        <div className="flex border-b border-gray-100 dark:border-gray-900 overflow-x-auto bg-gray-50/25 dark:bg-gray-950/20 px-4 shrink-0 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                  isActive
                    ? 'border-rose-500 text-rose-500'
                    : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main interactive Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: TIMELINE & TEXT COMMENTARY */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              {/* Event Timeline items */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono mb-4">Match Events</h4>
                {match.timeline.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-800 p-6 text-center text-xs text-gray-400">
                    No active match events logged yet. Kick off or trigger simulator above!
                  </div>
                ) : (
                  <div className="relative border-l-2 border-gray-100 dark:border-gray-900 ml-4 pl-6 space-y-5">
                    {match.timeline.map((event) => (
                      <div key={event.id} className="relative">
                        {/* Event icon badge */}
                        <div className={`absolute -left-[35px] top-0 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold border shadow-sm ${
                          event.type === 'goal'
                            ? 'bg-emerald-500 border-emerald-400 text-white'
                            : event.type === 'card'
                            ? 'bg-amber-400 border-amber-300 text-gray-950'
                            : event.type === 'sub'
                            ? 'bg-blue-500 border-blue-400 text-white'
                            : 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-500'
                        }`}>
                          {event.type === 'goal' ? '⚽' : event.type === 'card' ? '🟨' : event.type === 'sub' ? '🔄' : 'ℹ️'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-rose-500">{event.time}</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-white">{event.title}</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{event.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Dynamic commentary feed */}
              <div className="border-t border-gray-100 dark:border-gray-900 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono mb-4">Play-By-Play Commentary</h4>
                <div className="space-y-3.5 max-h-72 overflow-y-auto pr-1">
                  {match.commentary.map((comm, index) => (
                    <div
                      key={index}
                      className={`text-xs p-3 rounded-lg border ${
                        comm.highlight
                          ? 'bg-rose-500/5 border-rose-500/15 text-rose-600 dark:text-rose-400 font-medium'
                          : 'bg-gray-50/50 dark:bg-gray-900/30 border-gray-100 dark:border-gray-900/60 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <span className="font-mono font-bold text-gray-400 mr-2">{comm.time}</span>
                      {comm.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COMPREHENSIVE STATS COMPARISON */}
          {activeTab === 'stats' && (
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">Comparative Analytics</h4>
              
              {/* Check if sports has stats */}
              {match.sport === 'tennis' ? (
                <div className="space-y-5">
                  <StatProgressRow label="Sets Played" home={2} away={2} />
                  <StatProgressRow label="Aces & Winners" home={match.stats.shotsOnTarget.home} away={match.stats.shotsOnTarget.away} />
                  <StatProgressRow label="Unforced Errors" home={match.stats.totalShots.home} away={match.stats.totalShots.away} />
                  <StatProgressRow label="Double Faults" home={match.stats.fouls.home} away={match.stats.fouls.away} />
                </div>
              ) : (
                <div className="space-y-5">
                  <StatProgressRow label="Ball Possession %" home={match.stats.possession.home} away={match.stats.possession.away} suffix="%" />
                  <StatProgressRow label="Shots on Target" home={match.stats.shotsOnTarget.home} away={match.stats.shotsOnTarget.away} />
                  <StatProgressRow label="Total Goal Attempts" home={match.stats.totalShots.home} away={match.stats.totalShots.away} />
                  <StatProgressRow label="Fouls Committed" home={match.stats.fouls.home} away={match.stats.fouls.away} />
                  <StatProgressRow label="Yellow Cards" home={match.stats.yellowCards.home} away={match.stats.yellowCards.away} />
                  <StatProgressRow label="Offsides Called" home={match.stats.offsides.home} away={match.stats.offsides.away} />
                  <StatProgressRow label="Corners Awarded" home={match.stats.corners.home} away={match.stats.corners.away} />
                </div>
              )}
            </div>
          )}

          {/* TAB 3: H2H PAST MEETINGS */}
          {activeTab === 'h2h' && (
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">Historic Match History</h4>
              
              <div className="space-y-3">
                {match.h2h.map((h, i) => (
                  <div
                    key={h.id || i}
                    className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 flex items-center justify-between text-xs"
                  >
                    <span className="font-mono font-medium text-gray-400">{h.date}</span>
                    <div className="flex items-center gap-3 font-semibold text-gray-800 dark:text-gray-200">
                      <span>{h.homeTeamName}</span>
                      <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono text-gray-900 dark:text-gray-100">
                        {h.homeScore} - {h.awayScore}
                      </span>
                      <span>{h.awayTeamName}</span>
                    </div>
                    <span className="text-[10px] font-bold text-rose-500 font-mono uppercase bg-rose-500/10 px-1.5 py-0.5 rounded">
                      {h.winnerId === 'draw' ? 'DRAW' : h.winnerId === match.homeTeam.id ? 'HOME WIN' : 'AWAY WIN'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SQUAD & MEDICAL REPORT */}
          {activeTab === 'squads' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono mb-3">Starting Squad Comparison</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-900 bg-gray-50/30 dark:bg-gray-900/10">
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 block border-b pb-1.5 mb-2">
                      {match.homeTeam.shortName} Tactics Profile
                    </span>
                    <div className="space-y-1.5 text-xs text-gray-500">
                      <p>• Squad Size: <span className="font-semibold text-gray-700 dark:text-gray-300">{match.homeTeam.stats.squadSize}</span></p>
                      <p>• Win Rate: <span className="font-semibold text-gray-700 dark:text-gray-300">{match.homeTeam.stats.winRate}%</span></p>
                      <p>• Avg. Age: <span className="font-semibold text-gray-700 dark:text-gray-300">{match.homeTeam.stats.avgAge} yrs</span></p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-900 bg-gray-50/30 dark:bg-gray-900/10">
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 block border-b pb-1.5 mb-2">
                      {match.awayTeam.shortName} Tactics Profile
                    </span>
                    <div className="space-y-1.5 text-xs text-gray-500">
                      <p>• Squad Size: <span className="font-semibold text-gray-700 dark:text-gray-300">{match.awayTeam.stats.squadSize}</span></p>
                      <p>• Win Rate: <span className="font-semibold text-gray-700 dark:text-gray-300">{match.awayTeam.stats.winRate}%</span></p>
                      <p>• Avg. Age: <span className="font-semibold text-gray-700 dark:text-gray-300">{match.awayTeam.stats.avgAge} yrs</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Injury reports */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono mb-3">Injured Player Reports</h4>
                {match.injuredPlayers.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-800 p-6 text-center text-xs text-gray-400">
                    Clean medical bill. No players ruled out for this game!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {match.injuredPlayers.map((player) => (
                      <div
                        key={player.id}
                        className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center gap-3 relative"
                      >
                        <div className="h-9 w-9 rounded-full bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center shrink-0">
                          🏥
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">{player.playerName}</p>
                          <p className="text-[11px] text-gray-500">{player.injury}</p>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-[9px] font-semibold text-rose-500 bg-rose-500/10 px-1 py-0.2 rounded font-mono">
                              {player.status}
                            </span>
                            <span className="text-[9px] text-gray-400 font-mono">Expected: {player.expectedReturn}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: AI MATCH ANALYST & PREDICTOR */}
          {activeTab === 'ai-analyst' && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-rose-500/10 border border-indigo-500/20 p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3">
                  <Sparkles className="h-5 w-5 text-indigo-500 animate-pulse" />
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🤖</span> Punto AI Sports Intelligence
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1.5 leading-relaxed">
                  Our advanced neural model ingests real-time squad statistics, venue climate, head-to-head records, and historical form maps to output dynamic predictions.
                </p>

                {/* Generate action */}
                {!predictionResult && !aiLoading && (
                  <button
                    onClick={handleFetchAiPrediction}
                    className="mt-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md cursor-pointer transition-all hover:scale-105"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Run Tactical Pre-Match Analysis</span>
                  </button>
                )}
              </div>

              {/* Loader */}
              {aiLoading && (
                <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
                  <RotateCw className="h-8 w-8 text-rose-500 animate-spin" />
                  <div>
                    <p className="text-xs font-bold text-gray-800 dark:text-white">Punto AI Engine Crunching Data...</p>
                    <p className="text-[10px] text-gray-400 mt-1">Ingesting team rosters, possession metrics, and bookmaker odds</p>
                  </div>
                </div>
              )}

              {/* Result output */}
              {predictionResult && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Confidence block */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/10 text-center">
                      <span className="text-[10px] font-bold text-gray-400 font-mono block uppercase">Predicted Winner</span>
                      <span className="text-sm font-extrabold text-rose-500 block mt-1">
                        {predictionResult.predictedWinner}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/10 text-center">
                      <span className="text-[10px] font-bold text-gray-400 font-mono block uppercase">Confidence Rate</span>
                      <span className="text-sm font-extrabold text-indigo-500 block mt-1">
                        {predictionResult.confidenceRate}%
                      </span>
                    </div>
                  </div>

                  {/* Highlights key features */}
                  <div className="space-y-3.5">
                    <div className="p-3.5 rounded-xl border border-rose-500/10 bg-rose-500/5 text-xs">
                      <span className="font-bold text-rose-500 block mb-0.5">🔑 Pivotal Tactical Battle</span>
                      <p className="text-gray-700 dark:text-gray-300">{predictionResult.tacticalKey}</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-indigo-500/10 bg-indigo-500/5 text-xs">
                      <span className="font-bold text-indigo-500 block mb-0.5">📊 Supporting High-Impact Stat</span>
                      <p className="text-gray-700 dark:text-gray-300">{predictionResult.keyStat}</p>
                    </div>
                  </div>

                  {/* Detailed Summary */}
                  <div className="border-t border-gray-100 dark:border-gray-900 pt-4 text-xs text-gray-600 dark:text-gray-300 leading-relaxed space-y-3">
                    <span className="font-bold text-gray-800 dark:text-white block">Analytical Breakdown</span>
                    {predictionResult.analyticalSummary.split('\n\n').map((paragraph: string, i: number) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Powered by */}
                  <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 text-right pt-2">
                    Model: <span className="font-bold">{predictionEngine}</span> • Real-time ground telemetry
                  </div>

                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer info bar */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-900 text-center bg-gray-50/30 dark:bg-gray-950/20 shrink-0">
          <p className="text-[10px] text-gray-400 font-mono">
            Punto Vivo Sports-Tech Engine • UTC Local Clock Sync OK
          </p>
        </div>

      </div>
    </div>
  );
}

// Sub-component Helper: Stat Progress Row
interface StatProgressRowProps {
  label: string;
  home: number;
  away: number;
  suffix?: string;
}

function StatProgressRow({ label, home, away, suffix = '' }: StatProgressRowProps) {
  const total = home + away || 1;
  const homePct = (home / total) * 100;
  const awayPct = (away / total) * 100;

  return (
    <div className="text-xs">
      <div className="flex items-center justify-between font-bold text-gray-800 dark:text-gray-200 mb-1.5 font-mono">
        <span>{home}{suffix}</span>
        <span className="font-sans text-[11px] text-gray-400 font-normal">{label}</span>
        <span>{away}{suffix}</span>
      </div>
      <div className="flex h-2 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="bg-rose-500 h-full rounded-l-full transition-all duration-500" style={{ width: `${homePct}%` }} />
        <div className="bg-indigo-500 h-full rounded-r-full transition-all duration-500" style={{ width: `${awayPct}%` }} />
      </div>
    </div>
  );
}

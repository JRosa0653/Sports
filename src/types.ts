export type SportType = 'football' | 'basketball' | 'tennis' | 'american_football' | 'baseball' | 'golf' | 'hockey' | 'world_cup';

export interface Sport {
  id: SportType;
  name: string;
  icon: string;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  sport: SportType;
  trending: boolean;
  stats: {
    winRate: number;
    possession: number;
    goalsScored: number;
    goalsConceded: number;
    cleanSheets: number;
    fouls: number;
    yellowCards: number;
    squadSize: number;
    avgAge: number;
  };
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  teamName: string;
  position: string;
  sport: SportType;
  image: string;
  nationality: string;
  age: number;
  trending: boolean;
  stats: {
    primary: { label: string; value: number };
    secondary: { label: string; value: number };
    tertiary: { label: string; value: number };
    custom: Array<{ label: string; value: number }>;
  };
}

export interface MatchEvent {
  id: string;
  time: string;
  type: 'goal' | 'card' | 'sub' | 'foul' | 'shot' | 'period' | 'info';
  title: string;
  detail: string;
  team: 'home' | 'away' | 'none';
  iconName?: string;
}

export interface H2HMatch {
  id: string;
  date: string;
  homeTeamName: string;
  awayTeamName: string;
  homeScore: number;
  awayScore: number;
  winnerId: string | 'draw';
}

export interface MatchStats {
  possession: { home: number; away: number };
  shotsOnTarget: { home: number; away: number };
  totalShots: { home: number; away: number };
  fouls: { home: number; away: number };
  yellowCards: { home: number; away: number };
  redCards: { home: number; away: number };
  corners: { home: number; away: number };
  offsides: { home: number; away: number };
}

export interface Match {
  id: string;
  sport: SportType;
  league: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: 'live' | 'upcoming' | 'finished';
  time: string; // e.g., "74'" or "Q3 04:12" or "15:00"
  date: string;
  venue: string;
  referee?: string;
  timeline: MatchEvent[];
  stats: MatchStats;
  commentary: Array<{ time: string; text: string; highlight?: boolean }>;
  h2h: H2HMatch[];
  injuredPlayers: InjuryReport[];
}

export interface LeagueStanding {
  position: number;
  teamId: string;
  teamName: string;
  teamLogo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  form: Array<'W' | 'D' | 'L'>;
}

export interface LeagueStandings {
  leagueName: string;
  sport: SportType;
  standings: LeagueStanding[];
}

export interface InjuryReport {
  id: string;
  playerName: string;
  playerImage: string;
  teamName: string;
  teamLogo: string;
  sport: SportType;
  injury: string;
  status: 'Out' | 'Questionable' | 'Doubtful';
  expectedReturn: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  sport: SportType;
  trending: boolean;
  sponsored?: boolean;
}

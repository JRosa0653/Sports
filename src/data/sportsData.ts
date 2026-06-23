import { Team, Player, Match, LeagueStandings, InjuryReport, NewsArticle } from '../types';

export const TEAMS: Record<string, Team> = {
  // Football Teams
  'rmadrid': {
    id: 'rmadrid',
    name: 'Real Madrid CF',
    shortName: 'RMA',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80', // placeholder with generic sports look
    sport: 'football',
    trending: true,
    stats: {
      winRate: 78,
      possession: 58.5,
      goalsScored: 82,
      goalsConceded: 26,
      cleanSheets: 16,
      fouls: 10.4,
      yellowCards: 52,
      squadSize: 24,
      avgAge: 26.2
    }
  },
  'barcelona': {
    id: 'barcelona',
    name: 'FC Barcelona',
    shortName: 'FCB',
    logo: 'https://images.unsplash.com/photo-1540747737956-37872c7629fd?w=80&h=80&fit=crop&q=80',
    sport: 'football',
    trending: true,
    stats: {
      winRate: 72,
      possession: 62.1,
      goalsScored: 78,
      goalsConceded: 31,
      cleanSheets: 14,
      fouls: 9.8,
      yellowCards: 48,
      squadSize: 23,
      avgAge: 25.1
    }
  },
  'mancity': {
    id: 'mancity',
    name: 'Manchester City FC',
    shortName: 'MCI',
    logo: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=80&h=80&fit=crop&q=80',
    sport: 'football',
    trending: true,
    stats: {
      winRate: 80,
      possession: 65.4,
      goalsScored: 94,
      goalsConceded: 28,
      cleanSheets: 17,
      fouls: 8.9,
      yellowCards: 38,
      squadSize: 22,
      avgAge: 27.0
    }
  },
  'arsenal': {
    id: 'arsenal',
    name: 'Arsenal FC',
    shortName: 'ARS',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80',
    sport: 'football',
    trending: false,
    stats: {
      winRate: 74,
      possession: 59.2,
      goalsScored: 85,
      goalsConceded: 24,
      cleanSheets: 18,
      fouls: 9.5,
      yellowCards: 44,
      squadSize: 25,
      avgAge: 24.8
    }
  },

  // Basketball Teams
  'lakers': {
    id: 'lakers',
    name: 'Los Angeles Lakers',
    shortName: 'LAL',
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=80&h=80&fit=crop&q=80',
    sport: 'basketball',
    trending: true,
    stats: {
      winRate: 56,
      possession: 49.8,
      goalsScored: 118, // Represents PPG
      goalsConceded: 115, // Opponent PPG
      cleanSheets: 0,
      fouls: 18.2,
      yellowCards: 0,
      squadSize: 15,
      avgAge: 28.5
    }
  },
  'celtics': {
    id: 'celtics',
    name: 'Boston Celtics',
    shortName: 'BOS',
    logo: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a27?w=80&h=80&fit=crop&q=80',
    sport: 'basketball',
    trending: true,
    stats: {
      winRate: 78,
      possession: 51.5,
      goalsScored: 121,
      goalsConceded: 109,
      cleanSheets: 0,
      fouls: 16.5,
      yellowCards: 0,
      squadSize: 15,
      avgAge: 26.9
    }
  },
  'warriors': {
    id: 'warriors',
    name: 'Golden State Warriors',
    shortName: 'GSW',
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=80&h=80&fit=crop&q=80',
    sport: 'basketball',
    trending: false,
    stats: {
      winRate: 58,
      possession: 50.4,
      goalsScored: 117,
      goalsConceded: 114,
      cleanSheets: 0,
      fouls: 19.1,
      yellowCards: 0,
      squadSize: 15,
      avgAge: 29.1
    }
  },

  // American Football Teams
  'chiefs': {
    id: 'chiefs',
    name: 'Kansas City Chiefs',
    shortName: 'KC',
    logo: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=80&h=80&fit=crop&q=80',
    sport: 'american_football',
    trending: true,
    stats: {
      winRate: 81,
      possession: 54.1, // Time of possession %
      goalsScored: 28, // PPG
      goalsConceded: 18,
      cleanSheets: 0,
      fouls: 5.8, // Penalties
      yellowCards: 0,
      squadSize: 53,
      avgAge: 25.8
    }
  },
  'niners': {
    id: 'niners',
    name: 'San Francisco 49ers',
    shortName: 'SF',
    logo: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=80&h=80&fit=crop&q=80',
    sport: 'american_football',
    trending: true,
    stats: {
      winRate: 75,
      possession: 53.4,
      goalsScored: 29,
      goalsConceded: 19,
      cleanSheets: 0,
      fouls: 6.1,
      yellowCards: 0,
      squadSize: 53,
      avgAge: 26.4
    }
  },

  // Tennis (Custom single representation for comparing stats/H2H)
  'nadal': {
    id: 'nadal',
    name: 'Rafael Nadal',
    shortName: 'NAD',
    logo: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=80&h=80&fit=crop&q=80',
    sport: 'tennis',
    trending: false,
    stats: {
      winRate: 83,
      possession: 0,
      goalsScored: 0,
      goalsConceded: 0,
      cleanSheets: 0,
      fouls: 0,
      yellowCards: 0,
      squadSize: 1,
      avgAge: 38.0
    }
  },
  'djokovic': {
    id: 'djokovic',
    name: 'Novak Djokovic',
    shortName: 'DJOK',
    logo: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=80&h=80&fit=crop&q=80',
    sport: 'tennis',
    trending: true,
    stats: {
      winRate: 84,
      possession: 0,
      goalsScored: 0,
      goalsConceded: 0,
      cleanSheets: 0,
      fouls: 0,
      yellowCards: 0,
      squadSize: 1,
      avgAge: 37.0
    }
  },
  'alcaraz': {
    id: 'alcaraz',
    name: 'Carlos Alcaraz',
    shortName: 'ALC',
    logo: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=80&h=80&fit=crop&q=80',
    sport: 'tennis',
    trending: true,
    stats: {
      winRate: 79,
      possession: 0,
      goalsScored: 0,
      goalsConceded: 0,
      cleanSheets: 0,
      fouls: 0,
      yellowCards: 0,
      squadSize: 1,
      avgAge: 21.0
    }
  },

  // Baseball (MLB) Teams
  'yankees': {
    id: 'yankees',
    name: 'New York Yankees',
    shortName: 'NYY',
    logo: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=80&h=80&fit=crop&q=80',
    sport: 'baseball',
    trending: true,
    stats: {
      winRate: 61,
      possession: 50.0,
      goalsScored: 5.1, // Runs per game
      goalsConceded: 4.0,
      cleanSheets: 10, // Shutouts
      fouls: 0,
      yellowCards: 0,
      squadSize: 26,
      avgAge: 29.2
    }
  },
  'dodgers': {
    id: 'dodgers',
    name: 'Los Angeles Dodgers',
    shortName: 'LAD',
    logo: 'https://images.unsplash.com/photo-1471295263376-9978587c402b?w=80&h=80&fit=crop&q=80',
    sport: 'baseball',
    trending: true,
    stats: {
      winRate: 63,
      possession: 50.0,
      goalsScored: 5.4,
      goalsConceded: 3.8,
      cleanSheets: 12,
      fouls: 0,
      yellowCards: 0,
      squadSize: 26,
      avgAge: 28.7
    }
  },
  'redsox': {
    id: 'redsox',
    name: 'Boston Red Sox',
    shortName: 'BOS',
    logo: 'https://images.unsplash.com/photo-1544045560-6b9fcf6402cb?w=80&h=80&fit=crop&q=80',
    sport: 'baseball',
    trending: false,
    stats: {
      winRate: 52,
      possession: 50.0,
      goalsScored: 4.6,
      goalsConceded: 4.4,
      cleanSheets: 7,
      fouls: 0,
      yellowCards: 0,
      squadSize: 26,
      avgAge: 27.5
    }
  },

  // Golf Players (As Competitor "Teams" for leaderboards)
  'scheffler': {
    id: 'scheffler',
    name: 'Scottie Scheffler',
    shortName: 'SCH',
    logo: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=80&h=80&fit=crop&q=80',
    sport: 'golf',
    trending: true,
    stats: {
      winRate: 35, // Tournament win rate is very high for golf
      possession: 0,
      goalsScored: 68.2, // Scoring average
      goalsConceded: 0,
      cleanSheets: 0,
      fouls: 0,
      yellowCards: 0,
      squadSize: 1,
      avgAge: 28.0
    }
  },
  'mcilroy': {
    id: 'mcilroy',
    name: 'Rory McIlroy',
    shortName: 'RMC',
    logo: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=80&h=80&fit=crop&q=80',
    sport: 'golf',
    trending: true,
    stats: {
      winRate: 22,
      possession: 0,
      goalsScored: 69.1,
      goalsConceded: 0,
      cleanSheets: 0,
      fouls: 0,
      yellowCards: 0,
      squadSize: 1,
      avgAge: 37.0
    }
  },
  'woods': {
    id: 'woods',
    name: 'Tiger Woods',
    shortName: 'TIG',
    logo: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=80&h=80&fit=crop&q=80',
    sport: 'golf',
    trending: false,
    stats: {
      winRate: 81, // Historical win rate
      possession: 0,
      goalsScored: 71.5,
      goalsConceded: 0,
      cleanSheets: 0,
      fouls: 0,
      yellowCards: 0,
      squadSize: 1,
      avgAge: 50.0
    }
  },

  // Hockey (NHL) Teams
  'blackhawks': {
    id: 'blackhawks',
    name: 'Chicago Blackhawks',
    shortName: 'CHI',
    logo: 'https://images.unsplash.com/photo-1580748141549-71748d60196f?w=80&h=80&fit=crop&q=80',
    sport: 'hockey',
    trending: false,
    stats: {
      winRate: 41,
      possession: 48.5,
      goalsScored: 2.8, // Goals per game
      goalsConceded: 3.5,
      cleanSheets: 3, // Shutouts
      fouls: 8.2, // Penalty minutes per game
      yellowCards: 0,
      squadSize: 23,
      avgAge: 25.4
    }
  },
  'oilers': {
    id: 'oilers',
    name: 'Edmonton Oilers',
    shortName: 'EDM',
    logo: 'https://images.unsplash.com/photo-1580748141549-71748d60196f?w=80&h=80&fit=crop&q=80',
    sport: 'hockey',
    trending: true,
    stats: {
      winRate: 58,
      possession: 52.4,
      goalsScored: 3.6,
      goalsConceded: 2.9,
      cleanSheets: 5,
      fouls: 9.1,
      yellowCards: 0,
      squadSize: 23,
      avgAge: 28.1
    }
  },
  'bruins': {
    id: 'bruins',
    name: 'Boston Bruins',
    shortName: 'BOS',
    logo: 'https://images.unsplash.com/photo-1580748141549-71748d60196f?w=80&h=80&fit=crop&q=80',
    sport: 'hockey',
    trending: true,
    stats: {
      winRate: 61,
      possession: 51.2,
      goalsScored: 3.3,
      goalsConceded: 2.6,
      cleanSheets: 8,
      fouls: 10.5,
      yellowCards: 0,
      squadSize: 23,
      avgAge: 27.9
    }
  },

  // World Cup Teams (National Teams)
  'argentina': {
    id: 'argentina',
    name: 'Argentina',
    shortName: 'ARG',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80',
    sport: 'world_cup',
    trending: true,
    stats: {
      winRate: 85,
      possession: 61.2,
      goalsScored: 2.6,
      goalsConceded: 0.5,
      cleanSheets: 22,
      fouls: 11.2,
      yellowCards: 38,
      squadSize: 26,
      avgAge: 27.8
    }
  },
  'france': {
    id: 'france',
    name: 'France',
    shortName: 'FRA',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80',
    sport: 'world_cup',
    trending: true,
    stats: {
      winRate: 80,
      possession: 57.8,
      goalsScored: 2.4,
      goalsConceded: 0.8,
      cleanSheets: 18,
      fouls: 9.8,
      yellowCards: 29,
      squadSize: 26,
      avgAge: 26.5
    }
  },
  'brazil': {
    id: 'brazil',
    name: 'Brazil',
    shortName: 'BRA',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80',
    sport: 'world_cup',
    trending: true,
    stats: {
      winRate: 75,
      possession: 59.4,
      goalsScored: 2.3,
      goalsConceded: 0.7,
      cleanSheets: 20,
      fouls: 10.4,
      yellowCards: 32,
      squadSize: 26,
      avgAge: 26.9
    }
  },
  'spain': {
    id: 'spain',
    name: 'Spain',
    shortName: 'ESP',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80',
    sport: 'world_cup',
    trending: false,
    stats: {
      winRate: 72,
      possession: 68.1,
      goalsScored: 2.1,
      goalsConceded: 0.9,
      cleanSheets: 15,
      fouls: 8.5,
      yellowCards: 24,
      squadSize: 26,
      avgAge: 25.2
    }
  }
};

export const PLAYERS: Player[] = [
  // Football
  {
    id: 'jbell',
    name: 'Jude Bellingham',
    teamId: 'rmadrid',
    teamName: 'Real Madrid CF',
    position: 'Midfielder',
    sport: 'football',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=120&h=120&fit=crop&q=80',
    nationality: 'England',
    age: 21,
    trending: true,
    stats: {
      primary: { label: 'Goals', value: 23 },
      secondary: { label: 'Assists', value: 12 },
      tertiary: { label: 'Pass Accuracy %', value: 89.4 },
      custom: [
        { label: 'Chances Created', value: 58 },
        { label: 'Tackles Won', value: 42 },
        { label: 'Minutes Played', value: 3120 }
      ]
    }
  },
  {
    id: 'vinicius',
    name: 'Vinícius Júnior',
    teamId: 'rmadrid',
    teamName: 'Real Madrid CF',
    position: 'Forward',
    sport: 'football',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=120&h=120&fit=crop&q=80',
    nationality: 'Brazil',
    age: 23,
    trending: true,
    stats: {
      primary: { label: 'Goals', value: 24 },
      secondary: { label: 'Assists', value: 11 },
      tertiary: { label: 'Dribble Success %', value: 54.2 },
      custom: [
        { label: 'Shots', value: 86 },
        { label: 'Fouls Suffered', value: 92 },
        { label: 'Minutes Played', value: 2840 }
      ]
    }
  },
  {
    id: 'lewandowski',
    name: 'Robert Lewandowski',
    teamId: 'barcelona',
    teamName: 'FC Barcelona',
    position: 'Forward',
    sport: 'football',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=120&h=120&fit=crop&q=80',
    nationality: 'Poland',
    age: 35,
    trending: false,
    stats: {
      primary: { label: 'Goals', value: 25 },
      secondary: { label: 'Assists', value: 8 },
      tertiary: { label: 'Shot Conversion %', value: 21.3 },
      custom: [
        { label: 'Shots on Target', value: 48 },
        { label: 'Key Passes', value: 24 },
        { label: 'Penalties Scored', value: 6 }
      ]
    }
  },
  {
    id: 'haaland',
    name: 'Erling Haaland',
    teamId: 'mancity',
    teamName: 'Manchester City FC',
    position: 'Forward',
    sport: 'football',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=120&h=120&fit=crop&q=80',
    nationality: 'Norway',
    age: 23,
    trending: true,
    stats: {
      primary: { label: 'Goals', value: 38 },
      secondary: { label: 'Assists', value: 6 },
      tertiary: { label: 'Shot Conversion %', value: 28.5 },
      custom: [
        { label: 'Shots', value: 133 },
        { label: 'Expected Goals (xG)', value: 34.2 },
        { label: 'Minutes Played', value: 2980 }
      ]
    }
  },

  // Basketball
  {
    id: 'lebron',
    name: 'LeBron James',
    teamId: 'lakers',
    teamName: 'Los Angeles Lakers',
    position: 'Forward',
    sport: 'basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=120&h=120&fit=crop&q=80',
    nationality: 'USA',
    age: 41,
    trending: true,
    stats: {
      primary: { label: 'Points/G', value: 25.7 },
      secondary: { label: 'Assists/G', value: 8.3 },
      tertiary: { label: 'Rebounds/G', value: 7.3 },
      custom: [
        { label: 'Field Goal %', value: 54.0 },
        { label: '3-Point %', value: 41.0 },
        { label: 'Minutes/G', value: 35.2 }
      ]
    }
  },
  {
    id: 'tatum',
    name: 'Jayson Tatum',
    teamId: 'celtics',
    teamName: 'Boston Celtics',
    position: 'Forward',
    sport: 'basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=120&h=120&fit=crop&q=80',
    nationality: 'USA',
    age: 28,
    trending: true,
    stats: {
      primary: { label: 'Points/G', value: 26.9 },
      secondary: { label: 'Rebounds/G', value: 8.1 },
      tertiary: { label: 'Assists/G', value: 4.9 },
      custom: [
        { label: 'Field Goal %', value: 47.1 },
        { label: '3-Point %', value: 37.6 },
        { label: 'Free Throw %', value: 83.3 }
      ]
    }
  },
  {
    id: 'curry',
    name: 'Stephen Curry',
    teamId: 'warriors',
    teamName: 'Golden State Warriors',
    position: 'Guard',
    sport: 'basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=120&h=120&fit=crop&q=80',
    nationality: 'USA',
    age: 38,
    trending: true,
    stats: {
      primary: { label: 'Points/G', value: 26.4 },
      secondary: { label: 'Assists/G', value: 5.1 },
      tertiary: { label: '3PM/G', value: 4.8 },
      custom: [
        { label: 'Field Goal %', value: 45.0 },
        { label: '3-Point %', value: 40.8 },
        { label: 'Free Throw %', value: 92.3 }
      ]
    }
  },

  // Tennis
  {
    id: 'djok_p',
    name: 'Novak Djokovic',
    teamId: 'djokovic',
    teamName: 'Individual',
    position: 'Tennis Player',
    sport: 'tennis',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=120&h=120&fit=crop&q=80',
    nationality: 'Serbia',
    age: 37,
    trending: true,
    stats: {
      primary: { label: 'Grand Slams', value: 24 },
      secondary: { label: 'Aces / Match', value: 6.2 },
      tertiary: { label: 'First Serve %', value: 65.4 },
      custom: [
        { label: 'Win/Loss', value: 1099 },
        { label: 'Break Pt Save %', value: 66.1 },
        { label: 'Titles', value: 98 }
      ]
    }
  },
  {
    id: 'alcaraz_p',
    name: 'Carlos Alcaraz',
    teamId: 'alcaraz',
    teamName: 'Individual',
    position: 'Tennis Player',
    sport: 'tennis',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=120&h=120&fit=crop&q=80',
    nationality: 'Spain',
    age: 21,
    trending: true,
    stats: {
      primary: { label: 'Grand Slams', value: 4 },
      secondary: { label: 'Aces / Match', value: 4.1 },
      tertiary: { label: 'First Serve %', value: 64.0 },
      custom: [
        { label: 'Win/Loss', value: 184 },
        { label: 'Break Pt Save %', value: 61.2 },
        { label: 'Titles', value: 15 }
      ]
    }
  },

  // NFL
  {
    id: 'mahomes',
    name: 'Patrick Mahomes',
    teamId: 'chiefs',
    teamName: 'Kansas City Chiefs',
    position: 'Quarterback',
    sport: 'american_football',
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=120&h=120&fit=crop&q=80',
    nationality: 'USA',
    age: 30,
    trending: true,
    stats: {
      primary: { label: 'Passing Yds', value: 4183 },
      secondary: { label: 'Pass TDs', value: 27 },
      tertiary: { label: 'Rating', value: 92.6 },
      custom: [
        { label: 'Completion %', value: 67.2 },
        { label: 'Interceptions', value: 14 },
        { label: 'Rushing Yds', value: 389 }
      ]
    }
  },

  // Baseball (MLB) Players
  {
    id: 'ohtani',
    name: 'Shohei Ohtani',
    teamId: 'dodgers',
    teamName: 'Los Angeles Dodgers',
    position: 'Two-Way Player (DH/P)',
    sport: 'baseball',
    image: 'https://images.unsplash.com/photo-1471295263376-9978587c402b?w=120&h=120&fit=crop&q=80',
    nationality: 'Japan',
    age: 31,
    trending: true,
    stats: {
      primary: { label: 'Home Runs', value: 44 },
      secondary: { label: 'Batting Avg', value: 0.304 },
      tertiary: { label: 'ERA', value: 3.14 },
      custom: [
        { label: 'RBIs', value: 95 },
        { label: 'OPS', value: 1.066 },
        { label: 'Strikeouts', value: 167 }
      ]
    }
  },
  {
    id: 'judge',
    name: 'Aaron Judge',
    teamId: 'yankees',
    teamName: 'New York Yankees',
    position: 'Outfielder',
    sport: 'baseball',
    image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=120&h=120&fit=crop&q=80',
    nationality: 'USA',
    age: 34,
    trending: true,
    stats: {
      primary: { label: 'Home Runs', value: 58 },
      secondary: { label: 'Batting Avg', value: 0.287 },
      tertiary: { label: 'RBIs', value: 132 },
      custom: [
        { label: 'On-Base %', value: 0.425 },
        { label: 'Slugging %', value: 0.612 },
        { label: 'Hits', value: 154 }
      ]
    }
  },

  // Golf Players
  {
    id: 'scheffler_p',
    name: 'Scottie Scheffler',
    teamId: 'scheffler',
    teamName: 'Individual',
    position: 'Golfer',
    sport: 'golf',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=120&h=120&fit=crop&q=80',
    nationality: 'USA',
    age: 28,
    trending: true,
    stats: {
      primary: { label: 'FEDEX Points', value: 5610 },
      secondary: { label: 'Scoring Avg', value: 68.2 },
      tertiary: { label: 'PGA Tour Wins', value: 12 },
      custom: [
        { label: 'Driving Distance (yds)', value: 308 },
        { label: 'Greens in Reg %', value: 73.5 },
        { label: 'Top 10 Finishes', value: 17 }
      ]
    }
  },
  {
    id: 'mcilroy_p',
    name: 'Rory McIlroy',
    teamId: 'mcilroy',
    teamName: 'Individual',
    position: 'Golfer',
    sport: 'golf',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=120&h=120&fit=crop&q=80',
    nationality: 'Northern Ireland',
    age: 37,
    trending: true,
    stats: {
      primary: { label: 'FEDEX Points', value: 3240 },
      secondary: { label: 'Scoring Avg', value: 69.1 },
      tertiary: { label: 'PGA Tour Wins', value: 26 },
      custom: [
        { label: 'Driving Distance (yds)', value: 322 },
        { label: 'Greens in Reg %', value: 69.8 },
        { label: 'Major Championships', value: 4 }
      ]
    }
  },

  // Hockey Players
  {
    id: 'mcdavid',
    name: 'Connor McDavid',
    teamId: 'oilers',
    teamName: 'Edmonton Oilers',
    position: 'Center',
    sport: 'hockey',
    image: 'https://images.unsplash.com/photo-1580748141549-71748d60196f?w=120&h=120&fit=crop&q=80',
    nationality: 'Canada',
    age: 29,
    trending: true,
    stats: {
      primary: { label: 'Points', value: 132 },
      secondary: { label: 'Goals', value: 42 },
      tertiary: { label: 'Assists', value: 90 },
      custom: [
        { label: 'Plus/Minus', value: 35 },
        { label: 'Shots on Goal', value: 284 },
        { label: 'Game Winning Goals', value: 11 }
      ]
    }
  },

  // World Cup (Soccer Stars)
  {
    id: 'messi',
    name: 'Lionel Messi',
    teamId: 'argentina',
    teamName: 'Argentina',
    position: 'Forward',
    sport: 'world_cup',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=120&h=120&fit=crop&q=80',
    nationality: 'Argentina',
    age: 39,
    trending: true,
    stats: {
      primary: { label: 'World Cup Goals', value: 13 },
      secondary: { label: 'Assists', value: 8 },
      tertiary: { label: 'World Cups Won', value: 1 },
      custom: [
        { label: 'Matches Played', value: 26 },
        { label: 'Chances Created', value: 72 },
        { label: 'Dribble Success %', value: 64.2 }
      ]
    }
  },
  {
    id: 'mbappe',
    name: 'Kylian Mbappé',
    teamId: 'france',
    teamName: 'France',
    position: 'Forward',
    sport: 'world_cup',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=120&h=120&fit=crop&q=80',
    nationality: 'France',
    age: 27,
    trending: true,
    stats: {
      primary: { label: 'World Cup Goals', value: 12 },
      secondary: { label: 'Assists', value: 3 },
      tertiary: { label: 'World Cups Won', value: 1 },
      custom: [
        { label: 'Matches Played', value: 14 },
        { label: 'Top Speed (km/h)', value: 38.0 },
        { label: 'Shots', value: 48 }
      ]
    }
  }
];

export const MATCHES: Match[] = [
  {
    id: 'm1',
    sport: 'football',
    league: 'La Liga',
    homeTeam: TEAMS.rmadrid,
    awayTeam: TEAMSBarcaFallback() || TEAMS.barcelona, // Will map below
    homeScore: 2,
    awayScore: 1,
    status: 'live',
    time: '74\'',
    date: '2026-06-23',
    venue: 'Santiago Bernabéu, Madrid',
    referee: 'César Soto Grado',
    timeline: [
      { id: 't1', time: '12\'', type: 'goal', title: 'Goal!', detail: 'Vinícius Júnior (Assist: Jude Bellingham)', team: 'home' },
      { id: 't2', time: '34\'', type: 'card', title: 'Yellow Card', detail: 'Frenkie de Jong', team: 'away' },
      { id: 't3', time: '43\'', type: 'card', title: 'Yellow Card', detail: 'Aurélien Tchouaméni', team: 'home' },
      { id: 't4', time: '55\'', type: 'goal', title: 'Goal!', detail: 'Robert Lewandowski (Penalty)', team: 'away' },
      { id: 't5', time: '68\'', type: 'goal', title: 'Goal!', detail: 'Jude Bellingham (Assist: Rodrygo)', team: 'home' },
      { id: 't6', time: '71\'', type: 'sub', title: 'Substitution', detail: 'Luka Modrić in for Toni Kroos', team: 'home' }
    ],
    stats: {
      possession: { home: 48, away: 52 },
      shotsOnTarget: { home: 6, away: 4 },
      totalShots: { home: 12, away: 9 },
      fouls: { home: 11, away: 14 },
      yellowCards: { home: 1, away: 2 },
      redCards: { home: 0, away: 0 },
      corners: { home: 5, away: 4 },
      offsides: { home: 2, away: 1 }
    },
    commentary: [
      { time: '74\'', text: 'Real Madrid is keeping possession in the midfield, looking to slow down the tempo. Luka Modrić is orchestrating.' },
      { time: '71\'', text: 'Substitution for Real Madrid. A standing ovation for Kroos as Modrić takes his place.' },
      { time: '68\'', text: 'GOOOOOAL! Jude Bellingham makes a majestic run into the box and slides it past the keeper. Bernabéu erupts!', highlight: true },
      { time: '62\'', text: 'Brilliant tackle by Antonio Rüdiger to deny Lewandowski a second shooting chance.' },
      { time: '55\'', text: 'GOAL! Robert Lewandowski drills the penalty low to the right corner. Ter Stegen leaps but can\'t reach it.', highlight: true }
    ],
    h2h: [
      { id: 'h1', date: '2025-10-28', homeTeamName: 'FC Barcelona', awayTeamName: 'Real Madrid CF', homeScore: 1, awayScore: 2, winnerId: 'rmadrid' },
      { id: 'h2', date: '2025-04-21', homeTeamName: 'Real Madrid CF', awayTeamName: 'FC Barcelona', homeScore: 3, awayScore: 2, winnerId: 'rmadrid' },
      { id: 'h3', date: '2024-01-14', homeTeamName: 'Real Madrid CF', awayTeamName: 'FC Barcelona', homeScore: 4, awayScore: 1, winnerId: 'rmadrid' }
    ],
    injuredPlayers: [
      { id: 'i1', playerName: 'Gavi', playerImage: '', teamName: 'FC Barcelona', teamLogo: '', sport: 'football', injury: 'ACL Tear', status: 'Out', expectedReturn: 'September 2026' },
      { id: 'i2', playerName: 'David Alaba', playerImage: '', teamName: 'Real Madrid CF', teamLogo: '', sport: 'football', injury: 'Knee injury', status: 'Out', expectedReturn: 'July 2026' }
    ]
  },
  {
    id: 'm2',
    sport: 'basketball',
    league: 'NBA Finals',
    homeTeam: TEAMS.celtics,
    awayTeam: TEAMS.lakers,
    homeScore: 104,
    awayScore: 98,
    status: 'live',
    time: 'Q4 02:44',
    date: '2026-06-23',
    venue: 'TD Garden, Boston',
    timeline: [
      { id: 't20', time: 'Q1', type: 'period', title: 'End of Q1', detail: 'Celtics 28 - Lakers 24', team: 'none' },
      { id: 't21', time: 'Q2', type: 'period', title: 'Halftime', detail: 'Celtics 54 - Lakers 52', team: 'none' },
      { id: 't22', time: 'Q3', type: 'period', title: 'End of Q3', detail: 'Celtics 81 - Lakers 80', team: 'none' },
      { id: 't23', time: '04:15', type: 'goal', title: '3-Pointer!', detail: 'LeBron James (Lakers)', team: 'away' },
      { id: 't24', time: '03:10', type: 'goal', title: 'Dunk!', detail: 'Jayson Tatum (Celtics)', team: 'home' }
    ],
    stats: {
      possession: { home: 51, away: 49 },
      shotsOnTarget: { home: 44, away: 41 }, // Field goals made
      totalShots: { home: 88, away: 85 }, // Field goals attempted
      fouls: { home: 15, away: 18 },
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      offsides: { home: 0, away: 0 }
    },
    commentary: [
      { time: '02:44', text: 'Tatum drives hard left, draws the double-team, and passes out to Holiday. Shot clock at 4.' },
      { time: '03:10', text: 'WHAT A DUNK! Tatum slices through the paint and slams it home over Anthony Davis!', highlight: true },
      { time: '03:55', text: 'LeBron hits a signature stepback three! The Lakers are keeping this within two possessions.' }
    ],
    h2h: [
      { id: 'hb1', date: '2026-01-25', homeTeamName: 'Los Angeles Lakers', awayTeamName: 'Boston Celtics', homeScore: 112, awayScore: 115, winnerId: 'celtics' },
      { id: 'hb2', date: '2025-12-25', homeTeamName: 'Boston Celtics', awayTeamName: 'Los Angeles Lakers', homeScore: 126, awayScore: 115, winnerId: 'celtics' }
    ],
    injuredPlayers: []
  },
  {
    id: 'm3',
    sport: 'tennis',
    league: 'Wimbledon Finals',
    homeTeam: TEAMS.djokovic,
    awayTeam: TEAMS.alcaraz,
    homeScore: 2, // Sets
    awayScore: 2, // Sets
    status: 'live',
    time: 'Set 5 - 4-3',
    date: '2026-06-23',
    venue: 'Centre Court, London',
    timeline: [
      { id: 'tt1', time: 'Set 1', type: 'period', title: 'Set 1 won by Alcaraz', detail: 'Djokovic 4 - Alcaraz 6', team: 'away' },
      { id: 'tt2', time: 'Set 2', type: 'period', title: 'Set 2 won by Djokovic', detail: 'Djokovic 6 - Alcaraz 3', team: 'home' },
      { id: 'tt3', time: 'Set 3', type: 'period', title: 'Set 3 won by Djokovic', detail: 'Djokovic 7 - Alcaraz 5', team: 'home' },
      { id: 'tt4', time: 'Set 4', type: 'period', title: 'Set 4 won by Alcaraz', detail: 'Djokovic 2 - Alcaraz 6', team: 'away' }
    ],
    stats: {
      possession: { home: 0, away: 0 },
      shotsOnTarget: { home: 44, away: 48 }, // Aces & winners
      totalShots: { home: 18, away: 22 }, // Unforced errors
      fouls: { home: 3, away: 4 }, // Double faults
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      offsides: { home: 0, away: 0 }
    },
    commentary: [
      { time: '4-3', text: 'Deuce! Novak saved two break points with a sensational drop shot and an ace.' },
      { time: '15-40', text: 'Break point Alcaraz! Incredible forehand cross-court leaves Djokovic stranded.' }
    ],
    h2h: [
      { id: 'ht1', date: '2025-07-14', homeTeamName: 'Carlos Alcaraz', awayTeamName: 'Novak Djokovic', homeScore: 3, awayScore: 2, winnerId: 'alcaraz' },
      { id: 'ht2', date: '2024-07-16', homeTeamName: 'Carlos Alcaraz', awayTeamName: 'Novak Djokovic', homeScore: 3, awayScore: 0, winnerId: 'alcaraz' }
    ],
    injuredPlayers: []
  },
  {
    id: 'm4',
    sport: 'american_football',
    league: 'NFL Regular Season',
    homeTeam: TEAMS.chiefs,
    awayTeam: TEAMS.niners,
    homeScore: 24,
    awayScore: 21,
    status: 'upcoming',
    time: '20:30',
    date: '2026-06-23',
    venue: 'Arrowhead Stadium, Kansas City',
    timeline: [],
    stats: {
      possession: { home: 50, away: 50 },
      shotsOnTarget: { home: 0, away: 0 },
      totalShots: { home: 0, away: 0 },
      fouls: { home: 0, away: 0 },
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      offsides: { home: 0, away: 0 }
    },
    commentary: [
      { time: 'Pre', text: 'Weather is clear. Stadium lights are gleaming. Match kicks off in 5 hours.' }
    ],
    h2h: [
      { id: 'hn1', date: '2024-02-11', homeTeamName: 'Kansas City Chiefs', awayTeamName: 'San Francisco 49ers', homeScore: 25, awayScore: 22, winnerId: 'chiefs' }
    ],
    injuredPlayers: [
      { id: 'i20', playerName: 'Rashee Rice', playerImage: '', teamName: 'Kansas City Chiefs', teamLogo: '', sport: 'american_football', injury: 'LCL sprain', status: 'Doubtful', expectedReturn: 'July 2026' }
    ]
  },
  {
    id: 'm5',
    sport: 'football',
    league: 'Premier League',
    homeTeam: TEAMS.mancity,
    awayTeam: TEAMS.arsenal,
    homeScore: 0,
    awayScore: 0,
    status: 'upcoming',
    time: 'Tomorrow, 14:00',
    date: '2026-06-24',
    venue: 'Etihad Stadium, Manchester',
    timeline: [],
    stats: {
      possession: { home: 0, away: 0 },
      shotsOnTarget: { home: 0, away: 0 },
      totalShots: { home: 0, away: 0 },
      fouls: { home: 0, away: 0 },
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      offsides: { home: 0, away: 0 }
    },
    commentary: [
      { time: 'Pre', text: 'Pep Guardiola vs. Mikel Arteta once again in a critical clash for the title race.' }
    ],
    h2h: [
      { id: 'hm1', date: '2025-09-22', homeTeamName: 'Manchester City FC', awayTeamName: 'Arsenal FC', homeScore: 2, awayScore: 2, winnerId: 'draw' },
      { id: 'hm2', date: '2025-03-31', homeTeamName: 'Manchester City FC', awayTeamName: 'Arsenal FC', homeScore: 0, awayScore: 0, winnerId: 'draw' }
    ],
    injuredPlayers: []
  },
  {
    id: 'm6',
    sport: 'baseball',
    league: 'MLB Regular Season',
    homeTeam: TEAMS.dodgers,
    awayTeam: TEAMS.yankees,
    homeScore: 5,
    awayScore: 3,
    status: 'live',
    time: 'Bot 7th',
    date: '2026-06-23',
    venue: 'Dodger Stadium, Los Angeles',
    referee: 'Dan Iassogna',
    timeline: [
      { id: 'tb1', time: '1st', type: 'goal', title: 'Home Run!', detail: 'Shohei Ohtani solo home run to deep center!', team: 'home' },
      { id: 'tb2', time: '3rd', type: 'goal', title: 'RBI Single', detail: 'Aaron Judge drives in Juan Soto', team: 'away' },
      { id: 'tb3', time: '5th', type: 'goal', title: '2-Run Double', detail: 'Mookie Betts doubles to left, scoring 2 runs', team: 'home' },
      { id: 'tb4', time: '6th', type: 'goal', title: 'Home Run!', detail: 'Aaron Judge 2-run blast to left field!', team: 'away' },
      { id: 'tb5', time: '7th', type: 'goal', title: 'RBI Single', detail: 'Freddie Freeman singles, Ohtani scores', team: 'home' }
    ],
    stats: {
      possession: { home: 50, away: 50 },
      shotsOnTarget: { home: 9, away: 6 }, // Hits
      totalShots: { home: 32, away: 34 }, // At-Bats
      fouls: { home: 1, away: 2 }, // Errors
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      offsides: { home: 0, away: 0 }
    },
    commentary: [
      { time: 'Bot 7th', text: 'Yankees call in Clay Holmes from the bullpen. Runner on second, one out.' },
      { time: 'Mid 7th', text: 'Dodgers escape the inning with a spectacular double play started by Miguel Rojas.' },
      { time: '6th Inn', text: 'BOOM! Aaron Judge unleashes a monster home run over the left field pavilion. Game tied!', highlight: true }
    ],
    h2h: [
      { id: 'h_mlb1', date: '2025-06-08', homeTeamName: 'New York Yankees', awayTeamName: 'Los Angeles Dodgers', homeScore: 3, awayScore: 11, winnerId: 'dodgers' }
    ],
    injuredPlayers: []
  },
  {
    id: 'm7',
    sport: 'golf',
    league: 'PGA Tour - The Masters',
    homeTeam: TEAMS.scheffler,
    awayTeam: TEAMS.mcilroy,
    homeScore: 14, // Represents strokes under par (-14)
    awayScore: 11, // Represents strokes under par (-11)
    status: 'live',
    time: 'Round 4 - Hole 16',
    date: '2026-06-23',
    venue: 'Augusta National Golf Club, Augusta',
    referee: 'Fred Ridley',
    timeline: [
      { id: 'tg1', time: 'Hole 2', type: 'goal', title: 'Birdie', detail: 'Scottie Scheffler birdies to move to -11', team: 'home' },
      { id: 'tg2', time: 'Hole 5', type: 'goal', title: 'Birdie', detail: 'Rory McIlroy birdies to move to -10', team: 'away' },
      { id: 'tg3', time: 'Hole 11', type: 'goal', title: 'Birdie', detail: 'Scottie Scheffler back-to-back birdies, moves to -13', team: 'home' },
      { id: 'tg4', time: 'Hole 14', type: 'goal', title: 'Eagle!', detail: 'Rory McIlroy chips in for Eagle on Hole 14!', team: 'away' },
      { id: 'tg5', time: 'Hole 15', type: 'goal', title: 'Birdie', detail: 'Scottie Scheffler sinks a 15-foot putt for birdie', team: 'home' }
    ],
    stats: {
      possession: { home: 0, away: 0 },
      shotsOnTarget: { home: 12, away: 10 }, // Greens in Regulation
      totalShots: { home: 27, away: 29 }, // Total Putts
      fouls: { home: 0, away: 1 }, // Sand Saves missed
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      offsides: { home: 0, away: 0 }
    },
    commentary: [
      { time: 'Hole 16', text: 'Scheffler hits a perfect tee shot on the par-3 16th, stopping just 8 feet from the pin.' },
      { time: 'Hole 15', text: 'Rory McIlroy misses his birdie attempt on 15, settled for par. Remains three strokes behind Scheffler.' },
      { time: 'Hole 14', text: 'UNBELIEVABLE! Rory McIlroy chips it in from 30 yards out for an Eagle! Augusta is roaring!', highlight: true }
    ],
    h2h: [
      { id: 'h_golf1', date: '2025-04-13', homeTeamName: 'Scottie Scheffler', awayTeamName: 'Rory McIlroy', homeScore: 277, awayScore: 281, winnerId: 'scheffler' }
    ],
    injuredPlayers: []
  },
  {
    id: 'm8',
    sport: 'hockey',
    league: 'NHL Stanley Cup Finals',
    homeTeam: TEAMS.oilers,
    awayTeam: TEAMS.bruins,
    homeScore: 3,
    awayScore: 2,
    status: 'live',
    time: '3rd Period 08:12',
    date: '2026-06-23',
    venue: 'Rogers Place, Edmonton',
    referee: 'Kelly Sutherland',
    timeline: [
      { id: 'th1', time: '1st 12:40', type: 'goal', title: 'Goal!', detail: 'Connor McDavid (Assist: Leon Draisaitl)', team: 'home' },
      { id: 'th2', time: '2nd 05:15', type: 'goal', title: 'Goal!', detail: 'Brad Marchand power-play goal', team: 'away' },
      { id: 'th3', time: '2nd 18:32', type: 'goal', title: 'Goal!', detail: 'Connor McDavid unassisted shorthanded goal!', team: 'home' },
      { id: 'th4', time: '3rd 02:11', type: 'goal', title: 'Goal!', detail: 'David Pastrnak blasts a one-timer in', team: 'away' },
      { id: 'th5', time: '3rd 06:44', type: 'goal', title: 'Goal!', detail: 'Zach Hyman scores on a rebound', team: 'home' }
    ],
    stats: {
      possession: { home: 54, away: 46 },
      shotsOnTarget: { home: 34, away: 28 }, // Shots on goal
      totalShots: { home: 62, away: 54 }, // Faceoffs won %
      fouls: { home: 8, away: 12 }, // Penalty minutes
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      offsides: { home: 0, away: 0 }
    },
    commentary: [
      { time: '08:12', text: 'Connor McDavid is driving play, keeping the puck along the boards to wear down Boston.' },
      { time: '06:44', text: 'GOAL! Hyman jams it home in the crease! Edmonton takes the lead back. DeBrusk with a beautiful setup.', highlight: true },
      { time: '02:11', text: 'GOAL! Pastrnak rocket from the left circle beats Skinner on the short side. We have a tie game!' }
    ],
    h2h: [
      { id: 'h_nhl1', date: '2026-03-05', homeTeamName: 'Boston Bruins', awayTeamName: 'Edmonton Oilers', homeScore: 1, awayScore: 4, winnerId: 'oilers' }
    ],
    injuredPlayers: []
  },
  {
    id: 'm9',
    sport: 'world_cup',
    league: 'FIFA World Cup Final',
    homeTeam: TEAMS.argentina,
    awayTeam: TEAMS.france,
    homeScore: 3,
    awayScore: 3,
    status: 'live',
    time: '114\'',
    date: '2026-06-23',
    venue: 'Lusail Stadium, Doha',
    referee: 'Szymon Marciniak',
    timeline: [
      { id: 'twc1', time: '23\'', type: 'goal', title: 'Goal!', detail: 'Lionel Messi (Penalty)', team: 'home' },
      { id: 'twc2', time: '36\'', type: 'goal', title: 'Goal!', detail: 'Angel Di Maria scores a brilliant team counter-attack!', team: 'home' },
      { id: 'twc3', time: '80\'', type: 'goal', title: 'Goal!', detail: 'Kylian Mbappé (Penalty)', team: 'away' },
      { id: 'twc4', time: '81\'', type: 'goal', title: 'Goal!', detail: 'Kylian Mbappé sensational volley!', team: 'away' },
      { id: 'twc5', time: '108\'', type: 'goal', title: 'Goal!', detail: 'Lionel Messi scrambles it over the line!', team: 'home' },
      { id: 'twc6', time: '113\'', type: 'goal', title: 'Goal!', detail: 'Kylian Mbappé secures hat-trick (Penalty)', team: 'away' }
    ],
    stats: {
      possession: { home: 54, away: 46 },
      shotsOnTarget: { home: 10, away: 6 },
      totalShots: { home: 21, away: 10 },
      fouls: { home: 26, away: 19 },
      yellowCards: { home: 4, away: 3 },
      redCards: { home: 0, away: 0 },
      corners: { home: 6, away: 5 },
      offsides: { home: 4, away: 2 }
    },
    commentary: [
      { time: '114\'', text: 'This is the greatest match in the history of sports. 3-3 in extra time, both superstars have answered the call.' },
      { time: '113\'', text: 'GOAL! MBAPPÉ SECURES HIS HAT-TRICK! Drills the penalty into the left corner. Unbelievable scenes!', highlight: true },
      { time: '108\'', text: 'GOAL!!! Lionel Messi! Lautaro Martinez shot is saved but Messi is there to tap it in. Ref confirms it crossed the line!', highlight: true }
    ],
    h2h: [
      { id: 'h_wc1', date: '2022-12-18', homeTeamName: 'Argentina', awayTeamName: 'France', homeScore: 3, awayScore: 3, winnerId: 'argentina' }
    ],
    injuredPlayers: []
  },
  {
    id: 'm10',
    sport: 'world_cup',
    league: 'FIFA World Cup Semifinal',
    homeTeam: TEAMS.brazil,
    awayTeam: TEAMS.spain,
    homeScore: 0,
    awayScore: 0,
    status: 'upcoming',
    time: 'Friday, 20:00',
    date: '2026-06-26',
    venue: 'Al Bayt Stadium, Al Khor',
    timeline: [],
    stats: {
      possession: { home: 0, away: 0 },
      shotsOnTarget: { home: 0, away: 0 },
      totalShots: { home: 0, away: 0 },
      fouls: { home: 0, away: 0 },
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      offsides: { home: 0, away: 0 }
    },
    commentary: [
      { time: 'Pre', text: 'Brazil vs. Spain in a classic encounter. Winner advances to the grand final.' }
    ],
    h2h: [
      { id: 'h_wc2', date: '2013-06-30', homeTeamName: 'Brazil', awayTeamName: 'Spain', homeScore: 3, awayScore: 0, winnerId: 'brazil' }
    ],
    injuredPlayers: []
  }
];

function TEAMSBarcaFallback() {
  return TEAMS.barcelona;
}

export const STANDINGS: LeagueStandings[] = [
  {
    leagueName: 'La Liga Standings',
    sport: 'football',
    standings: [
      { position: 1, teamId: 'rmadrid', teamName: 'Real Madrid CF', teamLogo: TEAMS.rmadrid.logo, played: 38, won: 29, drawn: 7, lost: 2, goalsFor: 87, goalsAgainst: 26, points: 94, form: ['W', 'W', 'W'] },
      { position: 2, teamId: 'barcelona', teamName: 'FC Barcelona', teamLogo: TEAMS.barcelona.logo, played: 38, won: 26, drawn: 7, lost: 5, goalsFor: 79, goalsAgainst: 44, points: 85, form: ['W', 'L', 'W'] }
    ]
  },
  {
    leagueName: 'Premier League Standings',
    sport: 'football',
    standings: [
      { position: 1, teamId: 'mancity', teamName: 'Manchester City FC', teamLogo: TEAMS.mancity.logo, played: 38, won: 28, drawn: 7, lost: 3, goalsFor: 96, goalsAgainst: 34, points: 91, form: ['W', 'W', 'W'] },
      { position: 2, teamId: 'arsenal', teamName: 'Arsenal FC', teamLogo: TEAMS.arsenal.logo, played: 38, won: 28, drawn: 5, lost: 5, goalsFor: 91, goalsAgainst: 29, points: 89, form: ['W', 'W', 'L'] }
    ]
  },
  {
    leagueName: 'NBA Eastern Conference',
    sport: 'basketball',
    standings: [
      { position: 1, teamId: 'celtics', teamName: 'Boston Celtics', teamLogo: TEAMS.celtics.logo, played: 82, won: 64, drawn: 0, lost: 18, goalsFor: 9880, goalsAgainst: 8920, points: 128, form: ['W', 'W', 'W'] }
    ]
  },
  {
     leagueName: 'NBA Western Conference',
     sport: 'basketball',
     standings: [
      { position: 1, teamId: 'lakers', teamName: 'Los Angeles Lakers', teamLogo: TEAMS.lakers.logo, played: 82, won: 47, drawn: 0, lost: 35, goalsFor: 9620, goalsAgainst: 9510, points: 94, form: ['L', 'W', 'W'] },
      { position: 2, teamId: 'warriors', teamName: 'Golden State Warriors', teamLogo: TEAMS.warriors.logo, played: 82, won: 46, drawn: 0, lost: 36, goalsFor: 9580, goalsAgainst: 9490, points: 92, form: ['W', 'L', 'L'] }
    ]
  },
  {
    leagueName: 'MLB standings (AL East)',
    sport: 'baseball',
    standings: [
      { position: 1, teamId: 'yankees', teamName: 'New York Yankees', teamLogo: TEAMS.yankees.logo, played: 72, won: 44, drawn: 0, lost: 28, goalsFor: 367, goalsAgainst: 288, points: 44, form: ['W', 'W', 'W'] },
      { position: 2, teamId: 'redsox', teamName: 'Boston Red Sox', teamLogo: TEAMS.redsox.logo, played: 72, won: 37, drawn: 0, lost: 35, goalsFor: 331, goalsAgainst: 316, points: 37, form: ['L', 'W', 'L'] }
    ]
  },
  {
    leagueName: 'MLB standings (NL West)',
    sport: 'baseball',
    standings: [
      { position: 1, teamId: 'dodgers', teamName: 'Los Angeles Dodgers', teamLogo: TEAMS.dodgers.logo, played: 73, won: 46, drawn: 0, lost: 27, goalsFor: 394, goalsAgainst: 277, points: 46, form: ['W', 'L', 'W'] }
    ]
  },
  {
    leagueName: 'PGA Tour Leaderboard',
    sport: 'golf',
    standings: [
      { position: 1, teamId: 'scheffler', teamName: 'Scottie Scheffler', teamLogo: TEAMS.scheffler.logo, played: 4, won: 3, drawn: 0, lost: 1, goalsFor: 274, goalsAgainst: 0, points: 14, form: ['W', 'W', 'W'] }, // goalsFor is total strokes, points is under par
      { position: 2, teamId: 'mcilroy', teamName: 'Rory McIlroy', teamLogo: TEAMS.mcilroy.logo, played: 4, won: 1, drawn: 0, lost: 3, goalsFor: 277, goalsAgainst: 0, points: 11, form: ['W', 'L', 'W'] },
      { position: 3, teamId: 'woods', teamName: 'Tiger Woods', teamLogo: TEAMS.woods.logo, played: 4, won: 0, drawn: 0, lost: 4, goalsFor: 291, goalsAgainst: 0, points: -3, form: ['L', 'L', 'L'] } // points -3 represents +3 over par
    ]
  },
  {
    leagueName: 'NHL Standings (Pacific)',
    sport: 'hockey',
    standings: [
      { position: 1, teamId: 'oilers', teamName: 'Edmonton Oilers', teamLogo: TEAMS.oilers.logo, played: 82, won: 48, drawn: 0, lost: 34, goalsFor: 295, goalsAgainst: 237, points: 96, form: ['W', 'W', 'L'] }
    ]
  },
  {
    leagueName: 'NHL Standings (Atlantic)',
    sport: 'hockey',
    standings: [
      { position: 1, teamId: 'bruins', teamName: 'Boston Bruins', teamLogo: TEAMS.bruins.logo, played: 82, won: 50, drawn: 0, lost: 32, goalsFor: 270, goalsAgainst: 213, points: 100, form: ['W', 'L', 'W'] },
      { position: 2, teamId: 'blackhawks', teamName: 'Chicago Blackhawks', teamLogo: TEAMS.blackhawks.logo, played: 82, won: 33, drawn: 0, lost: 49, goalsFor: 229, goalsAgainst: 287, points: 66, form: ['L', 'L', 'W'] }
    ]
  },
  {
    leagueName: 'FIFA World Cup - Group A',
    sport: 'world_cup',
    standings: [
      { position: 1, teamId: 'argentina', teamName: 'Argentina', teamLogo: TEAMS.argentina.logo, played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 1, points: 9, form: ['W', 'W', 'W'] },
      { position: 2, teamId: 'france', teamName: 'France', teamLogo: TEAMS.france.logo, played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 7, goalsAgainst: 3, points: 6, form: ['W', 'W', 'L'] },
      { position: 3, teamId: 'brazil', teamName: 'Brazil', teamLogo: TEAMS.brazil.logo, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, points: 4, form: ['L', 'W', 'D'] },
      { position: 4, teamId: 'spain', teamName: 'Spain', teamLogo: TEAMS.spain.logo, played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 6, points: 1, form: ['L', 'L', 'D'] }
    ]
  }
];

export const INJURY_REPORTS: InjuryReport[] = [
  { id: 'i1', playerName: 'Gavi', playerImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80', teamName: 'FC Barcelona', teamLogo: TEAMS.barcelona.logo, sport: 'football', injury: 'ACL Knee Tear', status: 'Out', expectedReturn: 'September 2026' },
  { id: 'i2', playerName: 'David Alaba', playerImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop&q=80', teamName: 'Real Madrid CF', teamLogo: TEAMS.rmadrid.logo, sport: 'football', injury: 'Ligament Rupture', status: 'Out', expectedReturn: 'July 2026' },
  { id: 'i20', playerName: 'Rashee Rice', playerImage: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=80&h=80&fit=crop&q=80', teamName: 'Kansas City Chiefs', teamLogo: TEAMS.chiefs.logo, sport: 'american_football', injury: 'LCL Knee Sprain', status: 'Doubtful', expectedReturn: 'July 2026' },
  { id: 'i21', playerName: 'Kristaps Porzingis', playerImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=80&h=80&fit=crop&q=80', teamName: 'Boston Celtics', teamLogo: TEAMS.celtics.logo, sport: 'basketball', injury: 'Torn Retinaculum', status: 'Questionable', expectedReturn: 'Day-to-day' }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'n1',
    title: 'The Madrid Renaissance: How Jude Bellingham Redefined the Midfield Role',
    summary: 'An in-depth tactical analysis on Bellinghams majestic first season in Spain, his run patterns, and how Ancelotti unlocked his offensive prowess.',
    content: 'Jude Bellingham has taken Spain by storm, operating as an offensive catalyst in Carlo Ancelottis diamond midfield structure. By positioning Bellingham at the apex, Madrid created deep runs that center backs struggled to track. Our stats show he ranks in the 99th percentile for box entries by a midfielder...',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=300&fit=crop&q=80',
    category: 'Analysis',
    date: 'June 23, 2026',
    author: 'Michael Cox',
    sport: 'football',
    trending: true
  },
  {
    id: 'n_mlb',
    title: 'Historic Pursuit: Shohei Ohtani and Aaron Judge Rewrite Baseball History',
    summary: 'A statistical comparison of the two modern giants, evaluating Ohtanis double-threat value against Judges home run rate.',
    content: 'The baseball world is witnessing a golden age of power hitting. Shohei Ohtanis transition to the Dodgers has unleashed unprecedented batting stats while rehabbing his arm, while Aaron Judge continues to threaten the single-season home run record at Yankee Stadium. We look at their hard-hit rates and launch angles...',
    image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=600&h=300&fit=crop&q=80',
    category: 'Analysis',
    date: 'June 23, 2026',
    author: 'Jeff Passan',
    sport: 'baseball',
    trending: true
  },
  {
    id: 'n_golf',
    title: 'Augusta Roars: Scottie Scheffler Maintains Masterful Grip on the Green',
    summary: 'Scheffler leads Rory McIlroy by three strokes entering the final holes, showcasing historically stable driving stats.',
    content: 'Scottie Scheffler is putting on a clinic at Augusta National. Known for his unique footwork and flawless ball-striking, Scheffler has avoided the fairway bunkers that have plagued other competitors. Rory McIlroy is mounting a fierce charge with an eagle on the 14th, setting up a thrilling finale...',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=300&fit=crop&q=80',
    category: 'Live Updates',
    date: 'June 23, 2026',
    author: 'Dan Rapaport',
    sport: 'golf',
    trending: true
  },
  {
    id: 'n_nhl',
    title: 'Stanley Cup Drama: Connor McDavids Edmonton Oilers Push Bruins to the Limit',
    summary: 'With 132 points this season, McDavid is cementing his legacy as a hockey immortal. Game 5 preview inside.',
    content: 'Edmonton is buzzing as Connor McDavid scores two crucial goals to keep the Bruins on their heels in the Stanley Cup Finals. His skating speed through the neutral zone has completely broken down Bostons defensive locks. If Edmonton wins, they will break a decade-long Canadian championship drought...',
    image: 'https://images.unsplash.com/photo-1580748141549-71748d60196f?w=600&h=300&fit=crop&q=80',
    category: 'Preview',
    date: 'June 23, 2026',
    author: 'Elliotte Friedman',
    sport: 'hockey',
    trending: false
  },
  {
    id: 'n_wc',
    title: 'Doha Redux: Argentina and France Set for Another Immortal World Cup Battle',
    summary: 'A direct rematch of the historic 2022 final is playing out at the World Cup, with Messi and Mbappé trading blows.',
    content: 'Football fans could not have dreamed of a better final. Lionel Messi and Kylian Mbappé are both at the absolute peak of their influence, exchanging penalties and sublime volleys in an electric extra-time duel. Tactically, Argentinas midfield has crowded Mbappés favorite channels, but his explosive speed remains uncontainable...',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=300&fit=crop&q=80',
    category: 'Matchday',
    date: 'June 23, 2026',
    author: 'James Horncastle',
    sport: 'world_cup',
    trending: true
  },
  {
    id: 'n2',
    title: 'Wimbledon Set for Epic Set 5 Finale Between Djokovic and Alcaraz',
    summary: 'All eyes are on Centre Court as the master defending champion Novak Djokovic takes on the raw athletic phenom Carlos Alcaraz.',
    content: 'The Wimbledon finals have delivered yet another timeless classic. Tied at two sets apiece, Djokovic has shown the iron resilience he is famous for, while Alcaraz counters with spectacular cross-court winners. Sports scientists analyze how the heat is playing a major factor in fifth-set stamina...',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&h=300&fit=crop&q=80',
    category: 'Live Commentary',
    date: 'June 23, 2026',
    author: 'Catherine Whitaker',
    sport: 'tennis',
    trending: true
  },
  {
    id: 'n3',
    title: 'Championship Credentials: Can the Celtics Complete the Historic Sweep?',
    summary: 'The Boston Celtics stand on the verge of greatness. We dissect Tatum and Browns side-by-side performance.',
    content: 'With a 104-98 lead in the closing minutes of Game 5, TD Garden is on fire. Boston has dominated the boards, capturing 54% of offensive rebounds. We analyze how Mazulla optimized their transition game to stifle the Lakers run.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=300&fit=crop&q=80',
    category: 'Opinion',
    date: 'June 23, 2026',
    author: 'Zach Lowe',
    sport: 'basketball',
    trending: false
  },
  {
    id: 'n4',
    title: 'Sponsored: Get the Ultimate Pro Gear from Stadium Athletics',
    summary: 'Gear up for the season with official pro team jerseys, boots, and customized sports apparel at 20% off.',
    content: 'This sponsored post presents high-performance sports equipment designed to optimize speed and breathability on any court. Get free shipping with code PUNTOVIVO.',
    image: 'https://images.unsplash.com/photo-1540747737956-37872c7629fd?w=600&h=300&fit=crop&q=80',
    category: 'Gear Guide',
    date: 'June 23, 2026',
    author: 'Stadium Athletics',
    sport: 'football',
    trending: false,
    sponsored: true
  }
];

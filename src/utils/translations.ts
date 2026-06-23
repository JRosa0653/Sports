export type Language = 'en' | 'es' | 'pt' | 'fr';

export interface TranslationDictionary {
  allSports: string;
  football: string;
  basketball: string;
  tennis: string;
  american_football: string;
  baseball: string;
  golf: string;
  hockey: string;
  world_cup: string;
  searchPlaceholder: string;
  syncIn: string;
  syncButtonTooltip: string;
  goPro: string;
  premiumPro: string;
  liveMatchAlerts: string;
  clearAll: string;
  noAlerts: string;
  simulateAlertNotice: string;
  teamComparisonTitle: string;
  teamComparisonDesc: string;
  playerComparisonTitle: string;
  playerComparisonDesc: string;
  squadA: string;
  squadB: string;
  playerA: string;
  playerB: string;
  winRate: string;
  avgGoalOutput: string;
  ballPossession: string;
  avgFoulsConceded: string;
  yellowCardsAccumulation: string;
  optaTelemetrySource: string;
  seasonCatalogSource: string;
  trendingPlayersShowcase: string;
  trendingTeamsFormMap: string;
  leagueStandingsTitle: string;
  leagueStandingsDesc: string;
  formIndicatorsNotice: string;
  scoresParNotice: string;
  clubCompetitorHeader: string;
  formHeader: string;
  roundsHeader: string;
  top10Header: string;
  strokesHeader: string;
  ptsHeader: string;
  noStandings: string;
  predictionsEngine: string;
  predictionsSubtitle: string;
  upcomingPredictionHint: string;
  analyzeMatchBtn: string;
  analyzingBtn: string;
  predictWinner: string;
  confidence: string;
  tacticalFactor: string;
  keyMetric: string;
  deepAnalysis: string;
  liveSim: string;
  simulateGoalBtn: string;
  simulateCardBtn: string;
  injuryReportTitle: string;
  injuryReportDesc: string;
  expectedReturn: string;
  statusOut: string;
  statusQuestionable: string;
  statusDoubtful: string;
  latestNewsTitle: string;
  latestNewsDesc: string;
  readMoreBtn: string;
  sponsored: string;
  byAuthor: string;
  matchesTitle: string;
  matchesDesc: string;
  h2hTitle: string;
  venueTitle: string;
  refereeTitle: string;
  liveStatus: string;
  upcomingStatus: string;
  finishedStatus: string;
  newsletterTitle: string;
  newsletterSubtitle: string;
  newsletterInputPlaceholder: string;
  newsletterSubmitBtn: string;
  footerRights: string;
  languageSelectLabel: string;
  latestLiveSyncAlert: string;
  livePulseActive: string;
  trendingSpotlight: string;
  seasonActive: string;
  liveBadge: string;
  simulatorActive: string;
  enterMatchCenter: string;
  noLiveMatches: string;
  checkUpcomingMatches: string;
  scheduledMatches: string;
  matchesFound: string;
  finishedBadge: string;
  statsButton: string;
  newsRefreshed: string;
  sponsoredBadge: string;
  readAnalysis: string;
  newsletterDesc: string;
  emailPlaceholder: string;
  subscribingText: string;
  subscribeButton: string;
  sponsoredAdLabel: string;
  sponsoredAdTitle: string;
  sponsoredAdDesc: string;
  exploreGear: string;
  verifiedFeedTitle: string;
  verifiedFeedDesc: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    allSports: 'All Sports',
    football: 'Soccer',
    basketball: 'Basketball',
    tennis: 'Tennis',
    american_football: 'NFL',
    baseball: 'MLB',
    golf: 'Golf',
    hockey: 'NHL',
    world_cup: 'World Cup',
    searchPlaceholder: 'Search matches, squads, players...',
    syncIn: 'SYNC IN',
    syncButtonTooltip: 'Synchronize Live Stats Now',
    goPro: 'Go PRO',
    premiumPro: 'Premium PRO',
    liveMatchAlerts: 'Live Match Alerts',
    clearAll: 'Clear All',
    noAlerts: 'No new alerts yet.',
    simulateAlertNotice: 'Simulate live goals to receive notifications!',
    teamComparisonTitle: 'Team Comparison Hub',
    teamComparisonDesc: 'Analyze side-by-side squad metrics, team possession averages, clinical win rates, and defensive stats.',
    playerComparisonTitle: 'Player Comparison Engine',
    playerComparisonDesc: 'Compare season performance metrics, defensive interventions, key passing ratios, and offensive scoring.',
    squadA: 'Squad A',
    squadB: 'Squad B',
    playerA: 'Player A',
    playerB: 'Player B',
    winRate: 'Win Rate',
    avgGoalOutput: 'Avg Goal Output / PPG',
    ballPossession: 'Ball Possession %',
    avgFoulsConceded: 'Avg Fouls Conceded',
    yellowCardsAccumulation: 'Yellow Cards Accumulation',
    optaTelemetrySource: 'Data sourced from Live Opta telemetry streams',
    seasonCatalogSource: 'Data refreshed live from 2026 Season catalogs',
    trendingPlayersShowcase: 'Trending Players Showcase',
    trendingTeamsFormMap: 'Trending Teams Form Map',
    leagueStandingsTitle: 'League Standings',
    leagueStandingsDesc: 'Real-time point tallies and qualification brackets.',
    formIndicatorsNotice: 'Form indicates last 3 match outcomes',
    scoresParNotice: 'Scores indicate strokes vs par',
    clubCompetitorHeader: 'Club / Competitor',
    formHeader: 'Form',
    roundsHeader: 'Rounds',
    top10Header: 'Top-10s',
    strokesHeader: 'Strokes',
    ptsHeader: 'PTS',
    noStandings: 'No standings available for the selected sport.',
    predictionsEngine: 'Gemini AI Tactical Insights',
    predictionsSubtitle: 'Leverage the Gemini AI prediction engine for clinical match forecasts and advanced strategic summaries.',
    upcomingPredictionHint: 'Select any upcoming match to trigger full tactical analysis.',
    analyzeMatchBtn: 'Run AI Predictive Forecast',
    analyzingBtn: 'Processing Opta Telemetry...',
    predictWinner: 'Predicted Winner',
    confidence: 'Confidence Rate',
    tacticalFactor: 'Tactical Key Battle',
    keyMetric: 'Pivotal Metric',
    deepAnalysis: 'Analytical Strategic Summary',
    liveSim: 'Live Simulator Control',
    simulateGoalBtn: 'Simulate Live Scoring Play',
    simulateCardBtn: 'Simulate Defensive Yellow Card',
    injuryReportTitle: 'Opta Medical Hub',
    injuryReportDesc: 'Live injury monitoring, expected recovery windows, and clinical medical status reports.',
    expectedReturn: 'Expected Return',
    statusOut: 'Out',
    statusQuestionable: 'Questionable',
    statusDoubtful: 'Doubtful',
    latestNewsTitle: 'Insider Sports Journal',
    latestNewsDesc: 'Unfiltered reports, locker-room access, transfer wire info, and tactical game analyses.',
    readMoreBtn: 'Read Analysis',
    sponsored: 'PRO INSIDER',
    byAuthor: 'by',
    matchesTitle: 'Live Matchday Center',
    matchesDesc: 'Real-time scores, match schedules, live timelines, commentary, and head-to-head records.',
    h2hTitle: 'Head-to-Head History',
    venueTitle: 'Stadium/Venue',
    refereeTitle: 'Match Official',
    liveStatus: 'LIVE',
    upcomingStatus: 'Upcoming',
    finishedStatus: 'Finished',
    newsletterTitle: 'Subscribe to Punto Vivo Insider',
    newsletterSubtitle: 'Get the latest real-time sports alerts, transfer news, and tactical projections delivered directly to your inbox.',
    newsletterInputPlaceholder: 'Enter your email address...',
    newsletterSubmitBtn: 'Subscribe Now',
    footerRights: 'All Rights Reserved. Real-time sports analytics powered by Gemini 3.5 & Opta Sports telemetry.',
    languageSelectLabel: 'Language',
    latestLiveSyncAlert: 'Live database sync completed! Sports scores, player stats, and league standing tables updated to the latest 15:00 UTC information.',
    livePulseActive: 'LIVE TRANSMISSION ACTIVE',
    trendingSpotlight: 'Trending Matches Spotlight',
    seasonActive: '2026 Season Active',
    liveBadge: 'LIVE',
    simulatorActive: 'EVENT SIMULATOR OK',
    enterMatchCenter: 'Enter Match Center',
    noLiveMatches: 'No live matches right now.',
    checkUpcomingMatches: 'Check out the upcoming fixtures below or select "Simulate Live Goal" in Today\'s Games!',
    scheduledMatches: 'Today\'s Scheduled Matches',
    matchesFound: 'Match(es) Found',
    finishedBadge: 'FINISHED',
    statsButton: 'Stats',
    newsRefreshed: 'Refreshed 10m ago',
    sponsoredBadge: 'SPONSORED COUPLING',
    readAnalysis: 'Read Analysis',
    newsletterDesc: 'Get elite sports prediction charts, tactical news roundups, and dynamic injury alarms delivered straight to your inbox.',
    emailPlaceholder: 'Your email address',
    subscribingText: 'Subscribing...',
    subscribeButton: 'Join Daily Newsletter',
    sponsoredAdLabel: 'SPONSORED PLACEMENT • ADSENSE READY',
    sponsoredAdTitle: 'Perform Better With Zenith Sports Apparel',
    sponsoredAdDesc: 'Aerodynamic fit running spikes and sweat-wicking compression shorts.',
    exploreGear: 'Explore Gear',
    verifiedFeedTitle: '100% Verified Data Feed',
    verifiedFeedDesc: 'Sports logs processed by authorized server-to-server TLS connections to official sports bureaus.'
  },
  es: {
    allSports: 'Todos los Deportes',
    football: 'Fútbol',
    basketball: 'Baloncesto',
    tennis: 'Tenis',
    american_football: 'NFL',
    baseball: 'MLB',
    golf: 'Golf',
    hockey: 'NHL',
    world_cup: 'Copa Mundial',
    searchPlaceholder: 'Buscar partidos, escuadras, jugadores...',
    syncIn: 'SINC EN',
    syncButtonTooltip: 'Sincronizar estadísticas en vivo ahora',
    goPro: 'Hazte PRO',
    premiumPro: 'Premium PRO',
    liveMatchAlerts: 'Alertas en Vivo',
    clearAll: 'Limpiar Todo',
    noAlerts: 'No hay alertas nuevas todavía.',
    simulateAlertNotice: '¡Simula goles en vivo para recibir notificaciones!',
    teamComparisonTitle: 'Centro de Comparación',
    teamComparisonDesc: 'Analiza métricas de equipos lado a lado, promedios de posesión, tasa de victorias y estadísticas defensivas.',
    playerComparisonTitle: 'Comparador de Jugadores',
    playerComparisonDesc: 'Compara métricas de rendimiento de la temporada, intervenciones defensivas, pases clave y goles.',
    squadA: 'Equipo A',
    squadB: 'Equipo B',
    playerA: 'Jugador A',
    playerB: 'Jugador B',
    winRate: 'Tasa de Victorias',
    avgGoalOutput: 'Promedio Goles / PPG',
    ballPossession: 'Posesión de Balón %',
    avgFoulsConceded: 'Faltas Cometidas',
    yellowCardsAccumulation: 'Tarjetas Amarillas',
    optaTelemetrySource: 'Datos obtenidos de transmisiones de telemetría Opta en vivo',
    seasonCatalogSource: 'Datos actualizados en vivo de la temporada 2026',
    trendingPlayersShowcase: 'Jugadores en Tendencia',
    trendingTeamsFormMap: 'Equipos en Tendencia',
    leagueStandingsTitle: 'Tablas de Posiciones',
    leagueStandingsDesc: 'Recuento de puntos en tiempo real y brackets de clasificación.',
    formIndicatorsNotice: 'El estado indica los últimos 3 resultados',
    scoresParNotice: 'Los puntajes indican golpes respecto al par',
    clubCompetitorHeader: 'Club / Competidor',
    formHeader: 'Forma',
    roundsHeader: 'Rondas',
    top10Header: 'Top-10s',
    strokesHeader: 'Golpes',
    ptsHeader: 'PTS',
    noStandings: 'No hay posiciones disponibles para el deporte seleccionado.',
    predictionsEngine: 'Análisis Táctico Gemini AI',
    predictionsSubtitle: 'Utiliza el motor de inteligencia artificial de Gemini para pronósticos precisos de partidos y resúmenes estratégicos.',
    upcomingPredictionHint: 'Selecciona cualquier partido por jugar para ejecutar el análisis táctico completo.',
    analyzeMatchBtn: 'Ejecutar Pronóstico de IA',
    analyzingBtn: 'Procesando Telemetría Opta...',
    predictWinner: 'Ganador Predicho',
    confidence: 'Confianza de Pronóstico',
    tacticalFactor: 'Clave Táctica del Duelo',
    keyMetric: 'Métrica Clave',
    deepAnalysis: 'Resumen Estratégico Analítico',
    liveSim: 'Control de Simulador',
    simulateGoalBtn: 'Simular Gol / Jugada de Gol',
    simulateCardBtn: 'Simular Tarjeta Amarilla',
    injuryReportTitle: 'Parte Médico Opta',
    injuryReportDesc: 'Seguimiento de lesiones en tiempo real, ventanas de recuperación y estado médico clínico.',
    expectedReturn: 'Regreso Estimado',
    statusOut: 'Baja',
    statusQuestionable: 'Duda',
    statusDoubtful: 'Muy Dudoso',
    latestNewsTitle: 'Diario Deportivo Insider',
    latestNewsDesc: 'Informes exclusivos, accesos a vestuarios, mercado de transferencias y análisis tácticos.',
    readMoreBtn: 'Leer Análisis',
    sponsored: 'INSIDER PRO',
    byAuthor: 'por',
    matchesTitle: 'Centro de Partidos en Vivo',
    matchesDesc: 'Resultados en tiempo real, calendario, cronograma de eventos, comentarios en directo e historial de enfrentamientos.',
    h2hTitle: 'Historial de Enfrentamientos',
    venueTitle: 'Estadio / Sede',
    refereeTitle: 'Árbitro Principal',
    liveStatus: 'EN VIVO',
    upcomingStatus: 'Próximo',
    finishedStatus: 'Finalizado',
    newsletterTitle: 'Suscríbete a Punto Vivo Insider',
    newsletterSubtitle: 'Recibe las últimas alertas deportivas en tiempo real, novedades del mercado y proyecciones de IA directo en tu bandeja.',
    newsletterInputPlaceholder: 'Ingresa tu correo electrónico...',
    newsletterSubmitBtn: 'Suscribirse Ahora',
    footerRights: 'Todos los derechos reservados. Análisis deportivo en tiempo real impulsado por Gemini 3.5 y telemetría de Opta Sports.',
    languageSelectLabel: 'Idioma',
    latestLiveSyncAlert: '¡Sincronización de base de datos en vivo completada! Resultados de partidos, estadísticas y tablas actualizados con la última información.',
    livePulseActive: 'TRANSMISIÓN EN VIVO ACTIVA',
    trendingSpotlight: 'Partidos Destacados del Momento',
    seasonActive: 'Temporada 2026 Activa',
    liveBadge: 'EN VIVO',
    simulatorActive: 'SIMULADOR DE EVENTOS OK',
    enterMatchCenter: 'Entrar al Centro de Partido',
    noLiveMatches: 'No hay partidos en vivo en este momento.',
    checkUpcomingMatches: '¡Eche un vistazo a los próximos partidos a continuación o seleccione "Simular Gol en Vivo" en los Partidos de Hoy!',
    scheduledMatches: 'Partidos Programados de Hoy',
    matchesFound: 'Partido(s) Encontrado(s)',
    finishedBadge: 'FINALIZADO',
    statsButton: 'Estadísticas',
    newsRefreshed: 'Actualizado hace 10m',
    sponsoredBadge: 'ESPACIO PATROCINADO',
    readAnalysis: 'Leer Análisis',
    newsletterDesc: 'Obtenga gráficos de predicciones deportivas de élite, resúmenes de noticias tácticas y alertas de lesiones dinámicas directo en su bandeja de entrada.',
    emailPlaceholder: 'Su correo electrónico',
    subscribingText: 'Suscribiéndose...',
    subscribeButton: 'Unirse al Boletín Diario',
    sponsoredAdLabel: 'ANUNCIO PATROCINADO • ADSENSE LISTO',
    sponsoredAdTitle: 'Rinda Mejor con la Ropa Deportiva Zenith',
    sponsoredAdDesc: 'Zapatillas de correr con ajuste aerodinámico y pantalones cortos de compresión que absorben el sudor.',
    exploreGear: 'Explorar Equipamiento',
    verifiedFeedTitle: 'Feed de Datos 100% Verificado',
    verifiedFeedDesc: 'Registros deportivos procesados mediante conexiones TLS autorizadas de servidor a servidor con oficinas deportivas oficiales.'
  },
  pt: {
    allSports: 'Todos os Esportes',
    football: 'Futebol',
    basketball: 'Basquete',
    tennis: 'Tênis',
    american_football: 'NFL',
    baseball: 'MLB',
    golf: 'Golfe',
    hockey: 'NHL',
    world_cup: 'Copa do Mundo',
    searchPlaceholder: 'Buscar partidas, equipes, jogadores...',
    syncIn: 'SINCRONIZAR',
    syncButtonTooltip: 'Sincronizar Estatísticas ao Vivo',
    goPro: 'Obter PRO',
    premiumPro: 'Premium PRO',
    liveMatchAlerts: 'Alertas de Partidas ao Vivo',
    clearAll: 'Limpar Tudo',
    noAlerts: 'Sem novos alertas ainda.',
    simulateAlertNotice: 'Simule gols ao vivo para receber notificações!',
    teamComparisonTitle: 'Central de Comparação de Equipes',
    teamComparisonDesc: 'Analise métricas de equipes lado a lado, posse média de bola, taxas de vitória e estatísticas defensivas.',
    playerComparisonTitle: 'Motor de Comparação de Jogadores',
    playerComparisonDesc: 'Compare métricas de desempenho da temporada, intervenções defensivas, passes-chave e gols marcados.',
    squadA: 'Equipe A',
    squadB: 'Equipe B',
    playerA: 'Jogador A',
    playerB: 'Jogador B',
    winRate: 'Taxa de Vitória',
    avgGoalOutput: 'Média de Gols / PPG',
    ballPossession: 'Posse de Bola %',
    avgFoulsConceded: 'Média de Faltas Cometidas',
    yellowCardsAccumulation: 'Acúmulo de Cartões Amarelos',
    optaTelemetrySource: 'Dados obtidos por transmissões de telemetria da Opta ao vivo',
    seasonCatalogSource: 'Dados atualizados ao vivo dos catálogos da temporada 2026',
    trendingPlayersShowcase: 'Destaque de Jogadores em Alta',
    trendingTeamsFormMap: 'Mapa de Forma das Equipes em Alta',
    leagueStandingsTitle: 'Classificação de Ligas',
    leagueStandingsDesc: 'Tabelas oficiais e posições atualizadas ao vivo a cada minuto dos servidores de dados esportivos.',
    formIndicatorsNotice: 'Indicadores de forma calculados a partir dos últimos 3 jogos.',
    scoresParNotice: 'Pontuações relativas ao par em tempo real do campo do torneio de golfe.',
    clubCompetitorHeader: 'Clube',
    formHeader: 'Forma',
    roundsHeader: 'Rodadas',
    top10Header: 'Top 10',
    strokesHeader: 'Tacadas',
    ptsHeader: 'Pts',
    noStandings: 'Nenhuma classificação de liga encontrada para os filtros selecionados.',
    predictionsEngine: 'Motor de Previsões de IA da Gemini',
    predictionsSubtitle: 'Análise probabilística avançada baseada em modelos de aprendizado profundo, relatórios médicos e tendências históricas.',
    upcomingPredictionHint: 'Selecione um jogo programado ou ao vivo para ver a análise tática completa.',
    analyzeMatchBtn: 'Analisar Partida com IA',
    analyzingBtn: 'Analisando dados...',
    predictWinner: 'Resultado Provável',
    confidence: 'Confiança do Modelo',
    tacticalFactor: 'Fator Tático Principal',
    keyMetric: 'Métrica Chave do Jogo',
    deepAnalysis: 'Análise Profunda Baseada em IA',
    liveSim: 'Simulação ao Vivo de Eventos de Jogo',
    simulateGoalBtn: 'Simular Gol ao Vivo',
    simulateCardBtn: 'Simular Cartão Amarelo',
    injuryReportTitle: 'Boletim de Lesões do Departamento Médico',
    injuryReportDesc: 'Fique atualizado sobre ausências críticas de jogadores, prognósticos de recuperação e substituições de emergência.',
    expectedReturn: 'Retorno Previsto',
    statusOut: 'Fora',
    statusQuestionable: 'Dúvida',
    statusDoubtful: 'Improvável',
    latestNewsTitle: 'Últimas Notícias Esportivas',
    latestNewsDesc: 'As notícias mais importantes sobre transferências, análises táticas e relatórios de campo atualizados constantemente.',
    readMoreBtn: 'Ler Mais',
    sponsored: 'Patrocinado',
    byAuthor: 'por',
    matchesTitle: 'Central de Partidas ao Vivo',
    matchesDesc: 'Resultados em tempo real, calendários, cronogramas de eventos, comentários ao vivo e histórico de confrontos.',
    h2hTitle: 'Histórico de Confrontos Diretos',
    venueTitle: 'Estádio / Sede',
    refereeTitle: 'Árbitro Principal',
    liveStatus: 'AO VIVO',
    upcomingStatus: 'Próximo',
    finishedStatus: 'Finalizado',
    newsletterTitle: 'Inscreva-se no Punto Vivo Insider',
    newsletterSubtitle: 'Receba alertas esportivos em tempo real, novidades do mercado de transferências e projeções de IA direto na sua caixa de entrada.',
    newsletterInputPlaceholder: 'Insira seu e-mail...',
    newsletterSubmitBtn: 'Inscrever-se Agora',
    footerRights: 'Todos os direitos reservados. Análise esportiva em tempo real alimentada por Gemini 3.5 e telemetria Opta Sports.',
    languageSelectLabel: 'Idioma',
    latestLiveSyncAlert: 'Sincronização de banco de dados ao vivo concluída! Resultados de jogos, estatísticas e tabelas de classificação atualizados.',
    livePulseActive: 'TRANSMISSÃO AO VIVO ATIVA',
    trendingSpotlight: 'Destaques de Jogos em Alta',
    seasonActive: 'Temporada de 2026 Ativa',
    liveBadge: 'AO VIVO',
    simulatorActive: 'SIMULADOR DE EVENTOS OK',
    enterMatchCenter: 'Entrar na Central da Partida',
    noLiveMatches: 'Não há partidas ao vivo no momento.',
    checkUpcomingMatches: 'Confira as próximas partidas abaixo ou selecione "Simular Gol ao Vivo" nos Jogos de Hoje!',
    scheduledMatches: 'Partidas Agendadas de Hoje',
    matchesFound: 'Partida(s) Encontrada(s)',
    finishedBadge: 'FINALIZADO',
    statsButton: 'Estatísticas',
    newsRefreshed: 'Atualizado há 10m',
    sponsoredBadge: 'ESPAÇO PATROCINADO',
    readAnalysis: 'Ler Análise',
    newsletterDesc: 'Receba gráficos de previsões de elite, resumos de notícias táticas e alertas de lesões diretamente em sua caixa de entrada.',
    emailPlaceholder: 'Seu endereço de e-mail',
    subscribingText: 'Inscrevendo...',
    subscribeButton: 'Inscrever-se no Boletim Diário',
    sponsoredAdLabel: 'ANÚNCIO PATROCINADO • PRONTO PARA ADSENSE',
    sponsoredAdTitle: 'Renda Mais com Roupas Esportivas Zenith',
    sponsoredAdDesc: 'Sapatilhas de corrida aerodinâmicas e shorts de compressão com absorção de suor.',
    exploreGear: 'Explorar Equipamento',
    verifiedFeedTitle: 'Feed de Dados 100% Verificado',
    verifiedFeedDesc: 'Registros esportivos processados por conexões seguras TLS de servidor para servidor com órgãos oficiais.'
  },
  fr: {
    allSports: 'Tous les Sports',
    football: 'Football',
    basketball: 'Basket-ball',
    tennis: 'Tennis',
    american_football: 'NFL',
    baseball: 'MLB',
    golf: 'Golf',
    hockey: 'NHL',
    world_cup: 'Coupe du Monde',
    searchPlaceholder: 'Rechercher matchs, équipes, joueurs...',
    syncIn: 'SYNCHRONISER',
    syncButtonTooltip: 'Synchroniser les statistiques en direct',
    goPro: 'Devenir PRO',
    premiumPro: 'Premium PRO',
    liveMatchAlerts: 'Alertes de match en direct',
    clearAll: 'Effacer Tout',
    noAlerts: 'Pas encore de nouvelles alertes.',
    simulateAlertNotice: 'Simulez des buts en direct pour recevoir des notifications !',
    teamComparisonTitle: 'Centre de Comparaison des Équipes',
    teamComparisonDesc: 'Analysez côte à côte les statistiques des équipes, la possession de balle moyenne, les taux de victoire et les stats défensives.',
    playerComparisonTitle: 'Moteur de Comparaison des Joueurs',
    playerComparisonDesc: 'Comparez les performances de la saison, les tacles, les passes clés et les buts marqués.',
    squadA: 'Équipe A',
    squadB: 'Équipe B',
    playerA: 'Joueur A',
    playerB: 'Joueur B',
    winRate: 'Taux de Victoire',
    avgGoalOutput: 'Moyenne Buts / PPG',
    ballPossession: 'Possession %',
    avgFoulsConceded: 'Fautes Concédées en Moyenne',
    yellowCardsAccumulation: 'Cartons Jaunes Cumulés',
    optaTelemetrySource: 'Données issues des flux de télémétrie Opta en direct',
    seasonCatalogSource: 'Données actualisées en direct des catalogues de la saison 2026',
    trendingPlayersShowcase: 'Dossier Joueurs Tendances',
    trendingTeamsFormMap: 'Forme des Équipes Populaires',
    leagueStandingsTitle: 'Classement de la Ligue',
    leagueStandingsDesc: 'Tableaux officiels et positions mis à jour en direct chaque minute à partir des serveurs de données sportives.',
    formIndicatorsNotice: 'Indicateurs de forme calculés à partir des 3 derniers matchs.',
    scoresParNotice: 'Scores relatifs au par en temps réel sur le parcours de golf.',
    clubCompetitorHeader: 'Club',
    formHeader: 'Forme',
    roundsHeader: 'Manches',
    top10Header: 'Top 10',
    strokesHeader: 'Coups',
    ptsHeader: 'Pts',
    noStandings: 'Aucun classement de ligue trouvé pour les filtres sélectionnés.',
    predictionsEngine: 'Moteur de Prédictions IA Gemini',
    predictionsSubtitle: 'Analyse probabiliste avancée basée sur des modèles de tchat ou d\'apprentissage profond, des rapports médicaux et des tendances historiques.',
    upcomingPredictionHint: 'Sélectionnez un match programmé ou en direct pour voir l\'analyse tactique complète.',
    analyzeMatchBtn: 'Analyser le Match par l\'IA',
    analyzingBtn: 'Analyse des données...',
    predictWinner: 'Résultat Probable',
    confidence: 'Confiance du Modèle',
    tacticalFactor: 'Facteur Tactique Clé',
    keyMetric: 'Métrique Clé du Match',
    deepAnalysis: 'Analyse Approfondie IA',
    liveSim: 'Simulation en Direct d\'Événements de Match',
    simulateGoalBtn: 'Simuler un But en Direct',
    simulateCardBtn: 'Simuler un Carton Jaune',
    injuryReportTitle: 'Rapport des Blessures du Bureau Médical',
    injuryReportDesc: 'Restez informé des absences de joueurs clés, des prévisions de rétablissement et des remplacements d\'urgence.',
    expectedReturn: 'Retour Prévu',
    statusOut: 'Absent',
    statusQuestionable: 'Incertain',
    statusDoubtful: 'Douteux',
    latestNewsTitle: 'Actualités Sportives',
    latestNewsDesc: 'Toutes les infos transferts majeures, analyses tactiques et rapports de terrain actualisés en continu.',
    readMoreBtn: 'Lire Plus',
    sponsored: 'Sponsorisé',
    byAuthor: 'par',
    matchesTitle: 'Centre des Matchs en Direct',
    matchesDesc: 'Scores en direct, calendrier, chronologie des événements, commentaires en direct et historique des confrontations.',
    h2hTitle: 'Historique des Confrontations',
    venueTitle: 'Stade / Lieu',
    refereeTitle: 'Arbitre Principal',
    liveStatus: 'EN DIRECT',
    upcomingStatus: 'À venir',
    finishedStatus: 'Terminé',
    newsletterTitle: 'S\'abonner à Punto Vivo Insider',
    newsletterSubtitle: 'Recevez les alertes en direct, les coulisses des transferts et les projections d\'IA directement dans votre boîte mail.',
    newsletterInputPlaceholder: 'Entrez votre adresse email...',
    newsletterSubmitBtn: 'S\'abonner Maintenant',
    footerRights: 'Tous droits réservés. Analyse sportive en temps réel propulsée par Gemini 3.5 et télémétrie Opta Sports.',
    languageSelectLabel: 'Langue',
    latestLiveSyncAlert: 'Synchronisation en direct de la base de données terminée ! Scores, statistiques et classements mis à jour.',
    livePulseActive: 'TRANSMISSION EN DIRECT ACTIVE',
    trendingSpotlight: 'Projecteur Matchs Tendances',
    seasonActive: 'Saison 2026 Active',
    liveBadge: 'EN DIRECT',
    simulatorActive: 'SIMULATEUR D\'ÉVÉNEMENTS OK',
    enterMatchCenter: 'Entrer au Centre du Match',
    noLiveMatches: 'Aucun match en direct pour le moment.',
    checkUpcomingMatches: 'Consultez les matchs à venir ci-dessous ou cliquez sur "Simuler un But en Direct" !',
    scheduledMatches: 'Matchs Programmés Aujourd\'hui',
    matchesFound: 'Match(s) Trouvé(s)',
    finishedBadge: 'TERMINÉ',
    statsButton: 'Stats',
    newsRefreshed: 'Mis à jour il y a 10m',
    sponsoredBadge: 'ESPACE SPONSORISÉ',
    readAnalysis: 'Lire l\'Analyse',
    newsletterDesc: 'Recevez des graphiques de prédictions d\'élite, des résumés tactiques et des alertes de blessures directement dans votre boîte mail.',
    emailPlaceholder: 'Votre adresse email',
    subscribingText: 'Abonnement...',
    subscribeButton: 'Rejoindre la Newsletter',
    sponsoredAdLabel: 'PLACEMENT SPONSORISÉ • PRÊT POUR ADSENSE',
    sponsoredAdTitle: 'Performez Mieux avec l\'Équipement Zenith',
    sponsoredAdDesc: 'Chaussures de running aérodynamiques et shorts de compression anti-transpiration.',
    exploreGear: 'Découvrir l\'Équipement',
    verifiedFeedTitle: 'Flux de Données 100% Vérifié',
    verifiedFeedDesc: 'Données sportives traitées via des connexions TLS sécurisées de serveur à serveur avec des agences officielles.'
  }
};

export function getFlagEmoji(country: string): string {
  if (!country) return '🏳️';
  const c = country.trim().toLowerCase();
  
  if (c === 'usa' || c === 'united states' || c === 'us' || c === 'eeuu' || c === 'estados unidos') return '🇺🇸';
  if (c === 'spain' || c === 'españa' || c === 'esp') return '🇪🇸';
  if (c === 'england' || c === 'uk' || c === 'united kingdom' || c === 'gb' || c === 'great britain' || c === 'inglaterra' || c === 'reino unido') return '🇬🇧';
  if (c === 'france' || c === 'francia' || c === 'fra') return '🇫🇷';
  if (c === 'argentina' || c === 'arg') return '🇦🇷';
  if (c === 'brazil' || c === 'brasil' || c === 'bra') return '🇧🇷';
  if (c === 'poland' || c === 'polonia' || c === 'pol') return '🇵🇱';
  if (c === 'norway' || c === 'noruega' || c === 'nor') return '🇳🇴';
  if (c === 'serbia' || c === 'srb') return '🇷🇸';
  if (c === 'canada' || c === 'canadá' || c === 'can') return '🇨🇦';
  if (c === 'japan' || c === 'japón' || c === 'jpn') return '🇯🇵';
  if (c === 'portugal' || c === 'por') return '🇵🇹';
  if (c === 'italy' || c === 'italia' || c === 'ita') return '🇮🇹';
  if (c === 'germany' || c === 'alemania' || c === 'ger' || c === 'deu') return '🇩🇪';
  if (c === 'belgium' || c === 'bélgica' || c === 'bel') return '🇧🇪';
  if (c === 'netherlands' || c === 'países bajos' || c === 'holland' || c === 'ned') return '🇳🇱';
  if (c === 'switzerland' || c === 'suiza' || c === 'sui') return '🇨🇭';
  if (c === 'colombia' || c === 'col') return '🇨🇴';
  if (c === 'mexico' || c === 'méxico' || c === 'mex') return '🇲🇽';
  if (c === 'uruguay' || c === 'ury') return '🇺🇾';
  if (c === 'croatia' || c === 'croacia' || c === 'hrv') return '🇭🇷';
  if (c === 'morocco' || c === 'marruecos' || c === 'mar') return '🇲🇦';
  if (c === 'senegal' || c === 'sen') return '🇸🇳';
  if (c === 'greece' || c === 'grecia' || c === 'grc') return '🇬🇷';
  if (c === 'sweden' || c === 'suecia' || c === 'swe') return '🇸🇪';
  if (c === 'denmark' || c === 'dinamarca' || c === 'dnk') return '🇩🇰';
  if (c === 'ireland' || c === 'irlanda' || c === 'irl') return '🇮🇪';
  if (c === 'australia' || c === 'aus') return '🇦🇺';
  if (c === 'china' || c === 'chn') return '🇨🇳';
  if (c === 'south korea' || c === 'corea del sur' || c === 'kor') return '🇰🇷';
  if (c === 'india' || c === 'ind') return '🇮🇳';
  if (c === 'south africa' || c === 'sudáfrica' || c === 'zaf') return '🇿🇦';
  
  return '🏳️';
}

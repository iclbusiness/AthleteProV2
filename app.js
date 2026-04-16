// AthleteHub - Core Application JavaScript

// ==================== DATA CONFIGURATION ====================

const SPORTS_CONFIG = {
  // Major Sports
  soccer: {
    name: 'Soccer',
    icon: '⚽',
    positions: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Winger', 'Striker'],
    stats: [
      { key: 'goals', label: 'Goals', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'saves', label: 'Saves (GK)', type: 'number' },
      { key: 'cleanSheets', label: 'Clean Sheets', type: 'number' },
      { key: 'minutesPlayed', label: 'Minutes Played', type: 'number' }
    ]
  },
  basketball: {
    name: 'Basketball',
    icon: '🏀',
    positions: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'],
    stats: [
      { key: 'points', label: 'Points', type: 'number' },
      { key: 'rebounds', label: 'Rebounds', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'steals', label: 'Steals', type: 'number' },
      { key: 'blocks', label: 'Blocks', type: 'number' }
    ]
  },
  football: {
    name: 'Football',
    icon: '🏈',
    positions: ['Quarterback', 'Running Back', 'Wide Receiver', 'Tight End', 'Offensive Line', 'Defensive Line', 'Linebacker', 'Cornerback', 'Safety', 'Kicker', 'Punter'],
    stats: [
      { key: 'passingYards', label: 'Passing Yards', type: 'number' },
      { key: 'rushingYards', label: 'Rushing Yards', type: 'number' },
      { key: 'touchdowns', label: 'Touchdowns', type: 'number' },
      { key: 'tackles', label: 'Tackles', type: 'number' },
      { key: 'interceptions', label: 'Interceptions', type: 'number' }
    ]
  },
  baseball: {
    name: 'Baseball',
    icon: '⚾',
    positions: ['Pitcher', 'Catcher', 'First Base', 'Second Base', 'Third Base', 'Shortstop', 'Left Field', 'Center Field', 'Right Field', 'Designated Hitter'],
    stats: [
      { key: 'battingAvg', label: 'Batting Avg', type: 'decimal' },
      { key: 'homeRuns', label: 'Home Runs', type: 'number' },
      { key: 'rbis', label: 'RBIs', type: 'number' },
      { key: 'era', label: 'ERA (Pitchers)', type: 'decimal' },
      { key: 'strikeouts', label: 'Strikeouts', type: 'number' }
    ]
  },
  volleyball: {
    name: 'Volleyball',
    icon: '🏐',
    positions: ['Outside Hitter', 'Middle Blocker', 'Setter', 'Opposite Hitter', 'Libero', 'Defensive Specialist'],
    stats: [
      { key: 'kills', label: 'Kills', type: 'number' },
      { key: 'blocks', label: 'Blocks', type: 'number' },
      { key: 'digs', label: 'Digs', type: 'number' },
      { key: 'aces', label: 'Aces', type: 'number' }
    ]
  },
  trackField: {
    name: 'Track & Field',
    icon: '🏃',
    positions: ['Sprinter', 'Distance Runner', 'Hurdler', 'Jumper', 'Thrower', 'Multi-Event'],
    stats: [
      { key: 'event1', label: 'Primary Event', type: 'text' },
      { key: 'pr1', label: 'PR (Primary)', type: 'text' },
      { key: 'event2', label: 'Secondary Event', type: 'text' },
      { key: 'pr2', label: 'PR (Secondary)', type: 'text' }
    ]
  },

  // Niche & Unique Sports
  lacrosse: {
    name: 'Lacrosse',
    icon: '🥍',
    positions: ['Attack', 'Midfield', 'Defense', 'Goalie', 'FOGO', 'LSM'],
    stats: [
      { key: 'goals', label: 'Goals', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'groundBalls', label: 'Ground Balls', type: 'number' },
      { key: 'saves', label: 'Saves', type: 'number' },
      { key: 'faceoffWins', label: 'Faceoff Wins', type: 'number' }
    ]
  },
  rugby: {
    name: 'Rugby',
    icon: '🏉',
    positions: ['Prop', 'Hooker', 'Lock', 'Flanker', 'Number 8', 'Scrum-half', 'Fly-half', 'Center', 'Wing', 'Fullback'],
    stats: [
      { key: 'tries', label: 'Tries', type: 'number' },
      { key: 'tackles', label: 'Tackles', type: 'number' },
      { key: 'carries', label: 'Carries', type: 'number' },
      { key: 'lineoutWins', label: 'Lineout Wins', type: 'number' },
      { key: 'turnovers', label: 'Turnovers Won', type: 'number' }
    ]
  },
  waterPolo: {
    name: 'Water Polo',
    icon: '🤽',
    positions: ['Goalkeeper', 'Center Forward', 'Center Back', 'Driver', 'Point', 'Wing'],
    stats: [
      { key: 'goals', label: 'Goals', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'steals', label: 'Steals', type: 'number' },
      { key: 'blocks', label: 'Blocks', type: 'number' },
      { key: 'saves', label: 'Saves', type: 'number' }
    ]
  },
  fieldHockey: {
    name: 'Field Hockey',
    icon: '🏑',
    positions: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'],
    stats: [
      { key: 'goals', label: 'Goals', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'saves', label: 'Saves', type: 'number' },
      { key: 'tackles', label: 'Tackles', type: 'number' },
      { key: 'penaltyCorners', label: 'Penalty Corners', type: 'number' }
    ]
  },
  rowing: {
    name: 'Rowing',
    icon: '🚣',
    positions: ['Coxswain', 'Stroke', 'Bow', 'Sculler', 'Sweep Rower'],
    stats: [
      { key: 'ergTime2k', label: '2K Erg Time', type: 'text' },
      { key: 'ergTime6k', label: '6K Erg Time', type: 'text' },
      { key: 'splitAvg', label: 'Avg Split', type: 'text' },
      { key: 'boatClass', label: 'Boat Class', type: 'text' }
    ]
  },
  fencing: {
    name: 'Fencing',
    icon: '🤺',
    positions: ['Foil', 'Épée', 'Sabre'],
    stats: [
      { key: 'wins', label: 'Bout Wins', type: 'number' },
      { key: 'touchesScored', label: 'Touches Scored', type: 'number' },
      { key: 'touchesReceived', label: 'Touches Received', type: 'number' },
      { key: 'nationalRanking', label: 'National Ranking', type: 'text' }
    ]
  },
  wrestling: {
    name: 'Wrestling',
    icon: '🤼',
    positions: ['Freestyle', 'Greco-Roman', 'Folkstyle'],
    stats: [
      { key: 'wins', label: 'Wins', type: 'number' },
      { key: 'losses', label: 'Losses', type: 'number' },
      { key: 'pins', label: 'Pins', type: 'number' },
      { key: 'takedowns', label: 'Takedowns', type: 'number' },
      { key: 'weightClass', label: 'Weight Class', type: 'text' }
    ]
  },
  gymnastics: {
    name: 'Gymnastics',
    icon: '🤸',
    positions: ['All-Around', 'Floor', 'Vault', 'Bars', 'Beam', 'Rings', 'Pommel Horse', 'Parallel Bars', 'High Bar'],
    stats: [
      { key: 'allAroundScore', label: 'All-Around Score', type: 'decimal' },
      { key: 'bestApparatus', label: 'Best Apparatus', type: 'text' },
      { key: 'difficultyScore', label: 'Difficulty Score', type: 'decimal' },
      { key: 'level', label: 'Level', type: 'text' }
    ]
  },
  swimming: {
    name: 'Swimming',
    icon: '🏊',
    positions: ['Freestyle', 'Backstroke', 'Breaststroke', 'Butterfly', 'IM', 'Distance', 'Sprint'],
    stats: [
      { key: 'primaryEvent', label: 'Primary Event', type: 'text' },
      { key: 'primaryTime', label: 'Primary Time', type: 'text' },
      { key: 'secondaryEvent', label: 'Secondary Event', type: 'text' },
      { key: 'secondaryTime', label: 'Secondary Time', type: 'text' }
    ]
  },
  diving: {
    name: 'Diving',
    icon: '🏊‍♂️',
    positions: ['Springboard 1m', 'Springboard 3m', 'Platform 5m', 'Platform 10m', 'Synchronized'],
    stats: [
      { key: 'highScore', label: 'High Score', type: 'decimal' },
      { key: 'difficultyLevel', label: 'Difficulty Level', type: 'decimal' },
      { key: 'diveList', label: 'Dive List', type: 'text' }
    ]
  },
  golf: {
    name: 'Golf',
    icon: '⛳',
    positions: ['Amateur', 'Junior', 'Collegiate'],
    stats: [
      { key: 'handicap', label: 'Handicap', type: 'decimal' },
      { key: 'avgScore', label: 'Avg 18-Hole Score', type: 'number' },
      { key: 'drivingDistance', label: 'Driving Distance', type: 'number' },
      { key: 'tournamentsWon', label: 'Tournaments Won', type: 'number' }
    ]
  },
  tennis: {
    name: 'Tennis',
    icon: '🎾',
    positions: ['Singles', 'Doubles', 'Mixed Doubles'],
    stats: [
      { key: 'utrRating', label: 'UTR Rating', type: 'decimal' },
      { key: 'wins', label: 'Wins', type: 'number' },
      { key: 'losses', label: 'Losses', type: 'number' },
      { key: 'nationalRanking', label: 'National Ranking', type: 'text' }
    ]
  },
  iceHockey: {
    name: 'Ice Hockey',
    icon: '🏒',
    positions: ['Center', 'Left Wing', 'Right Wing', 'Defenseman', 'Goaltender'],
    stats: [
      { key: 'goals', label: 'Goals', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'plusMinus', label: '+/-', type: 'number' },
      { key: 'saves', label: 'Saves', type: 'number' },
      { key: 'savePercentage', label: 'Save %', type: 'decimal' }
    ]
  },
  skiing: {
    name: 'Skiing',
    icon: '⛷️',
    positions: ['Alpine', 'Nordic', 'Freestyle', 'Cross-Country', 'Ski Jumping'],
    stats: [
      { key: 'bestTime', label: 'Best Time', type: 'text' },
      { key: 'discipline', label: 'Primary Discipline', type: 'text' },
      { key: 'fisPoints', label: 'FIS Points', type: 'number' }
    ]
  },
  snowboarding: {
    name: 'Snowboarding',
    icon: '🏂',
    positions: ['Halfpipe', 'Slopestyle', 'Big Air', 'Boardercross', 'Alpine'],
    stats: [
      { key: 'bestScore', label: 'Best Competition Score', type: 'decimal' },
      { key: 'discipline', label: 'Primary Discipline', type: 'text' },
      { key: 'sponsorships', label: 'Sponsorships', type: 'text' }
    ]
  },
  martialArts: {
    name: 'Martial Arts',
    icon: '🥋',
    positions: ['Judo', 'Taekwondo', 'Karate', 'Brazilian Jiu-Jitsu', 'MMA', 'Kung Fu'],
    stats: [
      { key: 'beltRank', label: 'Belt/Rank', type: 'text' },
      { key: 'wins', label: 'Competition Wins', type: 'number' },
      { key: 'losses', label: 'Losses', type: 'number' },
      { key: 'weightClass', label: 'Weight Class', type: 'text' }
    ]
  },
  boxing: {
    name: 'Boxing',
    icon: '🥊',
    positions: ['Lightweight', 'Welterweight', 'Middleweight', 'Heavyweight', 'Amateur', 'Olympic'],
    stats: [
      { key: 'wins', label: 'Wins', type: 'number' },
      { key: 'losses', label: 'Losses', type: 'number' },
      { key: 'knockouts', label: 'KOs', type: 'number' },
      { key: 'weightClass', label: 'Weight Class', type: 'text' }
    ]
  },
  cricket: {
    name: 'Cricket',
    icon: '🏏',
    positions: ['Batsman', 'Bowler', 'All-Rounder', 'Wicket-Keeper', 'Opening Batsman', 'Spin Bowler', 'Fast Bowler'],
    stats: [
      { key: 'runs', label: 'Runs', type: 'number' },
      { key: 'battingAvg', label: 'Batting Average', type: 'decimal' },
      { key: 'wickets', label: 'Wickets', type: 'number' },
      { key: 'bowlingAvg', label: 'Bowling Average', type: 'decimal' }
    ]
  },
  badminton: {
    name: 'Badminton',
    icon: '🏸',
    positions: ['Singles', 'Doubles', 'Mixed Doubles'],
    stats: [
      { key: 'wins', label: 'Match Wins', type: 'number' },
      { key: 'losses', label: 'Losses', type: 'number' },
      { key: 'ranking', label: 'Ranking', type: 'text' }
    ]
  },
  tableTennis: {
    name: 'Table Tennis',
    icon: '🏓',
    positions: ['Singles', 'Doubles'],
    stats: [
      { key: 'rating', label: 'USATT Rating', type: 'number' },
      { key: 'wins', label: 'Match Wins', type: 'number' },
      { key: 'playStyle', label: 'Play Style', type: 'text' }
    ]
  },
  archery: {
    name: 'Archery',
    icon: '🏹',
    positions: ['Recurve', 'Compound', 'Barebow', 'Olympic Recurve'],
    stats: [
      { key: 'avgScore', label: 'Average Score', type: 'number' },
      { key: 'highScore', label: 'Personal Best', type: 'number' },
      { key: 'bowType', label: 'Bow Type', type: 'text' }
    ]
  },
  equestrian: {
    name: 'Equestrian',
    icon: '🏇',
    positions: ['Dressage', 'Show Jumping', 'Eventing', 'Polo', 'Rodeo'],
    stats: [
      { key: 'discipline', label: 'Primary Discipline', type: 'text' },
      { key: 'competitionsWon', label: 'Competitions Won', type: 'number' },
      { key: 'level', label: 'Competition Level', type: 'text' }
    ]
  },
  surfing: {
    name: 'Surfing',
    icon: '🏄',
    positions: ['Shortboard', 'Longboard', 'Big Wave', 'SUP'],
    stats: [
      { key: 'wsrRanking', label: 'WSL Ranking', type: 'text' },
      { key: 'competitionsWon', label: 'Competitions Won', type: 'number' },
      { key: 'sponsors', label: 'Sponsors', type: 'text' }
    ]
  },
  skateboarding: {
    name: 'Skateboarding',
    icon: '🛹',
    positions: ['Street', 'Vert', 'Park', 'Freestyle'],
    stats: [
      { key: 'discipline', label: 'Primary Discipline', type: 'text' },
      { key: 'bestTrick', label: 'Best Trick', type: 'text' },
      { key: 'sponsors', label: 'Sponsors', type: 'text' }
    ]
  },
  climbing: {
    name: 'Climbing',
    icon: '🧗',
    positions: ['Lead', 'Bouldering', 'Speed', 'Combined'],
    stats: [
      { key: 'highestGrade', label: 'Highest Grade', type: 'text' },
      { key: 'discipline', label: 'Primary Discipline', type: 'text' },
      { key: 'competitionsWon', label: 'Competitions Won', type: 'number' }
    ]
  },
  esports: {
    name: 'Esports',
    icon: '🎮',
    positions: ['Pro Player', 'Semi-Pro', 'Amateur', 'Streamer'],
    stats: [
      { key: 'game', label: 'Primary Game', type: 'text' },
      { key: 'rank', label: 'Current Rank', type: 'text' },
      { key: 'earnings', label: 'Tournament Earnings', type: 'text' },
      { key: 'team', label: 'Team/Org', type: 'text' }
    ]
  },
  cheerleading: {
    name: 'Cheerleading',
    icon: '📣',
    positions: ['Flyer', 'Base', 'Back Spot', 'Tumbler', 'All-Around'],
    stats: [
      { key: 'level', label: 'Level', type: 'text' },
      { key: 'skills', label: 'Key Skills', type: 'text' },
      { key: 'competitions', label: 'Competitions', type: 'number' }
    ]
  },
  dance: {
    name: 'Dance',
    icon: '💃',
    positions: ['Ballet', 'Contemporary', 'Hip Hop', 'Jazz', 'Ballroom', 'Latin'],
    stats: [
      { key: 'style', label: 'Primary Style', type: 'text' },
      { key: 'yearsTraining', label: 'Years Training', type: 'number' },
      { key: 'competitions', label: 'Competitions Won', type: 'number' }
    ]
  },
  figureskating: {
    name: 'Figure Skating',
    icon: '⛸️',
    positions: ['Singles', 'Pairs', 'Ice Dance', 'Synchronized'],
    stats: [
      { key: 'level', label: 'USFSA Level', type: 'text' },
      { key: 'bestScore', label: 'Personal Best Score', type: 'decimal' },
      { key: 'jumps', label: 'Best Jumps', type: 'text' }
    ]
  },
  softball: {
    name: 'Softball',
    icon: '🥎',
    positions: ['Pitcher', 'Catcher', 'First Base', 'Second Base', 'Third Base', 'Shortstop', 'Outfield'],
    stats: [
      { key: 'battingAvg', label: 'Batting Avg', type: 'decimal' },
      { key: 'homeRuns', label: 'Home Runs', type: 'number' },
      { key: 'era', label: 'ERA', type: 'decimal' },
      { key: 'strikeouts', label: 'Strikeouts', type: 'number' }
    ]
  },
  crossCountry: {
    name: 'Cross Country',
    icon: '🏃‍♂️',
    positions: ['5K', '8K', '10K', 'Varsity', 'JV'],
    stats: [
      { key: 'best5k', label: '5K PR', type: 'text' },
      { key: 'best8k', label: '8K PR', type: 'text' },
      { key: 'avgPace', label: 'Avg Pace', type: 'text' }
    ]
  },
  triathlon: {
    name: 'Triathlon',
    icon: '🏊‍♀️',
    positions: ['Sprint', 'Olympic', 'Half Ironman', 'Ironman', 'Duathlon'],
    stats: [
      { key: 'bestTime', label: 'Best Race Time', type: 'text' },
      { key: 'raceDistance', label: 'Primary Distance', type: 'text' },
      { key: 'swimTime', label: 'Swim Split', type: 'text' },
      { key: 'bikeTime', label: 'Bike Split', type: 'text' },
      { key: 'runTime', label: 'Run Split', type: 'text' }
    ]
  },
  sailing: {
    name: 'Sailing',
    icon: '⛵',
    positions: ['Skipper', 'Crew', 'Tactician', 'Trimmer', 'Bowman'],
    stats: [
      { key: 'boatClass', label: 'Boat Class', type: 'text' },
      { key: 'regattas', label: 'Regattas Competed', type: 'number' },
      { key: 'ranking', label: 'Ranking', type: 'text' }
    ]
  },
  polo: {
    name: 'Polo',
    icon: '🐴',
    positions: ['1 (Striker)', '2 (Forward)', '3 (Pivot)', '4 (Back)'],
    stats: [
      { key: 'handicap', label: 'Handicap', type: 'number' },
      { key: 'goals', label: 'Goals', type: 'number' },
      { key: 'club', label: 'Club', type: 'text' }
    ]
  },
  squash: {
    name: 'Squash',
    icon: '🎾',
    positions: ['Singles', 'Doubles'],
    stats: [
      { key: 'ranking', label: 'Ranking', type: 'text' },
      { key: 'wins', label: 'Match Wins', type: 'number' },
      { key: 'losses', label: 'Losses', type: 'number' }
    ]
  },
  handball: {
    name: 'Handball',
    icon: '🤾',
    positions: ['Goalkeeper', 'Left Wing', 'Right Wing', 'Left Back', 'Right Back', 'Center Back', 'Pivot'],
    stats: [
      { key: 'goals', label: 'Goals', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'saves', label: 'Saves', type: 'number' }
    ]
  }
};

const GRADUATION_YEARS = [];
const currentYear = new Date().getFullYear();
for (let i = currentYear; i <= currentYear + 6; i++) {
  GRADUATION_YEARS.push(i);
}

// ==================== LOCAL STORAGE MANAGEMENT ====================

const STORAGE_KEY = 'athletehub_athletes';
const POSTS_KEY = 'athletehub_posts';
const FOLLOWS_KEY = 'athletehub_follows';
const ACCOUNTS_KEY = 'athletehub_accounts';
const CURRENT_ACCOUNT_KEY = 'athletehub_current_account';
const ADMIN_EMAILS = ['ianlin.bts@gmail.com'];
const ACTIVE_PROFILE_KEY = 'athletehub_active_profile';
const AWARDS_KEY = 'athletehub_awards';
const BOOKMARKS_KEY = 'athletehub_bookmarks';
const MESSAGES_KEY = 'athletehub_messages';
const CONVERSATIONS_KEY = 'athletehub_conversations';
const WATCHLIST_KEY = 'athletehub_watchlist';
const CLUBS_KEY = 'athletehub_clubs';
const CLUB_EVENTS_KEY = 'athletehub_club_events';
const CLUB_MEMBERSHIPS_KEY = 'athletehub_club_memberships';
const TRAINING_PLANS_KEY = 'athletehub_training_plans';
const STREAKS_KEY = 'athletehub_streaks';

// Video upload constraints
const MAX_VIDEO_DURATION = 120; // 2 minutes in seconds
const MAX_VIDEO_SIZE_MB = 50; // Max file size in MB

// Account Types Configuration
const ACCOUNT_TYPES = {
  athlete: {
    name: 'Athlete',
    icon: '🏃',
    description: 'Showcase your talent and get recruited',
    canCreateProfiles: true,
    canScout: false,
    canRecruit: false
  },
  scout: {
    name: 'Scout',
    icon: '🔍',
    description: 'Discover and recruit top talent',
    canCreateProfiles: false,
    canScout: true,
    canRecruit: true,
    features: ['Talent Search', 'Watchlists', 'Contact Athletes', 'Analytics']
  },
  coach: {
    name: 'Coach',
    icon: '📋',
    description: 'Build and manage your team',
    canCreateProfiles: true,
    canScout: true,
    canRecruit: true,
    features: ['Team Management', 'Recruit Athletes', 'Post Opportunities']
  },
  parent: {
    name: 'Parent/Guardian',
    icon: '👨‍👩‍👧',
    description: 'Support and manage your athlete',
    canCreateProfiles: true,
    canScout: false,
    canRecruit: false,
    features: ['Manage Athlete Profile', 'Track Progress', 'Connect with Coaches']
  }
};

// ==================== PLAYER OF THE DAY ALGORITHM ====================

/*
 * Scoring Algorithm Breakdown:
 * - Performance Score (50%): Based on sport-specific stats
 * - Social Score (30%): Followers, post likes, engagement
 * - Activity Score (20%): Recent posts, profile completeness
 *
 * Awards are calculated daily for each sport
 */

function getAwards() {
  const data = localStorage.getItem(AWARDS_KEY);
  return data ? JSON.parse(data) : {};
}

function saveAwards(awards) {
  localStorage.setItem(AWARDS_KEY, JSON.stringify(awards));
}

function getTodayKey() {
  return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
}

function getPlayerOfTheDay(sport) {
  const today = getTodayKey();
  const awards = getAwards();

  // Check if we already have today's award for this sport
  if (awards[today] && awards[today][sport]) {
    const awardedAthlete = getAthleteById(awards[today][sport].athleteId);
    if (awardedAthlete) {
      return { ...awards[today][sport], athlete: awardedAthlete };
    }
  }

  // Calculate new award
  return calculatePlayerOfTheDay(sport);
}

function calculatePlayerOfTheDay(sport) {
  const athletes = getAthletes().filter(a => a.sport === sport);

  if (athletes.length === 0) return null;

  // Calculate scores for each athlete
  const scoredAthletes = athletes.map(athlete => {
    const performanceScore = calculatePerformanceScore(athlete);
    const socialScore = calculateSocialScore(athlete);
    const activityScore = calculateActivityScore(athlete);

    // Weighted total (out of 100)
    const totalScore = (performanceScore * 0.5) + (socialScore * 0.3) + (activityScore * 0.2);

    return {
      athlete,
      performanceScore,
      socialScore,
      activityScore,
      totalScore
    };
  });

  // Sort by total score
  scoredAthletes.sort((a, b) => b.totalScore - a.totalScore);

  const winner = scoredAthletes[0];
  if (!winner) return null;

  // Save the award
  const today = getTodayKey();
  const awards = getAwards();

  if (!awards[today]) awards[today] = {};

  awards[today][sport] = {
    athleteId: winner.athlete.id,
    totalScore: Math.round(winner.totalScore),
    performanceScore: Math.round(winner.performanceScore),
    socialScore: Math.round(winner.socialScore),
    activityScore: Math.round(winner.activityScore),
    awardedAt: new Date().toISOString()
  };

  saveAwards(awards);

  return { ...awards[today][sport], athlete: winner.athlete };
}

function calculatePerformanceScore(athlete) {
  if (!athlete.stats) return 0;

  const statFields = getStatFields(athlete.sport);
  if (statFields.length === 0) return 50; // Default middle score if no stats defined

  let totalStatValue = 0;
  let statCount = 0;

  // Sport-specific stat weights
  const statWeights = {
    // Soccer
    goals: 10, assists: 8, saves: 7, cleanSheets: 15, minutesPlayed: 0.01,
    // Basketball
    points: 1, rebounds: 3, steals: 5, blocks: 5,
    // Football
    passingYards: 0.02, rushingYards: 0.03, touchdowns: 10, tackles: 3, interceptions: 8,
    // Baseball
    battingAvg: 200, homeRuns: 8, rbis: 2, era: -10, strikeouts: 1,
    // Volleyball
    kills: 3, digs: 2, aces: 5,
    // Track - handle differently
    pr1: 0, pr2: 0, event1: 0, event2: 0
  };

  for (const field of statFields) {
    const value = parseFloat(athlete.stats[field.key]) || 0;
    const weight = statWeights[field.key] || 1;

    if (value && weight) {
      totalStatValue += value * weight;
      statCount++;
    }
  }

  if (statCount === 0) return 25;

  // Normalize to 0-100 scale (approximate)
  const avgStatValue = totalStatValue / statCount;
  return Math.min(100, Math.max(0, avgStatValue * 2));
}

function calculateSocialScore(athlete) {
  const followers = getFollowerCount(athlete.id);
  const posts = getPostsByAthlete(athlete.id);

  // Calculate total likes and comments on posts
  let totalLikes = 0;
  let totalComments = 0;

  posts.forEach(post => {
    totalLikes += post.likes?.length || 0;
    totalComments += post.comments?.length || 0;
  });

  // Scoring formula:
  // - Each follower: 2 points
  // - Each like: 1 point
  // - Each comment: 3 points
  // Cap at 100

  const rawScore = (followers * 2) + (totalLikes * 1) + (totalComments * 3);

  // Logarithmic scaling for fairness (so huge accounts don't dominate)
  const scaledScore = Math.log10(rawScore + 1) * 25;

  return Math.min(100, Math.max(0, scaledScore));
}

function calculateActivityScore(athlete) {
  let score = 0;

  // Profile completeness (up to 40 points)
  if (athlete.photo) score += 10;
  if (athlete.bio && athlete.bio.length > 50) score += 10;
  if (athlete.videos && athlete.videos.length > 0) score += 10;
  if (athlete.stats && Object.keys(athlete.stats).length > 0) score += 10;

  // Recent activity (up to 60 points)
  const posts = getPostsByAthlete(athlete.id);
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const recentPosts = posts.filter(p => new Date(p.createdAt) > weekAgo);

  // Points for recent posts (max 30 points)
  score += Math.min(30, recentPosts.length * 10);

  // Points for recent video posts (max 30 points)
  const recentVideoPosts = recentPosts.filter(p => p.videoUrl);
  score += Math.min(30, recentVideoPosts.length * 15);

  return Math.min(100, score);
}

function getAllPlayersOfTheDay() {
  const awards = {};

  for (const sportKey of Object.keys(SPORTS_CONFIG)) {
    const award = getPlayerOfTheDay(sportKey);
    if (award) {
      awards[sportKey] = award;
    }
  }

  return awards;
}

function getAwardHistory(sport = null, limit = 7) {
  const awards = getAwards();
  const history = [];

  // Get sorted dates (most recent first)
  const dates = Object.keys(awards).sort((a, b) => new Date(b) - new Date(a));

  for (const date of dates.slice(0, limit)) {
    if (sport) {
      if (awards[date][sport]) {
        const athlete = getAthleteById(awards[date][sport].athleteId);
        if (athlete) {
          history.push({
            date,
            sport,
            ...awards[date][sport],
            athlete
          });
        }
      }
    } else {
      // All sports for this date
      for (const [sportKey, award] of Object.entries(awards[date])) {
        const athlete = getAthleteById(award.athleteId);
        if (athlete) {
          history.push({
            date,
            sport: sportKey,
            ...award,
            athlete
          });
        }
      }
    }
  }

  return history;
}

function hasWonAwardToday(athleteId) {
  const today = getTodayKey();
  const awards = getAwards();

  if (!awards[today]) return false;

  for (const sport of Object.keys(awards[today])) {
    if (awards[today][sport].athleteId === athleteId) {
      return { sport, award: awards[today][sport] };
    }
  }

  return false;
}

function getAthleteAwardCount(athleteId) {
  const awards = getAwards();
  let count = 0;

  for (const date of Object.keys(awards)) {
    for (const sport of Object.keys(awards[date])) {
      if (awards[date][sport].athleteId === athleteId) {
        count++;
      }
    }
  }

  return count;
}

// ==================== PLAYER OF THE DAY UI ====================

function renderPlayerOfTheDayCard(award, sport) {
  if (!award || !award.athlete) {
    return `
      <div class="potd-card potd-empty">
        <div class="potd-sport-badge">${getSportEmoji(sport)} ${getSportName(sport)}</div>
        <div class="potd-empty-content">
          <span class="potd-empty-icon">🏆</span>
          <p>No winner yet today</p>
          <span class="potd-empty-hint">Be the first to compete!</span>
        </div>
      </div>
    `;
  }

  const athlete = award.athlete;
  const awardCount = getAthleteAwardCount(athlete.id);

  return `
    <div class="potd-card" data-sport="${sport}">
      <div class="potd-header">
        <div class="potd-sport-badge">${getSportEmoji(sport)} ${getSportName(sport)}</div>
        <div class="potd-trophy">🏆</div>
      </div>

      <div class="potd-winner">
        <a href="profile.html?id=${athlete.id}" class="potd-photo-link">
          ${athlete.photo
            ? `<img src="${athlete.photo}" alt="${athlete.name}" class="potd-photo">`
            : `<div class="potd-photo-placeholder">${getSportEmoji(sport)}</div>`
          }
          <div class="potd-crown">👑</div>
        </a>

        <div class="potd-info">
          <a href="profile.html?id=${athlete.id}" class="potd-name">${escapeHtml(athlete.name)}</a>
          <p class="potd-position">${athlete.position || 'Athlete'}</p>
          ${awardCount > 1 ? `<span class="potd-streak">🔥 ${awardCount}x Winner</span>` : ''}
        </div>
      </div>

      <div class="potd-scores">
        <div class="potd-score-item">
          <div class="potd-score-bar">
            <div class="potd-score-fill performance" style="width: ${award.performanceScore}%"></div>
          </div>
          <span class="potd-score-label">Performance</span>
        </div>
        <div class="potd-score-item">
          <div class="potd-score-bar">
            <div class="potd-score-fill social" style="width: ${award.socialScore}%"></div>
          </div>
          <span class="potd-score-label">Social</span>
        </div>
        <div class="potd-score-item">
          <div class="potd-score-bar">
            <div class="potd-score-fill activity" style="width: ${award.activityScore}%"></div>
          </div>
          <span class="potd-score-label">Activity</span>
        </div>
      </div>

      <div class="potd-total">
        <span class="potd-total-label">Total Score</span>
        <span class="potd-total-value">${award.totalScore}</span>
      </div>
    </div>
  `;
}

function renderAllPlayersOfTheDay() {
  const container = document.getElementById('potdContainer');
  if (!container) return;

  const awards = getAllPlayersOfTheDay();
  const sports = Object.keys(SPORTS_CONFIG);

  container.innerHTML = sports.map(sport => {
    return renderPlayerOfTheDayCard(awards[sport], sport);
  }).join('');
}

function renderPOTDSection() {
  const section = document.getElementById('potdSection');
  if (!section) return;

  const awards = getAllPlayersOfTheDay();
  const hasAnyWinners = Object.values(awards).some(a => a && a.athlete);

  if (!hasAnyWinners) {
    // Still show the section but with placeholder content
  }

  const sports = Object.keys(SPORTS_CONFIG);

  section.innerHTML = `
    <div class="potd-section-header">
      <div class="potd-title">
        <span class="potd-title-icon">🏆</span>
        <h2>Players of the Day</h2>
      </div>
      <p class="potd-subtitle">Top performers across all sports, updated daily</p>
    </div>

    <div class="potd-grid" id="potdContainer">
      ${sports.map(sport => renderPlayerOfTheDayCard(awards[sport], sport)).join('')}
    </div>

    <div class="potd-info-banner">
      <div class="potd-info-icon">ℹ️</div>
      <div class="potd-info-text">
        <strong>How are winners chosen?</strong>
        <p>Our algorithm considers performance stats (50%), social engagement (30%), and recent activity (20%) to find the top athlete in each sport every day.</p>
      </div>
    </div>
  `;
}

function renderPOTDBadge(athleteId) {
  const todayAward = hasWonAwardToday(athleteId);
  if (!todayAward) return '';

  return `
    <div class="potd-badge" title="Player of the Day - ${getSportName(todayAward.sport)}">
      <span class="potd-badge-icon">🏆</span>
      <span class="potd-badge-text">Player of the Day</span>
    </div>
  `;
}

function getSportEmoji(sport) {
  const emojis = {
    soccer: '⚽',
    basketball: '🏀',
    football: '🏈',
    baseball: '⚾',
    volleyball: '🏐',
    trackField: '🏃'
  };
  return emojis[sport] || '🏆';
}

// ==================== ACCOUNT MANAGEMENT ====================

function getAccounts() {
  const data = localStorage.getItem(ACCOUNTS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function getAccountByEmail(email) {
  const accounts = getAccounts();
  return accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
}

function getAccountById(id) {
  const accounts = getAccounts();
  return accounts.find(a => a.id === id);
}

function createAccount(email, password, name, accountType = 'athlete') {
  const accounts = getAccounts();

  // Check if email already exists
  if (getAccountByEmail(email)) {
    return { error: 'An account with this email already exists' };
  }

  const account = {
    id: 'acc_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    email: email.toLowerCase(),
    password: hashPassword(password), // Simple hash for demo
    name: name,
    accountType: accountType, // athlete, scout, coach, parent
    isAdmin: ADMIN_EMAILS.includes(email.toLowerCase()),
    photo: null,
    profiles: [], // Array of profile IDs
    watchlist: [], // For scouts/coaches - athlete IDs they're watching
    createdAt: new Date().toISOString()
  };

  accounts.push(account);
  saveAccounts(accounts);
  return { success: true, account };
}

function getAccountType(accountId) {
  const account = getAccountById(accountId);
  if (!account) return null;
  return ACCOUNT_TYPES[account.accountType] || ACCOUNT_TYPES.athlete;
}

function canUserCreateProfiles() {
  const account = getCurrentAccount();
  if (!account) return false;
  if (isAdmin()) return true; // admins can always create profiles
  const typeConfig = ACCOUNT_TYPES[account.accountType];
  return typeConfig ? typeConfig.canCreateProfiles : true;
}

function canUserScout() {
  const account = getCurrentAccount();
  if (!account) return false;
  if (isAdmin()) return true; // admins can always access scout features
  const typeConfig = ACCOUNT_TYPES[account.accountType];
  return typeConfig ? typeConfig.canScout : false;
}

function getAdminViewMode() {
  return localStorage.getItem('athletepro_admin_view') || 'player';
}

function setAdminViewMode(mode) {
  localStorage.setItem('athletepro_admin_view', mode);
}

function loginAccount(email, password) {
  const account = getAccountByEmail(email);

  if (!account) {
    return { error: 'No account found with this email' };
  }

  if (account.password !== hashPassword(password)) {
    return { error: 'Incorrect password' };
  }

  setCurrentAccount(account.id);
  // Streak is updated on dashboard visit; just ensure it's initialized here
  updateStreak(account.id);
  return { success: true, account };
}

function logoutAccount() {
  localStorage.removeItem(CURRENT_ACCOUNT_KEY);
  localStorage.removeItem(ACTIVE_PROFILE_KEY);
}

function getCurrentAccount() {
  const accountId = localStorage.getItem(CURRENT_ACCOUNT_KEY);
  if (!accountId) return null;
  return getAccountById(accountId);
}

function setCurrentAccount(accountId) {
  localStorage.setItem(CURRENT_ACCOUNT_KEY, accountId);
}

function updateAccount(accountId, updates) {
  const accounts = getAccounts();
  const index = accounts.findIndex(a => a.id === accountId);

  if (index >= 0) {
    accounts[index] = { ...accounts[index], ...updates };
    saveAccounts(accounts);
    return accounts[index];
  }
  return null;
}

function hashPassword(password) {
  // Simple hash for demo - in production use proper hashing
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return 'hash_' + Math.abs(hash).toString(36);
}

function isLoggedIn() {
  return getCurrentAccount() !== null;
}

function isAdmin() {
  const account = getCurrentAccount();
  return !!(account && (account.isAdmin === true || ADMIN_EMAILS.includes(account.email)));
}

// ==================== PROFILE MANAGEMENT ====================

function getAthletes() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAthletes(athletes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(athletes));
}

function getAthleteById(id) {
  const athletes = getAthletes();
  return athletes.find(a => a.id === id);
}

function getProfilesByAccount(accountId) {
  const athletes = getAthletes();
  return athletes.filter(a => a.accountId === accountId);
}

function saveAthlete(athlete) {
  const athletes = getAthletes();
  const index = athletes.findIndex(a => a.id === athlete.id);
  const account = getCurrentAccount();

  if (index >= 0) {
    athletes[index] = athlete;
  } else {
    athlete.id = generateId();
    athlete.accountId = account ? account.id : null;
    athlete.createdAt = new Date().toISOString();
    athletes.push(athlete);

    // Add profile to account
    if (account) {
      const accounts = getAccounts();
      const accIndex = accounts.findIndex(a => a.id === account.id);
      if (accIndex >= 0) {
        accounts[accIndex].profiles.push(athlete.id);
        saveAccounts(accounts);
      }
    }
  }

  athlete.updatedAt = new Date().toISOString();
  saveAthletes(athletes);
  return athlete;
}

function deleteAthlete(id) {
  const athletes = getAthletes().filter(a => a.id !== id);
  saveAthletes(athletes);

  // Remove from account profiles
  const account = getCurrentAccount();
  if (account) {
    const accounts = getAccounts();
    const accIndex = accounts.findIndex(a => a.id === account.id);
    if (accIndex >= 0) {
      accounts[accIndex].profiles = accounts[accIndex].profiles.filter(p => p !== id);
      saveAccounts(accounts);
    }
  }
}

function generateId() {
  return 'ath_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// ==================== ACTIVE PROFILE MANAGEMENT ====================

function getActiveProfile() {
  const profileId = localStorage.getItem(ACTIVE_PROFILE_KEY);
  if (!profileId) return null;
  return getAthleteById(profileId);
}

function setActiveProfile(profileId) {
  localStorage.setItem(ACTIVE_PROFILE_KEY, profileId);
}

function clearActiveProfile() {
  localStorage.removeItem(ACTIVE_PROFILE_KEY);
}

// Legacy support
function getCurrentUser() {
  return getActiveProfile();
}

function setCurrentUser(profileId) {
  setActiveProfile(profileId);
}

// ==================== POSTS MANAGEMENT ====================

function getPosts() {
  const data = localStorage.getItem(POSTS_KEY);
  return data ? JSON.parse(data) : [];
}

function savePosts(posts) {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

function getPostById(id) {
  const posts = getPosts();
  return posts.find(p => p.id === id);
}

function createPost(post) {
  const posts = getPosts();
  post.id = 'post_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  post.createdAt = new Date().toISOString();
  post.likes = [];
  post.upvotes = [];
  post.downvotes = [];
  post.comments = [];
  post.views = 0;
  post.isReel = !!(post.videoUrl || post.videoData); // Mark as reel if it has video
  post.videoDuration = post.videoDuration || null; // Duration in seconds
  posts.unshift(post);
  savePosts(posts);
  return post;
}

// ==================== BOOKMARKS MANAGEMENT ====================

function getBookmarks(userId) {
  const data = localStorage.getItem(BOOKMARKS_KEY);
  const bookmarks = data ? JSON.parse(data) : {};
  return bookmarks[userId] || [];
}

function saveBookmarks(bookmarks) {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
}

function toggleBookmark(postId, userId) {
  const data = localStorage.getItem(BOOKMARKS_KEY);
  const bookmarks = data ? JSON.parse(data) : {};

  if (!bookmarks[userId]) bookmarks[userId] = [];

  const index = bookmarks[userId].indexOf(postId);
  if (index > -1) {
    bookmarks[userId].splice(index, 1);
  } else {
    bookmarks[userId].push(postId);
  }

  saveBookmarks(bookmarks);
  return index === -1; // Returns true if bookmarked, false if removed
}

function isBookmarked(postId, userId) {
  const bookmarks = getBookmarks(userId);
  return bookmarks.includes(postId);
}

function getBookmarkedPosts(userId) {
  const bookmarks = getBookmarks(userId);
  const posts = getPosts();
  return posts.filter(p => bookmarks.includes(p.id));
}

function getReelsPosts() {
  const posts = getPosts();
  return posts.filter(p => p.isReel || p.videoUrl).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function incrementPostViews(postId) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.views = (post.views || 0) + 1;
    savePosts(posts);
  }
}

function deletePost(postId) {
  const posts = getPosts().filter(p => p.id !== postId);
  savePosts(posts);
}

function getPostsByAthlete(athleteId) {
  const posts = getPosts();
  return posts.filter(p => p.authorId === athleteId);
}

function getFeedPosts(userId) {
  const posts = getPosts();
  const following = getFollowing(userId);
  const followingIds = [...following, userId];

  return posts.filter(p => followingIds.includes(p.authorId))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getExplorePosts() {
  const posts = getPosts();
  return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// ==================== MESSAGING SYSTEM ====================

function getConversations() {
  const data = localStorage.getItem(CONVERSATIONS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveConversations(conversations) {
  localStorage.setItem(CONVERSATIONS_KEY, JSON.stringify(conversations));
}

function getMessages() {
  const data = localStorage.getItem(MESSAGES_KEY);
  return data ? JSON.parse(data) : [];
}

function saveMessages(messages) {
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
}

// ==================== STREAKS ====================

function getStreakData(accountId) {
  const data = JSON.parse(localStorage.getItem(STREAKS_KEY) || '{}');
  return data[accountId] || { current: 0, longest: 0, lastActive: null };
}

function updateStreak(accountId) {
  const all = JSON.parse(localStorage.getItem(STREAKS_KEY) || '{}');
  const streak = all[accountId] || { current: 0, longest: 0, lastActive: null };

  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (streak.lastActive === today) return streak; // already counted today

  const isConsecutive = streak.lastActive === yesterday;
  streak.current = isConsecutive ? streak.current + 1 : 1;
  streak.longest = Math.max(streak.longest, streak.current);
  streak.lastActive = today;

  all[accountId] = streak;
  localStorage.setItem(STREAKS_KEY, JSON.stringify(all));
  return streak;
}

function getStreakEmoji(days) {
  if (days >= 100) return '💎';
  if (days >= 30)  return '🏆';
  if (days >= 14)  return '⚡';
  if (days >= 7)   return '🔥';
  if (days >= 3)   return '✨';
  return '🌱';
}

function getStreakMilestoneMessage(days) {
  const milestones = { 3: 'On a roll!', 7: '1-week streak! You\'re committed!', 14: '2-week streak! Elite level focus!', 30: '30-day streak! LEGENDARY!', 100: '100 days! Absolute GOAT!' };
  return milestones[days] || null;
}

function checkAndShowStreakToast(streak) {
  const msg = getStreakMilestoneMessage(streak.current);
  if (msg) {
    showToast(`${getStreakEmoji(streak.current)} ${msg} (${streak.current} days)`, 'success');
  } else if (streak.current > 1) {
    showToast(`${getStreakEmoji(streak.current)} ${streak.current}-day streak! Keep it up!`, 'success');
  }
}

function getConversationById(conversationId) {
  const conversations = getConversations();
  return conversations.find(c => c.id === conversationId);
}

function getConversationBetweenUsers(userId1, userId2) {
  const conversations = getConversations();
  return conversations.find(c =>
    !c.isGroup &&
    c.participants.length === 2 &&
    c.participants.includes(userId1) &&
    c.participants.includes(userId2)
  );
}

function createGroupConversation(participantIds, groupName = null) {
  const isGroup = participantIds.length > 2;
  if (!isGroup) {
    const existing = getConversationBetweenUsers(participantIds[0], participantIds[1]);
    if (existing) return existing;
  }
  const conversations = getConversations();
  const unreadCount = {};
  participantIds.forEach(id => { unreadCount[id] = 0; });
  const conversation = {
    id: 'conv_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    participants: participantIds,
    isGroup,
    groupName: isGroup ? (groupName || 'Group Chat') : null,
    lastMessage: null,
    lastMessageAt: new Date().toISOString(),
    unreadCount,
    createdAt: new Date().toISOString()
  };
  conversations.push(conversation);
  saveConversations(conversations);
  return conversation;
}

function getConversationsForUser(accountId) {
  const conversations = getConversations();
  return conversations
    .filter(c => c.participants.includes(accountId))
    .sort((a, b) => new Date(b.lastMessageAt) - new Date(a.lastMessageAt));
}

function createConversation(participant1, participant2) {
  const existing = getConversationBetweenUsers(participant1, participant2);
  if (existing) return existing;

  const conversations = getConversations();
  const conversation = {
    id: 'conv_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    participants: [participant1, participant2],
    lastMessage: null,
    lastMessageAt: new Date().toISOString(),
    unreadCount: { [participant1]: 0, [participant2]: 0 },
    createdAt: new Date().toISOString()
  };

  conversations.push(conversation);
  saveConversations(conversations);
  return conversation;
}

function sendMessage(conversationId, senderId, content, attachments = []) {
  const messages = getMessages();
  const conversations = getConversations();
  const convIndex = conversations.findIndex(c => c.id === conversationId);

  if (convIndex === -1) return null;

  const message = {
    id: 'msg_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    conversationId,
    senderId,
    content,
    attachments,
    read: false,
    createdAt: new Date().toISOString()
  };

  messages.push(message);
  saveMessages(messages);

  // Update conversation
  const conversation = conversations[convIndex];
  conversation.lastMessage = { content, senderId };
  conversation.lastMessageAt = message.createdAt;

  // Increment unread for other participants
  conversation.participants.forEach(p => {
    if (p !== senderId) {
      conversation.unreadCount[p] = (conversation.unreadCount[p] || 0) + 1;
    }
  });

  saveConversations(conversations);
  return message;
}

function getMessagesForConversation(conversationId) {
  const messages = getMessages();
  return messages
    .filter(m => m.conversationId === conversationId)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

function markConversationAsRead(conversationId, userId) {
  const messages = getMessages();
  const conversations = getConversations();

  // Mark all messages in conversation as read for this user
  messages.forEach(m => {
    if (m.conversationId === conversationId && m.senderId !== userId) {
      m.read = true;
    }
  });
  saveMessages(messages);

  // Reset unread count for user
  const convIndex = conversations.findIndex(c => c.id === conversationId);
  if (convIndex >= 0) {
    conversations[convIndex].unreadCount[userId] = 0;
    saveConversations(conversations);
  }
}

function getTotalUnreadCount(accountId) {
  const conversations = getConversationsForUser(accountId);
  return conversations.reduce((total, conv) => total + (conv.unreadCount[accountId] || 0), 0);
}

function deleteConversation(conversationId, userId) {
  const conversations = getConversations();
  const messages = getMessages();

  // Remove conversation
  const filteredConversations = conversations.filter(c => c.id !== conversationId);
  saveConversations(filteredConversations);

  // Remove messages
  const filteredMessages = messages.filter(m => m.conversationId !== conversationId);
  saveMessages(filteredMessages);
}

// ==================== WATCHLIST MANAGEMENT ====================

function getWatchlist(accountId) {
  const data = localStorage.getItem(WATCHLIST_KEY);
  const watchlists = data ? JSON.parse(data) : {};
  return watchlists[accountId] || [];
}

function saveWatchlists(watchlists) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlists));
}

function addToWatchlist(accountId, athleteId, notes = '') {
  const data = localStorage.getItem(WATCHLIST_KEY);
  const watchlists = data ? JSON.parse(data) : {};

  if (!watchlists[accountId]) watchlists[accountId] = [];

  const existing = watchlists[accountId].find(w => w.athleteId === athleteId);
  if (existing) return false;

  watchlists[accountId].push({
    athleteId,
    notes,
    addedAt: new Date().toISOString()
  });

  saveWatchlists(watchlists);
  return true;
}

function removeFromWatchlist(accountId, athleteId) {
  const data = localStorage.getItem(WATCHLIST_KEY);
  const watchlists = data ? JSON.parse(data) : {};

  if (!watchlists[accountId]) return false;

  watchlists[accountId] = watchlists[accountId].filter(w => w.athleteId !== athleteId);
  saveWatchlists(watchlists);
  return true;
}

function isInWatchlist(accountId, athleteId) {
  const watchlist = getWatchlist(accountId);
  return watchlist.some(w => w.athleteId === athleteId);
}

function updateWatchlistNotes(accountId, athleteId, notes) {
  const data = localStorage.getItem(WATCHLIST_KEY);
  const watchlists = data ? JSON.parse(data) : {};

  if (!watchlists[accountId]) return false;

  const item = watchlists[accountId].find(w => w.athleteId === athleteId);
  if (item) {
    item.notes = notes;
    item.updatedAt = new Date().toISOString();
    saveWatchlists(watchlists);
    return true;
  }
  return false;
}

function getWatchlistAthletes(accountId) {
  const watchlist = getWatchlist(accountId);
  return watchlist.map(w => ({
    ...w,
    athlete: getAthleteById(w.athleteId)
  })).filter(w => w.athlete);
}

// ==================== CLUBS MANAGEMENT ====================

function getClubs() {
  const data = localStorage.getItem(CLUBS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveClubs(clubs) {
  localStorage.setItem(CLUBS_KEY, JSON.stringify(clubs));
}

function getClubById(clubId) {
  const clubs = getClubs();
  return clubs.find(c => c.id === clubId);
}

function getClubsByOwner(accountId) {
  const clubs = getClubs();
  return clubs.filter(c => c.ownerId === accountId);
}

function getClubsByCoach(accountId) {
  const clubs = getClubs();
  return clubs.filter(c => c.coaches && c.coaches.includes(accountId));
}

function createClub(clubData) {
  const clubs = getClubs();
  const club = {
    id: 'club_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    ...clubData,
    members: [],
    coaches: clubData.coaches || [],
    pendingRequests: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  clubs.push(club);
  saveClubs(clubs);
  return club;
}

function updateClub(clubId, updates) {
  const clubs = getClubs();
  const index = clubs.findIndex(c => c.id === clubId);
  if (index >= 0) {
    clubs[index] = { ...clubs[index], ...updates, updatedAt: new Date().toISOString() };
    saveClubs(clubs);
    return clubs[index];
  }
  return null;
}

function deleteClub(clubId) {
  const clubs = getClubs().filter(c => c.id !== clubId);
  saveClubs(clubs);
  // Also delete related events and memberships
  const events = getClubEvents().filter(e => e.clubId !== clubId);
  saveClubEvents(events);
  const memberships = getClubMemberships().filter(m => m.clubId !== clubId);
  saveClubMemberships(memberships);
}

function canManageClub(accountId, clubId) {
  const club = getClubById(clubId);
  if (!club) return false;
  return club.ownerId === accountId || (club.coaches && club.coaches.includes(accountId));
}

function isClubOwner(accountId, clubId) {
  const club = getClubById(clubId);
  return club && club.ownerId === accountId;
}

// ==================== CLUB MEMBERSHIPS ====================

function getClubMemberships() {
  const data = localStorage.getItem(CLUB_MEMBERSHIPS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveClubMemberships(memberships) {
  localStorage.setItem(CLUB_MEMBERSHIPS_KEY, JSON.stringify(memberships));
}

function getMembershipsByClub(clubId) {
  const memberships = getClubMemberships();
  return memberships.filter(m => m.clubId === clubId && m.status === 'active');
}

function getMembershipsByAthlete(athleteId) {
  const memberships = getClubMemberships();
  return memberships.filter(m => m.athleteId === athleteId && m.status === 'active');
}

function getClubsForAthlete(athleteId) {
  const memberships = getMembershipsByAthlete(athleteId);
  return memberships.map(m => ({
    ...m,
    club: getClubById(m.clubId)
  })).filter(m => m.club);
}

function joinClub(clubId, athleteId, accountId) {
  const memberships = getClubMemberships();
  const existing = memberships.find(m => m.clubId === clubId && m.athleteId === athleteId);
  if (existing) return existing;

  const club = getClubById(clubId);
  const membership = {
    id: 'mem_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    clubId,
    athleteId,
    accountId,
    status: club.requireApproval ? 'pending' : 'active',
    role: 'player',
    joinedAt: new Date().toISOString()
  };
  memberships.push(membership);
  saveClubMemberships(memberships);
  return membership;
}

function approveClubMember(membershipId) {
  const memberships = getClubMemberships();
  const index = memberships.findIndex(m => m.id === membershipId);
  if (index >= 0) {
    memberships[index].status = 'active';
    memberships[index].approvedAt = new Date().toISOString();
    saveClubMemberships(memberships);
    return memberships[index];
  }
  return null;
}

function removeClubMember(clubId, athleteId) {
  const memberships = getClubMemberships().filter(
    m => !(m.clubId === clubId && m.athleteId === athleteId)
  );
  saveClubMemberships(memberships);
}

function leaveClub(clubId, athleteId) {
  removeClubMember(clubId, athleteId);
}

function getPendingMemberships(clubId) {
  const memberships = getClubMemberships();
  return memberships.filter(m => m.clubId === clubId && m.status === 'pending');
}

function isClubMember(clubId, athleteId) {
  const memberships = getClubMemberships();
  return memberships.some(m => m.clubId === clubId && m.athleteId === athleteId && m.status === 'active');
}

// ==================== CLUB EVENTS ====================

function getClubEvents() {
  const data = localStorage.getItem(CLUB_EVENTS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveClubEvents(events) {
  localStorage.setItem(CLUB_EVENTS_KEY, JSON.stringify(events));
}

function getEventsByClub(clubId) {
  const events = getClubEvents();
  return events.filter(e => e.clubId === clubId)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

function getUpcomingEventsByClub(clubId) {
  const now = new Date();
  return getEventsByClub(clubId).filter(e => new Date(e.startDate) >= now);
}

function getEventsForAthlete(athleteId) {
  const clubs = getClubsForAthlete(athleteId);
  const clubIds = clubs.map(c => c.clubId);
  const events = getClubEvents();
  return events.filter(e => clubIds.includes(e.clubId))
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

function getUpcomingEventsForAthlete(athleteId) {
  const now = new Date();
  return getEventsForAthlete(athleteId).filter(e => new Date(e.startDate) >= now);
}

function createClubEvent(eventData) {
  const events = getClubEvents();
  const event = {
    id: 'evt_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    ...eventData,
    attendees: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  events.push(event);
  saveClubEvents(events);
  return event;
}

function updateClubEvent(eventId, updates) {
  const events = getClubEvents();
  const index = events.findIndex(e => e.id === eventId);
  if (index >= 0) {
    events[index] = { ...events[index], ...updates, updatedAt: new Date().toISOString() };
    saveClubEvents(events);
    return events[index];
  }
  return null;
}

function deleteClubEvent(eventId) {
  const events = getClubEvents().filter(e => e.id !== eventId);
  saveClubEvents(events);
}

function getClubEventById(eventId) {
  const events = getClubEvents();
  return events.find(e => e.id === eventId);
}

function toggleEventAttendance(eventId, athleteId) {
  const events = getClubEvents();
  const index = events.findIndex(e => e.id === eventId);
  if (index >= 0) {
    if (!events[index].attendees) events[index].attendees = [];
    const attendeeIndex = events[index].attendees.indexOf(athleteId);
    if (attendeeIndex > -1) {
      events[index].attendees.splice(attendeeIndex, 1);
    } else {
      events[index].attendees.push(athleteId);
    }
    saveClubEvents(events);
    return events[index];
  }
  return null;
}

// ==================== TRAINING PLANS ====================

function getTrainingPlans() {
  const data = localStorage.getItem(TRAINING_PLANS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTrainingPlans(plans) {
  localStorage.setItem(TRAINING_PLANS_KEY, JSON.stringify(plans));
}

function getTrainingPlanById(planId) {
  const plans = getTrainingPlans();
  return plans.find(p => p.id === planId);
}

function getTrainingPlansByCreator(accountId) {
  const plans = getTrainingPlans();
  return plans.filter(p => p.creatorId === accountId);
}

function getPublicTrainingPlans() {
  const plans = getTrainingPlans();
  return plans.filter(p => p.isPublic);
}

function getTrainingPlansBySport(sport) {
  const plans = getTrainingPlans();
  return plans.filter(p => p.sport === sport && p.isPublic);
}

function createTrainingPlan(planData) {
  const plans = getTrainingPlans();
  const account = getCurrentAccount();
  const plan = {
    id: 'plan_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    creatorId: account.id,
    creatorName: account.name,
    ...planData,
    exercises: planData.exercises || [],
    subscribers: [],
    likes: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  plans.push(plan);
  saveTrainingPlans(plans);
  return plan;
}

function updateTrainingPlan(planId, updates) {
  const plans = getTrainingPlans();
  const index = plans.findIndex(p => p.id === planId);
  if (index >= 0) {
    plans[index] = { ...plans[index], ...updates, updatedAt: new Date().toISOString() };
    saveTrainingPlans(plans);
    return plans[index];
  }
  return null;
}

function deleteTrainingPlan(planId) {
  const plans = getTrainingPlans().filter(p => p.id !== planId);
  saveTrainingPlans(plans);
}

function subscribeToTrainingPlan(planId, accountId) {
  const plans = getTrainingPlans();
  const index = plans.findIndex(p => p.id === planId);
  if (index >= 0) {
    if (!plans[index].subscribers) plans[index].subscribers = [];
    if (!plans[index].subscribers.includes(accountId)) {
      plans[index].subscribers.push(accountId);
      saveTrainingPlans(plans);
    }
    return plans[index];
  }
  return null;
}

function unsubscribeFromTrainingPlan(planId, accountId) {
  const plans = getTrainingPlans();
  const index = plans.findIndex(p => p.id === planId);
  if (index >= 0) {
    if (plans[index].subscribers) {
      plans[index].subscribers = plans[index].subscribers.filter(id => id !== accountId);
      saveTrainingPlans(plans);
    }
    return plans[index];
  }
  return null;
}

function getSubscribedPlans(accountId) {
  const plans = getTrainingPlans();
  return plans.filter(p => p.subscribers && p.subscribers.includes(accountId));
}

function canCreateTrainingPlans() {
  const account = getCurrentAccount();
  if (!account) return false;
  return account.accountType === 'coach' || account.accountType === 'scout';
}

// ==================== LIKES MANAGEMENT ====================

function toggleLike(postId, userId) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);

  if (!post) return null;

  const likeIndex = post.likes.indexOf(userId);
  if (likeIndex > -1) {
    post.likes.splice(likeIndex, 1);
  } else {
    post.likes.push(userId);
  }

  savePosts(posts);
  return post;
}

function hasLiked(postId, userId) {
  const post = getPostById(postId);
  return post ? post.likes.includes(userId) : false;
}

// ==================== UPVOTE/DOWNVOTE SYSTEM ====================

function handleVote(postId, userId, voteType) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);

  if (!post) return null;

  // Initialize arrays if they don't exist (for older posts)
  if (!post.upvotes) post.upvotes = [];
  if (!post.downvotes) post.downvotes = [];

  const upvoteIndex = post.upvotes.indexOf(userId);
  const downvoteIndex = post.downvotes.indexOf(userId);

  if (voteType === 'up') {
    // Remove downvote if exists
    if (downvoteIndex > -1) {
      post.downvotes.splice(downvoteIndex, 1);
    }
    // Toggle upvote
    if (upvoteIndex > -1) {
      post.upvotes.splice(upvoteIndex, 1);
    } else {
      post.upvotes.push(userId);
    }
  } else if (voteType === 'down') {
    // Remove upvote if exists
    if (upvoteIndex > -1) {
      post.upvotes.splice(upvoteIndex, 1);
    }
    // Toggle downvote
    if (downvoteIndex > -1) {
      post.downvotes.splice(downvoteIndex, 1);
    } else {
      post.downvotes.push(userId);
    }
  }

  savePosts(posts);
  return post;
}

function getVoteStatus(postId, userId) {
  const post = getPostById(postId);
  if (!post) return { upvoted: false, downvoted: false, score: 0 };

  const upvotes = post.upvotes || [];
  const downvotes = post.downvotes || [];

  return {
    upvoted: upvotes.includes(userId),
    downvoted: downvotes.includes(userId),
    score: upvotes.length - downvotes.length
  };
}

function getPostScore(post) {
  const upvotes = post.upvotes?.length || 0;
  const downvotes = post.downvotes?.length || 0;
  return upvotes - downvotes;
}

// ==================== COMMENTS MANAGEMENT ====================

function addComment(postId, userId, content, replyToId = null) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);

  if (!post) return null;

  const comment = {
    id: 'cmt_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    authorId: userId,
    content: content,
    createdAt: new Date().toISOString(),
    replyToId: replyToId, // Parent comment ID if this is a reply
    likes: [],
    replies: []
  };

  // If it's a reply, add to parent comment's replies
  if (replyToId) {
    const parentComment = post.comments.find(c => c.id === replyToId);
    if (parentComment) {
      if (!parentComment.replies) parentComment.replies = [];
      parentComment.replies.push(comment);
    }
  } else {
    post.comments.push(comment);
  }
  savePosts(posts);
  return comment;
}

function deleteComment(postId, commentId) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);

  if (!post) return;

  post.comments = post.comments.filter(c => c.id !== commentId);
  savePosts(posts);
}

// ==================== FOLLOWS MANAGEMENT ====================

function getFollows() {
  const data = localStorage.getItem(FOLLOWS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveFollows(follows) {
  localStorage.setItem(FOLLOWS_KEY, JSON.stringify(follows));
}

function followAthlete(followerId, followingId) {
  if (followerId === followingId) return false;

  const follows = getFollows();
  const existingFollow = follows.find(f => f.followerId === followerId && f.followingId === followingId);

  if (existingFollow) return false;

  follows.push({
    followerId,
    followingId,
    createdAt: new Date().toISOString()
  });

  saveFollows(follows);
  return true;
}

function unfollowAthlete(followerId, followingId) {
  const follows = getFollows().filter(f => !(f.followerId === followerId && f.followingId === followingId));
  saveFollows(follows);
}

function isFollowing(followerId, followingId) {
  const follows = getFollows();
  return follows.some(f => f.followerId === followerId && f.followingId === followingId);
}

function getFollowers(athleteId) {
  const follows = getFollows();
  return follows.filter(f => f.followingId === athleteId).map(f => f.followerId);
}

function getFollowing(athleteId) {
  const follows = getFollows();
  return follows.filter(f => f.followerId === athleteId).map(f => f.followingId);
}

function getFollowerCount(athleteId) {
  return getFollowers(athleteId).length;
}

function getFollowingCount(athleteId) {
  return getFollowing(athleteId).length;
}

function isMutualFollow(userId1, userId2) {
  return isFollowing(userId1, userId2) && isFollowing(userId2, userId1);
}

function getMutualCount(athleteId) {
  const followers = getFollowers(athleteId);
  const following = getFollowing(athleteId);
  return followers.filter(id => following.includes(id)).length;
}

// Returns 'none' | 'following' | 'mutual'
function getFollowState(currentUserId, athleteId) {
  if (!isFollowing(currentUserId, athleteId)) return 'none';
  if (isMutualFollow(currentUserId, athleteId)) return 'mutual';
  return 'following';
}

function renderFollowButton(athleteId, currentUserId, size = '') {
  const sizeClass = size ? `btn-${size}` : '';
  const state = getFollowState(currentUserId, athleteId);
  if (state === 'mutual') {
    return `<button class="btn btn-friends ${sizeClass}" data-follow-id="${athleteId}" onclick="handleFollow('${athleteId}')">Friends ✓</button>`;
  } else if (state === 'following') {
    return `<button class="btn btn-secondary following ${sizeClass}" data-follow-id="${athleteId}" onclick="handleFollow('${athleteId}')">Following</button>`;
  } else {
    return `<button class="btn btn-primary ${sizeClass}" data-follow-id="${athleteId}" onclick="handleFollow('${athleteId}')">Follow</button>`;
  }
}

// ==================== TIME FORMATTING ====================

function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
  if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
  if (seconds < 604800) return Math.floor(seconds / 86400) + 'd ago';

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ==================== VIDEO EMBEDDING ====================

function parseVideoUrl(url) {
  if (!url) return null;

  // YouTube patterns
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
  ];

  for (const pattern of youtubePatterns) {
    const match = url.match(pattern);
    if (match) {
      return {
        type: 'youtube',
        id: match[1],
        embedUrl: `https://www.youtube.com/embed/${match[1]}`
      };
    }
  }

  // Vimeo patterns
  const vimeoPattern = /(?:vimeo\.com\/)(\d+)/;
  const vimeoMatch = url.match(vimeoPattern);
  if (vimeoMatch) {
    return {
      type: 'vimeo',
      id: vimeoMatch[1],
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`
    };
  }

  // VEO patterns - supports various VEO URL formats
  const veoPatterns = [
    /(?:app\.)?veo\.co\/matches\/([a-zA-Z0-9-]+)/,
    /(?:app\.)?veo\.co\/videos\/([a-zA-Z0-9-]+)/,
    /(?:app\.)?veo\.co\/highlights\/([a-zA-Z0-9-]+)/,
    /(?:app\.)?veo\.co\/(?:embed\/)?([a-zA-Z0-9-]+)/
  ];

  for (const pattern of veoPatterns) {
    const match = url.match(pattern);
    if (match) {
      return {
        type: 'veo',
        id: match[1],
        embedUrl: `https://app.veo.co/embed/${match[1]}`,
        originalUrl: url
      };
    }
  }

  // Hudl patterns
  const hudlPatterns = [
    /hudl\.com\/video\/([a-zA-Z0-9]+)/,
    /hudl\.com\/v\/([a-zA-Z0-9]+)/
  ];

  for (const pattern of hudlPatterns) {
    const match = url.match(pattern);
    if (match) {
      return {
        type: 'hudl',
        id: match[1],
        embedUrl: `https://www.hudl.com/embed/video/${match[1]}`
      };
    }
  }

  return null;
}

function getVideoTypeBadge(type) {
  const badges = {
    youtube: { label: 'YouTube', color: '#FF0000' },
    vimeo: { label: 'Vimeo', color: '#1AB7EA' },
    veo: { label: 'VEO', color: '#00D4AA' },
    hudl: { label: 'Hudl', color: '#FF6B00' }
  };
  return badges[type] || { label: 'Video', color: '#6B7280' };
}

function createVideoEmbed(videoUrl) {
  const parsed = parseVideoUrl(videoUrl);
  if (!parsed) return null;

  return `<iframe src="${parsed.embedUrl}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
}

// ==================== SEARCH & FILTER ====================

function filterAthletes(athletes, filters) {
  return athletes.filter(athlete => {
    // Search by name
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const nameLower = athlete.name.toLowerCase();
      if (!nameLower.includes(searchLower)) {
        return false;
      }
    }

    // Filter by sport
    if (filters.sport && filters.sport !== 'all') {
      if (athlete.sport !== filters.sport) {
        return false;
      }
    }

    // Filter by graduation year
    if (filters.gradYear && filters.gradYear !== 'all') {
      if (athlete.gradYear !== parseInt(filters.gradYear)) {
        return false;
      }
    }

    // Filter by location/state
    if (filters.location && filters.location !== 'all') {
      const locationLower = filters.location.toLowerCase();
      const athleteLocation = (athlete.city + ' ' + athlete.state).toLowerCase();
      if (!athleteLocation.includes(locationLower)) {
        return false;
      }
    }

    return true;
  });
}

// ==================== UI HELPERS ====================

function showToast(message, type = 'success') {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function formatHeight(inches) {
  if (!inches) return '';
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return `${feet}'${remainingInches}"`;
}

function parseHeight(heightStr) {
  if (!heightStr) return null;
  const match = heightStr.match(/(\d+)'(\d+)"/);
  if (match) {
    return parseInt(match[1]) * 12 + parseInt(match[2]);
  }
  return null;
}

function getSportName(sportKey) {
  return SPORTS_CONFIG[sportKey]?.name || sportKey;
}

function getPositions(sportKey) {
  return SPORTS_CONFIG[sportKey]?.positions || [];
}

function getStatFields(sportKey) {
  return SPORTS_CONFIG[sportKey]?.stats || [];
}

// ==================== ATHLETE CARD RENDERING ====================

function renderAthleteCard(athlete) {
  const sportName = getSportName(athlete.sport);
  const topStats = getTopStats(athlete);
  const todayAward = hasWonAwardToday(athlete.id);
  const awardCount = getAthleteAwardCount(athlete.id);

  return `
    <a href="profile.html?id=${athlete.id}" class="athlete-card ${todayAward ? 'potd-winner-card' : ''}">
      <div class="athlete-card-header">
        ${todayAward ? '<div class="card-potd-badge">🏆 Player of the Day</div>' : ''}
        ${athlete.photo
          ? `<img src="${athlete.photo}" alt="${athlete.name}" class="athlete-photo">`
          : `<div class="athlete-photo-placeholder">👤</div>`
        }
      </div>
      <div class="athlete-card-body">
        <h3 class="athlete-name">
          ${escapeHtml(athlete.name)}
          ${awardCount > 0 ? `<span class="award-count-mini" title="${awardCount} award${awardCount > 1 ? 's' : ''}">🏆${awardCount}</span>` : ''}
        </h3>
        <div class="athlete-sport">${sportName} • ${athlete.position || 'Position TBD'}</div>
        <div class="athlete-meta">
          <span class="athlete-meta-item">📅 Class of ${athlete.gradYear || 'TBD'}</span>
          ${athlete.city || athlete.state
            ? `<span class="athlete-meta-item">📍 ${[athlete.city, athlete.state].filter(Boolean).join(', ')}</span>`
            : ''
          }
        </div>
        ${topStats.length > 0 ? `
          <div class="athlete-stats-preview">
            ${topStats.map(stat => `<span class="stat-badge">${stat}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    </a>
  `;
}

function getTopStats(athlete) {
  if (!athlete.stats || !athlete.sport) return [];

  const statFields = getStatFields(athlete.sport);
  const topStats = [];

  for (const field of statFields) {
    const value = athlete.stats[field.key];
    if (value !== undefined && value !== '' && value !== null) {
      topStats.push(`${value} ${field.label}`);
      if (topStats.length >= 3) break;
    }
  }

  return topStats;
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ==================== POST RENDERING ====================

function renderPost(post, currentUser = null) {
  const author = getAthleteById(post.authorId);
  if (!author) return '';

  const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;
  const isOwner = currentUser && currentUser.id === post.authorId;
  const sportName = getSportName(author.sport);

  // Get vote status
  const upvotes = post.upvotes || [];
  const downvotes = post.downvotes || [];
  const hasUpvoted = currentUser ? upvotes.includes(currentUser.id) : false;
  const hasDownvoted = currentUser ? downvotes.includes(currentUser.id) : false;
  const voteScore = upvotes.length - downvotes.length;

  // Bookmark status
  const bookmarked = currentUser ? isBookmarked(post.id, currentUser.id) : false;

  // Video duration badge
  const durationBadge = post.videoDuration ? formatDuration(post.videoDuration) : '';

  return `
    <div class="post-card" data-post-id="${post.id}">
      <div class="post-header">
        <a href="profile.html?id=${author.id}" class="post-author">
          ${author.photo
            ? `<img src="${author.photo}" alt="${author.name}" class="post-avatar">`
            : `<div class="post-avatar-placeholder">👤</div>`
          }
          <div class="post-author-info">
            <span class="post-author-name">${escapeHtml(author.name)}</span>
            <span class="post-author-meta">${sportName} • ${timeAgo(post.createdAt)}</span>
          </div>
        </a>
        <div class="post-header-actions">
          ${currentUser ? `
            <button class="btn-icon bookmark-btn ${bookmarked ? 'bookmarked' : ''}" onclick="handleBookmark('${post.id}')" title="${bookmarked ? 'Remove bookmark' : 'Bookmark'}">
              ${bookmarked ? '🔖' : '📑'}
            </button>
          ` : ''}
          ${isOwner ? `
            <button class="btn-icon post-menu-btn" onclick="togglePostMenu('${post.id}')">⋯</button>
            <div class="post-menu hidden" id="postMenu_${post.id}">
              <button onclick="handleDeletePost('${post.id}')">Delete Post</button>
            </div>
          ` : ''}
        </div>
      </div>

      <div class="post-content">
        ${post.content ? `<p>${escapeHtml(post.content)}</p>` : ''}
        ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
        ${post.videoData ? renderUploadedVideo(post.videoData, post.videoType, post.videoDuration) : ''}
        ${post.videoUrl ? renderPostVideo(post.videoUrl) : ''}
      </div>

      <div class="post-stats">
        <span class="vote-score ${voteScore > 0 ? 'positive' : voteScore < 0 ? 'negative' : ''}">${voteScore > 0 ? '+' : ''}${voteScore} points</span>
        <span>${post.likes.length} like${post.likes.length !== 1 ? 's' : ''}</span>
        <span>${post.comments.length} comment${post.comments.length !== 1 ? 's' : ''}</span>
        ${post.views ? `<span>${formatCount(post.views)} view${post.views !== 1 ? 's' : ''}</span>` : ''}
      </div>

      <div class="post-actions">
        <div class="vote-buttons">
          <button class="vote-btn upvote ${hasUpvoted ? 'active' : ''}" onclick="handleUpvote('${post.id}')" ${!currentUser ? 'disabled title="Login to vote"' : ''}>
            ▲
          </button>
          <span class="vote-count">${voteScore}</span>
          <button class="vote-btn downvote ${hasDownvoted ? 'active' : ''}" onclick="handleDownvote('${post.id}')" ${!currentUser ? 'disabled title="Login to vote"' : ''}>
            ▼
          </button>
        </div>
        <button class="post-action-btn ${isLiked ? 'liked' : ''}" onclick="handleLike('${post.id}')" ${!currentUser ? 'disabled title="Login to like"' : ''}>
          ${isLiked ? '❤️' : '🤍'} Like
        </button>
        <button class="post-action-btn" onclick="toggleComments('${post.id}')">
          💬 Comment
        </button>
        <button class="post-action-btn" onclick="sharePost('${post.id}')">
          📤 Share
        </button>
      </div>

      <div class="post-comments hidden" id="comments_${post.id}">
        <div class="comments-list" id="commentsList_${post.id}">
          ${renderComments(post.comments, post.id, currentUser)}
        </div>
        ${currentUser ? `
          <div class="comment-form">
            <input type="text" class="comment-input" id="commentInput_${post.id}" placeholder="Write a comment..." onkeypress="handleCommentKeypress(event, '${post.id}')">
            <button class="btn btn-primary btn-sm" onclick="handleAddComment('${post.id}')">Post</button>
          </div>
        ` : `
          <p class="login-prompt">
            <a href="login.html">Log in</a> to comment
          </p>
        `}
      </div>
    </div>
  `;
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function renderUploadedVideo(videoData, videoType, duration) {
  return `
    <div class="post-video uploaded-video">
      <video controls playsinline class="post-video-player">
        <source src="${videoData}" type="${videoType || 'video/mp4'}">
        Your browser does not support video playback.
      </video>
      ${duration ? `<span class="video-duration-badge">${formatDuration(duration)}</span>` : ''}
    </div>
  `;
}

// ==================== REELS RENDERING ====================

function renderReel(post, currentUser = null, index = 0) {
  const author = getAthleteById(post.authorId);
  if (!author) return '';

  const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;
  const sportName = getSportName(author.sport);
  const videoData = post.videoUrl ? parseVideoUrl(post.videoUrl) : null;

  // Get vote status
  const upvotes = post.upvotes || [];
  const downvotes = post.downvotes || [];
  const hasUpvoted = currentUser ? upvotes.includes(currentUser.id) : false;
  const hasDownvoted = currentUser ? downvotes.includes(currentUser.id) : false;
  const voteScore = upvotes.length - downvotes.length;

  // Bookmark status
  const bookmarked = currentUser ? isBookmarked(post.id, currentUser.id) : false;

  // Render video content (uploaded or embedded)
  let videoContent;
  if (post.videoData) {
    // Uploaded video
    videoContent = `
      <video class="reel-video reel-uploaded-video" playsinline loop muted>
        <source src="${post.videoData}" type="${post.videoType || 'video/mp4'}">
      </video>
      ${post.videoDuration ? `<span class="reel-duration-badge">${formatDuration(post.videoDuration)}</span>` : ''}
    `;
  } else if (videoData) {
    // Embedded video
    videoContent = `
      <iframe
        src="${videoData.embedUrl}?autoplay=0&mute=1&loop=1&controls=0&modestbranding=1&playsinline=1"
        class="reel-video"
        allowfullscreen
        allow="autoplay; encrypted-media"
      ></iframe>
    `;
  } else {
    videoContent = `
      <div class="reel-placeholder">
        <span>🎬</span>
        <p>Video unavailable</p>
      </div>
    `;
  }

  return `
    <div class="reel-card" data-post-id="${post.id}" data-index="${index}">
      <div class="reel-video-container">
        ${videoContent}

        <!-- Gradient overlay -->
        <div class="reel-overlay"></div>

        <!-- Side actions -->
        <div class="reel-actions">
          <!-- Upvote/Downvote -->
          <div class="reel-vote-buttons">
            <button class="reel-vote-btn upvote ${hasUpvoted ? 'active' : ''}" onclick="handleReelVote('${post.id}', 'up')">▲</button>
            <span class="reel-vote-count">${voteScore}</span>
            <button class="reel-vote-btn downvote ${hasDownvoted ? 'active' : ''}" onclick="handleReelVote('${post.id}', 'down')">▼</button>
          </div>

          <button class="reel-action ${isLiked ? 'liked' : ''}" onclick="handleReelLike('${post.id}')">
            <span class="reel-action-icon">${isLiked ? '❤️' : '🤍'}</span>
            <span class="reel-action-count">${formatCount(post.likes.length)}</span>
          </button>
          <button class="reel-action" onclick="toggleReelComments('${post.id}')">
            <span class="reel-action-icon">💬</span>
            <span class="reel-action-count">${formatCount(post.comments.length)}</span>
          </button>
          <button class="reel-action" onclick="sharePost('${post.id}')">
            <span class="reel-action-icon">📤</span>
            <span class="reel-action-count">Share</span>
          </button>
          ${currentUser ? `
            <button class="reel-action reel-bookmark-btn ${bookmarked ? 'bookmarked' : ''}" onclick="handleReelBookmark('${post.id}')">
              <span class="reel-action-icon">${bookmarked ? '🔖' : '📑'}</span>
              <span class="reel-action-count">Save</span>
            </button>
          ` : ''}
        </div>

        <!-- Bottom info -->
        <div class="reel-info">
          <a href="profile.html?id=${author.id}" class="reel-author">
            ${author.photo
              ? `<img src="${author.photo}" alt="${author.name}" class="reel-author-photo">`
              : `<div class="reel-author-placeholder">👤</div>`
            }
            <div class="reel-author-details">
              <span class="reel-author-name">${escapeHtml(author.name)}</span>
              <span class="reel-author-sport">${sportName}</span>
            </div>
          </a>
          ${currentUser && currentUser.id !== author.id ? renderFollowButton(author.id, currentUser.id, 'sm') : ''}
        </div>

        ${post.content ? `
          <div class="reel-caption">
            <p>${escapeHtml(post.content.substring(0, 100))}${post.content.length > 100 ? '...' : ''}</p>
          </div>
        ` : ''}
      </div>

      <!-- Comments panel (hidden by default) -->
      <div class="reel-comments-panel hidden" id="reelComments_${post.id}">
        <div class="reel-comments-header">
          <h3>Comments</h3>
          <button class="btn-icon" onclick="toggleReelComments('${post.id}')">✕</button>
        </div>
        <div class="reel-comments-list" id="reelCommentsList_${post.id}">
          ${renderComments(post.comments)}
        </div>
        ${currentUser ? `
          <div class="reel-comment-form">
            <input type="text" class="comment-input" id="reelCommentInput_${post.id}" placeholder="Add a comment...">
            <button class="btn btn-primary btn-sm" onclick="handleReelComment('${post.id}')">Post</button>
          </div>
        ` : `
          <p class="login-prompt"><a href="login.html">Log in</a> to comment</p>
        `}
      </div>
    </div>
  `;
}

function formatCount(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

function handleReelLike(postId) {
  handleLike(postId);
  updateReelUI(postId);
}

function handleReelVote(postId, voteType) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please log in to vote', 'error');
    return;
  }

  handleVote(postId, currentUser.id, voteType);
  updateReelUI(postId);
}

function handleReelBookmark(postId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please log in to bookmark', 'error');
    return;
  }

  const isNowBookmarked = toggleBookmark(postId, currentUser.id);
  showToast(isNowBookmarked ? 'Saved!' : 'Removed from saved');
  updateReelUI(postId);
}

function updateReelUI(postId) {
  const reelCard = document.querySelector(`.reel-card[data-post-id="${postId}"]`);
  if (!reelCard) return;

  const post = getPostById(postId);
  const currentUser = getActiveProfile();

  // Update like button
  const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;
  const likeAction = reelCard.querySelector('.reel-action:not(.reel-bookmark-btn)');
  if (likeAction) {
    likeAction.classList.toggle('liked', isLiked);
    const likeIcon = likeAction.querySelector('.reel-action-icon');
    const likeCount = likeAction.querySelector('.reel-action-count');
    if (likeIcon) likeIcon.textContent = isLiked ? '❤️' : '🤍';
    if (likeCount) likeCount.textContent = formatCount(post.likes.length);
  }

  // Update vote buttons
  const upvotes = post.upvotes || [];
  const downvotes = post.downvotes || [];
  const hasUpvoted = currentUser ? upvotes.includes(currentUser.id) : false;
  const hasDownvoted = currentUser ? downvotes.includes(currentUser.id) : false;
  const voteScore = upvotes.length - downvotes.length;

  const upvoteBtn = reelCard.querySelector('.reel-vote-btn.upvote');
  const downvoteBtn = reelCard.querySelector('.reel-vote-btn.downvote');
  const voteCount = reelCard.querySelector('.reel-vote-count');

  if (upvoteBtn) upvoteBtn.classList.toggle('active', hasUpvoted);
  if (downvoteBtn) downvoteBtn.classList.toggle('active', hasDownvoted);
  if (voteCount) voteCount.textContent = voteScore;

  // Update bookmark button
  const bookmarked = currentUser ? isBookmarked(post.id, currentUser.id) : false;
  const bookmarkBtn = reelCard.querySelector('.reel-bookmark-btn');
  if (bookmarkBtn) {
    bookmarkBtn.classList.toggle('bookmarked', bookmarked);
    const bookmarkIcon = bookmarkBtn.querySelector('.reel-action-icon');
    if (bookmarkIcon) bookmarkIcon.textContent = bookmarked ? '🔖' : '📑';
  }
}

function toggleReelComments(postId) {
  const panel = document.getElementById(`reelComments_${postId}`);
  if (panel) {
    panel.classList.toggle('hidden');
  }
}

function handleReelComment(postId) {
  const input = document.getElementById(`reelCommentInput_${postId}`);
  const content = input.value.trim();
  if (!content) return;

  const currentUser = getActiveProfile();
  if (!currentUser) {
    showToast('Please log in to comment', 'error');
    return;
  }

  addComment(postId, currentUser.id, content);
  input.value = '';

  // Update comments list
  const post = getPostById(postId);
  const commentsList = document.getElementById(`reelCommentsList_${postId}`);
  if (commentsList) {
    commentsList.innerHTML = renderComments(post.comments);
  }

  // Update count
  const reelCard = document.querySelector(`.reel-card[data-post-id="${postId}"]`);
  if (reelCard) {
    const commentAction = reelCard.querySelectorAll('.reel-action')[1];
    commentAction.querySelector('.reel-action-count').textContent = formatCount(post.comments.length);
  }

  showToast('Comment added!');
}

// ==================== REELS PAGE ====================

let currentReelIndex = 0;
let reelsPosts = [];

function initReelsPage() {
  reelsPosts = getReelsPosts();
  const currentUser = getActiveProfile();

  renderReelsFeed();
  setupReelsNavigation();
  updateAuthUI();
}

function renderReelsFeed() {
  const container = document.getElementById('reelsContainer');
  if (!container) return;

  const currentUser = getActiveProfile();

  if (reelsPosts.length === 0) {
    container.innerHTML = `
      <div class="reels-empty">
        <div class="reels-empty-icon">🎬</div>
        <h3>No Reels Yet</h3>
        <p>Be the first to share a highlight video!</p>
        ${isLoggedIn() ? `<a href="feed.html" class="btn btn-primary">Create Reel</a>` : `<a href="login.html" class="btn btn-primary">Log In to Post</a>`}
      </div>
    `;
    return;
  }

  container.innerHTML = reelsPosts.map((post, index) => renderReel(post, currentUser, index)).join('');

  // Set initial reel
  updateActiveReel(0);
}

function setupReelsNavigation() {
  const container = document.getElementById('reelsContainer');
  if (!container) return;

  // Scroll snap handling
  container.addEventListener('scroll', () => {
    const scrollTop = container.scrollTop;
    const reelHeight = container.clientHeight;
    const newIndex = Math.round(scrollTop / reelHeight);

    if (newIndex !== currentReelIndex && newIndex >= 0 && newIndex < reelsPosts.length) {
      updateActiveReel(newIndex);
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'j') {
      navigateReel(1);
    } else if (e.key === 'ArrowUp' || e.key === 'k') {
      navigateReel(-1);
    }
  });
}

function navigateReel(direction) {
  const newIndex = currentReelIndex + direction;
  if (newIndex >= 0 && newIndex < reelsPosts.length) {
    const container = document.getElementById('reelsContainer');
    const reelHeight = container.clientHeight;
    container.scrollTo({ top: newIndex * reelHeight, behavior: 'smooth' });
  }
}

function updateActiveReel(index) {
  currentReelIndex = index;

  // Track view
  if (reelsPosts[index]) {
    incrementPostViews(reelsPosts[index].id);
  }

  // Update active states
  document.querySelectorAll('.reel-card').forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

function renderPostVideo(videoUrl) {
  const parsed = parseVideoUrl(videoUrl);
  if (!parsed) return '';

  return `
    <div class="post-video">
      <div class="video-embed">
        <iframe src="${parsed.embedUrl}" allowfullscreen></iframe>
      </div>
    </div>
  `;
}

function renderComments(comments, postId = null, currentUser = null) {
  if (comments.length === 0) {
    return '<p class="no-comments">No comments yet. Be the first to comment!</p>';
  }

  return comments.map(comment => {
    const author = getAthleteById(comment.authorId);
    if (!author) return '';

    const commentLikes = comment.likes || [];
    const hasLikedComment = currentUser ? commentLikes.includes(currentUser.id) : false;
    const replies = comment.replies || [];

    return `
      <div class="comment" data-comment-id="${comment.id}">
        <a href="profile.html?id=${author.id}" class="comment-avatar-link">
          ${author.photo
            ? `<img src="${author.photo}" alt="${author.name}" class="comment-avatar">`
            : `<div class="comment-avatar-placeholder">👤</div>`
          }
        </a>
        <div class="comment-body">
          <div class="comment-header">
            <a href="profile.html?id=${author.id}" class="comment-author">${escapeHtml(author.name)}</a>
            <span class="comment-time">${timeAgo(comment.createdAt)}</span>
          </div>
          <p class="comment-text">${escapeHtml(comment.content)}</p>
          <div class="comment-actions">
            ${currentUser ? `
              <button class="comment-action-btn ${hasLikedComment ? 'liked' : ''}" onclick="handleLikeComment('${postId}', '${comment.id}')">
                ${hasLikedComment ? '❤️' : '🤍'} ${commentLikes.length || ''}
              </button>
              <button class="comment-action-btn" onclick="showReplyForm('${postId}', '${comment.id}')">
                ↩️ Reply
              </button>
            ` : ''}
          </div>
          ${replies.length > 0 ? `
            <div class="comment-replies">
              <button class="show-replies-btn" onclick="toggleReplies('${comment.id}')">
                ${replies.length} ${replies.length === 1 ? 'reply' : 'replies'}
              </button>
              <div class="replies-list hidden" id="replies_${comment.id}">
                ${renderReplies(replies, postId, currentUser)}
              </div>
            </div>
          ` : ''}
          <div class="reply-form hidden" id="replyForm_${comment.id}">
            <input type="text" class="comment-input reply-input" id="replyInput_${comment.id}" placeholder="Write a reply...">
            <div class="reply-actions">
              <button class="btn btn-sm btn-secondary" onclick="hideReplyForm('${comment.id}')">Cancel</button>
              <button class="btn btn-sm btn-primary" onclick="handleAddReply('${postId}', '${comment.id}')">Reply</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderReplies(replies, postId, currentUser) {
  return replies.map(reply => {
    const author = getAthleteById(reply.authorId);
    if (!author) return '';

    const replyLikes = reply.likes || [];
    const hasLikedReply = currentUser ? replyLikes.includes(currentUser.id) : false;

    return `
      <div class="comment reply" data-comment-id="${reply.id}">
        <a href="profile.html?id=${author.id}" class="comment-avatar-link">
          ${author.photo
            ? `<img src="${author.photo}" alt="${author.name}" class="comment-avatar small">`
            : `<div class="comment-avatar-placeholder small">👤</div>`
          }
        </a>
        <div class="comment-body">
          <div class="comment-header">
            <a href="profile.html?id=${author.id}" class="comment-author">${escapeHtml(author.name)}</a>
            <span class="comment-time">${timeAgo(reply.createdAt)}</span>
          </div>
          <p class="comment-text">${escapeHtml(reply.content)}</p>
          ${currentUser ? `
            <div class="comment-actions">
              <button class="comment-action-btn ${hasLikedReply ? 'liked' : ''}" onclick="handleLikeComment('${postId}', '${reply.id}')">
                ${hasLikedReply ? '❤️' : '🤍'} ${replyLikes.length || ''}
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ==================== POST INTERACTIONS ====================

function handleLike(postId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please create a profile to like posts', 'error');
    return;
  }

  const post = toggleLike(postId, currentUser.id);
  if (post) {
    updatePostUI(postId);
  }
}

function handleUpvote(postId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please log in to vote', 'error');
    return;
  }

  handleVote(postId, currentUser.id, 'up');
  updatePostUI(postId);
}

function handleDownvote(postId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please log in to vote', 'error');
    return;
  }

  handleVote(postId, currentUser.id, 'down');
  updatePostUI(postId);
}

function handleBookmark(postId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please log in to bookmark', 'error');
    return;
  }

  const isNowBookmarked = toggleBookmark(postId, currentUser.id);
  showToast(isNowBookmarked ? 'Post bookmarked!' : 'Bookmark removed');

  // Update UI
  const postCard = document.querySelector(`[data-post-id="${postId}"]`);
  if (postCard) {
    const bookmarkBtn = postCard.querySelector('.bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle('bookmarked', isNowBookmarked);
      bookmarkBtn.innerHTML = isNowBookmarked ? '🔖' : '📑';
    }
  }
}

function updatePostUI(postId) {
  const postCard = document.querySelector(`[data-post-id="${postId}"]`);
  if (!postCard) return;

  const post = getPostById(postId);
  const currentUser = getCurrentUser();

  // Update vote buttons
  const upvotes = post.upvotes || [];
  const downvotes = post.downvotes || [];
  const hasUpvoted = currentUser ? upvotes.includes(currentUser.id) : false;
  const hasDownvoted = currentUser ? downvotes.includes(currentUser.id) : false;
  const voteScore = upvotes.length - downvotes.length;

  const upvoteBtn = postCard.querySelector('.vote-btn.upvote');
  const downvoteBtn = postCard.querySelector('.vote-btn.downvote');
  const voteCountEl = postCard.querySelector('.vote-count');
  const voteScoreEl = postCard.querySelector('.vote-score');

  if (upvoteBtn) upvoteBtn.classList.toggle('active', hasUpvoted);
  if (downvoteBtn) downvoteBtn.classList.toggle('active', hasDownvoted);
  if (voteCountEl) voteCountEl.textContent = voteScore;
  if (voteScoreEl) {
    voteScoreEl.textContent = `${voteScore > 0 ? '+' : ''}${voteScore} points`;
    voteScoreEl.className = `vote-score ${voteScore > 0 ? 'positive' : voteScore < 0 ? 'negative' : ''}`;
  }

  // Update like button
  const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;
  const likeBtn = postCard.querySelector('.post-action-btn.liked, .post-action-btn:not(.liked)');
  if (likeBtn && likeBtn.textContent.includes('Like')) {
    likeBtn.innerHTML = `${isLiked ? '❤️' : '🤍'} Like`;
    likeBtn.classList.toggle('liked', isLiked);
  }

  // Update stats
  const statsSpans = postCard.querySelectorAll('.post-stats span');
  if (statsSpans[1]) {
    statsSpans[1].textContent = `${post.likes.length} like${post.likes.length !== 1 ? 's' : ''}`;
  }
}

// Comment interaction handlers
function showReplyForm(postId, commentId) {
  const replyForm = document.getElementById(`replyForm_${commentId}`);
  if (replyForm) {
    replyForm.classList.remove('hidden');
    replyForm.querySelector('input').focus();
  }
}

function hideReplyForm(commentId) {
  const replyForm = document.getElementById(`replyForm_${commentId}`);
  if (replyForm) {
    replyForm.classList.add('hidden');
    replyForm.querySelector('input').value = '';
  }
}

function toggleReplies(commentId) {
  const repliesList = document.getElementById(`replies_${commentId}`);
  if (repliesList) {
    repliesList.classList.toggle('hidden');
  }
}

function handleAddReply(postId, parentCommentId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please log in to reply', 'error');
    return;
  }

  const input = document.getElementById(`replyInput_${parentCommentId}`);
  const content = input.value.trim();

  if (!content) return;

  addComment(postId, currentUser.id, content, parentCommentId);
  hideReplyForm(parentCommentId);

  // Refresh comments
  const post = getPostById(postId);
  const commentsList = document.getElementById(`commentsList_${postId}`);
  if (commentsList) {
    commentsList.innerHTML = renderComments(post.comments, postId, currentUser);
  }

  showToast('Reply added!');
}

function handleLikeComment(postId, commentId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please log in to like comments', 'error');
    return;
  }

  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  // Find the comment (could be in main comments or replies)
  let targetComment = null;
  for (const comment of post.comments) {
    if (comment.id === commentId) {
      targetComment = comment;
      break;
    }
    if (comment.replies) {
      const reply = comment.replies.find(r => r.id === commentId);
      if (reply) {
        targetComment = reply;
        break;
      }
    }
  }

  if (!targetComment) return;

  if (!targetComment.likes) targetComment.likes = [];

  const likeIndex = targetComment.likes.indexOf(currentUser.id);
  if (likeIndex > -1) {
    targetComment.likes.splice(likeIndex, 1);
  } else {
    targetComment.likes.push(currentUser.id);
  }

  savePosts(posts);

  // Refresh comments
  const commentsList = document.getElementById(`commentsList_${postId}`);
  if (commentsList) {
    commentsList.innerHTML = renderComments(post.comments, postId, currentUser);
  }
}

function toggleComments(postId) {
  const commentsSection = document.getElementById(`comments_${postId}`);
  if (commentsSection) {
    commentsSection.classList.toggle('hidden');
  }
}

function handleAddComment(postId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please create a profile to comment', 'error');
    return;
  }

  const input = document.getElementById(`commentInput_${postId}`);
  const content = input.value.trim();

  if (!content) return;

  const comment = addComment(postId, currentUser.id, content);
  if (comment) {
    input.value = '';
    const post = getPostById(postId);

    // Update comments list
    const commentsList = document.getElementById(`commentsList_${postId}`);
    commentsList.innerHTML = renderComments(post.comments);

    // Update comment count
    const postCard = document.querySelector(`[data-post-id="${postId}"]`);
    const statsSpans = postCard.querySelectorAll('.post-stats span');
    statsSpans[1].textContent = `${post.comments.length} comment${post.comments.length !== 1 ? 's' : ''}`;

    showToast('Comment added');
  }
}

function handleCommentKeypress(event, postId) {
  if (event.key === 'Enter') {
    handleAddComment(postId);
  }
}

function togglePostMenu(postId) {
  const menu = document.getElementById(`postMenu_${postId}`);
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function handleDeletePost(postId) {
  if (confirm('Are you sure you want to delete this post?')) {
    deletePost(postId);
    const postCard = document.querySelector(`[data-post-id="${postId}"]`);
    if (postCard) {
      postCard.remove();
    }
    showToast('Post deleted');
  }
}

function sharePost(postId) {
  const url = `${window.location.origin}/feed.html?post=${postId}`;

  if (navigator.share) {
    navigator.share({
      title: 'AthleteHub Post',
      url: url
    }).catch(() => copyToClipboard(url));
  } else {
    copyToClipboard(url);
  }
}

// ==================== CREATE POST ====================

function handleCreatePost() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please select your profile first', 'error');
    return;
  }

  const content = document.getElementById('postContent').value.trim();
  const videoUrl = document.getElementById('postVideoUrl')?.value.trim();
  const imageInput = document.getElementById('postImageInput');
  const videoInput = document.getElementById('postVideoInput');

  // Check if we have video upload or URL
  const hasVideoUpload = videoInput && videoInput.files[0];
  const hasVideoUrl = videoUrl && videoUrl.length > 0;

  if (!content && !hasVideoUrl && !hasVideoUpload) {
    showToast('Please enter some content or add a video', 'error');
    return;
  }

  const post = {
    authorId: currentUser.id,
    content: content,
    videoUrl: videoUrl || null,
    videoData: null,
    videoDuration: null,
    image: null
  };

  // Handle video upload
  if (hasVideoUpload) {
    handleVideoUpload(videoInput.files[0], post, imageInput);
    return;
  }

  // Handle image upload
  if (imageInput && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      post.image = e.target.result;
      finishCreatePost(post);
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    finishCreatePost(post);
  }
}

// Video upload handling with duration validation
function handleVideoUpload(file, post, imageInput) {
  // Check file size
  const fileSizeMB = file.size / (1024 * 1024);
  if (fileSizeMB > MAX_VIDEO_SIZE_MB) {
    showToast(`Video too large. Max size is ${MAX_VIDEO_SIZE_MB}MB`, 'error');
    return;
  }

  // Check file type
  if (!file.type.startsWith('video/')) {
    showToast('Please upload a valid video file', 'error');
    return;
  }

  // Show loading state
  const submitBtn = document.querySelector('#createPostForm .btn-primary');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';
  }

  // Create video element to check duration
  const video = document.createElement('video');
  video.preload = 'metadata';

  video.onloadedmetadata = function() {
    window.URL.revokeObjectURL(video.src);

    const duration = video.duration;

    if (duration > MAX_VIDEO_DURATION) {
      showToast(`Video must be under ${MAX_VIDEO_DURATION / 60} minutes. Your video is ${Math.round(duration / 60 * 10) / 10} minutes.`, 'error');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Post';
      }
      return;
    }

    // Video is valid, read as base64
    const reader = new FileReader();
    reader.onload = (e) => {
      post.videoData = e.target.result;
      post.videoDuration = Math.round(duration);
      post.videoType = file.type;

      // Handle image if also uploaded
      if (imageInput && imageInput.files[0]) {
        const imgReader = new FileReader();
        imgReader.onload = (imgE) => {
          post.image = imgE.target.result;
          finishCreatePost(post);
        };
        imgReader.readAsDataURL(imageInput.files[0]);
      } else {
        finishCreatePost(post);
      }
    };
    reader.onerror = () => {
      showToast('Error reading video file', 'error');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Post';
      }
    };
    reader.readAsDataURL(file);
  };

  video.onerror = () => {
    showToast('Error loading video. Please try a different file.', 'error');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Post';
    }
  };

  video.src = URL.createObjectURL(file);
}

function finishCreatePost(post) {
  createPost(post);
  showToast('Post created!');

  // Clear form
  document.getElementById('postContent').value = '';
  const videoUrlInput = document.getElementById('postVideoUrl');
  if (videoUrlInput) videoUrlInput.value = '';
  const videoFileInput = document.getElementById('postVideoInput');
  if (videoFileInput) videoFileInput.value = '';
  const imageInput = document.getElementById('postImageInput');
  if (imageInput) imageInput.value = '';

  // Reset video preview
  const videoPreview = document.getElementById('videoUploadPreview');
  if (videoPreview) videoPreview.classList.add('hidden');

  // Reset button state
  const submitBtn = document.querySelector('#createPostForm .btn-primary');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Post';
  }

  // Hide create form and show trigger
  const createForm = document.getElementById('createPostForm');
  if (createForm) createForm.classList.add('hidden');
  const showFormBtn = document.getElementById('showCreatePostBtn');
  if (showFormBtn) showFormBtn.classList.remove('hidden');

  // Refresh feed
  if (typeof renderFeed === 'function') {
    renderFeed();
  }
}

// ==================== VIDEO UPLOAD HELPERS ====================

function switchUploadTab(tabType) {
  const uploadPanel = document.getElementById('uploadPanel');
  const urlPanel = document.getElementById('urlPanel');
  const tabs = document.querySelectorAll('.upload-tab');

  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.textContent.toLowerCase().includes(tabType === 'upload' ? 'upload' : 'url'));
  });

  if (uploadPanel) uploadPanel.classList.toggle('hidden', tabType !== 'upload');
  if (urlPanel) urlPanel.classList.toggle('hidden', tabType !== 'url');
}

function handleVideoPreview(input) {
  const file = input.files[0];
  if (!file) return;

  // Check file size
  const fileSizeMB = file.size / (1024 * 1024);
  if (fileSizeMB > MAX_VIDEO_SIZE_MB) {
    showToast(`Video too large. Max size is ${MAX_VIDEO_SIZE_MB}MB`, 'error');
    input.value = '';
    return;
  }

  // Create preview
  const video = document.createElement('video');
  video.preload = 'metadata';

  video.onloadedmetadata = function() {
    const duration = video.duration;

    if (duration > MAX_VIDEO_DURATION) {
      showToast(`Video must be under ${MAX_VIDEO_DURATION / 60} minutes. Your video is ${Math.round(duration / 60 * 10) / 10} minutes.`, 'error');
      input.value = '';
      window.URL.revokeObjectURL(video.src);
      return;
    }

    // Show preview
    const previewContainer = document.getElementById('videoUploadPreview');
    const previewPlayer = document.getElementById('videoPreviewPlayer');
    const durationEl = document.getElementById('videoDuration');
    const uploadArea = document.getElementById('videoUploadArea');

    if (previewContainer && previewPlayer) {
      previewPlayer.src = URL.createObjectURL(file);
      if (durationEl) durationEl.textContent = `Duration: ${formatDuration(Math.round(duration))}`;
      previewContainer.classList.remove('hidden');
      if (uploadArea) uploadArea.classList.add('hidden');
    }

    window.URL.revokeObjectURL(video.src);
  };

  video.onerror = () => {
    showToast('Error loading video preview', 'error');
    input.value = '';
  };

  video.src = URL.createObjectURL(file);
}

function clearVideoUpload() {
  const input = document.getElementById('postVideoInput');
  const previewContainer = document.getElementById('videoUploadPreview');
  const previewPlayer = document.getElementById('videoPreviewPlayer');
  const uploadArea = document.getElementById('videoUploadArea');

  if (input) input.value = '';
  if (previewPlayer) {
    previewPlayer.pause();
    previewPlayer.src = '';
  }
  if (previewContainer) previewContainer.classList.add('hidden');
  if (uploadArea) uploadArea.classList.remove('hidden');
}

// ==================== FOLLOW ACTIONS ====================

function handleFollow(athleteId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please create a profile to follow athletes', 'error');
    return;
  }

  if (currentUser.id === athleteId) {
    showToast("You can't follow yourself", 'error');
    return;
  }

  const isCurrentlyFollowing = isFollowing(currentUser.id, athleteId);

  if (isCurrentlyFollowing) {
    unfollowAthlete(currentUser.id, athleteId);
    showToast('Unfollowed');
  } else {
    followAthlete(currentUser.id, athleteId);
    if (isFollowing(athleteId, currentUser.id)) {
      const athlete = getAthleteById(athleteId);
      showToast(`You and ${athlete?.name || 'this athlete'} are now friends! 🤝`, 'success');
    } else {
      showToast('Following!');
    }
  }

  // Update UI
  updateFollowButton(athleteId);
  updateFollowCounts(athleteId);
}

function updateFollowButton(athleteId) {
  const currentUser = getCurrentUser();
  const followBtn = document.querySelector(`[data-follow-id="${athleteId}"]`);
  if (!followBtn || !currentUser) return;

  const state = getFollowState(currentUser.id, athleteId);
  followBtn.classList.remove('btn-primary', 'btn-secondary', 'btn-friends', 'following');

  if (state === 'mutual') {
    followBtn.textContent = 'Friends ✓';
    followBtn.classList.add('btn-friends');
  } else if (state === 'following') {
    followBtn.textContent = 'Following';
    followBtn.classList.add('btn-secondary', 'following');
  } else {
    followBtn.textContent = 'Follow';
    followBtn.classList.add('btn-primary');
  }
}

function updateFollowCounts(athleteId) {
  const followersEl = document.getElementById('followersCount');
  const followingEl = document.getElementById('followingCount');

  if (followersEl) {
    followersEl.textContent = getFollowerCount(athleteId);
  }
  if (followingEl) {
    followingEl.textContent = getFollowingCount(athleteId);
  }
}

// ==================== FEED PAGE ====================

function initFeedPage() {
  const currentUser = getCurrentUser();

  // Setup user selector if no current user
  setupUserSelector();

  // Render feed
  renderFeed();

  // Setup create post form
  setupCreatePostForm();
}

function setupUserSelector() {
  const selector = document.getElementById('userSelector');
  if (!selector) return;

  const account = getCurrentAccount();
  if (!account) {
    selector.parentElement.style.display = 'none';
    return;
  }

  // Only show profiles belonging to the current account
  const profiles = getProfilesByAccount(account.id);
  const activeProfile = getActiveProfile();

  selector.innerHTML = '<option value="">Select profile...</option>';
  profiles.forEach(profile => {
    const selected = activeProfile && activeProfile.id === profile.id ? 'selected' : '';
    const sportName = getSportName(profile.sport);
    selector.innerHTML += `<option value="${profile.id}" ${selected}>${escapeHtml(profile.name)} (${sportName})</option>`;
  });

  if (profiles.length === 0) {
    selector.innerHTML = '<option value="">No profiles yet - create one!</option>';
  }

  selector.addEventListener('change', (e) => {
    if (e.target.value) {
      setActiveProfile(e.target.value);
      const profile = getAthleteById(e.target.value);
      showToast('Posting as ' + profile.name);
      renderFeed();
    }
  });
}

function updateUserDisplay() {
  const currentUser = getCurrentUser();
  const userDisplay = document.getElementById('currentUserDisplay');

  if (userDisplay) {
    if (currentUser) {
      userDisplay.innerHTML = `
        <a href="profile.html?id=${currentUser.id}" class="current-user-link">
          ${currentUser.photo
            ? `<img src="${currentUser.photo}" alt="${currentUser.name}" class="current-user-avatar">`
            : `<div class="current-user-avatar-placeholder">👤</div>`
          }
          <span>${escapeHtml(currentUser.name)}</span>
        </a>
      `;
    } else {
      userDisplay.innerHTML = '<a href="create.html" class="btn btn-primary btn-sm">Create Profile</a>';
    }
  }
}

function setupCreatePostForm() {
  const showFormBtn = document.getElementById('showCreatePostBtn');
  const createForm = document.getElementById('createPostForm');
  const cancelBtn = document.getElementById('cancelPostBtn');

  showFormBtn?.addEventListener('click', () => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      showToast('Please select your profile first', 'error');
      return;
    }
    createForm?.classList.remove('hidden');
    showFormBtn.classList.add('hidden');
  });

  cancelBtn?.addEventListener('click', () => {
    createForm?.classList.add('hidden');
    showFormBtn?.classList.remove('hidden');
  });
}

function renderFeed() {
  const feedContainer = document.getElementById('feedContainer');
  if (!feedContainer) return;

  const currentUser = getCurrentUser();
  const feedType = document.querySelector('.feed-tab.active')?.dataset.feed || 'explore';

  let posts;
  let emptyMessage = { title: 'No posts yet', subtitle: 'Be the first to share an update!' };

  if (feedType === 'following' && currentUser) {
    posts = getFeedPosts(currentUser.id);
    emptyMessage = { title: 'No posts from people you follow', subtitle: 'Follow some athletes to see their posts here!' };
  } else if (feedType === 'bookmarks' && currentUser) {
    posts = getBookmarkedPosts(currentUser.id);
    emptyMessage = { title: 'No saved posts', subtitle: 'Bookmark posts to see them here!' };
  } else {
    posts = getExplorePosts();
  }

  if (posts.length === 0) {
    feedContainer.innerHTML = `
      <div class="empty-feed">
        <div class="empty-feed-icon">${feedType === 'bookmarks' ? '🔖' : '📱'}</div>
        <h3>${emptyMessage.title}</h3>
        <p>${emptyMessage.subtitle}</p>
      </div>
    `;
    return;
  }

  feedContainer.innerHTML = posts.map(post => renderPost(post, currentUser)).join('');
}

function switchFeedTab(tab) {
  document.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderFeed();
}

// ==================== INDEX PAGE ====================

function initIndexPage() {
  renderSportsGrid();
  renderAthleteGrid();
  setupSearchFilters();
  populateFilterOptions();
  renderPOTDSection();
}

// Render all 38 sports in a scrollable grid
function renderSportsGrid() {
  const grid = document.getElementById('sportsGrid');
  if (!grid) return;

  const sportCards = Object.entries(SPORTS_CONFIG).map(([key, config]) => {
    return `
      <div class="sport-card" data-sport="${key}" onclick="filterBySport('${key}')">
        <span class="sport-icon">${config.icon}</span>
        <span class="sport-name">${config.name}</span>
      </div>
    `;
  }).join('');

  grid.innerHTML = sportCards;
}

// Filter athletes by clicking a sport card
function filterBySport(sportKey) {
  const sportFilter = document.getElementById('sportFilter');
  if (sportFilter) {
    sportFilter.value = sportKey;
    sportFilter.dispatchEvent(new Event('change'));
  }

  // Scroll to browse section
  const browseSection = document.getElementById('browse');
  if (browseSection) {
    browseSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderAthleteGrid(filteredAthletes = null) {
  const grid = document.getElementById('athletesGrid');
  if (!grid) return;

  const athletes = filteredAthletes || getAthletes();

  if (athletes.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🏃</div>
        <h3>No athletes found</h3>
        <p>Be the first to create a profile and showcase your talent!</p>
        <a href="create.html" class="btn btn-primary mt-2">Create Profile</a>
      </div>
    `;
    return;
  }

  grid.innerHTML = athletes.map(renderAthleteCard).join('');
}

function setupSearchFilters() {
  const searchInput = document.getElementById('searchInput');
  const sportFilter = document.getElementById('sportFilter');
  const yearFilter = document.getElementById('yearFilter');

  const applyFilters = () => {
    const filters = {
      search: searchInput?.value || '',
      sport: sportFilter?.value || 'all',
      gradYear: yearFilter?.value || 'all'
    };

    const athletes = getAthletes();
    const filtered = filterAthletes(athletes, filters);
    renderAthleteGrid(filtered);
  };

  searchInput?.addEventListener('input', debounce(applyFilters, 300));
  sportFilter?.addEventListener('change', applyFilters);
  yearFilter?.addEventListener('change', applyFilters);
}

function populateFilterOptions() {
  // Populate sport filter
  const sportFilter = document.getElementById('sportFilter');
  if (sportFilter) {
    sportFilter.innerHTML = '<option value="all">All Sports</option>';
    for (const [key, config] of Object.entries(SPORTS_CONFIG)) {
      sportFilter.innerHTML += `<option value="${key}">${config.name}</option>`;
    }
  }

  // Populate year filter
  const yearFilter = document.getElementById('yearFilter');
  if (yearFilter) {
    yearFilter.innerHTML = '<option value="all">All Years</option>';
    for (const year of GRADUATION_YEARS) {
      yearFilter.innerHTML += `<option value="${year}">${year}</option>`;
    }
  }
}

// ==================== CREATE/EDIT PROFILE PAGE ====================

let currentStep = 1;
const totalSteps = 4;
let profileData = {
  videos: [],
  stats: {}
};

function initCreatePage() {
  // Check if editing existing profile
  const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get('edit');

  if (editId) {
    const athlete = getAthleteById(editId);
    if (athlete) {
      profileData = { ...athlete };
      document.querySelector('.form-header h1').textContent = 'Edit Profile';
      populateFormWithData(athlete);
    }
  }

  setupFormNavigation();
  setupSportSelection();
  setupPhotoUpload();
  setupVideoManager();
  setupStatsManager();
  populateSportOptions();
  populateYearOptions();
  updateStepDisplay();
}

function populateFormWithData(athlete) {
  // Basic info
  document.getElementById('athleteName').value = athlete.name || '';
  document.getElementById('sport').value = athlete.sport || '';

  // Trigger position update
  if (athlete.sport) {
    updatePositionOptions(athlete.sport);
    setTimeout(() => {
      document.getElementById('position').value = athlete.position || '';
    }, 0);
  }

  document.getElementById('gradYear').value = athlete.gradYear || '';

  // Physical & contact
  document.getElementById('heightFeet').value = athlete.heightFeet || '';
  document.getElementById('heightInches').value = athlete.heightInches || '';
  document.getElementById('weight').value = athlete.weight || '';
  document.getElementById('city').value = athlete.city || '';
  document.getElementById('state').value = athlete.state || '';
  document.getElementById('email').value = athlete.email || '';
  document.getElementById('phone').value = athlete.phone || '';
  document.getElementById('bio').value = athlete.bio || '';

  // Photo
  if (athlete.photo) {
    const preview = document.getElementById('photoPreview');
    preview.innerHTML = `<img src="${athlete.photo}" alt="Profile photo">`;
  }

  // Videos
  if (athlete.videos) {
    profileData.videos = [...athlete.videos];
    renderVideosList();
  }

  // Stats
  if (athlete.stats) {
    profileData.stats = { ...athlete.stats };
    if (athlete.sport) {
      updateStatsFields(athlete.sport);
    }
  }
}

function setupFormNavigation() {
  document.getElementById('prevBtn')?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStepDisplay();
    }
  });

  document.getElementById('nextBtn')?.addEventListener('click', () => {
    if (validateCurrentStep()) {
      if (currentStep < totalSteps) {
        currentStep++;
        updateStepDisplay();
      }
    }
  });

  document.getElementById('saveBtn')?.addEventListener('click', saveProfile);
}

function updateStepDisplay() {
  // Update step indicators
  document.querySelectorAll('.step').forEach((step, index) => {
    step.classList.remove('active', 'completed');
    if (index + 1 < currentStep) {
      step.classList.add('completed');
    } else if (index + 1 === currentStep) {
      step.classList.add('active');
    }
  });

  // Show/hide sections
  document.querySelectorAll('.form-section').forEach((section, index) => {
    section.classList.toggle('active', index + 1 === currentStep);
  });

  // Update buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const saveBtn = document.getElementById('saveBtn');

  if (prevBtn) prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
  if (nextBtn) nextBtn.classList.toggle('hidden', currentStep === totalSteps);
  if (saveBtn) saveBtn.classList.toggle('hidden', currentStep !== totalSteps);

  // Update preview on last step
  if (currentStep === totalSteps) {
    updatePreview();
  }
}

function validateCurrentStep() {
  switch (currentStep) {
    case 1:
      const name = document.getElementById('athleteName').value.trim();
      const sport = document.getElementById('sport').value;
      const gradYear = document.getElementById('gradYear').value;

      if (!name) {
        showToast('Please enter your name', 'error');
        return false;
      }
      if (!sport) {
        showToast('Please select a sport', 'error');
        return false;
      }
      if (!gradYear) {
        showToast('Please select graduation year', 'error');
        return false;
      }
      return true;

    case 2:
      // Physical stats are optional
      return true;

    case 3:
      // Videos are optional
      return true;

    case 4:
      // Preview step - always valid
      return true;

    default:
      return true;
  }
}

function setupSportSelection() {
  const sportSelect = document.getElementById('sport');
  sportSelect?.addEventListener('change', (e) => {
    updatePositionOptions(e.target.value);
    updateStatsFields(e.target.value);
  });
}

function updatePositionOptions(sport) {
  const positionSelect = document.getElementById('position');
  if (!positionSelect) return;

  const positions = getPositions(sport);
  positionSelect.innerHTML = '<option value="">Select Position</option>';

  for (const position of positions) {
    positionSelect.innerHTML += `<option value="${position}">${position}</option>`;
  }
}

function populateSportOptions() {
  const sportSelect = document.getElementById('sport');
  if (!sportSelect) return;

  sportSelect.innerHTML = '<option value="">Select Sport</option>';
  for (const [key, config] of Object.entries(SPORTS_CONFIG)) {
    sportSelect.innerHTML += `<option value="${key}">${config.name}</option>`;
  }
}

function populateYearOptions() {
  const yearSelect = document.getElementById('gradYear');
  if (!yearSelect) return;

  yearSelect.innerHTML = '<option value="">Select Year</option>';
  for (const year of GRADUATION_YEARS) {
    yearSelect.innerHTML += `<option value="${year}">${year}</option>`;
  }
}

function setupPhotoUpload() {
  const photoInput = document.getElementById('photoInput');
  const photoPreview = document.getElementById('photoPreview');

  photoInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        profileData.photo = event.target.result;
        photoPreview.innerHTML = `<img src="${event.target.result}" alt="Profile photo">`;
      };
      reader.readAsDataURL(file);
    }
  });
}

// ==================== VIDEO MANAGER ====================

function setupVideoManager() {
  const addVideoBtn = document.getElementById('addVideoBtn');
  const videoForm = document.getElementById('videoForm');
  const saveVideoBtn = document.getElementById('saveVideoBtn');
  const cancelVideoBtn = document.getElementById('cancelVideoBtn');

  addVideoBtn?.addEventListener('click', () => {
    videoForm.classList.remove('hidden');
    addVideoBtn.classList.add('hidden');
  });

  cancelVideoBtn?.addEventListener('click', () => {
    videoForm.classList.add('hidden');
    addVideoBtn.classList.remove('hidden');
    clearVideoForm();
  });

  saveVideoBtn?.addEventListener('click', () => {
    const url = document.getElementById('videoUrl').value.trim();
    const title = document.getElementById('videoTitle').value.trim();
    const description = document.getElementById('videoDescription').value.trim();

    if (!url) {
      showToast('Please enter a video URL', 'error');
      return;
    }

    const parsed = parseVideoUrl(url);
    if (!parsed) {
      showToast('Invalid YouTube or Vimeo URL', 'error');
      return;
    }

    profileData.videos.push({
      id: generateId(),
      url,
      embedUrl: parsed.embedUrl,
      type: parsed.type,
      title: title || 'Highlight Video',
      description
    });

    renderVideosList();
    clearVideoForm();
    videoForm.classList.add('hidden');
    addVideoBtn.classList.remove('hidden');
    showToast('Video added successfully');
  });
}

function renderVideosList() {
  const container = document.getElementById('videosList');
  if (!container) return;

  if (profileData.videos.length === 0) {
    container.innerHTML = '<p class="text-secondary">No videos added yet</p>';
    return;
  }

  container.innerHTML = profileData.videos.map(video => `
    <div class="item-card" data-id="${video.id}">
      <div class="item-info">
        <h4>${escapeHtml(video.title)}</h4>
        <p>${escapeHtml(video.description || video.url)}</p>
      </div>
      <div class="item-actions">
        <button class="btn-icon delete" onclick="removeVideo('${video.id}')" title="Remove video">✕</button>
      </div>
    </div>
  `).join('');
}

function removeVideo(id) {
  profileData.videos = profileData.videos.filter(v => v.id !== id);
  renderVideosList();
  showToast('Video removed');
}

function clearVideoForm() {
  document.getElementById('videoUrl').value = '';
  document.getElementById('videoTitle').value = '';
  document.getElementById('videoDescription').value = '';
}

// ==================== STATS MANAGER ====================

function setupStatsManager() {
  // Stats are automatically updated when sport changes
}

function updateStatsFields(sport) {
  const container = document.getElementById('statsFields');
  if (!container) return;

  const statFields = getStatFields(sport);

  if (statFields.length === 0) {
    container.innerHTML = '<p class="text-secondary">Select a sport to see stat fields</p>';
    return;
  }

  container.innerHTML = statFields.map(field => `
    <div class="form-group">
      <label for="stat_${field.key}">${field.label}</label>
      <input
        type="${field.type === 'number' ? 'number' : field.type === 'decimal' ? 'number' : 'text'}"
        ${field.type === 'decimal' ? 'step="0.001"' : ''}
        id="stat_${field.key}"
        class="form-control"
        placeholder="Enter ${field.label.toLowerCase()}"
        value="${profileData.stats[field.key] || ''}"
        onchange="updateStat('${field.key}', this.value)"
      >
    </div>
  `).join('');
}

function updateStat(key, value) {
  profileData.stats[key] = value;
}

// ==================== SAVE PROFILE ====================

function collectFormData() {
  return {
    id: profileData.id,
    name: document.getElementById('athleteName').value.trim(),
    sport: document.getElementById('sport').value,
    position: document.getElementById('position').value,
    gradYear: parseInt(document.getElementById('gradYear').value) || null,
    heightFeet: parseInt(document.getElementById('heightFeet').value) || null,
    heightInches: parseInt(document.getElementById('heightInches').value) || null,
    weight: parseInt(document.getElementById('weight').value) || null,
    city: document.getElementById('city').value.trim(),
    state: document.getElementById('state').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    bio: document.getElementById('bio').value.trim(),
    photo: profileData.photo,
    videos: profileData.videos,
    stats: profileData.stats
  };
}

function saveProfile() {
  const data = collectFormData();

  if (!data.name) {
    showToast('Please enter your name', 'error');
    return;
  }

  const saved = saveAthlete(data);
  showToast('Profile saved successfully!');

  setTimeout(() => {
    window.location.href = `profile.html?id=${saved.id}`;
  }, 1000);
}

function updatePreview() {
  const data = collectFormData();
  const previewContainer = document.getElementById('profilePreview');
  if (!previewContainer) return;

  const height = data.heightFeet && data.heightInches !== null
    ? `${data.heightFeet}'${data.heightInches}"`
    : '';

  previewContainer.innerHTML = `
    <div class="preview-card">
      <div class="preview-header">
        ${data.photo
          ? `<img src="${data.photo}" alt="${data.name}" class="preview-photo">`
          : `<div class="preview-photo" style="background: var(--bg-gray); display: flex; align-items: center; justify-content: center; font-size: 2rem;">👤</div>`
        }
        <div>
          <h3>${escapeHtml(data.name) || 'Your Name'}</h3>
          <p>${getSportName(data.sport)} • ${data.position || 'Position'}</p>
          <p>Class of ${data.gradYear || 'Year'}</p>
        </div>
      </div>

      ${height || data.weight ? `
        <p><strong>Physical:</strong> ${[height, data.weight ? `${data.weight} lbs` : ''].filter(Boolean).join(' | ')}</p>
      ` : ''}

      ${data.city || data.state ? `
        <p><strong>Location:</strong> ${[data.city, data.state].filter(Boolean).join(', ')}</p>
      ` : ''}

      ${data.email ? `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>` : ''}

      <p><strong>Videos:</strong> ${data.videos.length} highlight${data.videos.length !== 1 ? 's' : ''}</p>

      ${data.bio ? `<p><strong>Bio:</strong> ${escapeHtml(data.bio.substring(0, 100))}${data.bio.length > 100 ? '...' : ''}</p>` : ''}
    </div>
  `;
}

// ==================== PROFILE PAGE ACTIONS ====================

function messageAthlete(accountId) {
  const currentAccount = getCurrentAccount();
  if (!currentAccount) {
    window.location.href = 'login.html';
    return;
  }
  startNewConversation(accountId);
}

function toggleWatchlistFromProfile(athleteId) {
  const account = getCurrentAccount();
  if (!account) {
    window.location.href = 'login.html';
    return;
  }

  if (isInWatchlist(account.id, athleteId)) {
    removeFromWatchlist(account.id, athleteId);
    showToast('Removed from watchlist');
  } else {
    addToWatchlist(account.id, athleteId);
    showToast('Added to watchlist');
  }

  // Re-render the profile page to update the button
  initProfilePage();
}

// ==================== PROFILE VIEW PAGE ====================

function initProfilePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const athleteId = urlParams.get('id');

  if (!athleteId) {
    showToast('Athlete not found', 'error');
    setTimeout(() => window.location.href = 'index.html', 1500);
    return;
  }

  const athlete = getAthleteById(athleteId);

  if (!athlete) {
    showToast('Athlete not found', 'error');
    setTimeout(() => window.location.href = 'index.html', 1500);
    return;
  }

  renderProfile(athlete);
  setupProfileActions(athlete);
}

function renderProfile(athlete) {
  const currentUser = getCurrentUser();
  const isOwnProfile = currentUser && currentUser.id === athlete.id;
  const isFollowingAthlete = currentUser ? isFollowing(currentUser.id, athlete.id) : false;
  const theyFollowMe = currentUser && !isOwnProfile ? isFollowing(athlete.id, currentUser.id) : false;

  // Hero section
  const heroContent = document.getElementById('profileHero');
  if (heroContent) {
    const height = athlete.heightFeet && athlete.heightInches !== null
      ? `${athlete.heightFeet}'${athlete.heightInches}"`
      : null;

    const awardCount = getAthleteAwardCount(athlete.id);
    const todayAward = hasWonAwardToday(athlete.id);

    heroContent.innerHTML = `
      <div class="profile-header">
        ${athlete.photo
          ? `<img src="${athlete.photo}" alt="${athlete.name}" class="profile-photo">`
          : `<div class="profile-photo-placeholder">👤</div>`
        }
        <div class="profile-info">
          <h1>${escapeHtml(athlete.name)}</h1>
          ${todayAward ? renderPOTDBadge(athlete.id) : ''}
          <div class="profile-sport">${getSportName(athlete.sport)} • ${athlete.position || 'Position TBD'}</div>
          <div class="profile-social-stats">
            <span><strong id="followersCount">${getFollowerCount(athlete.id)}</strong> followers</span>
            <span><strong id="followingCount">${getFollowingCount(athlete.id)}</strong> following</span>
            ${awardCount > 0 ? `<span><strong>🏆 ${awardCount}</strong> award${awardCount > 1 ? 's' : ''}</span>` : ''}
          </div>
          ${theyFollowMe && !isFollowingAthlete ? `<div class="follows-you-badge">Follows you</div>` : ''}
          <div class="profile-meta">
            <span>📅 Class of ${athlete.gradYear || 'TBD'}</span>
            ${athlete.city || athlete.state
              ? `<span>📍 ${[athlete.city, athlete.state].filter(Boolean).join(', ')}</span>`
              : ''
            }
            ${height ? `<span>📏 ${height}</span>` : ''}
            ${athlete.weight ? `<span>⚖️ ${athlete.weight} lbs</span>` : ''}
          </div>
        </div>
        <div class="profile-actions">
          ${!isOwnProfile && currentUser ? renderFollowButton(athlete.id, currentUser.id) : ''}
          <button class="btn btn-secondary" onclick="shareProfile('${athlete.id}')">Share</button>
          ${isOwnProfile ? `<a href="create.html?edit=${athlete.id}" class="btn btn-primary">Edit Profile</a>` : ''}
        </div>
      </div>
    `;
  }

  // Bio section
  const bioSection = document.getElementById('bioSection');
  if (bioSection) {
    if (athlete.bio) {
      bioSection.innerHTML = `
        <h2>About</h2>
        <p>${escapeHtml(athlete.bio)}</p>
      `;
    } else {
      bioSection.classList.add('hidden');
    }
  }

  // Videos section
  const videosSection = document.getElementById('videosSection');
  if (videosSection) {
    if (athlete.videos && athlete.videos.length > 0) {
      videosSection.innerHTML = `
        <h2>Highlight Videos</h2>
        <div class="videos-grid">
          ${athlete.videos.map(video => `
            <div class="video-card">
              <div class="video-embed">
                <iframe src="${video.embedUrl}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </div>
              <div class="video-info">
                <div class="video-title">${escapeHtml(video.title)}</div>
                ${video.description ? `<div class="video-description">${escapeHtml(video.description)}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      videosSection.classList.add('hidden');
    }
  }

  // Stats section
  const statsSection = document.getElementById('statsSection');
  if (statsSection) {
    const statFields = getStatFields(athlete.sport);
    const hasStats = statFields.some(f => athlete.stats && athlete.stats[f.key]);

    if (hasStats) {
      statsSection.innerHTML = `
        <h2>Performance Stats</h2>
        <div class="stats-grid">
          ${statFields.map(field => {
            const value = athlete.stats?.[field.key];
            if (value === undefined || value === '' || value === null) return '';
            return `
              <div class="stat-card">
                <div class="stat-value">${escapeHtml(String(value))}</div>
                <div class="stat-label">${field.label}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      statsSection.classList.add('hidden');
    }
  }

  // Contact section
  const contactSection = document.getElementById('contactSection');
  if (contactSection) {
    const currentAccount = getCurrentAccount();
    const isOwnProfile = currentAccount && athlete.accountId === currentAccount.id;
    const canMessage = currentAccount && athlete.accountId && !isOwnProfile;
    const canWatch = canUserScout() && !isOwnProfile;
    const inWatchlist = canWatch && currentAccount ? isInWatchlist(currentAccount.id, athlete.id) : false;

    contactSection.innerHTML = `
      <h2>Contact</h2>
      ${canMessage || canWatch ? `
        <div class="contact-actions">
          ${canMessage ? `
            <button class="btn btn-primary btn-block" onclick="messageAthlete('${athlete.accountId}')">
              💬 Send Message
            </button>
          ` : ''}
          ${canWatch ? `
            <button class="btn ${inWatchlist ? 'btn-secondary' : 'btn-outline'} btn-block"
                    onclick="toggleWatchlist('${athlete.id}')">
              ${inWatchlist ? '★ In Watchlist' : '☆ Add to Watchlist'}
            </button>
          ` : ''}
        </div>
      ` : ''}
      <div class="contact-list">
        ${athlete.email ? `
          <div class="contact-item">
            <div class="contact-icon">✉</div>
            <a href="mailto:${escapeHtml(athlete.email)}">${escapeHtml(athlete.email)}</a>
          </div>
        ` : ''}
        ${athlete.phone ? `
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <a href="tel:${escapeHtml(athlete.phone)}">${escapeHtml(athlete.phone)}</a>
          </div>
        ` : ''}
      </div>
      ${!currentAccount ? `
        <div class="contact-login-prompt">
          <p>Log in to message or save this athlete</p>
          <a href="login.html" class="btn btn-secondary btn-sm">Log In</a>
        </div>
      ` : ''}
    `;
  }

  // Posts section
  const postsSection = document.getElementById('postsSection');
  if (postsSection) {
    const posts = getPostsByAthlete(athlete.id);
    const currentUser = getCurrentUser();

    if (posts.length > 0) {
      postsSection.innerHTML = `
        <h2>Posts</h2>
        <div class="profile-posts">
          ${posts.map(post => renderPost(post, currentUser)).join('')}
        </div>
      `;
    } else {
      postsSection.innerHTML = `
        <h2>Posts</h2>
        <div class="empty-posts">
          <p>No posts yet</p>
        </div>
      `;
    }
  }
}

function setupProfileActions(athlete) {
  // Share functionality
  window.shareProfile = function(id) {
    const url = `${window.location.origin}${window.location.pathname}?id=${id}`;

    if (navigator.share) {
      navigator.share({
        title: `${athlete.name} - AthleteHub`,
        text: `Check out ${athlete.name}'s athletic profile`,
        url: url
      }).catch(() => {
        copyToClipboard(url);
      });
    } else {
      copyToClipboard(url);
    }
  };
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Profile link copied to clipboard!');
  }).catch(() => {
    showToast('Could not copy link', 'error');
  });
}

// ==================== UTILITY FUNCTIONS ====================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ==================== AUTH UI ====================

function renderAdminViewBar() {
  // Remove existing bar to avoid duplicates
  document.getElementById('adminViewBar')?.remove();
  if (!isAdmin()) return;

  const mode = getAdminViewMode();
  const bar = document.createElement('div');
  bar.id = 'adminViewBar';
  bar.style.cssText = 'position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);z-index:9999;background:#1a1a2e;border:1px solid rgba(255,255,255,0.15);border-radius:40px;padding:0.4rem 0.6rem;display:flex;align-items:center;gap:0.5rem;font-size:0.78rem;box-shadow:0 4px 20px rgba(0,0,0,0.4);';
  bar.innerHTML = `
    <span style="color:rgba(255,255,255,0.5);padding:0 0.3rem;">&#128274; Admin View:</span>
    <button id="adminViewPlayer" onclick="switchAdminView('player')" style="border:none;border-radius:20px;padding:0.3rem 0.8rem;cursor:pointer;font-size:0.78rem;font-weight:600;transition:all 0.15s;background:${mode==='player'?'var(--primary)':'transparent'};color:${mode==='player'?'#fff':'rgba(255,255,255,0.5)'};">&#127939; Player</button>
    <button id="adminViewScout" onclick="switchAdminView('scout')" style="border:none;border-radius:20px;padding:0.3rem 0.8rem;cursor:pointer;font-size:0.78rem;font-weight:600;transition:all 0.15s;background:${mode==='scout'?'#a855f7':'transparent'};color:${mode==='scout'?'#fff':'rgba(255,255,255,0.5)'};">&#128269; Scout</button>
    <a href="admin.html" style="border:none;border-radius:20px;padding:0.3rem 0.8rem;cursor:pointer;font-size:0.78rem;font-weight:600;color:rgba(255,255,255,0.5);text-decoration:none;background:transparent;">&#9881;&#65039; Panel</a>
  `;
  document.body.appendChild(bar);
}

function switchAdminView(mode) {
  setAdminViewMode(mode);
  const dest = mode === 'scout' ? 'scout-dashboard.html' : 'dashboard.html';
  window.location.href = dest;
}

function updateAuthUI() {
  const account = getCurrentAccount();
  const profile = getActiveProfile();

  // Update all auth-dependent elements
  document.querySelectorAll('.auth-logged-in').forEach(el => {
    el.style.display = account ? '' : 'none';
  });

  document.querySelectorAll('.auth-logged-out').forEach(el => {
    el.style.display = account ? 'none' : '';
  });

  // Add dynamic nav links for logged-in users
  const navLinks = document.querySelector('.nav-links');
  if (navLinks && account) {
    // Remove existing dynamic links to avoid duplicates
    navLinks.querySelectorAll('.dynamic-nav-link').forEach(el => el.remove());

    const navUserDisplay = document.getElementById('navUserDisplay');
    const unreadCount = getTotalUnreadCount(account.id);

    // Add Messages link before user display
    if (navUserDisplay) {
      const messagesLink = document.createElement('a');
      messagesLink.href = 'messages.html';
      messagesLink.className = 'nav-link dynamic-nav-link';
      messagesLink.innerHTML = unreadCount > 0
        ? `Messages <span class="nav-badge">${unreadCount}</span>`
        : 'Messages';
      if (document.body.dataset.page === 'messages') {
        messagesLink.classList.add('active');
      }
      navLinks.insertBefore(messagesLink, navUserDisplay);

      // Add Scout Dashboard link for scouts/coaches
      if (canUserScout()) {
        const dashboardLink = document.createElement('a');
        dashboardLink.href = 'scout-dashboard.html';
        dashboardLink.className = 'nav-link dynamic-nav-link';
        dashboardLink.textContent = 'Dashboard';
        if (document.body.dataset.page === 'scout-dashboard') {
          dashboardLink.classList.add('active');
        }
        navLinks.insertBefore(dashboardLink, navUserDisplay);
      }

      // Add Admin Panel link for admins
      if (isAdmin()) {
        const adminLink = document.createElement('a');
        adminLink.href = 'admin.html';
        adminLink.className = 'nav-link dynamic-nav-link';
        adminLink.textContent = 'Admin';
        if (document.body.dataset.page === 'admin') {
          adminLink.classList.add('active');
        }
        navLinks.insertBefore(adminLink, navUserDisplay);
      }
    }
  }

  // Update user display in nav
  const navUserDisplay = document.getElementById('navUserDisplay');
  if (navUserDisplay && account) {
    navUserDisplay.innerHTML = `
      <div class="nav-user-menu">
        <button class="nav-user-btn" onclick="toggleUserMenu()">
          ${profile?.photo
            ? `<img src="${profile.photo}" alt="${account.name}" class="nav-user-avatar">`
            : `<div class="nav-user-avatar-placeholder">${account.name.charAt(0).toUpperCase()}</div>`
          }
        </button>
        <div class="nav-user-dropdown hidden" id="userDropdown">
          <div class="dropdown-header">
            <strong>${escapeHtml(account.name)}</strong>
            <span>${escapeHtml(account.email)}</span>
            <span class="account-type-badge">${ACCOUNT_TYPES[account.accountType]?.name || account.accountType}</span>
          </div>
          <div class="dropdown-divider"></div>
          <a href="dashboard.html" class="dropdown-item">My Profiles</a>
          <a href="messages.html" class="dropdown-item">Messages</a>
          ${canUserScout() ? '<a href="scout-dashboard.html" class="dropdown-item">Scout Dashboard</a>' : ''}
          ${isAdmin() ? '<a href="admin.html" class="dropdown-item">Admin Panel</a>' : ''}
          <a href="settings.html" class="dropdown-item">Settings</a>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item text-danger" onclick="handleLogout()">Log Out</button>
        </div>
      </div>
    `;
  }

  // Render floating admin view switcher bar
  renderAdminViewBar();
}

function toggleUserMenu() {
  const dropdown = document.getElementById('userDropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

function handleLogout() {
  logoutAccount();
  showToast('Logged out successfully');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

// ==================== LOGIN PAGE ====================

function initLoginPage() {
  // Redirect if already logged in
  if (isLoggedIn()) {
    window.location.href = 'dashboard.html';
    return;
  }

  const form = document.getElementById('loginForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    const result = loginAccount(email, password);

    if (result.error) {
      showToast(result.error, 'error');
    } else {
      showToast('Welcome back!');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    }
  });
}

// ==================== SIGNUP PAGE ====================

function initSignupPage() {
  // Redirect if already logged in
  if (isLoggedIn()) {
    window.location.href = 'dashboard.html';
    return;
  }

  const form = document.getElementById('signupForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Get selected account type
    const accountTypeRadio = document.querySelector('input[name="accountType"]:checked');
    const accountType = accountTypeRadio ? accountTypeRadio.value : 'athlete';

    if (!name || !email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }

    const result = createAccount(email, password, name, accountType);

    if (result.error) {
      showToast(result.error, 'error');
    } else {
      // Auto login after signup
      loginAccount(email, password);
      const welcomeMsg = accountType === 'scout' ? 'Welcome Scout! Start discovering talent.' :
                         accountType === 'coach' ? 'Welcome Coach! Build your team.' :
                         accountType === 'parent' ? 'Welcome! Support your athlete.' :
                         'Account created! Welcome to AthletePro!';
      showToast(welcomeMsg);
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    }
  });
}

// ==================== DASHBOARD PAGE ====================

function initDashboardPage() {
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }

  const account = getCurrentAccount();
  const profiles = getProfilesByAccount(account.id);

  // Update streak on every dashboard visit
  const streak = updateStreak(account.id);

  renderDashboard(account, profiles);
  renderStreakWidget(account.id, streak);
  initCalendar();
  updateAuthUI();

  // Show streak toast (small delay so page renders first)
  setTimeout(() => checkAndShowStreakToast(streak), 600);
}

function renderDashboard(account, profiles) {
  // Render account info
  const accountInfo = document.getElementById('accountInfo');
  if (accountInfo) {
    accountInfo.innerHTML = `
      <h1>Welcome, ${escapeHtml(account.name)}!</h1>
      <p class="account-email">${escapeHtml(account.email)}</p>
    `;
  }

  // Render profiles
  const profilesGrid = document.getElementById('profilesGrid');
  if (profilesGrid) {
    if (profiles.length === 0) {
      profilesGrid.innerHTML = `
        <div class="empty-profiles">
          <div class="empty-icon">🏃</div>
          <h3>No profiles yet</h3>
          <p>Create your first athlete profile to get started!</p>
          <a href="create.html" class="btn btn-primary">Create Profile</a>
        </div>
      `;
    } else {
      profilesGrid.innerHTML = profiles.map(profile => `
        <div class="profile-card-mini ${getActiveProfile()?.id === profile.id ? 'active' : ''}">
          <div class="profile-card-mini-header">
            ${profile.photo
              ? `<img src="${profile.photo}" alt="${profile.name}" class="profile-mini-photo">`
              : `<div class="profile-mini-photo-placeholder">${getSportEmoji(profile.sport)}</div>`
            }
          </div>
          <div class="profile-card-mini-body">
            <h3>${escapeHtml(profile.name)}</h3>
            <p class="profile-sport-badge">${getSportName(profile.sport)}</p>
            <p class="profile-position">${profile.position || 'Position TBD'}</p>
            <div class="profile-card-mini-stats">
              <span>${getFollowerCount(profile.id)} followers</span>
              <span>${getPostsByAthlete(profile.id).length} posts</span>
            </div>
          </div>
          <div class="profile-card-mini-actions">
            <button class="btn btn-sm ${getActiveProfile()?.id === profile.id ? 'btn-secondary' : 'btn-primary'}"
                    onclick="switchProfile('${profile.id}')">
              ${getActiveProfile()?.id === profile.id ? 'Active' : 'Switch'}
            </button>
            <a href="profile.html?id=${profile.id}" class="btn btn-sm btn-secondary">View</a>
            <a href="create.html?edit=${profile.id}" class="btn btn-sm btn-secondary">Edit</a>
          </div>
        </div>
      `).join('') + `
        <div class="add-profile-card">
          <a href="create.html" class="add-profile-btn">
            <span class="add-icon">+</span>
            <span>Add New Profile</span>
          </a>
        </div>
      `;
    }
  }
}

function renderStreakWidget(accountId, streak) {
  const container = document.getElementById('streakWidget');
  if (!container) return;

  const dots = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toDateString();
    const lastActive = streak.lastActive;
    // A dot is filled if it's within the current streak window
    const daysAgo = i;
    const active = daysAgo < streak.current;
    dots.push(`<div class="streak-dot ${active ? 'active' : ''}"></div>`);
  }

  container.innerHTML = `
    <div class="streak-card">
      <div class="streak-main">
        <span class="streak-flame">${getStreakEmoji(streak.current)}</span>
        <div class="streak-info">
          <span class="streak-count">${streak.current}</span>
          <span class="streak-label">day streak</span>
        </div>
      </div>
      <div class="streak-dots">${dots.join('')}</div>
      <div class="streak-best">Best: ${streak.longest} days</div>
    </div>
  `;
}

function switchProfile(profileId) {
  setActiveProfile(profileId);
  showToast('Profile switched!');
  setTimeout(() => location.reload(), 500);
}

function getSportEmoji(sport) {
  const emojis = {
    soccer: '⚽',
    basketball: '🏀',
    football: '🏈',
    baseball: '⚾',
    volleyball: '🏐',
    trackField: '🏃'
  };
  return emojis[sport] || '🏃';
}

// ==================== MESSAGES PAGE ====================

let currentConversationId = null;
let selectedGroupMembers = [];

function initMessagesPage() {
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }

  renderConversationsList();
  setupMessageSearch();
}

function renderConversationsList() {
  const account = getCurrentAccount();
  const conversationsList = document.getElementById('conversationsList');
  const conversations = getConversationsForUser(account.id);

  if (conversations.length === 0) {
    conversationsList.innerHTML = `
      <div class="empty-conversations">
        <div class="empty-icon">💬</div>
        <h3>No messages yet</h3>
        <p>Start a conversation with athletes, coaches, or scouts</p>
        <button class="btn btn-primary" onclick="showNewConversationModal()">New Conversation</button>
      </div>
    `;
    return;
  }

  conversationsList.innerHTML = conversations.map(conv => {
    const unread = conv.unreadCount[account.id] || 0;
    let avatarHtml, displayName, badgeHtml, previewHtml;

    if (conv.isGroup) {
      const others = conv.participants.filter(p => p !== account.id);
      const a = getAccountById(others[0]);
      const b = getAccountById(others[1]);
      avatarHtml = `
        <div class="group-avatar-stack">
          <div class="avatar-a">${(a?.name || 'G')[0].toUpperCase()}</div>
          <div class="avatar-b">${(b?.name || 'G')[0].toUpperCase()}</div>
        </div>`;
      displayName = escapeHtml(conv.groupName || 'Group Chat');
      badgeHtml = `<span class="conversation-type-badge group">Group · ${conv.participants.length}</span>`;
    } else {
      const otherUserId = conv.participants.find(p => p !== account.id);
      const otherAccount = getAccountById(otherUserId);
      avatarHtml = `
        <div class="conversation-avatar">
          ${otherAccount?.photo
            ? `<img src="${otherAccount.photo}" alt="${escapeHtml(otherAccount?.name || 'User')}">`
            : `<div class="avatar-placeholder">${(otherAccount?.name || 'U')[0].toUpperCase()}</div>`
          }
        </div>`;
      displayName = escapeHtml(otherAccount?.name || 'Unknown User');
      badgeHtml = otherAccount
        ? `<span class="conversation-type-badge">${ACCOUNT_TYPES[otherAccount.accountType]?.name || otherAccount.accountType}</span>`
        : '';
    }

    if (conv.lastMessage) {
      const txt = conv.lastMessage.content.substring(0, 48) + (conv.lastMessage.content.length > 48 ? '…' : '');
      if (conv.isGroup && conv.lastMessage.senderId) {
        const sender = getAccountById(conv.lastMessage.senderId);
        const sName = sender ? sender.name.split(' ')[0] : 'Someone';
        previewHtml = `<span class="conversation-preview-sender">${escapeHtml(sName)}: </span>${escapeHtml(txt)}`;
      } else {
        previewHtml = escapeHtml(txt);
      }
    } else {
      previewHtml = 'No messages yet';
    }

    return `
      <div class="conversation-item ${currentConversationId === conv.id ? 'active' : ''} ${unread > 0 ? 'unread' : ''}"
           onclick="openConversation('${conv.id}')">
        ${avatarHtml}
        <div class="conversation-info">
          <div class="conversation-header">
            <span class="conversation-name">${displayName}</span>
            <span class="conversation-time">${formatTimeAgo(conv.lastMessageAt)}</span>
          </div>
          <div class="conversation-preview">${previewHtml}</div>
          ${badgeHtml}
        </div>
        ${unread > 0 ? `<span class="unread-badge">${unread}</span>` : ''}
      </div>
    `;
  }).join('');
}

function openConversation(conversationId) {
  const account = getCurrentAccount();
  currentConversationId = conversationId;

  markConversationAsRead(conversationId, account.id);
  renderConversationsList();
  renderMessageThread(conversationId);

  // On mobile, show the message panel
  document.querySelector('.messages-thread')?.classList.add('active');
}

function renderMessageThread(conversationId) {
  const account = getCurrentAccount();
  const conversation = getConversationById(conversationId);
  const messages = getMessagesForConversation(conversationId);
  const threadContainer = document.getElementById('messageThread');
  const threadHeader = document.getElementById('threadHeader');

  if (!conversation) return;

  // Build header
  let headerAvatarHtml, headerNameHtml, headerSubHtml;
  if (conversation.isGroup) {
    const others = conversation.participants.filter(p => p !== account.id);
    const a = getAccountById(others[0]);
    const b = getAccountById(others[1]);
    headerAvatarHtml = `
      <div class="group-avatar-stack">
        <div class="avatar-a">${(a?.name || 'G')[0].toUpperCase()}</div>
        <div class="avatar-b">${(b?.name || 'G')[0].toUpperCase()}</div>
      </div>`;
    headerNameHtml = escapeHtml(conversation.groupName || 'Group Chat');
    headerSubHtml = `<span class="thread-participant-count">${conversation.participants.length} members</span>`;
  } else {
    const otherUserId = conversation.participants.find(p => p !== account.id);
    const otherAccount = getAccountById(otherUserId);
    headerAvatarHtml = `
      <div class="thread-avatar">
        ${otherAccount?.photo
          ? `<img src="${otherAccount.photo}" alt="${escapeHtml(otherAccount?.name || 'User')}">`
          : `<div class="avatar-placeholder">${(otherAccount?.name || 'U')[0].toUpperCase()}</div>`
        }
      </div>`;
    headerNameHtml = escapeHtml(otherAccount?.name || 'Unknown User');
    headerSubHtml = `<span class="thread-type">${ACCOUNT_TYPES[otherAccount?.accountType]?.name || ''}</span>`;
  }

  threadHeader.innerHTML = `
    <div class="thread-user-info">
      <button class="back-btn mobile-only" onclick="closeConversation()">←</button>
      ${headerAvatarHtml}
      <div class="thread-name">
        <h3>${headerNameHtml}</h3>
        ${headerSubHtml}
      </div>
    </div>
    <div class="thread-actions">
      <button class="btn btn-sm btn-secondary" onclick="deleteConversationHandler('${conversationId}')">Delete</button>
    </div>
  `;

  // Render messages
  if (messages.length === 0) {
    threadContainer.innerHTML = `
      <div class="empty-thread" style="display:flex;align-items:center;justify-content:center;flex:1;color:var(--text-muted);font-size:0.9rem;">
        No messages yet. Say hello!
      </div>`;
  } else {
    threadContainer.innerHTML = messages.map(msg => {
      const isSent = msg.senderId === account.id;
      let senderLabel = '';
      if (conversation.isGroup && !isSent) {
        const sender = getAccountById(msg.senderId);
        senderLabel = `<div class="message-sender-label">${escapeHtml(sender?.name || 'Unknown')}</div>`;
      }
      return `
        ${senderLabel}
        <div class="message ${isSent ? 'sent' : 'received'}">
          <div class="message-content">${escapeHtml(msg.content)}</div>
          <div class="message-time">${formatTimeAgo(msg.createdAt)}</div>
        </div>`;
    }).join('');
    threadContainer.scrollTop = threadContainer.scrollHeight;
  }

  document.getElementById('composeArea').classList.remove('hidden');
}

function closeConversation() {
  document.querySelector('.messages-thread')?.classList.remove('active');
  currentConversationId = null;
}

function sendMessageHandler() {
  if (!currentConversationId) return;

  const input = document.getElementById('messageInput');
  const content = input.value.trim();

  if (!content) return;

  const account = getCurrentAccount();
  sendMessage(currentConversationId, account.id, content);

  input.value = '';
  renderMessageThread(currentConversationId);
  renderConversationsList();
}

function deleteConversationHandler(conversationId) {
  if (confirm('Are you sure you want to delete this conversation?')) {
    const account = getCurrentAccount();
    deleteConversation(conversationId, account.id);
    currentConversationId = null;
    renderConversationsList();
    document.getElementById('messageThread').innerHTML = '';
    document.getElementById('threadHeader').innerHTML = '';
    document.getElementById('composeArea').classList.add('hidden');
    showToast('Conversation deleted');
  }
}

function startNewConversation(recipientAccountId) {
  const account = getCurrentAccount();
  if (!account) {
    window.location.href = 'login.html';
    return;
  }

  const conversation = createConversation(account.id, recipientAccountId);
  window.location.href = `messages.html?conv=${conversation.id}`;
}

function setupMessageSearch() {
  const searchInput = document.getElementById('messageSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const account = getCurrentAccount();
      const conversations = getConversationsForUser(account.id);

      const filtered = conversations.filter(conv => {
        const otherUserId = conv.participants.find(p => p !== account.id);
        const otherAccount = getAccountById(otherUserId);
        return otherAccount?.name?.toLowerCase().includes(query);
      });

      renderFilteredConversations(filtered);
    });
  }

  // Check for conversation parameter
  const urlParams = new URLSearchParams(window.location.search);
  const convId = urlParams.get('conv');
  if (convId) {
    openConversation(convId);
  }
}

function renderFilteredConversations(conversations) {
  const account = getCurrentAccount();
  const conversationsList = document.getElementById('conversationsList');

  if (conversations.length === 0) {
    conversationsList.innerHTML = `
      <div class="empty-conversations">
        <p>No conversations found</p>
      </div>
    `;
    return;
  }

  conversationsList.innerHTML = conversations.map(conv => {
    const otherUserId = conv.participants.find(p => p !== account.id);
    const otherAccount = getAccountById(otherUserId);
    const unread = conv.unreadCount[account.id] || 0;

    return `
      <div class="conversation-item ${currentConversationId === conv.id ? 'active' : ''} ${unread > 0 ? 'unread' : ''}"
           onclick="openConversation('${conv.id}')">
        <div class="conversation-avatar">
          ${otherAccount?.photo
            ? `<img src="${otherAccount.photo}" alt="${otherAccount?.name || 'User'}">`
            : `<div class="avatar-placeholder">${(otherAccount?.name || 'U')[0].toUpperCase()}</div>`
          }
        </div>
        <div class="conversation-info">
          <div class="conversation-header">
            <span class="conversation-name">${escapeHtml(otherAccount?.name || 'Unknown User')}</span>
            <span class="conversation-time">${formatTimeAgo(conv.lastMessageAt)}</span>
          </div>
          <div class="conversation-preview">
            ${conv.lastMessage ? escapeHtml(conv.lastMessage.content.substring(0, 50)) : 'No messages yet'}
          </div>
        </div>
        ${unread > 0 ? `<span class="unread-badge">${unread}</span>` : ''}
      </div>
    `;
  }).join('');
}

// New Conversation Modal Functions
function showNewConversationModal() {
  const modal = document.getElementById('newConversationModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('active');
    selectedGroupMembers = [];
    renderSelectedMembers();
    switchConversationTab('dm');
    document.getElementById('userSearchInput')?.focus();
    if (document.getElementById('userSearchResults')) {
      document.getElementById('userSearchResults').innerHTML = '';
    }
  }
}

function hideNewConversationModal() {
  const modal = document.getElementById('newConversationModal');
  if (modal) {
    modal.classList.remove('active');
    modal.classList.add('hidden');
  }
}

function switchConversationTab(tab) {
  const dmTab = document.getElementById('dmTabContent');
  const groupTab = document.getElementById('groupTabContent');
  document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tab + 'TabBtn')?.classList.add('active');
  if (tab === 'dm') {
    dmTab?.classList.remove('hidden');
    groupTab?.classList.add('hidden');
    document.getElementById('userSearchInput')?.focus();
  } else {
    dmTab?.classList.add('hidden');
    groupTab?.classList.remove('hidden');
    document.getElementById('groupNameInput')?.focus();
  }
}

function addMemberToGroup(accountId) {
  if (!selectedGroupMembers.includes(accountId)) {
    selectedGroupMembers.push(accountId);
    renderSelectedMembers();
    // Clear search after adding
    const input = document.getElementById('groupUserSearchInput');
    const results = document.getElementById('groupUserSearchResults');
    if (input) input.value = '';
    if (results) results.innerHTML = '';
  }
}

function removeMemberFromGroup(accountId) {
  selectedGroupMembers = selectedGroupMembers.filter(id => id !== accountId);
  renderSelectedMembers();
}

function renderSelectedMembers() {
  const container = document.getElementById('selectedMembersList');
  if (!container) return;
  if (selectedGroupMembers.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted);font-size:0.82rem;">No members added yet</span>';
    return;
  }
  container.innerHTML = selectedGroupMembers.map(id => {
    const acc = getAccountById(id);
    return `<div class="member-chip">${escapeHtml(acc?.name || 'User')}<button class="member-chip-remove" onclick="removeMemberFromGroup('${id}')">×</button></div>`;
  }).join('');
}

function searchUsersForGroupAdd() {
  const query = document.getElementById('groupUserSearchInput')?.value?.toLowerCase();
  const resultsContainer = document.getElementById('groupUserSearchResults');
  const account = getCurrentAccount();

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = '<p class="search-hint">Type at least 2 characters</p>';
    return;
  }

  const accounts = getAccounts().filter(a =>
    a.id !== account.id &&
    !selectedGroupMembers.includes(a.id) &&
    (a.name?.toLowerCase().includes(query) || a.email?.toLowerCase().includes(query))
  );

  if (accounts.length === 0) {
    resultsContainer.innerHTML = '<p class="no-results">No users found</p>';
    return;
  }

  resultsContainer.innerHTML = accounts.slice(0, 8).map(acc => `
    <div class="user-search-result" onclick="addMemberToGroup('${acc.id}')">
      <div class="user-result-avatar">
        ${acc.photo
          ? `<img src="${acc.photo}" alt="${escapeHtml(acc.name)}">`
          : `<div class="avatar-placeholder">${acc.name?.charAt(0).toUpperCase() || 'U'}</div>`
        }
      </div>
      <div class="user-result-info">
        <span class="user-result-name">${escapeHtml(acc.name || 'Unknown')}</span>
        <span class="user-result-type">${ACCOUNT_TYPES[acc.accountType]?.name || acc.accountType}</span>
      </div>
      <span style="color:var(--primary);font-size:1.2rem;margin-left:auto;">+</span>
    </div>
  `).join('');
}

function createGroupConversationHandler() {
  const account = getCurrentAccount();
  if (!account) return;

  const groupName = document.getElementById('groupNameInput')?.value?.trim();
  if (!groupName) {
    showToast('Please enter a group name', 'error');
    return;
  }
  if (selectedGroupMembers.length < 2) {
    showToast('Add at least 2 other members', 'error');
    return;
  }

  const participantIds = [account.id, ...selectedGroupMembers];
  const conversation = createGroupConversation(participantIds, groupName);
  hideNewConversationModal();
  window.location.href = `messages.html?conv=${conversation.id}`;
}

function searchUsersForConversation() {
  const query = document.getElementById('userSearchInput')?.value?.toLowerCase();
  const resultsContainer = document.getElementById('userSearchResults');
  const account = getCurrentAccount();

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = '<p class="search-hint">Type at least 2 characters to search</p>';
    return;
  }

  // Search accounts and athletes
  const accounts = getAccounts().filter(a =>
    a.id !== account.id &&
    (a.name?.toLowerCase().includes(query) || a.email?.toLowerCase().includes(query))
  );

  // Also search athletes to find their accounts
  const athletes = getAthletes().filter(a =>
    a.name?.toLowerCase().includes(query)
  );

  // Combine results, avoiding duplicates
  const results = [];
  const addedAccountIds = new Set();

  accounts.forEach(acc => {
    if (!addedAccountIds.has(acc.id)) {
      results.push({ account: acc, type: 'account' });
      addedAccountIds.add(acc.id);
    }
  });

  athletes.forEach(athlete => {
    if (athlete.accountId && !addedAccountIds.has(athlete.accountId)) {
      const acc = getAccountById(athlete.accountId);
      if (acc) {
        results.push({ account: acc, athlete, type: 'athlete' });
        addedAccountIds.add(athlete.accountId);
      }
    }
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p class="no-results">No users found</p>';
    return;
  }

  resultsContainer.innerHTML = results.slice(0, 10).map(result => {
    const acc = result.account;
    const athlete = result.athlete;
    return `
      <div class="user-search-result" onclick="startConversationWith('${acc.id}')">
        <div class="user-result-avatar">
          ${acc.photo
            ? `<img src="${acc.photo}" alt="${acc.name}">`
            : `<div class="avatar-placeholder">${acc.name?.charAt(0).toUpperCase() || 'U'}</div>`
          }
        </div>
        <div class="user-result-info">
          <span class="user-result-name">${escapeHtml(acc.name || 'Unknown')}</span>
          <span class="user-result-type">${ACCOUNT_TYPES[acc.accountType]?.name || acc.accountType}</span>
          ${athlete ? `<span class="user-result-sport">${escapeHtml(athlete.sport)} - ${escapeHtml(athlete.position || '')}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function startConversationWith(accountId) {
  hideNewConversationModal();
  startNewConversation(accountId);
}

// Stub functions for edit modals (to be expanded)
function showEditClubModal() {
  showToast('Edit club feature coming soon!');
}

function showEditEventModal(eventId) {
  showToast('Edit event feature coming soon!');
}

// ==================== SCOUT/COACH DASHBOARD PAGE ====================

let scoutFilters = {
  sport: 'all',
  position: 'all',
  gradYear: 'all',
  search: ''
};

function initScoutDashboardPage() {
  const account = getCurrentAccount();

  if (!isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }

  if (!canUserScout()) {
    showToast('This dashboard is only available for scouts and coaches', 'error');
    setTimeout(() => window.location.href = 'index.html', 1500);
    return;
  }

  setupScoutFilters();
  renderDashboardStats();
  initCalendar();
  renderSquadRoster();
  renderWatchlist();
  renderTalentPool();
}

function setupScoutFilters() {
  const sportFilter = document.getElementById('scoutSportFilter');
  const yearFilter = document.getElementById('scoutYearFilter');

  if (sportFilter) {
    sportFilter.innerHTML = '<option value="all">All Sports</option>' +
      Object.entries(SPORTS_CONFIG).map(([key, sport]) =>
        `<option value="${key}">${sport.icon} ${sport.name}</option>`
      ).join('');

    sportFilter.addEventListener('change', (e) => {
      scoutFilters.sport = e.target.value;
      updatePositionFilter();
      renderTalentPool();
    });
  }

  if (yearFilter) {
    const currentYear = new Date().getFullYear();
    yearFilter.innerHTML = '<option value="all">All Years</option>' +
      Array.from({ length: 8 }, (_, i) => currentYear + i)
        .map(year => `<option value="${year}">${year}</option>`)
        .join('');

    yearFilter.addEventListener('change', (e) => {
      scoutFilters.gradYear = e.target.value;
      renderTalentPool();
    });
  }

  const searchInput = document.getElementById('scoutSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      scoutFilters.search = e.target.value.toLowerCase();
      renderTalentPool();
    });
  }
}

function updatePositionFilter() {
  const positionFilter = document.getElementById('scoutPositionFilter');
  if (!positionFilter) return;

  if (scoutFilters.sport === 'all') {
    positionFilter.innerHTML = '<option value="all">All Positions</option>';
    positionFilter.disabled = true;
  } else {
    const sport = SPORTS_CONFIG[scoutFilters.sport];
    positionFilter.innerHTML = '<option value="all">All Positions</option>' +
      (sport?.positions || []).map(pos =>
        `<option value="${pos}">${pos}</option>`
      ).join('');
    positionFilter.disabled = false;
  }

  positionFilter.addEventListener('change', (e) => {
    scoutFilters.position = e.target.value;
    renderTalentPool();
  });
}

function renderDashboardStats() {
  const account = getCurrentAccount();
  const watchlist = getWatchlist(account.id);
  const athletes = getAthletes();
  const conversations = getConversationsForUser(account.id);
  const unreadCount = getTotalUnreadCount(account.id);

  const statsContainer = document.getElementById('dashboardStats');
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="stat-card">
        <div class="stat-icon">👁️</div>
        <div class="stat-value">${watchlist.length}</div>
        <div class="stat-label">Watchlist</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🏃</div>
        <div class="stat-value">${athletes.length}</div>
        <div class="stat-label">Total Athletes</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💬</div>
        <div class="stat-value">${conversations.length}</div>
        <div class="stat-label">Conversations</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📩</div>
        <div class="stat-value">${unreadCount}</div>
        <div class="stat-label">Unread Messages</div>
      </div>
    `;
  }
}

function renderWatchlist() {
  const account = getCurrentAccount();
  const watchlistContainer = document.getElementById('watchlistContainer');
  const watchlistAthletes = getWatchlistAthletes(account.id);

  if (!watchlistContainer) return;

  if (watchlistAthletes.length === 0) {
    watchlistContainer.innerHTML = `
      <div class="empty-watchlist">
        <div class="empty-icon">📋</div>
        <h4>Your watchlist is empty</h4>
        <p>Browse athletes below and add them to your watchlist to track them.</p>
      </div>
    `;
    return;
  }

  watchlistContainer.innerHTML = watchlistAthletes.map(item => {
    const athlete = item.athlete;
    const sport = SPORTS_CONFIG[athlete.sport];

    return `
      <div class="watchlist-card">
        <div class="watchlist-card-header">
          <div class="watchlist-athlete-info">
            ${athlete.photo
              ? `<img src="${athlete.photo}" alt="${athlete.name}" class="watchlist-photo">`
              : `<div class="watchlist-photo-placeholder">${sport?.icon || '🏃'}</div>`
            }
            <div class="watchlist-details">
              <h4>${escapeHtml(athlete.name)}</h4>
              <p>${sport?.name || athlete.sport} • ${athlete.position || 'N/A'}</p>
              <p class="watchlist-meta">Class of ${athlete.gradYear || 'N/A'} • ${athlete.city || ''}, ${athlete.state || ''}</p>
            </div>
          </div>
          <div class="watchlist-actions">
            <button class="btn btn-sm btn-primary" onclick="viewAthleteFromDashboard('${athlete.id}')">View Profile</button>
            <button class="btn btn-sm btn-secondary" onclick="messageAthleteFromDashboard('${athlete.id}')">Message</button>
            <button class="btn btn-sm btn-outline" onclick="removeFromWatchlistHandler('${athlete.id}')">Remove</button>
          </div>
        </div>
        <div class="watchlist-notes">
          <textarea
            placeholder="Add notes about this athlete..."
            onchange="updateWatchlistNotesHandler('${athlete.id}', this.value)"
          >${escapeHtml(item.notes || '')}</textarea>
        </div>
        <div class="watchlist-added">Added ${formatTimeAgo(item.addedAt)}</div>
      </div>
    `;
  }).join('');
}

function renderTalentPool() {
  const account = getCurrentAccount();
  const talentContainer = document.getElementById('talentPoolContainer');
  let athletes = getAthletes();

  // Apply filters
  if (scoutFilters.sport !== 'all') {
    athletes = athletes.filter(a => a.sport === scoutFilters.sport);
  }
  if (scoutFilters.position !== 'all') {
    athletes = athletes.filter(a => a.position === scoutFilters.position);
  }
  if (scoutFilters.gradYear !== 'all') {
    athletes = athletes.filter(a => a.gradYear == scoutFilters.gradYear);
  }
  if (scoutFilters.search) {
    athletes = athletes.filter(a =>
      a.name?.toLowerCase().includes(scoutFilters.search) ||
      a.city?.toLowerCase().includes(scoutFilters.search) ||
      a.state?.toLowerCase().includes(scoutFilters.search)
    );
  }

  if (!talentContainer) return;

  if (athletes.length === 0) {
    talentContainer.innerHTML = `
      <div class="empty-talent">
        <p>No athletes match your filters. Try adjusting your search criteria.</p>
      </div>
    `;
    return;
  }

  talentContainer.innerHTML = athletes.map(athlete => {
    const sport = SPORTS_CONFIG[athlete.sport];
    const inWatchlist = isInWatchlist(account.id, athlete.id);

    return `
      <div class="talent-card">
        <div class="talent-card-photo">
          ${athlete.photo
            ? `<img src="${athlete.photo}" alt="${athlete.name}">`
            : `<div class="talent-photo-placeholder">${sport?.icon || '🏃'}</div>`
          }
        </div>
        <div class="talent-card-info">
          <h4>${escapeHtml(athlete.name)}</h4>
          <p class="talent-sport">${sport?.name || athlete.sport}</p>
          <p class="talent-position">${athlete.position || 'Position TBD'}</p>
          <p class="talent-meta">${athlete.gradYear || 'N/A'} • ${athlete.city || ''}, ${athlete.state || ''}</p>
          <div class="talent-stats-preview">
            ${renderQuickStats(athlete)}
          </div>
        </div>
        <div class="talent-card-actions">
          <button class="btn btn-sm btn-primary" onclick="viewAthleteFromDashboard('${athlete.id}')">View</button>
          <button class="btn btn-sm ${inWatchlist ? 'btn-secondary' : 'btn-outline'}"
                  onclick="${inWatchlist ? `removeFromWatchlistHandler('${athlete.id}')` : `addToWatchlistHandler('${athlete.id}')`}">
            ${inWatchlist ? '★ Watching' : '☆ Watch'}
          </button>
          <button class="btn btn-sm btn-secondary" onclick="messageAthleteFromDashboard('${athlete.id}')">💬</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderQuickStats(athlete) {
  const sport = SPORTS_CONFIG[athlete.sport];
  if (!sport || !athlete.stats) return '';

  const stats = sport.stats.slice(0, 3);
  return stats.map(stat => {
    const value = athlete.stats[stat.key];
    if (value === undefined || value === null || value === '') return '';
    return `<span class="quick-stat">${stat.label}: ${value}</span>`;
  }).filter(Boolean).join('');
}

function addToWatchlistHandler(athleteId) {
  const account = getCurrentAccount();
  if (addToWatchlist(account.id, athleteId)) {
    showToast('Added to watchlist');
    renderWatchlist();
    renderTalentPool();
    renderDashboardStats();
  }
}

function removeFromWatchlistHandler(athleteId) {
  const account = getCurrentAccount();
  if (removeFromWatchlist(account.id, athleteId)) {
    showToast('Removed from watchlist');
    renderWatchlist();
    renderTalentPool();
    renderDashboardStats();
  }
}

function updateWatchlistNotesHandler(athleteId, notes) {
  const account = getCurrentAccount();
  updateWatchlistNotes(account.id, athleteId, notes);
}

function viewAthleteFromDashboard(athleteId) {
  window.location.href = `profile.html?id=${athleteId}`;
}

function messageAthleteFromDashboard(athleteId) {
  const athlete = getAthleteById(athleteId);
  if (athlete && athlete.accountId) {
    startNewConversation(athlete.accountId);
  } else {
    showToast('Unable to message this athlete', 'error');
  }
}

function filterScoutAthletes() {
  renderTalentPool();
}

// ==================== CALENDAR SYSTEM ====================

let currentCalendarDate = new Date();

function initCalendar() {
  renderCalendar();
  renderUpcomingEvents();
}

function changeCalendarMonth(delta) {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() + delta);
  renderCalendar();
}

function renderCalendar() {
  const calendarGrid = document.getElementById('calendarGrid');
  const monthYearDisplay = document.getElementById('calendarMonthYear');

  if (!calendarGrid || !monthYearDisplay) return;

  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();

  monthYearDisplay.textContent = new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  // Get events for this month
  const events = getEventsForMonth(year, month);

  let html = `
    <div class="calendar-weekdays">
      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
    </div>
    <div class="calendar-days">
  `;

  // Empty cells before first day
  for (let i = 0; i < startingDay; i++) {
    html += '<div class="calendar-day empty"></div>';
  }

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  // Day cells
  for (let day = 1; day <= totalDays; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayEvents = events.filter(e => e.startDate.startsWith(dateStr));
    const isToday = isCurrentMonth && today.getDate() === day;
    const hasEvents = dayEvents.length > 0;

    html += `
      <div class="calendar-day ${isToday ? 'today' : ''} ${hasEvents ? 'has-events' : ''}"
           onclick="showDayEvents('${dateStr}')"
           data-date="${dateStr}">
        <span class="day-number">${day}</span>
        ${hasEvents ? `<span class="event-dot" title="${dayEvents.length} event(s)"></span>` : ''}
      </div>
    `;
  }

  html += '</div>';
  calendarGrid.innerHTML = html;
}

function getEventsForMonth(year, month) {
  const account = getCurrentAccount();
  if (!account) return [];

  let events = [];

  // Get coach-created events
  if (canUserScout()) {
    events = getCoachEvents(account.id);
  }

  // Get events from clubs the user is part of
  const profile = getAthleteByAccountId(account.id);
  if (profile) {
    const clubEvents = getUpcomingEventsForAthlete(profile.id);
    events = [...events, ...clubEvents];
  }

  // Filter to this month
  return events.filter(e => {
    const eventDate = new Date(e.startDate);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
}

function showDayEvents(dateStr) {
  const account = getCurrentAccount();
  if (!account) return;

  let events = [];
  if (canUserScout()) {
    events = getCoachEvents(account.id);
  }
  const profile = getAthleteByAccountId(account.id);
  if (profile) {
    const clubEvents = getEventsForAthlete(profile.id);
    events = [...events, ...clubEvents];
  }

  const dayEvents = events.filter(e => e.startDate.startsWith(dateStr));

  if (dayEvents.length === 0) {
    showToast('No events on this day');
    return;
  }

  const eventDetails = dayEvents.map(e => `• ${e.title} at ${e.location || 'TBD'}`).join('\n');
  alert(`Events on ${new Date(dateStr).toLocaleDateString()}:\n\n${eventDetails}`);
}

function renderUpcomingEvents() {
  const container = document.getElementById('upcomingEventsList');
  if (!container) return;

  const account = getCurrentAccount();
  if (!account) {
    container.innerHTML = '<div class="empty-events"><p>Log in to see your events</p></div>';
    return;
  }

  let events = [];

  // Get coach-created events
  if (canUserScout()) {
    events = getCoachEvents(account.id);
  }

  // Get events from clubs
  const profile = getAthleteByAccountId(account.id);
  if (profile) {
    const clubEvents = getUpcomingEventsForAthlete(profile.id);
    events = [...events, ...clubEvents];
  }

  // Filter to upcoming events only and sort by date
  const now = new Date();
  events = events.filter(e => new Date(e.startDate) >= now)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, 5);

  if (events.length === 0) {
    container.innerHTML = `
      <div class="empty-events">
        <p>No upcoming events</p>
        ${canUserScout() ? '<button class="btn btn-primary btn-sm" onclick="showCreateEventModal()">Create Event</button>' : ''}
      </div>
    `;
    return;
  }

  container.innerHTML = events.map(event => {
    const eventDate = new Date(event.startDate);
    const eventType = event.type || 'other';
    const typeColors = {
      practice: '#10b981',
      game: '#ef4444',
      meeting: '#3b82f6',
      tryout: '#f97316',
      training: '#8b5cf6',
      other: '#6b7280'
    };

    return `
      <div class="upcoming-event-card">
        <div class="event-date-badge" style="background: ${typeColors[eventType]}">
          <span class="event-month">${eventDate.toLocaleDateString('en-US', { month: 'short' })}</span>
          <span class="event-day">${eventDate.getDate()}</span>
        </div>
        <div class="event-info">
          <h4>${escapeHtml(event.title)}</h4>
          <p class="event-time">${eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</p>
          <p class="event-location">${escapeHtml(event.location || 'Location TBD')}</p>
        </div>
        ${canUserScout() ? `
          <div class="event-actions">
            <button class="btn btn-sm btn-outline" onclick="deleteCoachEventHandler('${event.id}')">Delete</button>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// Coach Events (personal events for coaches)
const COACH_EVENTS_KEY = 'athletehub_coach_events';

function getCoachEvents(coachId) {
  const data = localStorage.getItem(COACH_EVENTS_KEY);
  const events = data ? JSON.parse(data) : [];
  return events.filter(e => e.coachId === coachId)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

function saveCoachEvents(events) {
  localStorage.setItem(COACH_EVENTS_KEY, JSON.stringify(events));
}

function createCoachEvent(eventData) {
  const account = getCurrentAccount();
  const data = localStorage.getItem(COACH_EVENTS_KEY);
  const events = data ? JSON.parse(data) : [];

  const event = {
    id: 'cevt_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    coachId: account.id,
    ...eventData,
    createdAt: new Date().toISOString()
  };

  events.push(event);
  saveCoachEvents(events);
  return event;
}

function deleteCoachEvent(eventId) {
  const data = localStorage.getItem(COACH_EVENTS_KEY);
  const events = data ? JSON.parse(data) : [];
  const filtered = events.filter(e => e.id !== eventId);
  saveCoachEvents(filtered);
}

function showCreateEventModal() {
  const modal = document.getElementById('createEventModal');
  if (modal) {
    modal.classList.remove('hidden');
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('eventDate').value = today;
  }
}

function hideCreateEventModal() {
  const modal = document.getElementById('createEventModal');
  if (modal) modal.classList.add('hidden');
}

function handleCreateEvent(e) {
  e.preventDefault();

  const title = document.getElementById('eventTitle')?.value?.trim();
  const date = document.getElementById('eventDate')?.value;
  const time = document.getElementById('eventTime')?.value || '00:00';
  const location = document.getElementById('eventLocation')?.value?.trim();
  const type = document.getElementById('eventType')?.value;
  const description = document.getElementById('eventDescription')?.value?.trim();

  if (!title || !date) {
    showToast('Please fill in required fields', 'error');
    return;
  }

  createCoachEvent({
    title,
    startDate: `${date}T${time}:00`,
    location,
    type,
    description
  });

  showToast('Event created!');
  hideCreateEventModal();

  // Clear form
  document.getElementById('eventTitle').value = '';
  document.getElementById('eventLocation').value = '';
  document.getElementById('eventDescription').value = '';

  // Refresh calendar and events
  renderCalendar();
  renderUpcomingEvents();
}

function deleteCoachEventHandler(eventId) {
  if (confirm('Delete this event?')) {
    deleteCoachEvent(eventId);
    showToast('Event deleted');
    renderCalendar();
    renderUpcomingEvents();
  }
}

// ==================== SQUAD MANAGEMENT ====================

const SQUAD_KEY = 'athletehub_squads';

function getSquad(coachId) {
  const data = localStorage.getItem(SQUAD_KEY);
  const squads = data ? JSON.parse(data) : {};
  return squads[coachId] || { members: [], groups: [], notes: {} };
}

function saveSquad(coachId, squadData) {
  const data = localStorage.getItem(SQUAD_KEY);
  const squads = data ? JSON.parse(data) : {};
  squads[coachId] = squadData;
  localStorage.setItem(SQUAD_KEY, JSON.stringify(squads));
}

function addToSquad(coachId, athleteId) {
  const squad = getSquad(coachId);
  if (!squad.members.includes(athleteId)) {
    squad.members.push(athleteId);
    saveSquad(coachId, squad);
    return true;
  }
  return false;
}

function removeFromSquad(coachId, athleteId) {
  const squad = getSquad(coachId);
  squad.members = squad.members.filter(id => id !== athleteId);
  // Also remove from all groups
  squad.groups.forEach(group => {
    group.members = group.members.filter(id => id !== athleteId);
  });
  saveSquad(coachId, squad);
}

function createSquadGroup(coachId, groupData) {
  const squad = getSquad(coachId);
  const group = {
    id: 'grp_' + Date.now().toString(36),
    ...groupData,
    members: []
  };
  squad.groups.push(group);
  saveSquad(coachId, squad);
  return group;
}

function deleteSquadGroup(coachId, groupId) {
  const squad = getSquad(coachId);
  squad.groups = squad.groups.filter(g => g.id !== groupId);
  saveSquad(coachId, squad);
}

function addAthleteToGroup(coachId, groupId, athleteId) {
  const squad = getSquad(coachId);
  const group = squad.groups.find(g => g.id === groupId);
  if (group && !group.members.includes(athleteId)) {
    group.members.push(athleteId);
    saveSquad(coachId, squad);
  }
}

function removeAthleteFromGroup(coachId, groupId, athleteId) {
  const squad = getSquad(coachId);
  const group = squad.groups.find(g => g.id === groupId);
  if (group) {
    group.members = group.members.filter(id => id !== athleteId);
    saveSquad(coachId, squad);
  }
}

function updateSquadNote(coachId, athleteId, note) {
  const squad = getSquad(coachId);
  squad.notes[athleteId] = note;
  saveSquad(coachId, squad);
}

function renderSquadRoster() {
  const container = document.getElementById('squadRosterContainer');
  if (!container) return;

  const account = getCurrentAccount();
  if (!account) return;

  const squad = getSquad(account.id);
  const athletes = squad.members.map(id => getAthleteById(id)).filter(Boolean);

  if (athletes.length === 0) {
    container.innerHTML = `
      <div class="empty-squad">
        <div class="empty-icon">👥</div>
        <h4>Your squad is empty</h4>
        <p>Add athletes to your squad to manage your team roster.</p>
        <button class="btn btn-primary" onclick="showAddToSquadModal()">Add Athletes</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="squad-roster-grid">
      ${athletes.map(athlete => {
        const sport = SPORTS_CONFIG[athlete.sport];
        return `
          <div class="squad-member-card">
            <div class="squad-member-photo">
              ${athlete.photo
                ? `<img src="${athlete.photo}" alt="${athlete.name}">`
                : `<div class="squad-photo-placeholder">${sport?.icon || '🏃'}</div>`
              }
            </div>
            <div class="squad-member-info">
              <h4>${escapeHtml(athlete.name)}</h4>
              <p>${athlete.position || 'Position TBD'}</p>
              <p class="squad-member-meta">#${athlete.jerseyNumber || '--'} • ${athlete.gradYear || 'N/A'}</p>
            </div>
            <div class="squad-member-actions">
              <button class="btn btn-sm btn-secondary" onclick="viewAthleteFromDashboard('${athlete.id}')">View</button>
              <button class="btn btn-sm btn-secondary" onclick="messageAthleteFromDashboard('${athlete.id}')">Message</button>
              <button class="btn btn-sm btn-outline" onclick="removeFromSquadHandler('${athlete.id}')">Remove</button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderSquadGroups() {
  const container = document.getElementById('squadGroupsContainer');
  if (!container) return;

  const account = getCurrentAccount();
  if (!account) return;

  const squad = getSquad(account.id);

  container.innerHTML = `
    <div class="squad-groups-header">
      <button class="btn btn-primary btn-sm" onclick="showCreateGroupModal()">+ Create Group</button>
    </div>
    ${squad.groups.length === 0 ? `
      <div class="empty-groups">
        <p>No groups created yet. Create groups to organize your squad by position, skill level, or custom categories.</p>
      </div>
    ` : `
      <div class="squad-groups-list">
        ${squad.groups.map(group => {
          const groupMembers = group.members.map(id => getAthleteById(id)).filter(Boolean);
          return `
            <div class="squad-group-card" style="border-left: 4px solid ${group.color || '#3b82f6'}">
              <div class="squad-group-header">
                <h4>${escapeHtml(group.name)}</h4>
                <span class="group-count">${groupMembers.length} members</span>
                <button class="btn btn-sm btn-outline" onclick="deleteGroupHandler('${group.id}')">Delete</button>
              </div>
              ${group.description ? `<p class="group-description">${escapeHtml(group.description)}</p>` : ''}
              <div class="group-members-preview">
                ${groupMembers.slice(0, 5).map(a => `
                  <span class="group-member-chip">${escapeHtml(a.name)}</span>
                `).join('')}
                ${groupMembers.length > 5 ? `<span class="more-members">+${groupMembers.length - 5} more</span>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

function renderSquadNotes() {
  const container = document.getElementById('squadNotesContainer');
  if (!container) return;

  const account = getCurrentAccount();
  if (!account) return;

  const squad = getSquad(account.id);
  const athletes = squad.members.map(id => getAthleteById(id)).filter(Boolean);

  if (athletes.length === 0) {
    container.innerHTML = '<div class="empty-notes"><p>Add athletes to your squad to add notes about them.</p></div>';
    return;
  }

  container.innerHTML = `
    <div class="squad-notes-list">
      ${athletes.map(athlete => {
        const sport = SPORTS_CONFIG[athlete.sport];
        const note = squad.notes[athlete.id] || '';
        return `
          <div class="squad-note-card">
            <div class="note-athlete-info">
              ${athlete.photo
                ? `<img src="${athlete.photo}" alt="${athlete.name}" class="note-athlete-photo">`
                : `<div class="note-photo-placeholder">${sport?.icon || '🏃'}</div>`
              }
              <div>
                <h4>${escapeHtml(athlete.name)}</h4>
                <p>${athlete.position || 'N/A'}</p>
              </div>
            </div>
            <textarea
              class="squad-note-input"
              placeholder="Add notes about ${athlete.name}..."
              onchange="updateSquadNoteHandler('${athlete.id}', this.value)"
            >${escapeHtml(note)}</textarea>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function switchSquadTab(tab) {
  // Update tab buttons
  document.querySelectorAll('.squad-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.squad-tab[onclick="switchSquadTab('${tab}')"]`)?.classList.add('active');

  // Show/hide content
  document.getElementById('squadRosterContainer')?.classList.toggle('hidden', tab !== 'roster');
  document.getElementById('squadGroupsContainer')?.classList.toggle('hidden', tab !== 'groups');
  document.getElementById('squadNotesContainer')?.classList.toggle('hidden', tab !== 'notes');

  // Render the active tab
  if (tab === 'roster') renderSquadRoster();
  if (tab === 'groups') renderSquadGroups();
  if (tab === 'notes') renderSquadNotes();
}

function showAddToSquadModal() {
  const modal = document.getElementById('addToSquadModal');
  if (modal) {
    modal.classList.remove('hidden');
    filterSquadAthletes();
  }
}

function hideAddToSquadModal() {
  const modal = document.getElementById('addToSquadModal');
  if (modal) modal.classList.add('hidden');
}

function filterSquadAthletes() {
  const container = document.getElementById('squadSearchResults');
  const searchInput = document.getElementById('squadSearchInput');
  if (!container) return;

  const account = getCurrentAccount();
  const squad = getSquad(account.id);
  const searchQuery = searchInput?.value?.toLowerCase() || '';

  let athletes = getAthletes();

  // Filter out athletes already in squad
  athletes = athletes.filter(a => !squad.members.includes(a.id));

  // Apply search filter
  if (searchQuery) {
    athletes = athletes.filter(a =>
      a.name?.toLowerCase().includes(searchQuery) ||
      a.position?.toLowerCase().includes(searchQuery) ||
      a.sport?.toLowerCase().includes(searchQuery)
    );
  }

  athletes = athletes.slice(0, 10); // Limit results

  if (athletes.length === 0) {
    container.innerHTML = searchQuery
      ? '<div class="no-results">No athletes found matching your search</div>'
      : '<div class="no-results">Start typing to search for athletes</div>';
    return;
  }

  container.innerHTML = athletes.map(athlete => {
    const sport = SPORTS_CONFIG[athlete.sport];
    return `
      <div class="squad-search-result">
        <div class="search-result-info">
          ${athlete.photo
            ? `<img src="${athlete.photo}" alt="${athlete.name}" class="search-result-photo">`
            : `<div class="search-result-placeholder">${sport?.icon || '🏃'}</div>`
          }
          <div>
            <h4>${escapeHtml(athlete.name)}</h4>
            <p>${sport?.name || athlete.sport} • ${athlete.position || 'N/A'}</p>
          </div>
        </div>
        <button class="btn btn-sm btn-primary" onclick="addToSquadHandler('${athlete.id}')">Add</button>
      </div>
    `;
  }).join('');
}

function addToSquadHandler(athleteId) {
  const account = getCurrentAccount();
  if (addToSquad(account.id, athleteId)) {
    showToast('Added to squad!');
    filterSquadAthletes();
    renderSquadRoster();
  } else {
    showToast('Athlete already in squad', 'error');
  }
}

function removeFromSquadHandler(athleteId) {
  if (confirm('Remove this athlete from your squad?')) {
    const account = getCurrentAccount();
    removeFromSquad(account.id, athleteId);
    showToast('Removed from squad');
    renderSquadRoster();
  }
}

function showCreateGroupModal() {
  const modal = document.getElementById('createGroupModal');
  if (modal) modal.classList.remove('hidden');
}

function hideCreateGroupModal() {
  const modal = document.getElementById('createGroupModal');
  if (modal) modal.classList.add('hidden');
}

function handleCreateGroup(e) {
  e.preventDefault();

  const name = document.getElementById('groupName')?.value?.trim();
  const color = document.getElementById('groupColor')?.value;
  const description = document.getElementById('groupDescription')?.value?.trim();

  if (!name) {
    showToast('Please enter a group name', 'error');
    return;
  }

  const account = getCurrentAccount();
  createSquadGroup(account.id, { name, color, description });

  showToast('Group created!');
  hideCreateGroupModal();

  // Clear form
  document.getElementById('groupName').value = '';
  document.getElementById('groupDescription').value = '';

  renderSquadGroups();
}

function deleteGroupHandler(groupId) {
  if (confirm('Delete this group?')) {
    const account = getCurrentAccount();
    deleteSquadGroup(account.id, groupId);
    showToast('Group deleted');
    renderSquadGroups();
  }
}

function updateSquadNoteHandler(athleteId, note) {
  const account = getCurrentAccount();
  updateSquadNote(account.id, athleteId, note);
}

// ==================== CLUBS PAGE ====================

function initClubsPage() {
  renderClubsFilters();
  renderMyClubs();
  renderAllClubs();
}

function renderClubsFilters() {
  const sportFilter = document.getElementById('clubSportFilter');
  if (sportFilter) {
    sportFilter.innerHTML = '<option value="all">All Sports</option>' +
      Object.entries(SPORTS_CONFIG).map(([key, sport]) =>
        `<option value="${key}">${sport.icon} ${sport.name}</option>`
      ).join('');

    sportFilter.addEventListener('change', () => renderAllClubs());
  }

  const searchInput = document.getElementById('clubSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => renderAllClubs());
  }
}

function renderMyClubs() {
  const container = document.getElementById('myClubsContainer');
  if (!container) return;

  const account = getCurrentAccount();
  if (!account) {
    container.innerHTML = `
      <div class="login-prompt">
        <p>Log in to see your clubs</p>
        <a href="login.html" class="btn btn-primary">Log In</a>
      </div>
    `;
    return;
  }

  // Get clubs where user is owner, coach, or member
  const ownedClubs = getClubsByOwner(account.id);
  const coachingClubs = getClubsByCoach(account.id).filter(c => c.ownerId !== account.id);

  // Get clubs where user's profiles are members
  const profiles = getProfilesByAccount(account.id);
  let memberClubs = [];
  profiles.forEach(profile => {
    const clubs = getClubsForAthlete(profile.id);
    clubs.forEach(c => {
      if (!memberClubs.find(mc => mc.club.id === c.club.id) &&
          !ownedClubs.find(oc => oc.id === c.club.id) &&
          !coachingClubs.find(cc => cc.id === c.club.id)) {
        memberClubs.push(c);
      }
    });
  });

  if (ownedClubs.length === 0 && coachingClubs.length === 0 && memberClubs.length === 0) {
    container.innerHTML = `
      <div class="empty-clubs">
        <div class="empty-icon">🏟️</div>
        <h4>No clubs yet</h4>
        <p>Join a club or create your own to get started!</p>
        ${canUserScout() ? '<button class="btn btn-primary" onclick="showCreateClubModal()">Create Club</button>' : ''}
      </div>
    `;
    return;
  }

  let html = '';

  if (ownedClubs.length > 0) {
    html += `<h4 class="clubs-section-title">Clubs You Own</h4>`;
    html += `<div class="clubs-mini-grid">${ownedClubs.map(club => renderClubMiniCard(club, 'owner')).join('')}</div>`;
  }

  if (coachingClubs.length > 0) {
    html += `<h4 class="clubs-section-title">Clubs You Coach</h4>`;
    html += `<div class="clubs-mini-grid">${coachingClubs.map(club => renderClubMiniCard(club, 'coach')).join('')}</div>`;
  }

  if (memberClubs.length > 0) {
    html += `<h4 class="clubs-section-title">Clubs You're In</h4>`;
    html += `<div class="clubs-mini-grid">${memberClubs.map(c => renderClubMiniCard(c.club, 'member')).join('')}</div>`;
  }

  container.innerHTML = html;
}

function renderClubMiniCard(club, role) {
  const sport = SPORTS_CONFIG[club.sport];
  const memberCount = getMembershipsByClub(club.id).length;

  return `
    <div class="club-mini-card" onclick="window.location.href='club-view.html?id=${club.id}'">
      <div class="club-mini-icon">${club.logo || sport?.icon || '🏟️'}</div>
      <div class="club-mini-info">
        <h5>${escapeHtml(club.name)}</h5>
        <p>${sport?.name || club.sport} • ${memberCount} members</p>
        <span class="club-role-badge ${role}">${role}</span>
      </div>
    </div>
  `;
}

function renderAllClubs() {
  const container = document.getElementById('allClubsContainer');
  if (!container) return;

  let clubs = getClubs();

  // Apply filters
  const sportFilter = document.getElementById('clubSportFilter')?.value;
  const searchQuery = document.getElementById('clubSearchInput')?.value?.toLowerCase();

  if (sportFilter && sportFilter !== 'all') {
    clubs = clubs.filter(c => c.sport === sportFilter);
  }

  if (searchQuery) {
    clubs = clubs.filter(c =>
      c.name.toLowerCase().includes(searchQuery) ||
      c.location?.toLowerCase().includes(searchQuery)
    );
  }

  if (clubs.length === 0) {
    container.innerHTML = `
      <div class="empty-clubs-browse">
        <p>No clubs found. Try adjusting your filters or create the first club!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = clubs.map(club => {
    const sport = SPORTS_CONFIG[club.sport];
    const memberCount = getMembershipsByClub(club.id).length;
    const upcomingEvents = getUpcomingEventsByClub(club.id).length;

    return `
      <div class="club-card">
        <div class="club-card-header">
          <div class="club-logo">${club.logo || sport?.icon || '🏟️'}</div>
          <div class="club-header-info">
            <h3>${escapeHtml(club.name)}</h3>
            <p class="club-sport">${sport?.name || club.sport}</p>
          </div>
        </div>
        <div class="club-card-body">
          <p class="club-description">${escapeHtml(club.description || 'No description')}</p>
          ${club.location ? `<p class="club-location">📍 ${escapeHtml(club.location)}</p>` : ''}
          <div class="club-stats">
            <span>${memberCount} members</span>
            <span>${upcomingEvents} upcoming events</span>
          </div>
        </div>
        <div class="club-card-footer">
          <a href="club-view.html?id=${club.id}" class="btn btn-primary btn-sm">View Club</a>
        </div>
      </div>
    `;
  }).join('');
}

function showCreateClubModal() {
  const modal = document.getElementById('createClubModal');
  if (modal) {
    modal.classList.remove('hidden');
    // Populate sport select
    const sportSelect = document.getElementById('newClubSport');
    if (sportSelect) {
      sportSelect.innerHTML = '<option value="">Select Sport</option>' +
        Object.entries(SPORTS_CONFIG).map(([key, sport]) =>
          `<option value="${key}">${sport.icon} ${sport.name}</option>`
        ).join('');
    }
  }
}

function hideCreateClubModal() {
  const modal = document.getElementById('createClubModal');
  if (modal) modal.classList.add('hidden');
}

function handleCreateClub(e) {
  e.preventDefault();
  const account = getCurrentAccount();
  if (!account || !canUserScout()) {
    showToast('Only coaches and scouts can create clubs', 'error');
    return;
  }

  const name = document.getElementById('newClubName')?.value?.trim();
  const sport = document.getElementById('newClubSport')?.value;
  const description = document.getElementById('newClubDescription')?.value?.trim();
  const location = document.getElementById('newClubLocation')?.value?.trim();
  const requireApproval = document.getElementById('newClubRequireApproval')?.checked;

  if (!name || !sport) {
    showToast('Please fill in required fields', 'error');
    return;
  }

  const club = createClub({
    name,
    sport,
    description,
    location,
    requireApproval,
    ownerId: account.id,
    coaches: [account.id]
  });

  showToast('Club created successfully!');
  hideCreateClubModal();
  window.location.href = `club-view.html?id=${club.id}`;
}

// ==================== CLUB VIEW PAGE ====================

let currentClubId = null;

function initClubViewPage() {
  const urlParams = new URLSearchParams(window.location.search);
  currentClubId = urlParams.get('id');

  if (!currentClubId) {
    showToast('Club not found', 'error');
    setTimeout(() => window.location.href = 'clubs.html', 1500);
    return;
  }

  const club = getClubById(currentClubId);
  if (!club) {
    showToast('Club not found', 'error');
    setTimeout(() => window.location.href = 'clubs.html', 1500);
    return;
  }

  renderClubHeader(club);
  renderClubTabs(club);
  renderClubEvents(club);
  renderClubMembers(club);
  renderClubSchedule(club);
}

function renderClubHeader(club) {
  const container = document.getElementById('clubHeader');
  if (!container) return;

  const sport = SPORTS_CONFIG[club.sport];
  const account = getCurrentAccount();
  const isOwner = account && club.ownerId === account.id;
  const isCoach = account && club.coaches?.includes(account.id);
  const canManage = isOwner || isCoach;

  // Check if current user's profile is a member
  let isMember = false;
  let memberProfile = null;
  if (account) {
    const profiles = getProfilesByAccount(account.id);
    profiles.forEach(profile => {
      if (isClubMember(club.id, profile.id)) {
        isMember = true;
        memberProfile = profile;
      }
    });
  }

  container.innerHTML = `
    <div class="club-header-content">
      <div class="club-header-main">
        <div class="club-header-logo">${club.logo || sport?.icon || '🏟️'}</div>
        <div class="club-header-info">
          <h1>${escapeHtml(club.name)}</h1>
          <p class="club-header-sport">${sport?.name || club.sport}</p>
          ${club.location ? `<p class="club-header-location">📍 ${escapeHtml(club.location)}</p>` : ''}
          <p class="club-header-description">${escapeHtml(club.description || '')}</p>
        </div>
      </div>
      <div class="club-header-actions">
        ${canManage ? `
          <button class="btn btn-primary" onclick="showAddEventModal()">+ Add Event</button>
          ${isOwner ? `<button class="btn btn-secondary" onclick="showEditClubModal()">Edit Club</button>` : ''}
        ` : ''}
        ${!canManage && account && !isMember ? `
          <button class="btn btn-primary" onclick="handleJoinClub()">Join Club</button>
        ` : ''}
        ${isMember && !canManage ? `
          <button class="btn btn-secondary" onclick="handleLeaveClub()">Leave Club</button>
        ` : ''}
        ${!account ? `
          <a href="login.html" class="btn btn-primary">Log in to Join</a>
        ` : ''}
      </div>
    </div>
  `;
}

function renderClubTabs(club) {
  const account = getCurrentAccount();
  const canManage = canManageClub(account?.id, club.id);
  const pendingCount = canManage ? getPendingMemberships(club.id).length : 0;

  const tabsContainer = document.getElementById('clubTabs');
  if (tabsContainer) {
    tabsContainer.innerHTML = `
      <button class="club-tab active" onclick="switchClubTab('schedule')">Schedule</button>
      <button class="club-tab" onclick="switchClubTab('events')">Events</button>
      <button class="club-tab" onclick="switchClubTab('members')">Members</button>
      ${canManage && pendingCount > 0 ? `
        <button class="club-tab" onclick="switchClubTab('requests')">
          Requests <span class="tab-badge">${pendingCount}</span>
        </button>
      ` : ''}
    `;
  }
}

function switchClubTab(tab) {
  document.querySelectorAll('.club-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.club-tab-content').forEach(c => c.classList.add('hidden'));

  document.querySelector(`.club-tab[onclick="switchClubTab('${tab}')"]`)?.classList.add('active');
  document.getElementById(`${tab}Tab`)?.classList.remove('hidden');
}

function renderClubSchedule(club) {
  const container = document.getElementById('scheduleTab');
  if (!container) return;

  const events = getUpcomingEventsByClub(club.id);
  const account = getCurrentAccount();
  const profile = getActiveProfile();

  if (events.length === 0) {
    container.innerHTML = `
      <div class="empty-schedule">
        <div class="empty-icon">📅</div>
        <h4>No upcoming events</h4>
        <p>Check back later for training schedules and games.</p>
      </div>
    `;
    return;
  }

  // Group events by type
  const trainings = events.filter(e => e.type === 'training');
  const games = events.filter(e => e.type === 'game');
  const other = events.filter(e => e.type !== 'training' && e.type !== 'game');

  let html = '<div class="schedule-grid">';

  if (trainings.length > 0) {
    html += `
      <div class="schedule-section">
        <h3>🏋️ Training Sessions</h3>
        <div class="schedule-events">
          ${trainings.map(e => renderScheduleEvent(e, profile)).join('')}
        </div>
      </div>
    `;
  }

  if (games.length > 0) {
    html += `
      <div class="schedule-section">
        <h3>🏆 Upcoming Games</h3>
        <div class="schedule-events">
          ${games.map(e => renderScheduleEvent(e, profile)).join('')}
        </div>
      </div>
    `;
  }

  if (other.length > 0) {
    html += `
      <div class="schedule-section">
        <h3>📋 Other Events</h3>
        <div class="schedule-events">
          ${other.map(e => renderScheduleEvent(e, profile)).join('')}
        </div>
      </div>
    `;
  }

  html += '</div>';
  container.innerHTML = html;
}

function renderScheduleEvent(event, profile) {
  const date = new Date(event.startDate);
  const isAttending = profile && event.attendees?.includes(profile.id);

  return `
    <div class="schedule-event ${event.type}">
      <div class="schedule-event-date">
        <span class="event-day">${date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
        <span class="event-date-num">${date.getDate()}</span>
        <span class="event-month">${date.toLocaleDateString('en-US', { month: 'short' })}</span>
      </div>
      <div class="schedule-event-info">
        <h4>${escapeHtml(event.title)}</h4>
        <p class="event-time">🕐 ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}${event.endDate ? ' - ' + new Date(event.endDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : ''}</p>
        ${event.location ? `<p class="event-location">📍 ${escapeHtml(event.location)}</p>` : ''}
        ${event.description ? `<p class="event-desc">${escapeHtml(event.description)}</p>` : ''}
      </div>
      ${profile ? `
        <div class="schedule-event-action">
          <button class="btn btn-sm ${isAttending ? 'btn-secondary' : 'btn-outline'}"
                  onclick="handleToggleAttendance('${event.id}')">
            ${isAttending ? '✓ Going' : 'RSVP'}
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderClubEvents(club) {
  const container = document.getElementById('eventsTab');
  if (!container) return;

  const events = getEventsByClub(club.id);
  const account = getCurrentAccount();
  const canManage = canManageClub(account?.id, club.id);

  if (events.length === 0) {
    container.innerHTML = `
      <div class="empty-events">
        <p>No events yet.</p>
        ${canManage ? '<button class="btn btn-primary" onclick="showAddEventModal()">Create First Event</button>' : ''}
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="events-list">
      ${events.map(event => renderEventCard(event, canManage)).join('')}
    </div>
  `;
}

function renderEventCard(event, canManage) {
  const date = new Date(event.startDate);
  const isPast = date < new Date();

  return `
    <div class="event-card ${isPast ? 'past' : ''}">
      <div class="event-card-header">
        <span class="event-type-badge ${event.type}">${event.type}</span>
        <span class="event-date">${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </div>
      <h4>${escapeHtml(event.title)}</h4>
      <p>${escapeHtml(event.description || '')}</p>
      <div class="event-meta">
        <span>🕐 ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
        ${event.location ? `<span>📍 ${escapeHtml(event.location)}</span>` : ''}
        <span>👥 ${event.attendees?.length || 0} attending</span>
      </div>
      ${canManage ? `
        <div class="event-actions">
          <button class="btn btn-sm btn-secondary" onclick="showEditEventModal('${event.id}')">Edit</button>
          <button class="btn btn-sm btn-outline" onclick="handleDeleteEvent('${event.id}')">Delete</button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderClubMembers(club) {
  const container = document.getElementById('membersTab');
  if (!container) return;

  const memberships = getMembershipsByClub(club.id);
  const owner = getAccountById(club.ownerId);

  let html = `
    <div class="members-section">
      <h4>Club Staff</h4>
      <div class="members-grid">
        <div class="member-card staff">
          <div class="member-avatar">${owner?.name?.charAt(0) || 'O'}</div>
          <div class="member-info">
            <h5>${escapeHtml(owner?.name || 'Unknown')}</h5>
            <span class="member-role owner">Owner</span>
          </div>
        </div>
        ${club.coaches?.filter(c => c !== club.ownerId).map(coachId => {
          const coach = getAccountById(coachId);
          return `
            <div class="member-card staff">
              <div class="member-avatar">${coach?.name?.charAt(0) || 'C'}</div>
              <div class="member-info">
                <h5>${escapeHtml(coach?.name || 'Unknown')}</h5>
                <span class="member-role coach">Coach</span>
              </div>
            </div>
          `;
        }).join('') || ''}
      </div>
    </div>
  `;

  if (memberships.length > 0) {
    html += `
      <div class="members-section">
        <h4>Players (${memberships.length})</h4>
        <div class="members-grid">
          ${memberships.map(m => {
            const athlete = getAthleteById(m.athleteId);
            if (!athlete) return '';
            return `
              <div class="member-card">
                ${athlete.photo
                  ? `<img src="${athlete.photo}" class="member-avatar" alt="${athlete.name}">`
                  : `<div class="member-avatar">${athlete.name?.charAt(0) || 'A'}</div>`
                }
                <div class="member-info">
                  <h5>${escapeHtml(athlete.name)}</h5>
                  <span class="member-position">${athlete.position || 'Player'}</span>
                </div>
                <a href="profile.html?id=${athlete.id}" class="btn btn-sm btn-secondary">View</a>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  } else {
    html += `
      <div class="members-section">
        <h4>Players</h4>
        <p class="empty-members">No players yet. Players can join by clicking "Join Club".</p>
      </div>
    `;
  }

  container.innerHTML = html;
}

function showAddEventModal() {
  const modal = document.getElementById('addEventModal');
  if (modal) modal.classList.remove('hidden');
}

function hideAddEventModal() {
  const modal = document.getElementById('addEventModal');
  if (modal) modal.classList.add('hidden');
}

function handleCreateEvent(e) {
  e.preventDefault();
  const account = getCurrentAccount();
  if (!account || !canManageClub(account.id, currentClubId)) {
    showToast('You cannot create events for this club', 'error');
    return;
  }

  const title = document.getElementById('eventTitle')?.value?.trim();
  const type = document.getElementById('eventType')?.value;
  const startDate = document.getElementById('eventStartDate')?.value;
  const endDate = document.getElementById('eventEndDate')?.value;
  const location = document.getElementById('eventLocation')?.value?.trim();
  const description = document.getElementById('eventDescription')?.value?.trim();

  if (!title || !type || !startDate) {
    showToast('Please fill in required fields', 'error');
    return;
  }

  createClubEvent({
    clubId: currentClubId,
    title,
    type,
    startDate,
    endDate: endDate || null,
    location,
    description,
    createdBy: account.id
  });

  showToast('Event created!');
  hideAddEventModal();
  initClubViewPage();
}

function handleDeleteEvent(eventId) {
  if (confirm('Are you sure you want to delete this event?')) {
    deleteClubEvent(eventId);
    showToast('Event deleted');
    initClubViewPage();
  }
}

function handleToggleAttendance(eventId) {
  const profile = getActiveProfile();
  if (!profile) {
    showToast('Please select an active profile first', 'error');
    return;
  }
  toggleEventAttendance(eventId, profile.id);
  const club = getClubById(currentClubId);
  renderClubSchedule(club);
}

function handleJoinClub() {
  const account = getCurrentAccount();
  const profile = getActiveProfile();

  if (!account) {
    window.location.href = 'login.html';
    return;
  }

  if (!profile) {
    showToast('Please create and select an athlete profile first', 'error');
    return;
  }

  const membership = joinClub(currentClubId, profile.id, account.id);
  if (membership.status === 'pending') {
    showToast('Request sent! Waiting for approval.');
  } else {
    showToast('Successfully joined the club!');
  }
  initClubViewPage();
}

function handleLeaveClub() {
  const profile = getActiveProfile();
  if (!profile) return;

  if (confirm('Are you sure you want to leave this club?')) {
    leaveClub(currentClubId, profile.id);
    showToast('You have left the club');
    initClubViewPage();
  }
}

// ==================== TRAINING PAGE ====================

function initTrainingPage() {
  renderTrainingFilters();
  renderMyTrainingPlans();
  renderPublicTrainingPlans();
  renderSubscribedPlans();
}

function renderTrainingFilters() {
  const sportFilter = document.getElementById('trainingSportFilter');
  if (sportFilter) {
    sportFilter.innerHTML = '<option value="all">All Sports</option>' +
      Object.entries(SPORTS_CONFIG).map(([key, sport]) =>
        `<option value="${key}">${sport.icon} ${sport.name}</option>`
      ).join('');

    sportFilter.addEventListener('change', () => renderPublicTrainingPlans());
  }

  const searchInput = document.getElementById('trainingSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => renderPublicTrainingPlans());
  }
}

function renderMyTrainingPlans() {
  const container = document.getElementById('myPlansContainer');
  if (!container) return;

  const account = getCurrentAccount();
  if (!account) {
    container.closest('.training-section')?.classList.add('hidden');
    return;
  }

  if (!canCreateTrainingPlans()) {
    container.closest('.training-section')?.classList.add('hidden');
    return;
  }

  const plans = getTrainingPlansByCreator(account.id);

  if (plans.length === 0) {
    container.innerHTML = `
      <div class="empty-plans">
        <p>You haven't created any training plans yet.</p>
        <button class="btn btn-primary" onclick="showCreatePlanModal()">Create Your First Plan</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="plans-grid">
      ${plans.map(plan => renderPlanCard(plan, true)).join('')}
    </div>
  `;
}

function renderSubscribedPlans() {
  const container = document.getElementById('subscribedPlansContainer');
  if (!container) return;

  const account = getCurrentAccount();
  if (!account) {
    container.closest('.training-section')?.classList.add('hidden');
    return;
  }

  const plans = getSubscribedPlans(account.id);

  if (plans.length === 0) {
    container.innerHTML = `
      <div class="empty-plans">
        <p>You haven't subscribed to any training plans yet. Browse plans below!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="plans-grid">
      ${plans.map(plan => renderPlanCard(plan, false)).join('')}
    </div>
  `;
}

function renderPublicTrainingPlans() {
  const container = document.getElementById('publicPlansContainer');
  if (!container) return;

  let plans = getPublicTrainingPlans();
  const account = getCurrentAccount();

  // Filter out user's own plans
  if (account) {
    plans = plans.filter(p => p.creatorId !== account.id);
  }

  // Apply filters
  const sportFilter = document.getElementById('trainingSportFilter')?.value;
  const searchQuery = document.getElementById('trainingSearchInput')?.value?.toLowerCase();

  if (sportFilter && sportFilter !== 'all') {
    plans = plans.filter(p => p.sport === sportFilter);
  }

  if (searchQuery) {
    plans = plans.filter(p =>
      p.title.toLowerCase().includes(searchQuery) ||
      p.description?.toLowerCase().includes(searchQuery) ||
      p.creatorName?.toLowerCase().includes(searchQuery)
    );
  }

  if (plans.length === 0) {
    container.innerHTML = `
      <div class="empty-plans-browse">
        <p>No training plans found. ${canCreateTrainingPlans() ? 'Be the first to create one!' : 'Check back later!'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="plans-grid">
      ${plans.map(plan => renderPlanCard(plan, false)).join('')}
    </div>
  `;
}

function renderPlanCard(plan, isOwner) {
  const sport = SPORTS_CONFIG[plan.sport];
  const account = getCurrentAccount();
  const isSubscribed = account && plan.subscribers?.includes(account.id);

  return `
    <div class="plan-card">
      <div class="plan-card-header">
        <span class="plan-sport-badge">${sport?.icon || '🏃'} ${sport?.name || plan.sport}</span>
        <span class="plan-difficulty ${plan.difficulty}">${plan.difficulty || 'All Levels'}</span>
      </div>
      <h4>${escapeHtml(plan.title)}</h4>
      <p class="plan-description">${escapeHtml(plan.description || 'No description')}</p>
      <div class="plan-meta">
        <span>👤 ${escapeHtml(plan.creatorName || 'Unknown')}</span>
        <span>📋 ${plan.exercises?.length || 0} exercises</span>
        <span>👥 ${plan.subscribers?.length || 0} subscribers</span>
      </div>
      <div class="plan-card-actions">
        <button class="btn btn-sm btn-primary" onclick="viewTrainingPlan('${plan.id}')">View Plan</button>
        ${isOwner ? `
          <button class="btn btn-sm btn-secondary" onclick="editTrainingPlan('${plan.id}')">Edit</button>
          <button class="btn btn-sm btn-outline" onclick="deleteTrainingPlanHandler('${plan.id}')">Delete</button>
        ` : account ? `
          <button class="btn btn-sm ${isSubscribed ? 'btn-secondary' : 'btn-outline'}"
                  onclick="${isSubscribed ? `unsubscribePlan('${plan.id}')` : `subscribePlan('${plan.id}')`}">
            ${isSubscribed ? '✓ Subscribed' : 'Subscribe'}
          </button>
        ` : ''}
      </div>
    </div>
  `;
}

function showCreatePlanModal() {
  const modal = document.getElementById('createPlanModal');
  if (modal) {
    modal.classList.remove('hidden');
    const sportSelect = document.getElementById('planSport');
    if (sportSelect) {
      sportSelect.innerHTML = '<option value="">Select Sport</option>' +
        Object.entries(SPORTS_CONFIG).map(([key, sport]) =>
          `<option value="${key}">${sport.icon} ${sport.name}</option>`
        ).join('');
    }
    // Clear exercise list
    document.getElementById('exercisesList').innerHTML = '';
    exerciseCount = 0;
  }
}

function hideCreatePlanModal() {
  const modal = document.getElementById('createPlanModal');
  if (modal) modal.classList.add('hidden');
}

let exerciseCount = 0;

function addExerciseField() {
  const container = document.getElementById('exercisesList');
  exerciseCount++;
  const exerciseHtml = `
    <div class="exercise-item" id="exercise-${exerciseCount}">
      <div class="exercise-header">
        <span>Exercise ${exerciseCount}</span>
        <button type="button" class="btn btn-sm btn-outline" onclick="removeExercise(${exerciseCount})">Remove</button>
      </div>
      <div class="exercise-fields">
        <input type="text" placeholder="Exercise name" class="exercise-name" required>
        <input type="text" placeholder="Sets x Reps (e.g., 3x10)" class="exercise-reps">
        <input type="text" placeholder="Duration (e.g., 30 seconds)" class="exercise-duration">
        <textarea placeholder="Instructions/Notes" class="exercise-notes"></textarea>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', exerciseHtml);
}

function removeExercise(id) {
  document.getElementById(`exercise-${id}`)?.remove();
}

function handleCreatePlan(e) {
  e.preventDefault();

  if (!canCreateTrainingPlans()) {
    showToast('Only coaches and scouts can create training plans', 'error');
    return;
  }

  const title = document.getElementById('planTitle')?.value?.trim();
  const sport = document.getElementById('planSport')?.value;
  const difficulty = document.getElementById('planDifficulty')?.value;
  const description = document.getElementById('planDescription')?.value?.trim();
  const isPublic = document.getElementById('planIsPublic')?.checked;

  // Collect exercises
  const exerciseItems = document.querySelectorAll('.exercise-item');
  const exercises = [];
  exerciseItems.forEach(item => {
    const name = item.querySelector('.exercise-name')?.value?.trim();
    if (name) {
      exercises.push({
        name,
        reps: item.querySelector('.exercise-reps')?.value?.trim(),
        duration: item.querySelector('.exercise-duration')?.value?.trim(),
        notes: item.querySelector('.exercise-notes')?.value?.trim()
      });
    }
  });

  if (!title || !sport) {
    showToast('Please fill in required fields', 'error');
    return;
  }

  createTrainingPlan({
    title,
    sport,
    difficulty,
    description,
    isPublic,
    exercises
  });

  showToast('Training plan created!');
  hideCreatePlanModal();
  initTrainingPage();
}

function viewTrainingPlan(planId) {
  const plan = getTrainingPlanById(planId);
  if (!plan) return;

  const sport = SPORTS_CONFIG[plan.sport];
  const modal = document.getElementById('viewPlanModal');
  const content = document.getElementById('viewPlanContent');

  if (modal && content) {
    content.innerHTML = `
      <div class="plan-view-header">
        <h2>${escapeHtml(plan.title)}</h2>
        <div class="plan-view-meta">
          <span class="plan-sport-badge">${sport?.icon || '🏃'} ${sport?.name || plan.sport}</span>
          <span class="plan-difficulty ${plan.difficulty}">${plan.difficulty || 'All Levels'}</span>
        </div>
        <p class="plan-view-creator">Created by ${escapeHtml(plan.creatorName || 'Unknown')}</p>
        <p class="plan-view-description">${escapeHtml(plan.description || 'No description')}</p>
      </div>
      <div class="plan-exercises">
        <h3>Exercises</h3>
        ${plan.exercises?.length > 0 ? `
          <div class="exercises-list">
            ${plan.exercises.map((ex, i) => `
              <div class="exercise-view">
                <div class="exercise-number">${i + 1}</div>
                <div class="exercise-details">
                  <h4>${escapeHtml(ex.name)}</h4>
                  ${ex.reps ? `<p><strong>Sets/Reps:</strong> ${escapeHtml(ex.reps)}</p>` : ''}
                  ${ex.duration ? `<p><strong>Duration:</strong> ${escapeHtml(ex.duration)}</p>` : ''}
                  ${ex.notes ? `<p class="exercise-notes-text">${escapeHtml(ex.notes)}</p>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        ` : '<p>No exercises added yet.</p>'}
      </div>
    `;
    modal.classList.remove('hidden');
  }
}

function hideViewPlanModal() {
  const modal = document.getElementById('viewPlanModal');
  if (modal) modal.classList.add('hidden');
}

function subscribePlan(planId) {
  const account = getCurrentAccount();
  if (!account) {
    window.location.href = 'login.html';
    return;
  }
  subscribeToTrainingPlan(planId, account.id);
  showToast('Subscribed to plan!');
  initTrainingPage();
}

function unsubscribePlan(planId) {
  const account = getCurrentAccount();
  if (!account) return;
  unsubscribeFromTrainingPlan(planId, account.id);
  showToast('Unsubscribed from plan');
  initTrainingPage();
}

function deleteTrainingPlanHandler(planId) {
  if (confirm('Are you sure you want to delete this training plan?')) {
    deleteTrainingPlan(planId);
    showToast('Plan deleted');
    initTrainingPage();
  }
}

function editTrainingPlan(planId) {
  // For simplicity, show the plan and allow editing through the modal
  showToast('Edit feature coming soon!');
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  switch (page) {
    case 'index':
      initIndexPage();
      break;
    case 'create':
      initCreatePage();
      break;
    case 'profile':
      initProfilePage();
      break;
    case 'feed':
      initFeedPage();
      break;
    case 'reels':
      initReelsPage();
      break;
    case 'login':
      initLoginPage();
      break;
    case 'signup':
      initSignupPage();
      break;
    case 'dashboard':
      initDashboardPage();
      break;
    case 'messages':
      initMessagesPage();
      break;
    case 'scout-dashboard':
      initScoutDashboardPage();
      break;
    case 'clubs':
      initClubsPage();
      break;
    case 'club-view':
      initClubViewPage();
      break;
    case 'training':
      initTrainingPage();
      break;
  }

  // Update auth UI on all pages
  updateAuthUI();

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-user-menu')) {
      const dropdown = document.getElementById('userDropdown');
      if (dropdown) dropdown.classList.add('hidden');
    }
  });
});

// Make functions globally available for inline handlers
window.removeVideo = removeVideo;
window.updateStat = updateStat;
window.handleLike = handleLike;
window.toggleComments = toggleComments;
window.handleAddComment = handleAddComment;
window.handleCommentKeypress = handleCommentKeypress;
window.togglePostMenu = togglePostMenu;
window.handleDeletePost = handleDeletePost;
window.sharePost = sharePost;
window.handleCreatePost = handleCreatePost;
window.handleFollow = handleFollow;
window.switchFeedTab = switchFeedTab;
window.toggleUserMenu = toggleUserMenu;
window.handleLogout = handleLogout;
window.switchProfile = switchProfile;
window.handleReelLike = handleReelLike;
window.toggleReelComments = toggleReelComments;
window.handleReelComment = handleReelComment;
window.navigateReel = navigateReel;

// Admin
window.isAdmin = isAdmin;
window.getAccounts = getAccounts;
window.getAthletes = getAthletes;
window.getAccountById = getAccountById;
window.updateAccount = updateAccount;
window.deleteAthlete = deleteAthlete;
window.switchAdminView = switchAdminView;

// New social features
window.handleUpvote = handleUpvote;
window.handleDownvote = handleDownvote;
window.handleBookmark = handleBookmark;
window.showReplyForm = showReplyForm;
window.hideReplyForm = hideReplyForm;
window.toggleReplies = toggleReplies;
window.handleAddReply = handleAddReply;
window.handleLikeComment = handleLikeComment;
window.switchUploadTab = switchUploadTab;
window.handleVideoPreview = handleVideoPreview;
window.clearVideoUpload = clearVideoUpload;
window.handleReelVote = handleReelVote;
window.handleReelBookmark = handleReelBookmark;

// Profile page messaging/watchlist
window.messageAthlete = messageAthlete;
window.toggleWatchlist = toggleWatchlistFromProfile;

// Messaging features
window.openConversation = openConversation;
window.sendMessageHandler = sendMessageHandler;
window.deleteConversationHandler = deleteConversationHandler;
window.startNewConversation = startNewConversation;
window.searchUsersForConversation = searchUsersForConversation;
window.switchConversationTab = switchConversationTab;
window.addMemberToGroup = addMemberToGroup;
window.removeMemberFromGroup = removeMemberFromGroup;
window.searchUsersForGroupAdd = searchUsersForGroupAdd;
window.createGroupConversationHandler = createGroupConversationHandler;
window.updateStreak = updateStreak;
window.getStreakData = getStreakData;

// Scout/Coach dashboard features
window.addToWatchlistHandler = addToWatchlistHandler;
window.removeFromWatchlistHandler = removeFromWatchlistHandler;
window.updateWatchlistNotesHandler = updateWatchlistNotesHandler;
window.filterScoutAthletes = filterScoutAthletes;
window.viewAthleteFromDashboard = viewAthleteFromDashboard;
window.messageAthleteFromDashboard = messageAthleteFromDashboard;

// Club features
window.showCreateClubModal = showCreateClubModal;
window.hideCreateClubModal = hideCreateClubModal;
window.handleCreateClub = handleCreateClub;
window.switchClubTab = switchClubTab;
window.showAddEventModal = showAddEventModal;
window.hideAddEventModal = hideAddEventModal;
window.handleCreateEvent = handleCreateEvent;
window.handleDeleteEvent = handleDeleteEvent;
window.handleToggleAttendance = handleToggleAttendance;
window.handleJoinClub = handleJoinClub;
window.handleLeaveClub = handleLeaveClub;
window.showEditClubModal = showEditClubModal;
window.showEditEventModal = showEditEventModal;

// Training features
window.showCreatePlanModal = showCreatePlanModal;
window.hideCreatePlanModal = hideCreatePlanModal;
window.handleCreatePlan = handleCreatePlan;
window.addExerciseField = addExerciseField;
window.removeExercise = removeExercise;
window.viewTrainingPlan = viewTrainingPlan;
window.hideViewPlanModal = hideViewPlanModal;
window.subscribePlan = subscribePlan;
window.unsubscribePlan = unsubscribePlan;
window.deleteTrainingPlanHandler = deleteTrainingPlanHandler;
window.editTrainingPlan = editTrainingPlan;

// New conversation from messages
window.showNewConversationModal = showNewConversationModal;
window.hideNewConversationModal = hideNewConversationModal;
window.searchUsersForConversation = searchUsersForConversation;
window.startConversationWith = startConversationWith;

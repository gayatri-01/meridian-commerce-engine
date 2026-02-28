export const getTrendData = () => ({
  sentiment: {
    currentScore: 0.52,
    status: 'Moderately Positive',
    trend: 'improving',
    trendPercentage: 5.2,
    lastUpdated: new Date(Date.now() - 30 * 60000),
  },
  momentum: {
    trendMomentum: 'Strong ↗',
    direction: '+2.5%',
    weekOverWeek: '+2.5%',
    affectedCategories: ['Chips', 'Sweets', 'Beverages'],
    geographicScope: 'All India, Concentrated in South',
  },
  sourceAttribution: [
    { source: 'Twitter', weight: 35, confidence: 0.92 },
    { source: 'Instagram', weight: 25, confidence: 0.88 },
    { source: 'Economic Data', weight: 20, confidence: 0.85 },
    { source: 'News', weight: 15, confidence: 0.78 },
    { source: 'Weather', weight: 5, confidence: 0.95 },
  ],
  sentimentHistory: generateSentimentHistory(),
});

const generateSentimentHistory = () => {
  const data = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 29);

  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    const baseScore = 0.35 + (i * 0.005);
    const noise = (Math.random() - 0.5) * 0.1;
    const score = Math.max(-1, Math.min(1, baseScore + noise));

    data.push({
      date: date.toISOString().split('T')[0],
      score: parseFloat(score.toFixed(2)),
      displayDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    });
  }

  return data;
};

export const getKeyInsights = () => [
  {
    icon: '📱',
    title: 'Diwali decoration searches up 45% on social media',
    description: 'Hashtag #DiwaliDecorations trending with 250K+ mentions in past 7 days',
    severity: 'high',
    relatedProducts: ['Decorative Items', 'Lights', 'Traditional Decor'],
  },
  {
    icon: '💰',
    title: 'Inflation index stable this month',
    description: 'RBI inflation index at 5.2%, within expected range - no demand pressure',
    severity: 'low',
    relatedProducts: ['Premium Products', 'Luxury Items'],
  },
  {
    icon: '🌦️',
    title: 'Unexpected heat wave predicted for North India',
    description: 'IMD forecast: 40°C+ temperatures next week - 35% demand spike expected for beverages',
    severity: 'high',
    relatedProducts: ['Cold Drinks', 'Ice Cream', 'Juices', 'Water'],
  },
  {
    icon: '📊',
    title: 'Competitor pricing down 12% on key products',
    description: 'Major competitors reducing prices on sweets and decorative items',
    severity: 'medium',
    relatedProducts: ['Sweets', 'Decorations'],
  },
];

export const getCorrelationAnalysis = () => [
  {
    trendSignal: 'Festival sentiment',
    correlationStrength: 0.87,
    historicalAccuracy: 82,
    affectedProducts: ['Sweets', 'Clothing', 'Decorations'],
    strengthLabel: 'Strong',
  },
  {
    trendSignal: 'Weather (rain)',
    correlationStrength: 0.72,
    historicalAccuracy: 75,
    affectedProducts: ['Umbrellas', 'Raincoats', 'Shoes'],
    strengthLabel: 'Strong',
  },
  {
    trendSignal: 'Heat wave alert',
    correlationStrength: 0.68,
    historicalAccuracy: 71,
    affectedProducts: ['Cold Drinks', 'Ice Cream', 'Beverages'],
    strengthLabel: 'Strong',
  },
  {
    trendSignal: 'Economic index',
    correlationStrength: 0.45,
    historicalAccuracy: 52,
    affectedProducts: ['Premium Products'],
    strengthLabel: 'Moderate',
  },
  {
    trendSignal: 'Social media viral',
    correlationStrength: 0.56,
    historicalAccuracy: 64,
    affectedProducts: ['Trending Items'],
    strengthLabel: 'Moderate',
  },
];

export const getRegionalHeatmap = () => [
  {
    region: 'North India',
    sentiment: 0.45,
    intensity: 'medium',
    details: 'Heat wave impact, moderate festival sentiment',
  },
  {
    region: 'South India',
    sentiment: 0.72,
    intensity: 'high',
    details: 'Strong festival sentiment, favorable weather',
  },
  {
    region: 'East India',
    sentiment: 0.38,
    intensity: 'low',
    details: 'Moderate festival influence, stable market',
  },
  {
    region: 'West India',
    sentiment: 0.65,
    intensity: 'high',
    details: 'Strong Diwali season, active social media',
  },
  {
    region: 'Central India',
    sentiment: 0.52,
    intensity: 'medium',
    details: 'Balanced trend signals, mixed sentiment',
  },
];

// Mock data for forecasts with realistic time series patterns
export const generateForecastData = () => {
  const data = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 14);

  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    // Base demand with seasonality (higher on weekends)
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6 ? 1.3 : 1;
    
    // Trend component (slight upward)
    const trend = 100 + i * 1.5;
    
    // Seasonal component (Diwali spike in November)
    const month = date.getMonth();
    const diwaliMultiplier = month === 10 ? 1.5 : 1; // November boost
    
    const baseValue = trend * isWeekend * diwaliMultiplier + Math.random() * 20;
    const pointForecast = Math.round(baseValue);
    const uncertainty = Math.round(pointForecast * 0.15);

    data.push({
      date: date.toISOString().split('T')[0],
      displayDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      pointForecast,
      lowerBound: Math.max(0, pointForecast - uncertainty),
      upperBound: pointForecast + uncertainty,
      actual: i < 14 ? Math.round(baseValue + (Math.random() - 0.5) * 30) : null,
      bestCase: Math.round(pointForecast * 1.25),
      worstCase: Math.round(pointForecast * 0.75),
      mostLikely: pointForecast,
    });
  }

  return data;
};

export const getFeatureImportance = () => [
  { name: 'Historical Sales Trend', importance: 80, color: '#00897B' },
  { name: 'Social Media Sentiment', importance: 45, color: '#26A69A' },
  { name: 'Weather Forecast', importance: 35, color: '#4DB6AC' },
  { name: 'Festival Calendar', importance: 25, color: '#80CBC4' },
  { name: 'Competitor Activity', importance: 15, color: '#B2DFDB' },
];

export const getForecastMetrics = () => ({
  horizon: '30-day forecast',
  lastUpdated: new Date(Date.now() - 45 * 60000).toLocaleString(),
  dataFreshness: '45 minutes ago',
  nextForecast: '2:00 PM today',
  avgNextWeek: 1250,
  trend: 'upward',
  confidence: 95,
  variance: '±15%',
});

export const getForecastComparison = () => ({
  previousForecast: 1200,
  currentForecast: 1250,
  change: 50,
  percentChange: 4.2,
  lastYearSame: 950,
  yearOverYearGrowth: 31.6,
});

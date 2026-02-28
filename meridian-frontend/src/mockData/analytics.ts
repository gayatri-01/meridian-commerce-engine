export const getPerformanceMetrics = () => ({
  forecastAccuracy: {
    currentMape: 12.3,
    targetMape: 15,
    status: 'good',
    trend: 'improving',
    percentageImprovement: 2.1,
  },
  recommendationSuccessRate: {
    current: 76,
    target: 80,
    status: 'warning',
    trend: 'stable',
    percentageChange: 0,
  },
  modelHealth: {
    status: 'Healthy',
    lastTrained: '2 days ago',
    nextTrainingScheduled: '5 days',
    trainingFrequency: 'Weekly',
  },
  systemUptime: {
    current: 99.8,
    target: 99.9,
    status: 'excellent',
    lastIncident: '3 days ago (2 min downtime)',
  },
});

export const getAccuracyTrend = () => {
  const data = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);

  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    const baseMape = 14 - (i * 0.06);
    const noise = (Math.random() - 0.5) * 1;
    const mape = Math.max(10, baseMape + noise);

    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      mape: parseFloat(mape.toFixed(1)),
      target: 15,
    });
  }

  return data;
};

export const getRecommendationSuccess = () => [
  {
    category: 'Sweets & Confectionery',
    successful: 85,
    partial: 10,
    failed: 5,
    successRate: 85,
  },
  {
    category: 'Decorative Items',
    successful: 72,
    partial: 15,
    failed: 13,
    successRate: 72,
  },
  {
    category: 'Beverages',
    successful: 78,
    partial: 12,
    failed: 10,
    successRate: 78,
  },
  {
    category: 'Traditional Clothing',
    successful: 65,
    partial: 20,
    failed: 15,
    successRate: 65,
  },
  {
    category: 'Household Items',
    successful: 82,
    partial: 10,
    failed: 8,
    successRate: 82,
  },
];

export const getModelMetrics = () => ({
  precision: 91,
  recall: 78,
  f1Score: 0.84,
  meanAbsoluteError: 12,
  rootMeanSquaredError: 18,
  description: 'Metrics calculated on validation set (20% of training data)',
});

export const getRollbackHistory = () => [
  {
    version: 'v2.4',
    deploymentDate: '2026-02-25',
    status: 'deployed',
    performanceChange: '+2%',
    details: 'Improved handling of seasonal patterns',
  },
  {
    version: 'v2.3',
    deploymentDate: '2026-02-20',
    status: 'rolled-back',
    performanceChange: '-5%',
    details: 'Rolled back due to accuracy degradation on new data',
  },
  {
    version: 'v2.2',
    deploymentDate: '2026-02-15',
    status: 'deployed',
    performanceChange: '+1%',
    details: 'Fine-tuning for regional variations',
  },
  {
    version: 'v2.1',
    deploymentDate: '2026-02-10',
    status: 'deployed',
    performanceChange: '+3.2%',
    details: 'Major update with new attention mechanisms',
  },
];

export const getDetailedModelMetrics = () => ({
  byCategory: [
    { name: 'Premium Sweets', accuracy: 87, mape: 9.2, dataPoints: 1250 },
    { name: 'Decorative Items', accuracy: 82, mape: 13.5, dataPoints: 890 },
    { name: 'Beverages', accuracy: 85, mape: 10.8, dataPoints: 1456 },
    { name: 'Clothing', accuracy: 78, mape: 15.2, dataPoints: 650 },
    { name: 'Household Items', accuracy: 88, mape: 8.9, dataPoints: 1120 },
  ],
  byTimeHorizon: [
    { horizon: '1-7 days', accuracy: 89, mape: 8.5 },
    { horizon: '8-14 days', accuracy: 85, mape: 11.2 },
    { horizon: '15-30 days', accuracy: 78, mape: 15.8 },
  ],
  seasonalPerformance: [
    { season: 'Festival Season', accuracy: 92, mape: 7.2 },
    { season: 'Off-Season', accuracy: 81, mape: 14.5 },
    { season: 'Peak Season', accuracy: 87, mape: 10.1 },
  ],
});

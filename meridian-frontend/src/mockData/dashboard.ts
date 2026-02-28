export const getDashboardKPIs = () => ({
  nextWeekRevenue: {
    value: '₹45,250',
    trend: 'up',
    percentage: 12.5,
    targetVsActual: 'On track',
  },
  criticalAlerts: {
    value: 2,
    trend: 'down',
    percentage: -50,
    details: '1 stockout warning, 1 forecast anomaly',
  },
  pendingApprovals: {
    value: 3,
    trend: 'up',
    percentage: 50,
    details: '2 POs, 1 document validation',
  },
  forecastAccuracy: {
    value: '84%',
    trend: 'up',
    percentage: 2.1,
    target: '90%',
  },
  modelHealth: {
    status: 'Healthy',
    lastTrained: '2 days ago',
    nextTraining: 'In 5 days',
  },
});

export const getAlerts = () => [
  {
    id: 'alert-1',
    severity: 'high',
    title: 'Potential Stockout: Premium Sweets Pack',
    description: 'Current stock (50 units) may run out in 3-5 days based on demand forecast',
    actionItems: ['Generate PO', 'Check alternate suppliers', 'Reduce promotions'],
    timestamp: new Date(Date.now() - 30 * 60000),
  },
  {
    id: 'alert-2',
    severity: 'medium',
    title: 'Forecast Anomaly Detected',
    description: 'Predicted demand for Category X is 35% higher than historical patterns',
    actionItems: ['Review trend signals', 'Check data quality', 'Adjust confidence level'],
    timestamp: new Date(Date.now() - 60 * 60000),
  },
];

export const getRecentActivity = () => [
  {
    id: 'activity-1',
    type: 'forecast',
    title: 'Forecast updated: Premium Sweets',
    description: 'Demand forecast revised upward by 15% due to Diwali sentiment spike',
    timestamp: new Date(Date.now() - 15 * 60000),
    icon: '📈',
  },
  {
    id: 'activity-2',
    type: 'recommendation',
    title: 'New recommendation: Increase stock for Decorative Items',
    description: 'Based on social media trends and historical performance',
    timestamp: new Date(Date.now() - 45 * 60000),
    icon: '💡',
  },
  {
    id: 'activity-3',
    type: 'document',
    title: 'Shipment SHIP-5678 validated',
    description: '395 units received vs 400 ordered - variance flagged',
    timestamp: new Date(Date.now() - 90 * 60000),
    icon: '📦',
  },
  {
    id: 'activity-4',
    type: 'approval',
    title: 'PO-2026-0003 approved',
    description: 'Purchase order for Traditional Clothing approved by manager',
    timestamp: new Date(Date.now() - 120 * 60000),
    icon: '✓',
  },
  {
    id: 'activity-5',
    type: 'trend',
    title: 'New trend detected: Eco-friendly products',
    description: 'Sentiment score +65% - demand expected to increase',
    timestamp: new Date(Date.now() - 180 * 60000),
    icon: '🌱',
  },
];

export const getMiniChartData = () => [
  {
    date: 'Feb 22',
    sales: 2400,
    forecast: 2200,
  },
  {
    date: 'Feb 23',
    sales: 1398,
    forecast: 1500,
  },
  {
    date: 'Feb 24',
    sales: 9800,
    forecast: 9500,
  },
  {
    date: 'Feb 25',
    sales: 3908,
    forecast: 4000,
  },
  {
    date: 'Feb 26',
    sales: 4800,
    forecast: 4700,
  },
  {
    date: 'Feb 27',
    sales: 3800,
    forecast: 4200,
  },
  {
    date: 'Feb 28',
    sales: 4300,
    forecast: 4500,
  },
];

export const getStoreInfo = () => ({
  storeName: 'Main Store - Delhi',
  storeId: 'STORE-0001',
  location: 'Sector 5, New Delhi, India',
  size: 'Large',
  manager: 'Rajesh Kumar',
  managerEmail: 'rajesh@meridian.com',
});

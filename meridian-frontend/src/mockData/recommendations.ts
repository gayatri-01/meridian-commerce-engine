export const getProcurementRecommendations = () => [
  {
    id: 'rec-1',
    product: 'Premium Sweets Pack',
    currentStock: 50,
    recommendedQty: 350,
    leadTime: '2 days',
    confidence: 92,
    risk: 'Low',
    supplierOptions: 3,
    reason: 'Diwali festival spike detected',
    historicalMatch: 'Similar pattern during Holi 2025: +40% sales',
  },
  {
    id: 'rec-2',
    product: 'Decorative Items Set',
    currentStock: 120,
    recommendedQty: 400,
    leadTime: '4 days',
    confidence: 87,
    risk: 'Medium',
    supplierOptions: 2,
    reason: 'Festival sentiment +65% on social media',
    historicalMatch: 'Diwali 2024: +45% sales correlation',
  },
  {
    id: 'rec-3',
    product: 'Traditional Clothing',
    currentStock: 80,
    recommendedQty: 250,
    leadTime: '3 days',
    confidence: 78,
    risk: 'High',
    supplierOptions: 2,
    reason: 'Moderate trend signal, regional preference',
    historicalMatch: 'Last year similar period: +25% sales',
  },
];

export const getShelfOptimizations = () => [
  {
    id: 'shelf-1',
    product: 'Premium Sweets Pack',
    currentLocation: 'Middle shelf, back section',
    recommendedLocation: 'Premium shelf, center (eye level)',
    expectedUplift: 35,
    reason: 'High demand + premium positioning = increased visibility',
    implementationDifficulty: 'Easy',
  },
  {
    id: 'shelf-2',
    product: 'Decorative Items',
    currentLocation: 'Lower shelf, corner',
    recommendedLocation: 'Top shelf, front (impulse buy zone)',
    expectedUplift: 28,
    reason: 'Festival peak - move to high-traffic area',
    implementationDifficulty: 'Easy',
  },
];

export const getTrendBasedActions = () => [
  {
    id: 'trend-1',
    trend: 'Rising',
    trendName: 'Eco-friendly packaging',
    affectedProducts: ['Sustainable Containers', 'Organic Products', 'Reusable Bags'],
    suggestedAction: 'Increase stock',
    momentum: '+2.3% day-over-day',
    sources: ['Instagram: +45% mentions', 'Twitter: +28% conversations'],
  },
  {
    id: 'trend-2',
    trend: 'Declining',
    trendName: 'Traditional plastic packaging',
    affectedProducts: ['Plastic Bags', 'Plastic Wraps'],
    suggestedAction: 'Reduce shelf space',
    momentum: '-1.8% day-over-day',
    sources: ['Consumer sentiment: -35%', 'News mentions: -22%'],
  },
];

export const getBudgetAnalysis = () => ({
  monthlyBudget: 500000,
  budgetUsedThisMonth: 210000,
  percentageUsed: 42,
  remainingBudget: 290000,
  poRecommendations: [
    { product: 'Premium Sweets Pack', quantity: 350, unitCost: 150, total: 52500 },
    { product: 'Decorative Items Set', quantity: 400, unitCost: 200, total: 80000 },
    { product: 'Traditional Clothing', quantity: 250, unitCost: 300, total: 75000 },
  ],
  totalRecommendedCost: 207500,
  estimatedTotalWithBudget: 417500,
  budgetUtilizationAfterPO: 83.5,
});

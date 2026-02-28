import React, { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Chip,
  Stack,
  Button,
  LinearProgress,
} from '@mui/material';
import { CheckCircle, AlertCircle, TrendingUp, ShoppingCart } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: number;
  category: 'inventory' | 'procurement' | 'trend' | 'pricing';
  status: 'pending' | 'accepted' | 'rejected';
}

const Recommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: '1',
      title: 'Increase Electronics Inventory',
      description: 'Based on forecasts, electronics demand will spike 25% this week. Recommend procuring 15,000 additional units.',
      priority: 'high',
      impact: 92,
      category: 'inventory',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Clear Fashion Overstock',
      description: 'Season ending soon. Consider 20-30% discount on winter collection to clear inventory quickly.',
      priority: 'high',
      impact: 78,
      category: 'pricing',
      status: 'pending',
    },
    {
      id: '3',
      title: 'Optimize Reorder Points',
      description: 'Update reorder points for Home & Kitchen category based on new demand patterns.',
      priority: 'medium',
      impact: 65,
      category: 'procurement',
      status: 'pending',
    },
    {
      id: '4',
      title: 'Launch Beauty Bundle Promotion',
      description: 'Cross-sell opportunity detected. Bundle beauty items with personal care for 15% uplift.',
      priority: 'medium',
      impact: 58,
      category: 'trend',
      status: 'accepted',
    },
    {
      id: '5',
      title: 'Reduce Sports Equipment Stock',
      description: 'Declining trend detected in sports category. Reduce orders by 30% for next quarter.',
      priority: 'medium',
      impact: 52,
      category: 'inventory',
      status: 'accepted',
    },
    {
      id: '6',
      title: 'Premium Supplier Partnership',
      description: 'New supplier offer with 12% better pricing on electronics. Recommended to negotiate deal.',
      priority: 'low',
      impact: 45,
      category: 'procurement',
      status: 'pending',
    },
  ]);

  const handleAccept = (id: string) => {
    setRecommendations(recommendations.map((r) => (r.id === id ? { ...r, status: 'accepted' } : r)));
  };

  const handleReject = (id: string) => {
    setRecommendations(recommendations.map((r) => (r.id === id ? { ...r, status: 'rejected' } : r)));
  };

  const priorityColor = (priority: string) => {
    return priority === 'high' ? '#FF6B35' : priority === 'medium' ? '#FF9800' : '#4CAF50';
  };

  const categoryIcon = (category: string) => {
    switch (category) {
      case 'inventory':
        return <TrendingUp size={16} />;
      case 'procurement':
        return <ShoppingCart size={16} />;
      case 'pricing':
        return <AlertCircle size={16} />;
      default:
        return <TrendingUp size={16} />;
    }
  };

  const pendingRecs = recommendations.filter((r) => r.status === 'pending');
  const acceptedRecs = recommendations.filter((r) => r.status === 'accepted');

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, letterSpacing: '-0.5px' }}>
            AI Recommendations
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
            Procurement, inventory, and pricing recommendations based on trends and forecasts.
          </Typography>
        </Box>

        {/* Summary Stats */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2, mb: 4 }}>
          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD' }}>
                  Pending Review
                </Typography>
                <AlertCircle size={18} style={{ color: '#FF6B35' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                {pendingRecs.length}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD' }}>
                  Accepted
                </Typography>
                <CheckCircle size={18} style={{ color: '#4CAF50' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                {acceptedRecs.length}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD' }}>
                  Avg Impact
                </Typography>
                <TrendingUp size={18} style={{ color: '#00897B' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                {Math.round(recommendations.reduce((a, r) => a + r.impact, 0) / recommendations.length)}%
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Pending Recommendations */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4 }}>
          Pending Review
        </Typography>
        <Stack spacing={2} sx={{ mb: 4 }}>
          {pendingRecs.map((rec) => (
            <Card key={rec.id} sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Box sx={{ color: priorityColor(rec.priority) }}>{categoryIcon(rec.category)}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                        {rec.title}
                      </Typography>
                      <Chip
                        size="small"
                        label={rec.priority.toUpperCase()}
                        sx={{
                          backgroundColor: `rgba(${rec.priority === 'high' ? '255, 107, 53' : rec.priority === 'medium' ? '255, 152, 0' : '76, 175, 80'}, 0.2)`,
                          color: priorityColor(rec.priority),
                          fontSize: '0.65rem',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                      {rec.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 600 }}>
                          Impact Score
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#00897B' }}>
                          {rec.impact}%
                        </Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={rec.impact} sx={{ height: '6px', borderRadius: '3px', backgroundColor: 'rgba(0, 137, 123, 0.1)', '& .MuiLinearProgress-bar': { backgroundColor: '#00897B' } }} />
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="contained" size="small" sx={{ fontSize: '0.75rem', py: 0.75 }} onClick={() => handleAccept(rec.id)}>
                    Accept
                  </Button>
                  <Button variant="outlined" size="small" sx={{ fontSize: '0.75rem', py: 0.75 }} onClick={() => handleReject(rec.id)}>
                    Dismiss
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* Accepted Recommendations */}
        {acceptedRecs.length > 0 && (
          <>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: 'success.main' }}>
              ✓ Accepted Recommendations
            </Typography>
            <Stack spacing={2}>
              {acceptedRecs.map((rec) => (
                <Card key={rec.id} sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)', opacity: 0.7 }}>
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle size={18} style={{ color: '#4CAF50' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, flex: 1 }}>
                        {rec.title}
                      </Typography>
                      <Chip size="small" label={`${rec.impact}% impact`} sx={{ backgroundColor: 'rgba(76, 175, 80, 0.2)', color: '#4CAF50', fontSize: '0.65rem' }} />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Recommendations;

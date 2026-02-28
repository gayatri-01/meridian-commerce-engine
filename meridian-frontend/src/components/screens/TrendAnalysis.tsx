import React from 'react';
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Stack,
  Chip,
  Grid,
} from '@mui/material';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, MapPin } from 'lucide-react';

const TrendAnalysis: React.FC = () => {
  const monthlyTrends = [
    { month: 'Dec', growth: 8.2, sentiment: 72, searches: 4200 },
    { month: 'Jan', growth: 12.5, sentiment: 78, searches: 5100 },
    { month: 'Feb', growth: 15.3, sentiment: 82, searches: 6300 },
  ];

  const categoryTrends = [
    { name: 'Rice & Grains', value: 28, color: '#00897B' },
    { name: 'Pulses/Dal', value: 22, color: '#FF6B35' },
    { name: 'Spices', value: 18, color: '#2196F3' },
    { name: 'Oils & Ghee', value: 18, color: '#FF69B4' },
    { name: 'Vegetables', value: 14, color: '#FFB300' },
  ];

  const regionalData = [
    { region: 'North', sales: 82500, growth: 12.5 },
    { region: 'South', sales: 64200, growth: 8.3 },
    { region: 'East', sales: 58900, growth: 15.7 },
    { region: 'West', sales: 76300, growth: 18.2 },
  ];

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5, letterSpacing: '-0.5px' }}>
            Trend Analysis
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
            Grocery product trends, regional performance, and customer demand insights.
          </Typography>
        </Box>

        {/* Key Metrics */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2, mb: 3 }}>
          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600 }}>
                  Overall Growth
                </Typography>
                <TrendingUp size={20} style={{ color: '#00897B' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 1 }}>
                15.3%
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontSize: '0.75rem', fontWeight: 600 }}>
                ↑ +2.8% vs last month
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600 }}>
                  Sentiment Score
                </Typography>
                <span style={{ fontSize: '20px' }}>😊</span>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 1 }}>
                82/100
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontSize: '0.75rem', fontWeight: 600 }}>
                ↑ +4 pts positive
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600 }}>
                  Search Volume
                </Typography>
                <MapPin size={20} style={{ color: '#FF6B35' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 1 }}>
                ₹2.1L
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontSize: '0.75rem', fontWeight: 600 }}>
                ↑ +23% weekly
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Trends Grid */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* Monthly Trends */}
          <Grid xs={12} md={6}>
            <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardHeader title="Growth Trend (3 Months)" sx={{ pb: 1.5, pt: 2 }} />
              <Divider sx={{ my: 0 }} />
              <CardContent sx={{ p: 2 }}>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3F4857" />
                    <XAxis dataKey="month" stroke="#B0B5BD" />
                    <YAxis stroke="#B0B5BD" />
                    <Tooltip contentStyle={{ backgroundColor: '#2C3E50', borderColor: '#00897B', borderRadius: '8px' }} labelStyle={{ color: '#E8EAED' }} />
                    <Legend wrapperStyle={{ color: '#B0B5BD' }} />
                    <Line type="monotone" dataKey="growth" stroke="#00897B" strokeWidth={2} dot={{ fill: '#00897B' }} name="Growth %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Category Distribution */}
          <Grid xs={12} md={6}>
            <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardHeader title="Category Trends" sx={{ pb: 1.5, pt: 2 }} />
              <Divider sx={{ my: 0 }} />
              <CardContent sx={{ p: 2 }}>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={categoryTrends} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                      {categoryTrends.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} contentStyle={{ backgroundColor: '#2C3E50', border: 'none', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
                <Stack spacing={1} sx={{ mt: 2 }}>
                  {categoryTrends.map((cat) => (
                    <Box key={cat.name} sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.85rem' }}>
                      <Box sx={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: cat.color }} />
                      <Typography sx={{ flex: 1, fontSize: '0.85rem' }}>{cat.name}</Typography>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>{cat.value}%</Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Regional Performance */}
        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <CardHeader title="Regional Performance" sx={{ pb: 1.5, pt: 2 }} />
          <Divider sx={{ my: 0 }} />
          <CardContent sx={{ p: 2 }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3F4857" />
                <XAxis dataKey="region" stroke="#B0B5BD" />
                <YAxis stroke="#B0B5BD" />
                <Tooltip contentStyle={{ backgroundColor: '#2C3E50', borderColor: '#00897B', borderRadius: '8px' }} labelStyle={{ color: '#E8EAED' }} />
                <Legend wrapperStyle={{ color: '#B0B5BD' }} />
                <Bar dataKey="sales" fill="#00897B" name="Sales (₹)" />
                <Bar dataKey="growth" fill="#FF6B35" name="Growth %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default TrendAnalysis;

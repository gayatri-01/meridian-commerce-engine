import React from 'react';
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Grid,
} from '@mui/material';
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics: React.FC = () => {
  const modelMetrics = [
    { metric: 'Forecast Accuracy', value: 94.2, status: 'excellent' },
    { metric: 'Recommendation Precision', value: 89.7, status: 'excellent' },
    { metric: 'Data Processing Speed', value: 98.3, status: 'excellent' },
    { metric: 'System Uptime', value: 99.9, status: 'excellent' },
  ];

  const performanceData = [
    { day: 'Mon', accuracy: 93.8, precision: 88.2, recall: 91.5 },
    { day: 'Tue', accuracy: 94.1, precision: 89.0, recall: 91.8 },
    { day: 'Wed', accuracy: 94.5, precision: 89.5, recall: 92.1 },
    { day: 'Thu', accuracy: 94.2, precision: 89.2, recall: 91.9 },
    { day: 'Fri', accuracy: 94.6, precision: 89.8, recall: 92.3 },
    { day: 'Sat', accuracy: 94.3, precision: 89.1, recall: 92.0 },
    { day: 'Sun', accuracy: 94.0, precision: 88.9, recall: 91.7 },
  ];

  const predictionAccuracy = [
    { time: '12 hrs', error: 2.1 },
    { time: '24 hrs', error: 5.8 },
    { time: '7 days', error: 8.3 },
    { time: '30 days', error: 12.5 },
  ];

  const categoryPerformance = [
    { category: 'Electronics', accuracy: 96.2, volume: 4200 },
    { category: 'Fashion', accuracy: 92.8, volume: 3100 },
    { category: 'Home & Kitchen', accuracy: 94.1, volume: 2400 },
    { category: 'Beauty', accuracy: 95.7, volume: 1800 },
    { category: 'Sports', accuracy: 91.3, volume: 1200 },
  ];

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5, letterSpacing: '-0.5px' }}>
            Performance Analytics
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
            Model performance, accuracy metrics, and system health indicators.
          </Typography>
        </Box>

        {/* Key Metrics */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2, mb: 3 }}>
          {modelMetrics.map((metric, idx) => (
            <Card key={idx} sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, mb: 1, display: 'block' }}>
                  {metric.metric}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 1, color: metric.status === 'excellent' ? '#4CAF50' : '#FF9800' }}>
                  {metric.value}%
                </Typography>
                <Typography variant="caption" sx={{ color: 'success.main', fontSize: '0.75rem', fontWeight: 600 }}>
                  ✓ {metric.status === 'excellent' ? 'Excellent' : 'Good'}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Performance Trends */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* Weekly Performance */}
          <Grid xs={12} lg={8}>
            <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardHeader title="Weekly Performance Trend" sx={{ pb: 1.5, pt: 2 }} />
              <Divider sx={{ my: 0 }} />
              <CardContent sx={{ p: 2 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3F4857" />
                    <XAxis dataKey="day" stroke="#B0B5BD" />
                    <YAxis stroke="#B0B5BD" domain={[85, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: '#2C3E50', borderColor: '#00897B', borderRadius: '8px' }} labelStyle={{ color: '#E8EAED' }} />
                    <Legend wrapperStyle={{ color: '#B0B5BD' }} />
                    <Line type="monotone" dataKey="accuracy" stroke="#00897B" strokeWidth={2} dot={{ fill: '#00897B' }} name="Accuracy %" />
                    <Line type="monotone" dataKey="precision" stroke="#FF6B35" strokeWidth={2} dot={{ fill: '#FF6B35' }} name="Precision %" />
                    <Line type="monotone" dataKey="recall" stroke="#2196F3" strokeWidth={2} dot={{ fill: '#2196F3' }} name="Recall %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Prediction Error */}
          <Grid xs={12} lg={4}>
            <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardHeader title="Prediction Error by Horizon" sx={{ pb: 1.5, pt: 2 }} />
              <Divider sx={{ my: 0 }} />
              <CardContent sx={{ p: 2 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={predictionAccuracy}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3F4857" />
                    <XAxis dataKey="time" stroke="#B0B5BD" />
                    <YAxis stroke="#B0B5BD" />
                    <Tooltip contentStyle={{ backgroundColor: '#2C3E50', borderColor: '#00897B', borderRadius: '8px' }} labelStyle={{ color: '#E8EAED' }} />
                    <Bar dataKey="error" fill="#FF6B35" name="MAPE %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Category Performance Table */}
        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)', mb: 3 }}>
          <CardHeader title="Category Performance Breakdown" sx={{ pb: 1.5, pt: 2 }} />
          <Divider sx={{ my: 0 }} />
          <CardContent sx={{ p: 2, overflowX: 'auto' }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'rgba(0, 137, 123, 0.05)' }}>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Category</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>Forecast Accuracy</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>Predictions</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>Recommendations</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoryPerformance.map((cat, idx) => (
                  <TableRow key={idx} sx={{ borderBottom: '1px solid #2C3E50', '&:last-child': { borderBottom: 'none' } }}>
                    <TableCell sx={{ fontSize: '0.875rem', fontWeight: 500 }}>{cat.category}</TableCell>
                    <TableCell align="right" sx={{ fontSize: '0.875rem', fontWeight: 600, color: cat.accuracy > 95 ? '#4CAF50' : cat.accuracy > 90 ? '#00897B' : '#FF9800' }}>
                      {cat.accuracy}%
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: '0.875rem' }}>{cat.volume}</TableCell>
                    <TableCell align="right" sx={{ fontSize: '0.875rem' }}>{Math.round(cat.volume * 0.35)}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>
                      <Box sx={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cat.accuracy > 95 ? '#4CAF50' : cat.accuracy > 90 ? '#00897B' : '#FF9800' }} />
                      <Typography variant="caption" sx={{ ml: 1, fontSize: '0.75rem' }}>
                        {cat.accuracy > 95 ? 'Excellent' : cat.accuracy > 90 ? 'Good' : 'Fair'}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* System Health */}
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardHeader title="API Response Time" sx={{ pb: 1.5, pt: 2 }} />
              <Divider sx={{ my: 0 }} />
              <CardContent sx={{ p: 2 }}>
                <Stack spacing={2}>
                  {['Forecast API', 'Recommendation API', 'Analytics API', 'Chat API'].map((api) => (
                    <Box key={api}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>
                          {api}
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: '0.8rem', color: '#4CAF50', fontWeight: 600 }}>
                          {Math.round(Math.random() * 300 + 50)}ms
                        </Typography>
                      </Box>
                      <Box sx={{ height: '6px', backgroundColor: 'rgba(0, 137, 123, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <Box sx={{ height: '100%', backgroundColor: '#4CAF50', width: `${Math.random() * 40 + 60}%` }} />
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} md={6}>
            <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardHeader title="System Health" sx={{ pb: 1.5, pt: 2 }} />
              <Divider sx={{ my: 0 }} />
              <CardContent sx={{ p: 2 }}>
                <Stack spacing={2}>
                  {['CPU Usage', 'Memory Usage', 'Disk I/O', 'Network I/O'].map((metric) => {
                    const value = Math.random() * 60 + 20;
                    return (
                      <Box key={metric}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="caption" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>
                            {metric}
                          </Typography>
                          <Typography variant="caption" sx={{ fontSize: '0.8rem', color: '#00897B', fontWeight: 600 }}>
                            {Math.round(value)}%
                          </Typography>
                        </Box>
                        <Box sx={{ height: '6px', backgroundColor: 'rgba(0, 137, 123, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                          <Box sx={{ height: '100%', backgroundColor: '#00897B', width: `${value}%` }} />
                        </Box>
                      </Box>
                    );
                  })}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Analytics;

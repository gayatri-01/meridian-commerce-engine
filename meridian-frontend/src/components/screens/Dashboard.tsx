import React from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUp, AlertTriangle, Clock, Activity } from 'lucide-react';
import {
  getDashboardKPIs,
  getRecentActivity,
  getMiniChartData,
} from '../../mockData';

const KPICard: React.FC<{
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  percentage?: number;
  icon?: React.ReactNode;
}> = ({ label, value, trend, percentage, icon }) => {
  return (
    <Card sx={{ height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
          <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600 }}>
            {label}
          </Typography>
          {icon && <Box sx={{ color: 'primary.main', opacity: 0.8 }}>{icon}</Box>}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
            {value}
          </Typography>
          {trend && percentage && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: trend === 'up' ? 'success.main' : 'error.main', whiteSpace: 'nowrap' }}>
              <ArrowUp size={14} style={{ marginTop: '2px' }} />
              <Typography variant="caption" sx={{ fontSize: '0.75rem', fontWeight: 600 }}>{Math.abs(percentage)}%</Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const kpis = getDashboardKPIs();
  const activities = getRecentActivity();
  const chartData = getMiniChartData();

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5, letterSpacing: '-0.5px' }}>
            Dashboard
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
            Welcome to your grocery store. Here's today's inventory and sales performance.
          </Typography>
        </Box>

        {/* KPI Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: 'repeat(5, 1fr)' }, gap: 2, mb: 3 }}>
          <Box>
            <KPICard
              label="Today's Revenue"
              value="₹12,450"
              trend="up"
              percentage={8.5}
              icon={<ArrowUp size={20} />}
            />
          </Box>
          <Box>
            <KPICard
              label="Low Stock Items"
              value="5"
              trend="down"
              percentage={2}
              icon={<AlertTriangle size={20} />}
            />
          </Box>
          <Box>
            <KPICard
              label="Pending Orders"
              value="12"
              trend="up"
              percentage={3}
              icon={<Clock size={20} />}
            />
          </Box>
          <Box>
            <KPICard label="Forecast Accuracy" value="94.2%" icon={<Activity size={20} />} />
          </Box>
          <Box>
            <KPICard label="Store Status" value="Active" />
          </Box>
        </Box>

        {/* Main Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3 }}>
          {/* Chart */}
          <Box>
            <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <CardHeader title="Daily Sales vs Inventory Target" sx={{ pb: 1.5, pt: 2 }} />
              <Divider sx={{ my: 0 }} />
              <CardContent sx={{ p: 2 }}>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3F4857" />
                    <XAxis dataKey="date" stroke="#B0B5BD" />
                    <YAxis stroke="#B0B5BD" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#2C3E50',
                        borderColor: '#00897B',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: '#E8EAED' }}
                    />
                    <Legend wrapperStyle={{ color: '#B0B5BD' }} />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#00897B"
                      strokeWidth={2}
                      dot={{ fill: '#00897B' }}
                      name="Actual Sales"
                    />
                    <Line
                      type="monotone"
                      dataKey="forecast"
                      stroke="#26A69A"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#26A69A' }}
                      name="Forecast"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Box>

          {/* Activity */}
          <Box>
            <Card sx={{ height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
              <CardHeader title="Recent Activity" sx={{ pb: 1.5, pt: 2 }} />
              <Divider sx={{ my: 0 }} />
              <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Stack spacing={2}>
                  {activities.slice(0, 5).map((activity, index) => (
                    <Box key={activity.id} sx={{ pb: 2, borderBottom: index < 4 ? '1px solid #2C3E50' : 'none', '&:last-child': { pb: 0 } }}>
                      <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ fontSize: '1.25rem', mt: 0.25, flexShrink: 0 }}>{activity.icon}</Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, lineHeight: 1.4 }}>
                            {activity.title}
                          </Typography>
                          <Typography variant="caption" color="textSecondary" sx={{ lineHeight: 1.4 }}>
                            {activity.description}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" color="textSecondary" sx={{ fontSize: '0.7rem', ml: 3.5 }}>
                        {activity.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #2C3E50' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" color="primary" size="medium" sx={{ py: 1 }}>
              Generate Daily Report
            </Button>
            <Button variant="outlined" color="primary" size="medium" sx={{ py: 1 }}>
              Manage Inventory
            </Button>
            <Button variant="text" color="primary" size="medium">
              View All Orders
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;

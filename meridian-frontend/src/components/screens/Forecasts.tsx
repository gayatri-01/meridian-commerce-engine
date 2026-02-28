import React, { useState } from 'react';
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
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getMiniChartData } from '../../mockData';

interface GroceryItem {
  id: string;
  name: string;
  code: string;
  unit: string;
  forecast7d: number;
  forecast30d: number;
  accuracy: string;
}

const Forecasts: React.FC = () => {
  const groceryItems: GroceryItem[] = [
    { id: '1', name: 'Basmati Rice', code: 'RICE-001', unit: 'kg', forecast7d: 450, forecast30d: 1890, accuracy: '96.2%' },
    { id: '2', name: 'Moong Dal', code: 'DAL-001', unit: 'kg', forecast7d: 85, forecast30d: 385, accuracy: '92.8%' },
    { id: '3', name: 'Wheat Flour', code: 'FLOUR-001', unit: 'kg', forecast7d: 320, forecast30d: 1620, accuracy: '94.1%' },
    { id: '4', name: 'Mustard Oil', code: 'OIL-001', unit: 'liter', forecast7d: 95, forecast30d: 420, accuracy: '91.3%' },
    { id: '5', name: 'Turmeric Powder', code: 'SPICE-001', unit: 'kg', forecast7d: 35, forecast30d: 165, accuracy: '95.7%' },
    { id: '6', name: 'Onions', code: 'VEG-001', unit: 'kg', forecast7d: 280, forecast30d: 1150, accuracy: '93.4%' },
    { id: '7', name: 'Tomatoes', code: 'VEG-002', unit: 'kg', forecast7d: 220, forecast30d: 980, accuracy: '90.8%' },
    { id: '8', name: 'Coriander Powder', code: 'SPICE-002', unit: 'kg', forecast7d: 28, forecast30d: 130, accuracy: '94.6%' },
  ];

  const [selectedItem, setSelectedItem] = useState<string>('1');
  const [displayMode, setDisplayMode] = useState<'name' | 'code'>('name');

  const chartData = getMiniChartData();
  const currentItem = groceryItems.find((item) => item.id === selectedItem) || groceryItems[0];

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5, letterSpacing: '-0.5px' }}>
            Demand Forecasts
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
            7-day and 30-day demand predictions for your grocery inventory.
          </Typography>
        </Box>

        {/* Item Selector */}
        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)', mb: 3 }}>
          <CardContent sx={{ p: 2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'flex-start', sm: { alignItems: 'center' } }}>
              <FormControl sx={{ minWidth: '300px' }}>
                <InputLabel>Select Item</InputLabel>
                <Select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} label="Select Item">
                  {groceryItems.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {displayMode === 'name' ? item.name : item.code} ({item.unit})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: '200px' }}>
                <InputLabel>Display As</InputLabel>
                <Select value={displayMode} onChange={(e) => setDisplayMode(e.target.value as 'name' | 'code')} label="Display As">
                  <MenuItem value="name">Item Name</MenuItem>
                  <MenuItem value="code">Item Code</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2, mb: 3 }}>
          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
              <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, mb: 1, display: 'block' }}>
                7-Day Forecast
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 1 }}>
                {currentItem.forecast7d} {currentItem.unit}
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontSize: '0.75rem', fontWeight: 600 }}>
                {displayMode === 'name' ? currentItem.name : currentItem.code}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
              <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, mb: 1, display: 'block' }}>
                30-Day Forecast
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 1 }}>
                {currentItem.forecast30d} {currentItem.unit}
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontSize: '0.75rem', fontWeight: 600 }}>
                ↑ {Math.round((currentItem.forecast30d / currentItem.forecast7d - 1) * 100)}% increase
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
              <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, mb: 1, display: 'block' }}>
                Model Accuracy
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 1 }}>
                {currentItem.accuracy}
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontSize: '0.75rem', fontWeight: 600 }}>
                ✓ Excellent
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Forecast Trend Chart */}
        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)', mb: 3 }}>
          <CardHeader title={`Forecast Trend - ${displayMode === 'name' ? currentItem.name : currentItem.code}`} sx={{ pb: 1.5, pt: 2 }} />
          <Divider sx={{ my: 0 }} />
          <CardContent sx={{ p: 2 }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3F4857" />
                <XAxis dataKey="date" stroke="#B0B5BD" />
                <YAxis stroke="#B0B5BD" />
                <Tooltip contentStyle={{ backgroundColor: '#2C3E50', borderColor: '#00897B', borderRadius: '8px' }} labelStyle={{ color: '#E8EAED' }} formatter={(value) => `${value} ${currentItem.unit}`} />
                <Legend wrapperStyle={{ color: '#B0B5BD' }} />
                <Line type="monotone" dataKey="forecast" stroke="#00897B" strokeWidth={2} dot={{ fill: '#00897B' }} name="Forecast" />
                <Line type="monotone" dataKey="sales" stroke="#FF6B35" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#FF6B35' }} name="Actual (Trend)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* All Items Table */}
        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <CardHeader title="All Items Forecast" sx={{ pb: 1.5, pt: 2 }} />
          <Divider sx={{ my: 0 }} />
          <CardContent sx={{ p: 2, overflowX: 'auto' }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'rgba(0, 137, 123, 0.05)' }}>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Item</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Code</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Unit</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>7-Day</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>30-Day</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>Accuracy</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groceryItems.map((item) => (
                  <TableRow key={item.id} sx={{ borderBottom: '1px solid #2C3E50', '&:last-child': { borderBottom: 'none' }, backgroundColor: selectedItem === item.id ? 'rgba(0, 137, 123, 0.1)' : 'transparent' }}>
                    <TableCell sx={{ fontSize: '0.875rem', fontWeight: 500 }}>{item.name}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{item.code}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{item.unit}</TableCell>
                    <TableCell align="right" sx={{ fontSize: '0.875rem' }}>{item.forecast7d}</TableCell>
                    <TableCell align="right" sx={{ fontSize: '0.875rem' }}>{item.forecast30d}</TableCell>
                    <TableCell align="right" sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'success.main' }}>{item.accuracy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Forecasts;

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
  TextField,
  Stack,
  Button,
} from '@mui/material';
import { Search, Plus, Download } from 'lucide-react';

interface PO {
  id: string;
  supplier: string;
  category: string;
  quantity: number;
  cost: number;
  orderDate: string;
  deliveryDate: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
}

const PurchaseOrders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const orders: PO[] = [
    {
      id: 'PO-001',
      supplier: 'Punjab Rice Mills Ltd',
      category: 'Rice & Grains',
      quantity: 500,
      cost: 18500,
      orderDate: '2025-02-20',
      deliveryDate: '2025-02-25',
      status: 'shipped',
    },
    {
      id: 'PO-002',
      supplier: 'Madhya Pradesh Dal Traders',
      category: 'Pulses/Dal',
      quantity: 250,
      cost: 12400,
      orderDate: '2025-02-19',
      deliveryDate: '2025-02-28',
      status: 'confirmed',
    },
    {
      id: 'PO-003',
      supplier: 'Kerala Spice House',
      category: 'Spices',
      quantity: 100,
      cost: 8900,
      orderDate: '2025-02-18',
      deliveryDate: '2025-03-05',
      status: 'pending',
    },
    {
      id: 'PO-004',
      supplier: 'Gujarat Oil Mills Co',
      category: 'Oils & Ghee',
      quantity: 150,
      cost: 22500,
      orderDate: '2025-02-17',
      deliveryDate: '2025-02-22',
      status: 'delivered',
    },
    {
      id: 'PO-005',
      supplier: 'Himachal Vegetable Supply',
      category: 'Vegetables',
      quantity: 300,
      cost: 9000,
      orderDate: '2025-02-15',
      deliveryDate: '2025-02-21',
      status: 'delivered',
    },
    {
      id: 'PO-006',
      supplier: 'Punjab Rice Mills Ltd',
      category: 'Wheat Flour',
      quantity: 200,
      cost: 6800,
      orderDate: '2025-02-21',
      deliveryDate: '2025-03-02',
      status: 'pending',
    },
  ];

  const statusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return { bg: 'rgba(255, 152, 0, 0.2)', color: '#FF9800' };
      case 'confirmed':
        return { bg: 'rgba(33, 150, 243, 0.2)', color: '#2196F3' };
      case 'shipped':
        return { bg: 'rgba(76, 175, 80, 0.2)', color: '#4CAF50' };
      case 'delivered':
        return { bg: 'rgba(0, 137, 123, 0.2)', color: '#00897B' };
      default:
        return { bg: 'rgba(200, 200, 200, 0.2)', color: '#999' };
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || order.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalValue = filteredOrders.reduce((sum, order) => sum + order.cost, 0);

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, letterSpacing: '-0.5px' }}>
            Purchase Orders
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
            Manage POs with Indian suppliers, track deliveries, and monitor stock replenishment.
          </Typography>
        </Box>

        {/* Summary Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2, mb: 4 }}>
          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                Total Orders
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                {orders.length}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                Total Value
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                ₹{totalValue.toLocaleString('en-IN')}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                Pending
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', color: '#FF9800' }}>
                {orders.filter((o) => o.status === 'pending').length}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                Delivered
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', color: '#4CAF50' }}>
                {orders.filter((o) => o.status === 'delivered').length}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Filters and Actions */}
        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)', mb: 3 }}>
          <CardContent sx={{ p: 2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'flex-start', sm: { alignItems: 'center' } }}>
              <TextField
                size="small"
                placeholder="Search by PO ID or supplier..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <Search size={16} style={{ marginRight: '8px', color: '#B0B5BD' }} />,
                }}
                sx={{ flex: 1, minWidth: '200px', '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(0, 137, 123, 0.05)' } }}
              />
              <Stack direction="row" spacing={1}>
                <Button size="small" variant={filterStatus === 'all' ? 'contained' : 'outlined'} onClick={() => setFilterStatus('all')} sx={{ fontSize: '0.75rem' }}>
                  All
                </Button>
                <Button size="small" variant={filterStatus === 'pending' ? 'contained' : 'outlined'} onClick={() => setFilterStatus('pending')} sx={{ fontSize: '0.75rem' }}>
                  Pending
                </Button>
                <Button size="small" variant={filterStatus === 'shipped' ? 'contained' : 'outlined'} onClick={() => setFilterStatus('shipped')} sx={{ fontSize: '0.75rem' }}>
                  Shipped
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <CardHeader
            title="Purchase Orders"
            action={
              <Stack direction="row" spacing={1}>
                <Button size="small" startIcon={<Download size={16} />} sx={{ fontSize: '0.75rem' }}>
                  Export
                </Button>
                <Button size="small" variant="contained" startIcon={<Plus size={16} />} sx={{ fontSize: '0.75rem' }}>
                  New PO
                </Button>
              </Stack>
            }
            sx={{ pb: 1.5, pt: 2 }}
          />
          <Divider sx={{ my: 0 }} />
          <CardContent sx={{ p: 2, overflowX: 'auto' }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'rgba(0, 137, 123, 0.05)' }}>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>PO ID</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Supplier</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Category</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>Qty</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>Cost</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Delivery</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders.map((order) => {
                  const colors = statusColor(order.status);
                  return (
                    <TableRow key={order.id} sx={{ borderBottom: '1px solid #2C3E50', '&:last-child': { borderBottom: 'none' } }}>
                      <TableCell sx={{ fontSize: '0.875rem', fontWeight: 600, color: '#00897B' }}>{order.id}</TableCell>
                      <TableCell sx={{ fontSize: '0.875rem' }}>{order.supplier}</TableCell>
                      <TableCell sx={{ fontSize: '0.875rem' }}>{order.category}</TableCell>
                      <TableCell align="right" sx={{ fontSize: '0.875rem' }}>{order.quantity.toLocaleString()}</TableCell>
                      <TableCell align="right" sx={{ fontSize: '0.875rem' }}>₹{order.cost.toLocaleString()}</TableCell>
                      <TableCell sx={{ fontSize: '0.875rem' }}>{order.deliveryDate}</TableCell>
                      <TableCell>
                        <Chip
                          size="small"
                          label={order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          sx={{
                            backgroundColor: colors.bg,
                            color: colors.color,
                            fontSize: '0.7rem',
                            fontWeight: 600,
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PurchaseOrders;

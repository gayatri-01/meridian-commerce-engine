import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const KPICard: React.FC<{
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  percentage?: number;
  target?: string;
  subtext?: string;
  icon?: React.ReactNode;
}> = ({ label, value, trend, percentage, target, subtext, icon }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography color="textSecondary" variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.75rem' }}>
            {label}
          </Typography>
          {icon && <Box sx={{ color: 'primary.main' }}>{icon}</Box>}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {value}
          </Typography>
          {trend && percentage && (
            <Box sx={{ display: 'flex', alignItems: 'center', color: trend === 'up' ? '#00C851' : '#FF4444', fontSize: '0.875rem' }}>
              {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <Typography variant="caption" sx={{ ml: 0.5 }}>
                {Math.abs(percentage)}%
              </Typography>
            </Box>
          )}
        </Box>

        {(target || subtext) && (
          <Typography variant="caption" color="textSecondary">
            {target || subtext}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

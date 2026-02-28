import React from 'react';
import { Box, Chip } from '@mui/material';

export const ConfidenceBadge: React.FC<{ confidence: number }> = ({ confidence }) => {
  const color = confidence > 85 ? 'success' : confidence > 70 ? 'warning' : 'error';
  return <Chip label={`${confidence}%`} color={color as any} size="small" />;
};

export const RiskLevel: React.FC<{ level: 'high' | 'medium' | 'low' }> = ({ level }) => {
  const colors = { high: 'error', medium: 'warning', low: 'success' };
  return <Chip label={level.toUpperCase()} color={colors[level] as any} size="small" />;
};

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const colors: Record<string, 'success' | 'warning' | 'error' | 'default'> = {
    confirmed: 'success',
    pending: 'warning',
    cancelled: 'error',
  };
  return <Chip label={status} color={colors[status.toLowerCase()] || 'default'} size="small" />;
};

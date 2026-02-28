import React from 'react';
import { Box, Typography, Alert as MuiAlert } from '@mui/material';
import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

const severityIcons = {
  high: <AlertTriangle size={20} />,
  medium: <AlertCircle size={20} />,
  low: <CheckCircle size={20} />,
  info: <Info size={20} />,
};

const severityColors: Record<string, any> = {
  high: '#FF4444',
  medium: '#FFBB33',
  low: '#00C851',
  info: '#00897B',
};

export const Alert: React.FC<{
  severity: 'high' | 'medium' | 'low' | 'info';
  title: string;
  description: string;
}> = ({ severity, title, description }) => {
  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid #3F4857',
        borderLeft: `4px solid ${severityColors[severity]}`,
        backgroundColor: '#1A1F2E',
        borderRadius: '4px',
        display: 'flex',
        gap: 2,
      }}
    >
      <Box sx={{ color: severityColors[severity], mt: 0.5 }}>{severityIcons[severity as keyof typeof severityIcons]}</Box>
      <Box>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

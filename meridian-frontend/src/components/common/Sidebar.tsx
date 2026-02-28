import React from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  BarChart3,
  MessageCircle,
  TrendingUp,
  ShoppingCart,
  FileText,
  Settings,
  Activity,
  Package,
  Zap,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', path: '/', icon: BarChart3 },
  { label: 'Chat', path: '/chat', icon: MessageCircle },
  { label: 'Forecasts', path: '/forecasts', icon: TrendingUp },
  { label: 'Recommendations', path: '/recommendations', icon: Zap },
  { label: 'Purchase Orders', path: '/purchase-orders', icon: ShoppingCart },
  { label: 'Trends', path: '/trends', icon: TrendingUp },
  { label: 'Documents', path: '/documents', icon: FileText },
  { label: 'Analytics', path: '/analytics', icon: Activity },
  { label: 'Configuration', path: '/configuration', icon: Settings },
];

interface SidebarProps {
  onLinkClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLinkClick }) => {
  const location = useLocation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const sidebarContent = (
    <List sx={{ padding: 0.75, paddingTop: 0.5, width: isLargeScreen ? 250 : '100%' }}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <ListItemButton
            key={item.path}
            component={RouterLink}
            to={item.path}
            onClick={onLinkClick}
            selected={isActive}
            sx={{
              borderRadius: '8px',
              marginBottom: 0.5,
              padding: '8px 12px',
              backgroundColor: isActive ? 'rgba(0, 137, 123, 0.15)' : 'transparent',
              borderLeft: isActive ? '3px solid #00897B' : 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 137, 123, 0.1)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(0, 137, 123, 0.15)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 137, 123, 0.2)',
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: isActive ? '#00897B' : '#B0B5BD',
              }}
            >
              <Icon size={18} />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiTypography-root': {
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#00897B' : 'inherit',
                },
              }}
            />
          </ListItemButton>
        );
      })}
    </List>
  );

  if (!isLargeScreen) {
    return sidebarContent;
  }

  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#1A1F2E',
        borderRight: '1px solid #3F4857',
        overflowY: 'auto',
        position: 'fixed',
        height: 'calc(100vh - 60px)',
        marginTop: '60px',
      }}
    >
      {sidebarContent}
    </Box>
  );
};

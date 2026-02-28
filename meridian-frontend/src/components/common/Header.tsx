import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Stack,
} from '@mui/material';
import { Menu as MenuIcon, Bell, Settings } from 'lucide-react';
import { getStoreInfo } from '../../mockData';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const storeInfo = getStoreInfo();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#1A1F2E',
        borderBottom: '1px solid #2C3E50',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ py: 0.75, px: 2.5, minHeight: '60px' }}>
        <IconButton
          color="inherit"
          onClick={onMenuClick}
          sx={{
            display: { xs: 'flex', md: 'flex', lg: 'none' },
            marginRight: 2,
            alignItems: 'center',
            justifyContent: 'center',
            color: '#B0B5BD',
            '&:hover': { backgroundColor: 'rgba(0, 137, 123, 0.1)' },
          }}
        >
          <MenuIcon size={20} />
        </IconButton>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 700, color: '#00897B', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
            Meridian Commerce Engine
          </Typography>
          <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#B0B5BD', lineHeight: 1 }}>
            {storeInfo.storeName}
          </Typography>
        </Box>

        <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
          <IconButton
            size="small"
            color="inherit"
            sx={{ p: 0.75, '&:hover': { backgroundColor: 'rgba(0, 137, 123, 0.1)' } }}
          >
            <Bell size={18} />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            sx={{ p: 0.75, '&:hover': { backgroundColor: 'rgba(0, 137, 123, 0.1)' } }}
          >
            <Settings size={18} />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              paddingLeft: 1.5,
              marginLeft: 1,
              borderLeft: '1px solid #2C3E50',
            }}
          >
            <Box sx={{ textAlign: 'right' }}>
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, lineHeight: 1.1 }}>
                {storeInfo.manager}
              </Typography>
              <Typography sx={{ fontSize: '0.65rem', color: '#B0B5BD', lineHeight: 1.1 }}>
                Manager
              </Typography>
            </Box>
            <Avatar sx={{ width: 32, height: 32, backgroundColor: '#00897B', fontWeight: 700, fontSize: '0.85rem' }}>
              {storeInfo.manager.charAt(0) + storeInfo.manager.charAt(storeInfo.manager.lastIndexOf(' ') + 1)}
            </Avatar>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

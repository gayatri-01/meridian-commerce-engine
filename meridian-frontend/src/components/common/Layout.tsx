import React, { useState } from 'react';
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0F1419' }}>
      <Header onMenuClick={handleDrawerToggle} />

      {!isLargeScreen ? (
        <Drawer
          anchor="left"
          open={sidebarOpen}
          onClose={handleDrawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              width: 250,
              marginTop: '60px',
              height: 'calc(100vh - 60px)',
              backgroundColor: '#0F1419',
            },
          }}
        >
          <Sidebar onLinkClick={handleDrawerToggle} />
        </Drawer>
      ) : (
        <Box
          sx={{
            width: 250,
            marginTop: '60px',
            height: 'calc(100vh - 60px)',
            overflowY: 'auto',
            backgroundColor: '#0F1419',
            borderRight: '1px solid #2C3E50',
          }}
        >
          <Sidebar />
        </Box>
      )}

      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginTop: '60px',
          overflow: 'auto',
          backgroundColor: '#0F1419',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

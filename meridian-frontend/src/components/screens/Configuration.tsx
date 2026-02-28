import React, { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Stack,
  TextField,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
  Tabs,
  Tab,
  Grid,
} from '@mui/material';
import { Save, Settings, Zap, Database } from 'lucide-react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const Configuration: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [config, setConfig] = useState({
    storeName: 'Main Store - Delhi',
    storeCode: 'STORE-001',
    email: 'store@example.com',
    forecastDays: '30',
    refreshInterval: '6',
    enableNotifications: true,
    enableAutoRecommendations: true,
    enableEmailAlerts: true,
    enableSlackIntegration: false,
    enableDataExport: true,
  });

  const handleConfigChange = (key: string, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, letterSpacing: '-0.5px' }}>
            Configuration
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
            Store settings, integrations, and system configuration.
          </Typography>
        </Box>

        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <Box sx={{ borderBottom: 1, borderColor: '#2C3E50' }}>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{ pl: 2, '& .MuiTab-root': { fontSize: '0.875rem', textTransform: 'none', fontWeight: 500 } }}>
              <Tab label="Store Settings" icon={<Settings size={16} />} iconPosition="start" />
              <Tab label="Forecast Settings" icon={<Zap size={16} />} iconPosition="start" />
              <Tab label="Notifications" icon={<Zap size={16} />} iconPosition="start" />
              <Tab label="Integrations" icon={<Database size={16} />} iconPosition="start" />
            </Tabs>
          </Box>

          {/* Store Settings Tab */}
          <TabPanel value={tabValue} index={0}>
            <CardContent sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                    Store Name
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    value={config.storeName}
                    onChange={(e) => handleConfigChange('storeName', e.target.value)}
                    sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(0, 137, 123, 0.05)' } }}
                  />
                </Grid>

                <Grid xs={12} sm={6}>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                    Store Code
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    value={config.storeCode}
                    onChange={(e) => handleConfigChange('storeCode', e.target.value)}
                    sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(0, 137, 123, 0.05)' } }}
                  />
                </Grid>

                <Grid xs={12} sm={6}>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    type="email"
                    value={config.email}
                    onChange={(e) => handleConfigChange('email', e.target.value)}
                    sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(0, 137, 123, 0.05)' } }}
                  />
                </Grid>

                <Grid xs={12} sm={6}>
                  <Button variant="contained" startIcon={<Save size={18} />} sx={{ mt: 2 }}>
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </TabPanel>

          {/* Forecast Settings Tab */}
          <TabPanel value={tabValue} index={1}>
            <CardContent sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                    Default Forecast Days
                  </Typography>
                  <Select
                    fullWidth
                    size="small"
                    value={config.forecastDays}
                    onChange={(e) => handleConfigChange('forecastDays', e.target.value)}
                    sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(0, 137, 123, 0.05)' } }}
                  >
                    <MenuItem value="7">7 Days</MenuItem>
                    <MenuItem value="14">14 Days</MenuItem>
                    <MenuItem value="30">30 Days</MenuItem>
                    <MenuItem value="60">60 Days</MenuItem>
                    <MenuItem value="90">90 Days</MenuItem>
                  </Select>
                </Grid>

                <Grid xs={12} sm={6}>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                    Model Refresh Interval (Hours)
                  </Typography>
                  <Select
                    fullWidth
                    size="small"
                    value={config.refreshInterval}
                    onChange={(e) => handleConfigChange('refreshInterval', e.target.value)}
                    sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(0, 137, 123, 0.05)' } }}
                  >
                    <MenuItem value="1">1 Hour</MenuItem>
                    <MenuItem value="3">3 Hours</MenuItem>
                    <MenuItem value="6">6 Hours</MenuItem>
                    <MenuItem value="12">12 Hours</MenuItem>
                    <MenuItem value="24">24 Hours</MenuItem>
                  </Select>
                </Grid>

                <Grid xs={12}>
                  <Button variant="contained" startIcon={<Save size={18} />} sx={{ mt: 2 }}>
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </TabPanel>

          {/* Notifications Tab */}
          <TabPanel value={tabValue} index={2}>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2.5}>
                <FormControlLabel
                  control={<Switch checked={config.enableNotifications} onChange={(e) => handleConfigChange('enableNotifications', e.target.checked)} />}
                  label={
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>Enable Notifications</Typography>
                      <Typography variant="caption" color="textSecondary">
                        Receive in-app notifications for recommendations and alerts
                      </Typography>
                    </Box>
                  }
                />

                <FormControlLabel
                  control={<Switch checked={config.enableEmailAlerts} onChange={(e) => handleConfigChange('enableEmailAlerts', e.target.checked)} />}
                  label={
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>Email Alerts</Typography>
                      <Typography variant="caption" color="textSecondary">
                        Send critical alerts via email
                      </Typography>
                    </Box>
                  }
                />

                <FormControlLabel
                  control={<Switch checked={config.enableAutoRecommendations} onChange={(e) => handleConfigChange('enableAutoRecommendations', e.target.checked)} />}
                  label={
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>Auto Recommendations</Typography>
                      <Typography variant="caption" color="textSecondary">
                        Automatically generate and notify recommendations
                      </Typography>
                    </Box>
                  }
                />

                <Button variant="contained" startIcon={<Save size={18} />} sx={{ mt: 2, alignSelf: 'flex-start' }}>
                  Save Preferences
                </Button>
              </Stack>
            </CardContent>
          </TabPanel>

          {/* Integrations Tab */}
          <TabPanel value={tabValue} index={3}>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Card sx={{ backgroundColor: 'rgba(0, 137, 123, 0.05)', border: '1px solid #2C3E50' }}>
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                        Slack Integration
                      </Typography>
                      <Switch checked={config.enableSlackIntegration} onChange={(e) => handleConfigChange('enableSlackIntegration', e.target.checked)} />
                    </Box>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      Send notifications and reports directly to Slack
                    </Typography>
                    {config.enableSlackIntegration && (
                      <TextField fullWidth size="small" placeholder="Slack Webhook URL" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(0, 137, 123, 0.05)' } }} />
                    )}
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: 'rgba(0, 137, 123, 0.05)', border: '1px solid #2C3E50' }}>
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                        Data Export
                      </Typography>
                      <Switch checked={config.enableDataExport} onChange={(e) => handleConfigChange('enableDataExport', e.target.checked)} />
                    </Box>
                    <Typography variant="body2" color="textSecondary">
                      Allow exporting forecasts and recommendations as CSV
                    </Typography>
                  </CardContent>
                </Card>

                <Button variant="contained" startIcon={<Save size={18} />}>
                  Save Integrations
                </Button>
              </Stack>
            </CardContent>
          </TabPanel>
        </Card>
      </Container>
    </Box>
  );
};

export default Configuration;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import { Layout } from './components/common';
import {
  Dashboard,
  ChatInterface,
  Forecasts,
  Recommendations,
  PurchaseOrders,
  TrendAnalysis,
  DocumentProcessing,
  Analytics,
  Configuration,
} from './components/screens';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<ChatInterface />} />
            <Route path="/forecasts" element={<Forecasts />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/purchase-orders" element={<PurchaseOrders />} />
            <Route path="/trends" element={<TrendAnalysis />} />
            <Route path="/documents" element={<DocumentProcessing />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/configuration" element={<Configuration />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

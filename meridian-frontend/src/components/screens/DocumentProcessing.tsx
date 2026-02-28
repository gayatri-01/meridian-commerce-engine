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
  Stack,
  Button,
  LinearProgress,
  Paper,
} from '@mui/material';
import { Upload, FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface Document {
  id: string;
  filename: string;
  type: string;
  uploadDate: string;
  status: 'processing' | 'completed' | 'error' | 'pending';
  progress: number;
  extractedData: number;
}

const DocumentProcessing: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 'DOC-001',
      filename: 'Invoice_ABC_02282025.pdf',
      type: 'Invoice',
      uploadDate: '2025-02-28 10:30',
      status: 'completed',
      progress: 100,
      extractedData: 12,
    },
    {
      id: 'DOC-002',
      filename: 'PO_Tech_Global_002.pdf',
      type: 'Purchase Order',
      uploadDate: '2025-02-28 09:15',
      status: 'completed',
      progress: 100,
      extractedData: 8,
    },
    {
      id: 'DOC-003',
      filename: 'Invoice_Fashion_CO_0228.pdf',
      type: 'Invoice',
      uploadDate: '2025-02-28 08:45',
      status: 'processing',
      progress: 65,
      extractedData: 0,
    },
    {
      id: 'DOC-004',
      filename: 'Shipping_manifest_FEB.pdf',
      type: 'Manifest',
      uploadDate: '2025-02-27 16:20',
      status: 'completed',
      progress: 100,
      extractedData: 45,
    },
    {
      id: 'DOC-005',
      filename: 'Contract_New_Supplier.pdf',
      type: 'Contract',
      uploadDate: '2025-02-27 14:10',
      status: 'error',
      progress: 0,
      extractedData: 0,
    },
    {
      id: 'DOC-006',
      filename: 'Payment_Slip_FEB_2025.pdf',
      type: 'Payment',
      uploadDate: '2025-02-27 11:00',
      status: 'pending',
      progress: 0,
      extractedData: 0,
    },
  ]);

  const statusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return { icon: <CheckCircle size={16} />, color: '#4CAF50', bg: 'rgba(76, 175, 80, 0.2)', text: 'Completed' };
      case 'processing':
        return { icon: <Clock size={16} />, color: '#2196F3', bg: 'rgba(33, 150, 243, 0.2)', text: 'Processing' };
      case 'error':
        return { icon: <AlertCircle size={16} />, color: '#F44336', bg: 'rgba(244, 67, 54, 0.2)', text: 'Error' };
      default:
        return { icon: <FileText size={16} />, color: '#FF9800', bg: 'rgba(255, 152, 0, 0.2)', text: 'Pending' };
    }
  };

  const totalDocuments = documents.length;
  const processedCount = documents.filter((d) => d.status === 'completed').length;
  const totalExtracted = documents.reduce((sum, d) => sum + d.extractedData, 0);

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, letterSpacing: '-0.5px' }}>
            Document Processing
          </Typography>
          <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
            Invoice processing, data extraction, and document validation using AI.
          </Typography>
        </Box>

        {/* Summary Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2, mb: 4 }}>
          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                Total Documents
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                {totalDocuments}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                Processed
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', color: '#4CAF50' }}>
                {processedCount}/{totalDocuments}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                Data Extracted
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                {totalExtracted} items
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', fontWeight: 600, color: '#B0B5BD', display: 'block', mb: 1 }}>
                Success Rate
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', color: '#00897B' }}>
                {Math.round((processedCount / totalDocuments) * 100)}%
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Upload Area */}
        <Paper
          sx={{
            p: 4,
            textAlign: 'center',
            backgroundColor: 'rgba(0, 137, 123, 0.05)',
            border: '2px dashed #00897B',
            borderRadius: '8px',
            cursor: 'pointer',
            mb: 4,
            '&:hover': { backgroundColor: 'rgba(0, 137, 123, 0.1)' },
          }}
        >
          <Upload size={32} style={{ color: '#00897B', marginBottom: '12px' }} />
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Upload Documents
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Drag and drop or click to upload invoices, POs, and contracts
          </Typography>
          <Button variant="contained" sx={{ fontSize: '0.875rem' }}>
            Select Files
          </Button>
        </Paper>

        {/* Documents Table */}
        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <CardHeader title="Processing Queue" sx={{ pb: 1.5, pt: 2 }} />
          <Divider sx={{ my: 0 }} />
          <CardContent sx={{ p: 2, overflowX: 'auto' }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'rgba(0, 137, 123, 0.05)' }}>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Filename</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Upload Date</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Progress</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#00897B' }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#00897B' }}>Data Items</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documents.map((doc) => {
                  const config = statusConfig(doc.status);
                  return (
                    <TableRow key={doc.id} sx={{ borderBottom: '1px solid #2C3E50', '&:last-child': { borderBottom: 'none' } }}>
                      <TableCell sx={{ fontSize: '0.875rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <FileText size={16} style={{ color: '#FF6B35' }} />
                          {doc.filename}
                        </Box>
                      </TableCell>
                      <TableCell sx={{ fontSize: '0.875rem' }}>{doc.type}</TableCell>
                      <TableCell sx={{ fontSize: '0.875rem' }}>{doc.uploadDate}</TableCell>
                      <TableCell sx={{ fontSize: '0.875rem' }}>
                        {doc.status === 'processing' ? (
                          <Box sx={{ minWidth: '100px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                              <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                                {doc.progress}%
                              </Typography>
                            </Box>
                            <LinearProgress variant="determinate" value={doc.progress} sx={{ height: '4px', backgroundColor: 'rgba(0, 137, 123, 0.1)', '& .MuiLinearProgress-bar': { backgroundColor: '#00897B' } }} />
                          </Box>
                        ) : (
                          <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#B0B5BD' }}>
                            -
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        <Chip
                          icon={config.icon}
                          size="small"
                          label={config.text}
                          sx={{
                            backgroundColor: config.bg,
                            color: config.color,
                            fontSize: '0.7rem',
                            fontWeight: 600,
                          }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
                        {doc.extractedData > 0 ? doc.extractedData : '-'}
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

export default DocumentProcessing;

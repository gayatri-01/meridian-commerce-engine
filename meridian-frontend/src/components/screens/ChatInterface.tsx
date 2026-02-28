import React, { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  Paper,
} from '@mui/material';
import { Send } from 'lucide-react';
import { getChatMessages, getSuggestedQueries } from '../../mockData';

const ChatInterface: React.FC = () => {
  const initialMessages = getChatMessages();
  const suggestedQueries = getSuggestedQueries();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: `msg-${messages.length + 1}`,
      type: 'user' as const,
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInput('');

    setTimeout(() => {
      const assistantMessage = {
        id: `msg-${messages.length + 2}`,
        type: 'assistant' as const,
        content: 'I understand your query. Let me generate the insights for you...',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <Box sx={{ backgroundColor: '#0F1419', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 140px)' }}>
        <Stack spacing={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5, letterSpacing: '-0.5px' }}>
              Virtual Category Manager
            </Typography>
            <Typography color="textSecondary" variant="body2" sx={{ lineHeight: 1.6 }}>
              Ask me anything about your inventory, forecasts, trends, or procurement.
            </Typography>
          </Box>

          {/* Messages Area */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              pb: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {messages.length === 0 ? (
              <Stack sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} spacing={4}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Hello! I'm your AI Assistant
                  </Typography>
                  <Typography color="textSecondary">
                    Ask me about your store's inventory, demand forecasts, trends, and recommendations.
                  </Typography>
                </Box>
                <Stack spacing={1} sx={{ maxWidth: '400px' }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'uppercase', color: 'textSecondary' }}>
                    Suggested Queries
                  </Typography>
                  {suggestedQueries.slice(0, 4).map((query, idx) => (
                    <Button
                      key={idx}
                      variant="text"
                      onClick={() => setInput(query)}
                      sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
                    >
                      {query}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            ) : (
              messages.map((message) => (
                <Box key={message.id} sx={{ display: 'flex', justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start', gap: 1 }}>
                  <Paper
                    sx={{
                      maxWidth: '60%',
                      p: 2,
                      backgroundColor: message.type === 'user' ? 'primary.main' : '#2C3E50',
                      color: message.type === 'user' ? 'white' : 'text.primary',
                    }}
                  >
                    <Typography variant="body2">{message.content}</Typography>
                  </Paper>
                </Box>
              ))
            )}
          </Box>

          {/* Input Area */}
          <Stack spacing={3} sx={{ pt: 3, borderTop: '1px solid #2C3E50' }}>
            <Stack direction="row" spacing={1}>
              <TextField
                fullWidth
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                size="small"
              />
              <Button variant="contained" onClick={handleSendMessage} disabled={!input.trim()}>
                <Send size={18} />
              </Button>
            </Stack>
            <Typography variant="caption" sx={{ textAlign: 'center', color: 'textSecondary' }}>
              Powered by AI • Your data is secure and private
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ChatInterface;

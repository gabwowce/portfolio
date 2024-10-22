import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, Drawer, AppBar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      // Simuliuojame bot'o atsakymą
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Bot: Thanks for your message!', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <Box>
      {/* Plūduriuojantis mygtukas */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        <ChatIcon />
      </IconButton>

      {/* Pokalbių langas */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            Chat Bot
          </Typography>
          <IconButton onClick={() => setOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </AppBar>
        <Box sx={{ padding: 2, height: '400px', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <Typography key={index} variant="body1" sx={{ marginBottom: '8px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
              {msg.text}
            </Typography>
          ))}
        </Box>
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ marginLeft: 2 }}>
            Send
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ChatBot;

import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, IconButton, Drawer, AppBar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import data from '../data.json';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [context, setContext] = useState(data.context); // Naudok JSON failo kontekstą

  const apiToken = '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'; // Pakeisk savo API raktu
  const model = 'distilbert-base-uncased-distilled-squad'; // Klausimų-atsakymų modelis

  const handleAsk = async () => {
    try {
      console.log('Klausimas:', question); // Debugging
      console.log('Kontekstas:', context); // Debugging
  
      const response = await axios.post(`https://api-inference.huggingface.co/models/${model}`, {
        inputs: {
          question: question,
          context: context
        }
      }, {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.data.answer) {
        setAnswer(response.data.answer);
        setMessages((prevMessages) => [...prevMessages, { text: response.data.answer, sender: 'bot' }]);
      } else {
        setMessages((prevMessages) => [...prevMessages, { text: 'Bot: Sorry, I could not find an answer.', sender: 'bot' }]);
      }
      
  
      console.log('Atsakymas:', response.data); // Debugging
      setAnswer(response.data.answer);
      setMessages((prevMessages) => [...prevMessages, { text: response.data.answer, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching data:', error);
      setAnswer('Sorry, there was an error.');
    }
  };
  

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setQuestion(message); // Priskirk žinutę kaip klausimą
      setMessage('');
      setTimeout(() => {
        handleAsk(); // Skambink `handleAsk`, kad gautum atsakymą
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

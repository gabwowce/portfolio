import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid2, useTheme } from '@mui/material';
import lightPhoneImage from '../assets/light-phone.png';
import darkPhoneImage from '../assets/dark-phone.png';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend)
    console.log('Form data:', formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '50px 20px',
          textAlign: 'center',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to contact me!
        </Typography>
        <Box
          component="img"
          src={theme.palette.mode === 'dark' ? darkPhoneImage : lightPhoneImage}
          alt="Phone"
          sx={{
            width: '300px',
            height: 'auto',
            marginTop: '20px',
            filter: 'drop-shadow(10px 4px 20px rgba(0, 0, 0, 1))',
          }}
        />
      </Box>

      {/* Contact Form Section */}
      <Container maxWidth="md" sx={{ marginTop: '50px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Send a Message
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={2}>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Send Message
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Container>
    </div>
  );
};

export default Contact;

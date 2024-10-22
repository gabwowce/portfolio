import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
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
    console.log('Form data:', formData);
  };

  return (
    <div>
      <StyledHeroSection>
        <Typography variant="h3" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to contact me!
        </Typography>
        <StyledImage
          src={theme.palette.mode === 'dark' ? darkPhoneImage : lightPhoneImage}
          alt="Phone"
        />
      </StyledHeroSection>

      <StyledContainer maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Send a Message
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <StyledGridItem item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </StyledGridItem>
            <StyledGridItem item xs={12}>
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
            </StyledGridItem>
            <StyledGridItem item xs={12}>
              <StyledButton variant="contained" color="primary" type="submit">
                Send Message
              </StyledButton>
            </StyledGridItem>
          </Grid>
        </StyledForm>
      </StyledContainer>
    </div>
  );
};

export default Contact;

const StyledHeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '50px 20px',
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '300px',
  height: 'auto',
  marginTop: '20px',
  filter: 'drop-shadow(10px 4px 20px rgba(0, 0, 0, 1))',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '50px',
}));

const StyledForm = styled('form')({
  width: '100%',
});

const StyledGridItem = styled(Grid)(({ theme }) => ({
  marginBottom: '1rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
}));

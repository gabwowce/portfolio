import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
} from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Importuojame Grid2
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next'; 
import lightPhoneImage from '../assets/light-phone.png';
import darkPhoneImage from '../assets/dark-phone.png';

const About = () => {
    const { t, i18n } = useTranslation(); 

  return (
    <>
    
    <HeroSection>
        <StyledBox>
            <Typography variant="h2" sx={{ fontFamily: 'Hind, sans-serif' }}>
            {t('aboutPage.name')}
            </Typography>
            <Typography variant="body1">
            {t('aboutPage.jobTitle')}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
            {t('aboutPage.description')}
            </Typography>
        </StyledBox>
        
        <Box
    component="img"
    src={darkPhoneImage}
    alt="Phone"
    sx={{
        width: '300px', // Adjust as needed
        height: 'auto',
        marginLeft: '20px', // Space between text and image
        
        filter: 'drop-shadows(10px 4px 20px rgba(0, 0, 0, 1))', // Add initial shadow
        
    }}
/>

    </HeroSection>


 
      <Section>
        <Typography variant="h4" gutterBottom align="center">
          Our Services
        </Typography>
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h5">Service 1</Typography>
              <Typography>
                Brief description of service 1 offered.
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h5">Service 2</Typography>
              <Typography>
                Brief description of service 2 offered.
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h5">Service 3</Typography>
              <Typography>
                Brief description of service 3 offered.
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Section>


      <Section>
        <Typography variant="h4" gutterBottom align="center">
          What Our Clients Say
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 item xs={12} sm={6} md={4}>
            <TestimonialCard>
              <Typography variant="body1">
                "This company provided excellent service!"
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                - Client Name
              </Typography>
            </TestimonialCard>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <TestimonialCard>
              <Typography variant="body1">
                "Highly recommend their services!"
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                - Client Name
              </Typography>
            </TestimonialCard>
          </Grid2>
        </Grid2>
      </Section>


      <Section>
        <Typography variant="h4" gutterBottom align="center">
          Get In Touch
        </Typography>
        <Typography align="center">
          Feel free to reach out to us for any inquiries or collaboration!
        </Typography>
        <Box textAlign="center" marginTop={2}>
          <Button variant="contained" color="primary">
            Contact Us
          </Button>
        </Box>
      </Section>
    </>
  );
};

export default About;


const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2), 
    color: theme.palette.text.primary, 
    maxWidth: '750px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start'
  }));

const HeroSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }));
  
  const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4, 0),
  }));
  
  const TestimonialCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
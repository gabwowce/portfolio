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
import { ThemeContext } from '../context/ThemeContext'; 
import lightPhoneImage from '../assets/light-phone.png';
import darkPhoneImage from '../assets/dark-phone.png';

const About = () => {
    const { t, i18n } = useTranslation();
    const { themeMode } = useContext(ThemeContext); 

  return (
    <>
    
    <HeroSection>
        <StyledBox>
            <Typography variant="h2" sx={{ fontFamily: 'Six Caps', 'sans-serif' }}>
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
          src={themeMode == 'dark' ? darkPhoneImage : lightPhoneImage}
          alt="Phone"
          sx={{
            width: '300px', 
            height: 'auto',
            marginLeft: '20px', 
            
            filter: 'drop-shadows(10px 4px 20px rgba(0, 0, 0, 1))', 
        
          }}
        />
          <StyledButton variant="contained">
            Connect
          </StyledButton>

    </HeroSection>


 
     <section>
      <Typography variant="h4" gutterBottom align="center">
        {t('aboutPage.name')} - {t('aboutPage.jobTitle')}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {t('aboutPage.description')}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {t('aboutPage.workExperience.title')}
      </Typography>

      <Grid container spacing={4}>
        {Object.keys(t('aboutPage.workExperience.experiences')).map((key) => {
          const experience = t(`aboutPage.workExperience.experiences.${key}`);
          return (
            <Grid item xs={12} sm={6} md={4} key={experience.tittle}>
              <Paper elevation={3} style={{ padding: 20 }}>
                <Typography variant="h6">{experience.tittle}</Typography>
                <Typography variant="body2">{experience.company}</Typography>
                <Typography variant="body2">
                  {experience.startDate} - {experience.endDate || 'Present'}
                </Typography>
                <Typography variant="body2">{experience.employmentType}</Typography>
                <ul>
                  {Object.keys(experience.description).map((descKey) => (
                    <li key={descKey}>{experience.description[descKey]}</li>
                  ))}
                </ul>
                <Typography variant="body2">
                  <strong>Skills:</strong>
                </Typography>
                <ul>
                  {Object.keys(experience.skills).map((skillKey) => (
                    <li key={skillKey}>{experience.skills[skillKey]}</li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </section>


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


const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#0a66c2',  
    color: 'white',
    textTransform: 'none',  
    fontWeight: 'bold',
    borderRadius: '20px',  
    padding: '6px 16px', 
    '&:hover': {
      backgroundColor: '#084a8c',  
    },
  }));

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

import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper
} from '@mui/material';
import Grid2 from '@mui/material/Grid2'; 
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next'; 
import { ThemeContext } from '../context/ThemeContext'; 
import lightPhoneImage from '../assets/light-phone.png';
import darkPhoneImage from '../assets/dark-phone.png';
import { ReactComponent as AddUserIcon } from '../assets/add-user.svg';
import Timeline from '../components/Timeline';
import ToolCarousel from '../components/ToolCarousel';
import LanguageSkills from '../components/LanguageSkills';

const About = () => {
    const { t } = useTranslation();
    const { themeMode } = useContext(ThemeContext); 
    const theme = useTheme();
  
    return (
      <BackgroundSection>

        <HeroSection>
          <StyledContainer className='custom-container'>
                <StyledBox>
                  <NameTypography variant="h2">
                    {t('aboutPage.name')}
                  </NameTypography>
                  <SecondTypography variant="body1">
                    {t('aboutPage.jobTitle')}
                  </SecondTypography>
                  <ThirdTypography variant="body2">
                    {t('aboutPage.description')}
                  </ThirdTypography>
                </StyledBox>

                <BoxForPic>
                  <ImageBox component="img" src={themeMode === 'dark' ? darkPhoneImage : lightPhoneImage} alt="Phone"/>
                  <StyledButton href="https://www.linkedin.com/in/gabrielė-tamaševičiūtė-06712526b" target="_blank" rel="noopener noreferrer">
                    <AddUserIcon /> Connect
                  </StyledButton>
                </BoxForPic>
          </StyledContainer>
        </HeroSection>

        <ToolCarousel/>

        <Container className='custom-container'>
            <Timeline/>
        </Container>
        
        <StyledBackgroundBox>
          <Container className='custom-container'>
            <LanguageSkills/>
          </Container>
        </StyledBackgroundBox>
        
        

      </BackgroundSection>

    );
};

export default About;


const StyledBackgroundBox = styled(Box)(({ theme }) => ({
  width:'100%',
  background: theme.palette.background.paper,
  padding: '2rem 0 2rem 0',

}));

const SecondTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  color: theme.palette.text.primary,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '60%',
  margin: '1rem 0',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: '24px',
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center', // Aligns content vertically center

}));


const ImageBox = styled(Box)(({ theme }) => ({
  maxWidth: '300px',
  height: 'auto',
  filter: theme.palette.mode === 'dark' ? 'drop-shadow(5px 0px 25px rgba(255, 255, 255, 0.2))' : 'drop-shadow(10px 4px 15px rgba(0, 0, 0, 1))',
  padding: theme.spacing(3),
  boxSizing: 'content-box',
  [theme.breakpoints.down('md')]: {
    maxWidth: '200px',
  },
 
}));                

const BoxForPic = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 'auto',
  justifyItems: 'center',
}));                

const ThirdTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  color: theme.palette.text.third,
  marginTop: '1rem'
}));

const NameTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Noto Sans, sans-serif', 
  fontWeight: '500',
  textAlign:'left',
  color: theme.palette.text.primary,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '3rem 0',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));



const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  left: '71px',
  top: '291px',
  backgroundColor: theme.palette.mode === 'dark' ? '#71b6f9' : '#0b66c1',
  color: theme.palette.mode === 'dark' ? '#0f121b' : '#fbfbff',
  textTransform: 'none',
  borderRadius: '20px',
  padding: '1px 25px',
  fontSize: '0.7rem !important',
  animation: 'pulse 1.5s infinite',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#A2CBF3' : '#367CC1',
  },
  svg: {
    marginRight: '8px',
    width: '12px',
    height: '12px',
    fill: theme.palette.mode === 'dark' ? '#0f121b' : '#fbfbff'
  },

  [theme.breakpoints.down('lg')]: {
    left: '44px',
    top: '290px',
  },
  [theme.breakpoints.down('md')]: {
    left: '41px',
    top: '202px',
    padding: '1px 18px',
    fontSize: '0.4rem !important',                      //gt Reikia tvarkyti ant maziausio ekrano daryti pc foto
    svg: {
      marginRight: '4px',
      width: '6px',
      height: '6px',
    },
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '750px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start'
}));

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: theme.palette.mode === 'dark' ? '0 4px 6px -2px rgba(0, 0, 0, 0.5)' : '0 4px 6px -2px rgba(0, 0, 0, 0.2)',  //gt Reikia tvarkyti
  // marginBottom: '5rem',
}));

// const Section = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(4, 0),
// }));

// const TestimonialCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const BackgroundSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#393736' : '#FDFDFB',
  width: '100%',
})); 
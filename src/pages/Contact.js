import React, { useState, useContext, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, IconButton} from '@mui/material';
import { slideInRightAnimation, slideInLeftAnimation, fadeInAnimation, slideDownAnimation} from '../styles/animations';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SecondTypography} from '../pages/About';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 
import { useTranslation } from 'react-i18next';
import CanvasComponent from '../components/CanvasComponent';
import CanvasComponentLight from '../components/CanvasComponentLight ';
import { useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useVisibility } from '../context/VisibilityContext';
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { themeMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const form = useRef();

  const { visibleElements } = useVisibility();
    const [animate, setAnimate] = useState(false);
   
    useEffect(() => {
      const isVisible = visibleElements.has("contact");
      isVisible && setAnimate(true);
    }, [visibleElements]);

  const layersConfig = isSmall
  ? [
      { speed: 0.135, scale: 0.2, count: 320 },
      { speed: 0.1, scale: 0.5, count: 10 },
      { speed: 0.2, scale: 0.75, count: 5 },
    ]
  : [
      { speed: 0.135, scale: 0.2, count: 520 },
      { speed: 0.1, scale: 0.5, count: 100 },
      { speed: 0.2, scale: 0.75, count: 60 },
    ];

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i53imwz', 'template_2dvmfer', form.current, 'aEVQj6Z2hu78_SzTy')
        .then(() => {
          alert('Email sent successfully!');
          form.current.reset(); 
          setFormData({ name: '', email: '', message: '' }); 
        })
        .catch((error) => {
          console.error('Failed to send email', error);
        });
    };


  return (
    <StyledBackgroundBox2 id="contact" className="track-visibility" paddingTop='3rem' animate={animate}>
      <StyledContainerBox className='custom-container'>
        <StyledBox sx={{ flex: 1 }}>
            <NameTypography variant="h1" animate={animate}>
              {t('contact.title')}
            </NameTypography>
            <SecondTypography variant="h6" animate={animate}>
              {t('contact.subtitle')}
            </SecondTypography>
            <SocialMediaBox mt={4} animate={animate}>
              <StyledIconButton color="inherit" component="a" href="https://www.facebook.com/gabriele.tamaseviciute" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ fontSize: '4rem' }} />
              </StyledIconButton>
              <StyledIconButton color="inherit" component="a" href="https://www.linkedin.com/in/gabrielė-tamaševičiūtė-06712526b" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ fontSize: '4rem' }} />
              </StyledIconButton>
              <StyledIconButton color="inherit" component="a" href="https://github.com/gabwowce" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: '4rem' }} />
              </StyledIconButton>
            </SocialMediaBox>
          </StyledBox>

        <StyledBox2 sx={{ flex: 1 }}>
          <StyledContactBox animate={animate}>
            <NameTypography variant="h5" textAlign="left" mb={4}>
            {t('contact.message')}
            </NameTypography>
            <StyledForm ref={form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <StyledGridItem item xs={12} sm={12} lg={12}>
                  <StyledTextField
                    fullWidth
                    label={t('contact.name')}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </StyledGridItem>
                <StyledGridItem item xs={12} sm={12} lg={12}>
                  <StyledTextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </StyledGridItem>
                <StyledGridItem item xs={12} sm={12} lg={12}>
                  <StyledTextField
                    fullWidth
                    label={t('contact.mss')}
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </StyledGridItem>
                <StyledGridItem item xs={12} sm={12} lg={12}>
                 
                  <StyledButton
                      variant="outlined"
                      endIcon={<SendIcon />}
                      type="submit"
                  >{t('contact.sendMessage')}</StyledButton>
                </StyledGridItem>
              </Grid>
            </StyledForm>
          </StyledContactBox>
        </StyledBox2>
      </StyledContainerBox>

      {themeMode === 'dark' ? (
        <CanvasComponent layers={layersConfig} />
      ) : (
        <CanvasComponentLight cloudAnimation={true} birdAnimation={false} />
      )}
    </StyledBackgroundBox2>
  );
};

export default Contact;

export const NameTypography = styled(Typography)(({ theme, animate }) => ({
  fontFamily: 'Outfit, sans-serif', 
  fontWeight: '600',
  textAlign:'left',
  color: theme.palette.text.primary,
  animation:animate &&`${slideInLeftAnimation} 2.5s ease forwards`,
  [theme.breakpoints.down('lg')]: {
    textAlign:'center',
  },
}));

const SocialMediaBox = styled(Box)(({ theme, animate }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  position: 'relative', 
  zIndex: 10, 
  animation:animate &&`${slideInLeftAnimation} 2.5s ease forwards`,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main, 
    transform: 'scale(1.1)', 
    transition: 'transform 0.2s',
  },
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '10px',
  width: '50%',
  padding: '10px 20px',
  color: theme.palette.mode === 'dark' ? '#FEF9F2' : '#121212',

  border: `1px solid ${theme.palette.mode === 'dark' ? '#FEF9F2' : '#121212'}`,
  transition: 'background-color 0.3s, color 0.3s',

  '&:hover': {

    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
    borderColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
  },

  '&:active': {

    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
    borderColor: theme.palette.mode === 'dark' ? '#CCCCCC' : '#333333',
  },
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '750px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    padding:'3rem 0 0 0 ',
    alignItems: 'center',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',

    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#CCCCCC' : '#333333',
    },

    '&:hover fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#777777' : '#c0c0c0',
    },

    '&.Mui-focused fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#CCCCCC' : '#333333',
    },
  },
  '& input': {
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
  },
  '& textarea': {
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000', 
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.mode === 'dark' ? '#CCCCCC' : '#333333', 
  },

  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette.error.main, 
  },
}));


export const StyledContactBox = styled(Box)(({ theme, animate }) => ({
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  maxWidth:'700px',
  margin: '3rem 1rem',
  height:'auto',
  borderRadius:'24px',
  background:  theme.palette.mode === 'dark' ? 'rgb(18,18,18,0.8)' : 'rgb(255,255,255,0.8)',
  boxShadow: theme.palette.mode === 'dark' 
        ? '0 7px 6px -2px rgba(0, 0, 0, 0.5), 7px 0 6px -2px rgba(0, 0, 0, 0.5)' 
        : '0 7px 6px -2px rgba(0, 0, 0, 0.2), 7px 0 6px -2px rgba(0, 0, 0, 0.2)',
  backdropFilter:'blur(1px)',
  padding:'3rem 3rem',
  zIndex:'9999',
  animation:animate &&`${slideInRightAnimation} 2.5s ease forwards`,
}));


export const StyledBox2 = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height:'auto',
 
}));

export const StyledContainerBox = styled(Box)(({ theme }) => ({
  height: 'auto', 
  display: 'flex',
  flexDirection: 'row', 
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  position: 'relative',
  width: '100%', 
  zIndex:99,
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column', 
  },
}));

export const StyledBackgroundBox2 = styled(Box)(({ theme, animate }) => ({
  width: '100%',
  height:'auto',
  background: theme.palette.background.portfolio,
  padding: '5rem 0',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  flexWrap:'wrap',
  alignItems:'center',
  overflow:'hidden',
  position: 'relative',
  opacity: animate ? 1 : 0, 
  transition: 'opacity 1.5s ease',
}));


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



const StyledForm = styled('form')({
  width: '100%',
  padding:'0 0rem'
});

const StyledGridItem = styled(Grid)(({ theme }) => ({
  marginBottom: '1rem',
}));


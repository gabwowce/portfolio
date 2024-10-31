import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';
import { StyledBox, NameTypography, SecondTypography} from '../pages/About';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 
import { useTranslation } from 'react-i18next';
import CanvasComponent from '../components/CanvasComponent';
import CanvasComponentLight from '../components/CanvasComponentLight ';
const Contact = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { themeMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  useEffect(() => {
    const handleError = (event) => {
      if (event.message !== "ResizeObserver loop completed with undelivered notifications.") {
        console.error(event.message);
      }
    };
  
    window.addEventListener("error", handleError);
  
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <StyledBackgroundBox2 id="about-hero" className="track-visibility" paddingTop='3rem'>
      <StyledContainerBox className='custom-container'>
        <Box sx={{ flex: 1 }}>
          <StyledBox sx={{ flex: 1 }}>
            <NameTypography variant="h1">
              Let's chat. Tell me about your project
            </NameTypography>
            <SecondTypography variant="h6">
              Let's create something together 👋
            </SecondTypography>
          </StyledBox>
        </Box>

        <StyledContainer  sx={{ flex: 1 }}>

          <StyledContactBox>

          <Typography variant="h4" align="center" gutterBottom>
            Send me a message 🚀
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
                  
                />
              </StyledGridItem>
              <StyledGridItem item xs={12}>
                <StyledButton variant="contained" color="primary" type="submit">
                  Send Message
                </StyledButton>
              </StyledGridItem>
            </Grid>
          </StyledForm>
          </StyledContactBox>
         
        </StyledContainer>
      </StyledContainerBox>

      {themeMode === 'dark' ? (
        <CanvasComponent
          layers={[
            { speed: 0.135, scale: 0.2, count: 520 },
            { speed: 0.1, scale: 0.5, count: 100 },
            { speed: 0.2, scale: 0.75, count: 60 }
          ]}
        />
      ) : (
        <CanvasComponentLight cloudAnimation={true} birdAnimation={false} />
      )}
    </StyledBackgroundBox2>
  );
};

export default Contact;

export const StyledContactBox = styled(Box)(({ theme }) => ({
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth:'600px',
  margin: '3rem 0',
  height:'auto',
  borderRadius:'24px',
  background:  theme.palette.mode === 'dark' ? 'rgb(0,0,0,0.6)' : 'rgb(255,255,255,0.5)',
  backdropFilter:'blur(1px)',
  padding:'3rem 0',
  zIndex:'9999'
}));


export const StyledContainer = styled(Container)(({ theme }) => ({
  display:'flex',
  // flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // margin: '3rem 0',
  height:'auto',
  // borderRadius:'24px',
  // background:  theme.palette.mode === 'dark' ? 'rgb(0,0,0,0.6)' : 'rgb(255,255,255,0.5)',
  // backdropFilter:'blur(1px)',
  // padding:'3rem 0',
  // zIndex:'9999'
}));

export const StyledContainerBox = styled(Box)(({ theme }) => ({
  height: 'auto', // Keiskite į auto, kad užimtų tinkamą vietą
  display: 'flex',
  flexDirection: 'row', // Keiskite į column
  justifyContent: 'flex-start', // Pradėkite iš viršaus
  alignItems: 'center', // Centruokite elementus
  position: 'relative',
  width: '100%', // Užtikrinkite, kad užimtų visą plotį
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', 
  },
}));

export const StyledBackgroundBox2 = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.background.portfolio,
  padding: '5rem 0',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  flexWrap:'wrap',
  alignItems:'center',
  overflow:'hidden',
  position: 'relative'
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
  padding:'0 3rem'
});

const StyledGridItem = styled(Grid)(({ theme }) => ({
  marginBottom: '1rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
}));

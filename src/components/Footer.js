import React from 'react';
import { Box, Typography, Link, Grid, IconButton, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import starImage from '../assets/stars.png';




export default function Footer() {
  const { t } = useTranslation(); // Kalbų vertimų hooks

  return (
    <BackgroundBox >
      <StyledBox component="footer" >
        <StyledImage src={starImage} alt="Stars" />
        <StyledContainer>

        <PageLinksBox>
                  <PageLinksSectionBox>
                    <TitleTypography variant='h3' gutterBottom>
                      {t('footer.about')}
                    </TitleTypography>
                    <Link href="#about-hero" color="inherit" underline="none">
                      Hero section
                    </Link>
                    <Link href="#about-skills" color="inherit" underline="none">
                      My Skills
                    </Link>
                    <Link href="#about-history" color="inherit" underline="none">
                      My History
                    </Link>
                    <Link href="#about-language" color="inherit" underline="none">
                      Language Skills
                    </Link>
                  </PageLinksSectionBox>

                  <PageLinksSectionBox>
                    <TitleTypography variant='h3' gutterBottom>
                      Portfolio
                    </TitleTypography>
                    <Link href="#about-hero" color="inherit" underline="none">
                      Hero section
                    </Link>
                    <Link href="#about-skills" color="inherit" underline="none">
                      My Skills
                    </Link>
                    <Link href="#about-history" color="inherit" underline="none">
                      My History
                    </Link>
                    <Link href="#about-language" color="inherit" underline="none">
                      Language Skills
                    </Link>
                  </PageLinksSectionBox>
                  
                </PageLinksBox>



                <RightsAndIconsBox>
                  <Typography variant="body1">
                    &copy; {new Date().getFullYear()} {t('footer.copyright')}
                  </Typography>
                    
                  <SocialMediaBox>
                    <IconButton color="inherit" component="a" href="https://www.facebook.com/gabriele.tamaseviciute" target="_blank" rel="noopener noreferrer" >
                      <FacebookIcon sx={{ fontSize: '2rem' }}/>
                    </IconButton>
                    <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/gabrielė-tamaševičiūtė-06712526b" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon sx={{ fontSize: '2rem' }}/>
                    </IconButton>
                    <IconButton color="inherit" component="a" href="https://github.com/gabwowce" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon sx={{ fontSize: '2rem' }}/>
                    </IconButton>
                  </SocialMediaBox>
                </RightsAndIconsBox>
                
            
        </StyledContainer>
            
      </StyledBox>
    </BackgroundBox>
    
  );
}

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Outfit, sans-serif', 
 
  fontWeight:'600'
}));

const PageLinksSectionBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  flexDirection:'column',
  justifyContent:'flex-start',
  alignItems:'flex-start',
  gap:'0.5rem'
}));

const RightsAndIconsBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  margin:'1rem 0 0 0'
 
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex', 
  flexDirection:'column',
  justifyContent:'flex-end',
  alignItems:'center',
  height:'100%',
  paddingBottom:'2rem'
}));

const SocialMediaBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent:'flex-end',
  alignItems:'flex-end',
}));

const PageLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  flexDirection:'row',
  justifyContent:'flex-end',
  alignItems:'center',
  gap:'2rem',
  width:'100%'
}));

const StyledImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover', 
  opacity:theme.palette.mode === 'dark' ? '0.1' :'0.8',
  zIndex: 0, 
}));



const BackgroundBox = styled(Box)(({ theme }) => ({
  width:'100%',
  backgroundColor: theme.palette.background.default,
  
}));

const StyledBox = styled(Box)(({ theme }) => ({

  mt: 'auto',
  height:'300px',
  backgroundColor: theme.palette.background.default,
  background: `radial-gradient(circle at 80% 30%, rgba(255, 0, 0, 0.2), transparent 40%),
               radial-gradient(circle at 40% 80%, rgba(255, 0, 0, 0.2), transparent 40%),
               radial-gradient(circle at 100% 20%, rgba(0, 0, 255, 0.2), transparent 30%),
               radial-gradient(circle at 20% 100%, rgba(0, 0, 255, 0.2), transparent 30%),
               radial-gradient(circle at 60% 60%, rgba(0, 0, 255, 0.2), transparent 30%)`,
  backdropFilter: 'blur(15px)',
  boxShadow: theme.palette.mode === 'dark' 
  ? '0 -10px 6px -2px rgba(0, 0, 0, 0.5), 0 10px 6px -2px rgba(0, 0, 0, 0.5)' 
  : '0 -10px 6px -2px rgba(0, 0, 0, 0.2), 0 10px 6px -2px rgba(0, 0, 0, 0.2)',


}));

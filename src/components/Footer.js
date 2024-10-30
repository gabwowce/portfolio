import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import starImage from '../assets/stars.png';
import { Link } from 'react-router-dom';
import CanvasComponent from '../components/CanvasComponent';
import CanvasComponentLight from '../components/CanvasComponentLight ';
import { useVisibility } from '../context/VisibilityContext';

export default function Footer() {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext); 
  const { visibleElements } = useVisibility();
  const isFooterVisible = visibleElements.has('myFooter');

  const pageLinks = t('footer.pageLinks', { returnObjects: true });

  return (
    <BackgroundBox>
      <StyledBox component="footer" id='myFooter' className="track-visibility">
        {isFooterVisible &&
        
          (themeMode === 'dark' ?
          <CanvasComponent
            layers={[
              { speed: 0.135, scale: 0.1, count: 400 },
              { speed: 0.1, scale: 0.4, count: 60 },
              { speed: 0.2, scale: 0.65, count: 40 }
            ]}
            
          />
          :
          <CanvasComponentLight cloudAnimation = {true} birdAnimation = {false}/>)
        
        }
      
        <StyledContainer>
          <PageLinksBox>
            {pageLinks.map((section, index) => (
              <PageLinksSectionBox key={index}>
                 <StyledLink variant="h3" key={index} to={section.link}>
                  {section.title}
                </StyledLink>
                {section.links.map((link, linkIndex) => (
                  <StyledLink2 key={linkIndex} to={`#${link.link}`} >
                  {link.title}
                </StyledLink2>
                ))}
              </PageLinksSectionBox>
            ))}
          </PageLinksBox>

          <RightsAndIconsBox>
            <Typography variant="body1">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </Typography>
            <SocialMediaBox>
              <IconButton color="inherit" component="a" href="https://www.facebook.com/gabriele.tamaseviciute" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
              <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/gabrielė-tamaševičiūtė-06712526b" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
              <IconButton color="inherit" component="a" href="https://github.com/gabwowce" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
            </SocialMediaBox>
          </RightsAndIconsBox>
        </StyledContainer>
      </StyledBox>
    </BackgroundBox>
  );
}

const StyledLink2 = styled(Link)(({ theme }) => ({
  color: 'inherit', 
  textDecoration: 'none', 
  fontFamily: 'Outfit, sans-serif',
  '&:hover': {
  color: theme.palette.primary.main,
  
},
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit', 
  textDecoration: 'none', 
  fontFamily: 'Outfit, sans-serif', 
  fontWeight:'600',
  fontSize:'1.5rem',
  marginBottom:'0.5rem',
  '&:hover': {
  color: theme.palette.primary.main,
  
},
}));

const PageLinksSectionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '0.5rem'
}));

const RightsAndIconsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',
  paddingBottom: '1rem'
}));

const SocialMediaBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
}));

const PageLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '2rem',
  width: '100%',
  zIndex: '10',
  padding: '2rem 0'
}));

const StyledImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: theme.palette.mode === 'dark' ? '0.1' : '0.3',
  zIndex: 0,
}));

const BackgroundBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  overflow:'hidden',
  mt: 'auto',
  height: 'auto',
  backgroundColor: theme.palette.background.default,
  background: `radial-gradient(circle at 80% 30%, rgba(255, 0, 0, 0.2), transparent 40%),
               radial-gradient(circle at 40% 80%, rgba(255, 0, 0, 0.2), transparent 40%),
               radial-gradient(circle at 100% 20%, rgba(0, 0, 255, 0.2), transparent 30%),
               radial-gradient(circle at 20% 100%, rgba(0, 0, 255, 0.2), transparent 30%),
               radial-gradient(circle at 60% 60%, rgba(0, 0, 255, 0.2), transparent 30%)`,
  backdropFilter: 'blur(15px)',
  boxShadow: theme.palette.mode === 'dark' 
  ? '0 -5px 3px -2px rgba(0, 0, 0, 0.5), 0 5px 3px -2px rgba(0, 0, 0, 0.5)' 
  : '0 -5px 3px -2px rgba(0, 0, 0, 0.2), 0 5px 3px -2px rgba(0, 0, 0, 0.2)',
}));

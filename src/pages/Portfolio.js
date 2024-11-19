import React, { useState, useContext, useEffect,useRef } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Button, Container } from '@mui/material';
import { slideInRightAnimation, slideInLeftAnimation, fadeInAnimation, slideDownAnimation} from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 
import { StyledContainer, NameTypography, ThirdTypography} from '../pages/About';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useVisibility } from '../context/VisibilityContext';


const Portfolio = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { themeMode } = useContext(ThemeContext); 
  const projects = t('portfolioPage.projects', { returnObjects: true });
  const { visibleElements } = useVisibility();
  const [animate, setAnimate] = useState(false);
  const [animateCards, setanimateCards] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
      const isVisible = visibleElements.has("portfolio");
      if (isVisible) {
          setAnimate(true);
         
      }
  }, [visibleElements]);


  const ProjectCard = ({ project, index }) => { 
      const { themeMode } = useContext(ThemeContext);
      const [isHovered, setIsHovered] = useState(false);

      return (
          <StyledCardBox bg={project.images[themeMode].bg} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} animate={animate}>
              <BoxForPic isHovered={isHovered}>
                  <StyledImageBox component="img" src={project.images[themeMode].pic} alt="project picture laptop" isHovered={isHovered}/>
                  {
                      project.images[themeMode].pic2 && <StyledImageBox2 component="img" src={project.images[themeMode].pic2} alt="project picture phone" />
                  }
              </BoxForPic>
              <StyledContentBox isHovered={isHovered} index={index}>
                  <SecondTypography variant='h3'>{project.title}</SecondTypography>
                  <StyledDescBox isHovered={isHovered}>{project.description}</StyledDescBox>
                  <SkillsTypography variant="subtitle2" component="div" isHovered={isHovered}>
                      {project.tools.map((tools, Index) => (
                          <InnerTypography key={Index} variant="subtitle2">{tools}</InnerTypography>
                      ))}
                  </SkillsTypography>
                  <BtnBox display="flex" justifyContent="center" gap={1} mt={2} isHovered={isHovered}>
                      {project.links.front && (
                          <StyledButton
                              variant="outlined"
                              startIcon={<GitHubIcon />}
                              onClick={() => window.open(project.links.front, '_blank')}
                          >
                              Frontend
                          </StyledButton>
                      )}
                      {project.links.back && (
                          <StyledButton
                              variant="outlined"
                              startIcon={<GitHubIcon />}
                              onClick={() => window.open(project.links.back, '_blank')}
                          >
                              Backend
                          </StyledButton>
                      )}
                      {project.links.link && (
                          <StyledButton
                              variant="outlined"
                              startIcon={<LaunchIcon />}
                              onClick={() => window.open(project.links.link, '_blank')}
                          >
                              Live Demo
                          </StyledButton>
                      )}
                  </BtnBox>
              </StyledContentBox>
          </StyledCardBox>
      );
  };

  return (
      <StyledBackgroundBox2 id="portfolio" className="track-visibility" paddingTop='3rem' animate={animate}>
          <StyledContainer className='custom-container'>
              <StyledBox>
                  <NameTypography variant="h1" animate={animate}>{t('portfolioPage.title')}</NameTypography>
                  <ThirdTypography variant="body1" animate={animate}>{t('portfolioPage.description')}</ThirdTypography>
              </StyledBox>
          </StyledContainer>

          <StyledBox2 animate={animate}>
              {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index}/>
              ))}
          </StyledBox2>
      </StyledBackgroundBox2>
  );
};

export default Portfolio;


export const StyledBox2 = styled(Box)(({ theme, animate }) => ({
    className:'custom-container track-visibility',
     id:"portfolio-projects",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    padding: theme.spacing(3),
    gap:'2rem',
    opacity: animate ? 1 : 0, 
  transition: 'opacity 2s ease',
  animation: animate ? `${slideInRightAnimation} 2.5s ease` : 'none', 
  
  }));

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '750px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

}));

export const StyledButton = styled(Button)(({ theme, isHovered }) => ({
  color: '#FEF9F2',
  borderRadius:'10px',
}));


export const BtnBox = styled(Box)(({ theme, isHovered }) => ({

  transition: '1s',
  opacity: isHovered ? 1 : 0,
  visibility: isHovered ? 'visible' : 'hidden',
  paddingTop: 0,
  paddingBottom: 0,
  transitionDelay: isHovered ? '1s' : 'none',
}));

export const SecondTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Outfit, sans-serif', 
    textAlign: 'center',
    color:  theme.palette.mode === 'dark' ? '#E5E5CB' : '#F6FBFC', 
    lineHeight: '1.2 !important', 
    marginBottom:'1rem',
  }));

export const StyledDescBox = styled(Box)(({ theme, isHovered }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
    marginBottom:'1rem',
    transition: '1s',
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    paddingTop: 0,
    paddingBottom: 0,
    transitionDelay: isHovered ? '0.5s' : 'none',
  }));

export const StyledBackgroundBox2 = styled(Box)(({ theme, animate }) => ({
    width: '100%',
    height: '100%',
    background: theme.palette.background.portfolio,
    padding: '6rem 0',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
    position: 'relative',
    opacity: animate ? 1 : 0, 
  transition: 'opacity 1.5s ease',
  }));


const SkillsTypography = styled(Typography)(({ theme, isHovered }) => ({
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent:'center',
    gap: '8px',
    lineHeight: '1.2', 
    marginTop: '0.5rem', 
    transition: '1s',
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    transitionDelay: isHovered ? '0.7s' : 'none',
  }));

  const InnerTypography = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgb(229,229,203,0.2)' : 'rgb(246,251,252,0.2)',
    padding: '2px 10px',
    margin:'0.1rem 0',
    borderRadius: '24px',
    color: theme.palette.mode === 'dark' ? '#E5E5CB' : '#F6FBFC',
  }));

  export const StyledContentBox = styled(Box)(({ theme, isHovered, index }) => ({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding:'0 2rem',
    height: index === 0 ? isHovered ? '370px' : '170px' : isHovered ? '330px' : '170px' , 
    textAlign: 'center',
    transition: 'height 1s ease',
    zIndex: '9999999',
    
    [theme.breakpoints.down('sm')]: {
      height: isHovered ? '360px' : '140px', 
   },
}));

export const StyledImageBox2 = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '62%',
    left:' 78%',
    transform: 'translate(-50%, -50%) rotate(10deg)',
    width: '100px',
    [theme.breakpoints.down('lg')]: {
      top: '47%',
      width: '90px',
   },
   

  })); 

  export const StyledImageBox = styled(Box)(({ theme, isHovered }) => ({
    position: 'absolute',
    top: '45%',
    left: '48%',
    transform: 'translate(-50%, -50%) rotate(-10deg)',
    width: '470px',
    [theme.breakpoints.down('lg')]: {
      top: '30%',
      width: '370px',
    },
  }));

export const BoxForPic = styled(Box)(({ theme, isHovered, animate }) => ({
    position: 'absolute',
    top: isHovered ? '5%' : '25%',
    transform: 'translateY(-50%)',
    zIndex: '10000',
    width: '100%',
    height: '220px',
    transition: '0.5s',
    transform: isHovered ? 'translateY(0%)' : 'none',

  })); 

export const BackgroundSection = styled(Box)(({ theme }) => ({
    width: '100%',
   

  })); 

  const StyledCardBox = styled(Box)(({ theme, bg, delay, animate }) => ({
    flex: '1 1 300px',
    maxWidth: '50%',
    minWidth: '400px',
    height: '630px',
    backgroundImage: `url(${bg})`,
    color: theme.palette.mode === 'dark' ? '#D5CEA3' : '#EAF5F7',
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: theme.palette.mode === 'dark' 
        ? '0 7px 6px -2px rgba(0, 0, 0, 0.5), 7px 0 6px -2px rgba(0, 0, 0, 0.5)' 
        : '0 7px 6px -2px rgba(0, 0, 0, 0.2), 7px 0 6px -2px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    textAlign: 'center',
    
    // opacity: animate ? 1 : 0,
    // transition: animate ? `opacity 2.5s ease ${delay}s` : 'none', // Užtikriname, kad kortelės atsiranda viena po kitos
    // animation: animate ? `${slideInLeftAnimation} 2.5s ease ${delay}s forwards` : 'none', 
    
    zIndex: 9999,
    animationFillMode: 'forwards',

    // Responsive dizainas
    [theme.breakpoints.down('lg')]: {
       minWidth: '550px'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'calc(100% - 2rem)',
      minWidth: '350px',
      height: '600px',
    },
}));



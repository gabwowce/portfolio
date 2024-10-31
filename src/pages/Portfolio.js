import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 
import { StyledContainer, StyledBox, NameTypography, ThirdTypography} from '../pages/About';
import CanvasComponent from '../components/CanvasComponent';
import CanvasComponentLight from '../components/CanvasComponentLight ';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const Portfolio = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { themeMode } = useContext(ThemeContext); 
    const projects = t('portfolioPage.projects', { returnObjects: true });

    const ProjectCard = ({ project }) => {
        const { themeMode } = useContext(ThemeContext);
        const [isHovered, setIsHovered] = useState(false);

        return (
            <StyledCard bg={project.images[themeMode].bg}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <BoxForPic isHovered={isHovered}>
                <StyledImageBox component="img" src={project.images[themeMode].pic} alt="project picture loptop" />
                {
                    project.images[themeMode].pic2 && <StyledImageBox2 component="img" src={project.images[themeMode].pic2} alt="project picture phone" />
                }
                
              </BoxForPic>
              <StyledContentBox isHovered={isHovered}>
                <SecondTypography variant='h3'>
                    {project.title}
                </SecondTypography>
                <StyledDescBox isHovered={isHovered}>
                    {project.description}
                </StyledDescBox>
                <SkillsTypography variant="subtitle2" component="div" isHovered={isHovered}>
                  {project.tools.map((tools, Index) => (
                    <InnerTypography key={Index} variant="subtitle2">
                      {tools}
                    </InnerTypography>
                  ))}
                </SkillsTypography>
                <Box display="flex" justifyContent="center" gap={1} mt={2}>
                    {project.links.front && (
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<GitHubIcon />}
                            onClick={() => window.open(project.links.front, '_blank')}
                        >
                            Frontend
                        </Button>
                    )}
                    {project.links.back && (
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<GitHubIcon />}
                            onClick={() => window.open(project.links.back, '_blank')}
                        >
                            Backend
                        </Button>
                    )}
                    {project.links.link && (
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<LaunchIcon />}
                            onClick={() => window.open(project.links.link, '_blank')}
                        >
                            Live Demo
                        </Button>
                    )}
                </Box>
              </StyledContentBox>
            </StyledCard>
        );
    };

    return (
      
        <StyledBackgroundBox2 id="about-hero" className="track-visibility"  paddingTop='3rem'>
            <StyledContainer className='custom-container' >
                <StyledBox>
                <NameTypography variant="h1">
                {t('portfolioPage.title')}
                </NameTypography>
                <ThirdTypography variant="body1">
                {t('portfolioPage.description')}
                </ThirdTypography>
                
                </StyledBox>
                
            </StyledContainer>

            
                
           



            <Box className='custom-container' display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" width="100%" gap={2} mt={4} mb={4}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </Box>

            {themeMode === 'dark' ?
                <CanvasComponent
                layers={[
                    { speed: 0.11, scale: 0.2, count: 620 },
                    { speed: 0.1, scale: 0.3, count: 100 },
                    { speed: 0.2, scale: 0.5, count: 60 }
                ]}
                // shootingStarSpeed={{ min: 15, max: 20 }}
                />
                :
                <CanvasComponentLight cloudAnimation = {true} birdAnimation = {false}/>}
        </StyledBackgroundBox2>
        
    );
};

export default Portfolio;

export const SecondTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Outfit, sans-serif', 
    textAlign: 'center',
    color:  theme.palette.mode === 'dark' ? '#E5E5CB' : '#F6FBFC', 
    lineHeight: '1.2 !important', 
    marginBottom:'1rem'
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

export const StyledBackgroundBox2 = styled(Box)(({ theme }) => ({
    width: '100%',
    background: theme.palette.background.portfolio,
    padding: '5rem 0',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
    position: 'relative'
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

  export const StyledContentBox = styled(Box)(({ theme, isHovered }) => ({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding:'0 2rem',
    height: isHovered ? '280px' : '150px', // Keičiamas height pagal isHovered būseną
    textAlign: 'center',
    transition: 'height 1s ease',
    zIndex: '10',
}));

export const StyledImageBox2 = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '67%',
    left:' 78%',
    transform: 'translate(-50%, -50%) rotate(10deg)',
    width: '100px',

  })); 

export const StyledImageBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left:'48%',
    transform: 'translate(-50%, -50%) rotate(-10deg)',
    width: '470px',

  })); 

export const BoxForPic = styled(Box)(({ theme, isHovered }) => ({
    position: 'absolute',
    top: isHovered ? '5%' : '25%',
    transform: 'translateY(-50%)',
    zIndex: '10000',
    width: '100%',
    height: '220px',
    transition: '0.5s',
    transform: isHovered ? 'translateY(0%)' : 'none'

  })); 

export const BackgroundSection = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#393736' : 'rgb(196, 225,246,0.3)',
    width: '100%',
   

  })); 

  const StyledCard = styled(Card)(({ theme, bg }) => ({
    flex: '1 1 300px', // Allow card to grow and shrink, with a base width of 300px
    maxWidth: '40%', // Maximum width for larger screens
    minWidth: '400px', // Minimum width to maintain layout on small screens
    height: '600px', // Maintain the height, or adjust as needed
    backgroundImage: `url(${bg})`,
    color: theme.palette.mode === 'dark' ? '#D5CEA3' : '#EAF5F7',
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    textAlign: 'center',
    transition: '0.5s',
    zIndex: '9999',
    boxShadow: theme.palette.mode === 'dark' 
        ? '0 -5px 3px -2px rgba(0, 0, 0, 0.5), 0 5px 3px -2px rgba(0, 0, 0, 0.5)' 
        : '0 -5px 3px -2px rgba(0, 0, 0, 0.2), 0 5px 3px -2px rgba(0, 0, 0, 0.2)',

    // // Optional: Add media queries for further customization
    // '@media (max-width: 600px)': {
    //     height: '400px', // Adjust height for smaller screens if needed
    // },
}));




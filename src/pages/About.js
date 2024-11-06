import React, { useState, useContext, useEffect } from 'react';
import { slideInRightAnimation, slideInLeftAnimation, slideDownAnimation} from '../styles/animations';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next'; 
import { ThemeContext } from '../context/ThemeContext'; 
import lightPhoneImage from '../assets/light-phone.png';
import darkPhoneImage from '../assets/dark-phone.png';
import { ReactComponent as AddUserIcon } from '../assets/add-user.svg';
import Timeline from '../components/Timeline';
import Tools from '../components/Tools';
import LanguageSkills from '../components/LanguageSkills';
import ChatCards from '../components/ChatCards';
import Statistics from '../components/FunStatistics';
import CanvasComponent from '../components/CanvasComponent';
import CanvasComponentLight from '../components/CanvasComponentLight ';
import { useVisibility } from '../context/VisibilityContext';
import { useLoading } from '../context/LoadingContext';


const About = () => {
    const { t } = useTranslation();
    const { themeMode } = useContext(ThemeContext); 
    const theme = useTheme();
    const { setLoading } = useLoading();
    const { visibleElements } = useVisibility();
    const [animate, setAnimate] = useState(false);
    const [animateAboutPage, setanimateAboutPage] = useState(false);
     const [animateChats, setanimateChats] = useState(false);
     const [animateHistory, setanimateHistory] = useState(false);

     useEffect(() => {
      window.scrollTo(0, 0);
  }, []);


    useEffect(() => {
      const isHeroVisible = visibleElements.has("about-hero");
      isHeroVisible && setAnimate(true);
    }, [visibleElements]);

    useEffect(() => {
      const isAboutPageVisible = visibleElements.has("about-page");
      if (isAboutPageVisible) {
        setanimateAboutPage(true); 
      }
    }, [visibleElements]);

    useEffect(() => {
      const isChatsVisible = visibleElements.has("about-chats");
      isChatsVisible && setanimateChats(true);

    }, [visibleElements]);
    useEffect(() => {
      const isHistoryVisible = visibleElements.has("about-history");
      isHistoryVisible && setanimateHistory(true);

    }, [visibleElements]);

    return (
      <>
      <BackgroundSection id="about-page" className="track-visibility" animate={animateAboutPage}>
        
        <HeroSection id="about-hero" className="track-visibility"  animate={animate}>
          <StyledContainer className='custom-container' animate={animate}>
            <StyledBox animate={animate}>
              <NameTypography variant="h1" animate={animate}>
                {t('aboutPage.name')}
              </NameTypography>
              <SecondTypography variant="h3" animate={animate}>
                {t('aboutPage.jobTitle')}
              </SecondTypography>
              {/* <ThirdTypography variant="body1" animate={animate}>
                {t('aboutPage.description')}
              </ThirdTypography> */}
              <Tools/>
              <Statistics/>
              
            </StyledBox>
            <BoxForPic animate={animate}>
              <PhoneBox>
                <ImageBox component="img" src={themeMode === 'dark' ? darkPhoneImage : lightPhoneImage} alt="Phone" />
                <StyledButton href="https://www.linkedin.com/in/gabrielė-tamaševičiūtė-06712526b" target="_blank" rel="noopener noreferrer">
                  <AddUserIcon /> Connect
                </StyledButton>
              </PhoneBox>
              
            </BoxForPic>   
            
          </StyledContainer>

          

            {themeMode === 'dark' ?
            <CanvasComponent
              layers={[
                { speed: 0.135, scale: 0.2, count: 520 },
                { speed: 0.1, scale: 0.5, count: 100 },
                { speed: 0.2, scale: 0.75, count: 60 }
              ]}
              shootingStarSpeed={{ min: 15, max: 20 }}
            />
            :
            <CanvasComponentLight cloudAnimation = {true} birdAnimation = {true}/>}
            
        </HeroSection>

        


        <StyledBackgroundBox3 animate={animateHistory} id="about-history" >
          <Timeline/>
        </StyledBackgroundBox3>
        
        <StyledBackgroundBox2>
          <ChatCards/>
        </StyledBackgroundBox2>
      </BackgroundSection>
      </>
      

    );
};

export default About;


const PhoneBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 'auto',

  
}));

const StyledCardBox = styled(Box)(({ theme }) => ({
  margin:'0 7rem',
  width:'100%',
  borderRadius:'82% 18% 89% 11% / 23% 79% 21% 77% ',
  backgroundColor: theme.palette.background.default,
  background: `radial-gradient(circle at 80% 30%, rgba(255, 0, 0, 0.2), transparent 40%),
  radial-gradient(circle at 40% 80%, rgba(255, 0, 0, 0.2), transparent 40%),
  radial-gradient(circle at 100% 20%, rgba(0, 0, 255, 0.2), transparent 30%),
  radial-gradient(circle at 20% 100%, rgba(0, 0, 255, 0.2), transparent 30%),
  radial-gradient(circle at 60% 60%, rgba(0, 0, 255, 0.2), transparent 30%)`,
  backdropFilter: 'blur(15px)',
  padding: '2rem 0 2rem 0',
  boxShadow: theme.palette.mode === 'dark' 
  ? '0 -5px 3px -2px rgba(0, 0, 0, 0.5), 0 5px 3px -2px rgba(0, 0, 0, 0.5)' 
  : '0 -5px 3px -2px rgba(0, 0, 0, 0.2), 0 5px 3px -2px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('lg')]: {
    margin:'0 2rem',
},
[theme.breakpoints.down('sm')]: {
  borderRadius:'30px',
  padding: '1rem 0 1rem 0',
},

}));


export const HeroSection = styled(Box)(({ theme,animate }) => ({
  position: 'relative', 
  background: `radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 60% 80%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 0% 20%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 80% 100%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 40% 60%, rgba(0, 0, 255, 0.3), transparent 30%)`,
  boxShadow: theme.palette.mode === 'dark' 
  ? '0 -5px 3px -2px rgba(0, 0, 0, 0.5), 0 5px 3px -2px rgba(0, 0, 0, 0.5)' 
  : '0 -5px 3px -2px rgba(0, 0, 0, 0.2), 0 5px 3px -2px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
  overflow:'hidden',
}));

const StyledBackgroundBox3 = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.background.paper2,
  padding: '0',
  display:'flex',
  justifyContent:'center',
  
}));

export const StyledBackgroundBox2 = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.background.paper,
  padding: '0',
  display:'flex',
  justifyContent:'center',

}));

const StyledBackgroundBox = styled(Box)(({ theme }) => ({
  width:'100%',
  backgroundColor: theme.palette.background.default,
  background: `radial-gradient(circle at 80% 30%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 40% 80%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 100% 20%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 20% 100%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 60% 60%, rgba(0, 0, 255, 0.3), transparent 30%)`,
  backdropFilter: 'blur(15px)',
  padding: '2rem 0 2rem 0',
  boxShadow: theme.palette.mode === 'dark' 
  ? '0 -5px 3px -2px rgba(0, 0, 0, 0.5), 0 5px 3px -2px rgba(0, 0, 0, 0.5)' 
  : '0 -5px 3px -2px rgba(0, 0, 0, 0.2), 0 5px 3px -2px rgba(0, 0, 0, 0.2)',


}));

export const SecondTypography = styled(Typography)(({ theme, animate }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
  animation: animate && `${slideInLeftAnimation} 2.5s ease forwards`,

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
  alignItems: 'center', 

}));


export const ImageBox = styled(Box)(({ theme }) => ({
  width: '300px',
 
  filter: theme.palette.mode === 'dark' ? 'drop-shadow(5px 0px 25px rgba(255, 255, 255, 0.2))' : 'drop-shadow(10px 4px 15px rgba(0, 0, 0, 1))',
  padding: theme.spacing(3),
  boxSizing: 'content-box',

  [theme.breakpoints.down('md')]: {
    clipPath: 'inset(0 0 47% 0)',
    filter:'none',
    marginBottom:'-325px',
  
  },
  [theme.breakpoints.down('sm')]: {
    clipPath: 'inset(0 0 57% 0)',
    marginBottom:'-385px',
  },
 
}));                

export const BoxForPic = styled(Box)(({ theme, animate }) => ({

  width: '100%',
  height: 'auto',
  justifyItems: 'center',
  animation: animate &&`${slideInRightAnimation} 2.8s ease forwards`,
  // animationDelay: animate && '1.5s'
  [theme.breakpoints.down('md')]: {
    animation: animate &&`${slideDownAnimation} 2s ease forwards`,
  
  },
}));

export const ThirdTypography = styled(Typography)(({ theme, animate }) => ({
  textAlign: 'justify',
  color: theme.palette.text.third,
  marginTop: '1rem',
  animation: animate && `${slideInLeftAnimation} 1v.5s ease forwards`,
  //  animationDelay: animate && '1.5s'
}));

export const NameTypography = styled(Typography)(({ theme, animate }) => ({
  fontFamily: 'Outfit, sans-serif', 
  fontWeight: '600',
  textAlign:'left',
  color: theme.palette.text.primary,
  animation:animate &&`${slideInLeftAnimation} 2.2s ease forwards`,
  //  animationDelay: animate && '1.5s'
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  display:'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '3rem 0',
  height:'auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
  zIndex:'1',
}));



export const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  left: '44px',
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

  [theme.breakpoints.down('sm')]: {
    display:'none'
  },
}));

export const StyledBox = styled(Box)(({ theme, animate }) => ({
  padding: theme.spacing(3),
  maxWidth: '750px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  

  [theme.breakpoints.down('md')]: {
    borderRadius:'10px',
    zIndex:'100',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    backdropFilter: 'blur(10px)', 
    boxShadow: theme.palette.mode === 'dark' 
      ? '0 2px 5px rgba(0, 0, 0, 0.5)' 
      : '0 2px 5px rgba(0, 0, 0, 0.5)', 
    padding: theme.spacing(2),
    animation:animate &&`${slideInLeftAnimation} 2s ease forwards`,
  },
}));


const HeroStyleSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  background: `radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 60% 80%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 0% 20%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 80% 100%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 40% 60%, rgba(0, 0, 255, 0.3), transparent 30%)`,
  backdropFilter: 'blur(15px)',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: theme.palette.mode === 'dark' 
  ? '0 -5px 3px -2px rgba(0, 0, 0, 0.5), 0 5px 3px -2px rgba(0, 0, 0, 0.5)' 
  : '0 -5px 3px -2px rgba(0, 0, 0, 0.2), 0 5px 3px -2px rgba(0, 0, 0, 0.2)',
  padding: '4rem 0 4rem 0',

}));



export const BackgroundSection = styled(Box)(({ theme, animate }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#393736' : 'rgb(196, 225,246,0.3)',
  width: '100%',
  opacity: animate ? 1 : 0, 
  transition: 'opacity 1.5s ease',
})); 


const ChatsContainer = styled(Container)(({ theme, animate }) => ({
  opacity: animate ? 1 : 0, 
  transition: 'opacity 1.5s ease',
})); 

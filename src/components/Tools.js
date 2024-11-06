import Slider from 'react-slick';
import React, { useState, useContext, useEffect } from 'react';
import { styled, useTheme, keyframes } from '@mui/material/styles';
import { slideInRightAnimation, slideInLeftAnimation} from '../styles/animations';
import { useVisibility } from '../context/VisibilityContext';
import { useTranslation } from 'react-i18next'; 
import { ThemeContext } from '../context/ThemeContext'; 
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from '@mui/material';

import pythonLogo from '../assets/tools/python.png';  
import autocadLogo from '../assets/tools/autocad.png';
import axureRPLogo from '../assets/tools/axureRP.jpg';
import cppLogo from '../assets/tools/c++.png';  
import chatgptLogo from '../assets/tools/chatgpt.png';
import cmdLogo from '../assets/tools/command-line.png';

import csharpLogo from '../assets/tools/c-sharp.png';  
import cssLogo from '../assets/tools/css.png';
import excelLogo from '../assets/tools/excel.png';
import figmaLogo from '../assets/tools/figma.png';  
import htmlLogo from '../assets/tools/html.png';
import sqlLogo from '../assets/tools/sql.png';
import githubLogo from '../assets/tools/github.png';
import xamlLogo from '../assets/tools/xaml.png';  
import xmlLogo from '../assets/tools/xml.png';
import reactLogo from '../assets/tools/react.png';
import jsLogo from '../assets/tools/js.png';
import apiLogo from '../assets/tools/api.png';

const tools = [
  { name: 'C#', image: csharpLogo },
  { name: 'React', image: reactLogo },
  { name: 'JavaScript', image: jsLogo },
  { name: 'HTML', image: htmlLogo },
  { name: 'CSS', image: cssLogo },
  { name: 'SQL', image: sqlLogo },
  { name: 'REST API', image: apiLogo },
  {name: 'GitHub', image: githubLogo},
  { name: 'XAML', image: xamlLogo },
  { name: 'XML', image: xmlLogo },
  { name: 'Figma', image: figmaLogo },
  { name: 'AutoCAD', image: autocadLogo },
  { name: 'AxureRP', image: axureRPLogo },
  { name: 'Python', image: pythonLogo },
  { name: 'To Be Continued...', image: null },
];

const ToolCarousel = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { visibleElements } = useVisibility();
  const [animate, setAnimate] = useState(false);

    useEffect(() => {
      const isVisible = visibleElements.has("about-skills");
      if (isVisible) {
          setAnimate(true);
      }
  }, [visibleElements]);

  const [autoplay, setAutoplay] = useState(false);
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const settings = {
    infinite: true,
    speed: 30000,
    slidesToShow: isExtraSmall ? 4 : (isMedium ? 6 : 10),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    autoplaySpeed: 50,
    cssEase: 'linear',
    pauseOnHover: true,
    draggable: true
  };


  const groupedTools = tools.reduce((acc, tool, index) => {
        const groupIndex = Math.floor(index / (isMedium || isExtraSmall ? 2 : 1)); 
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(tool);
        return acc;
      }, []); 

  return (
  
      <StyledBox id="about-skills" className="track-visibility" animate={animate}>
   
      
   
        {/* Use flexbox layout to make sure the tools align in rows and columns */}
        {tools.map((tool, index) => (
              <StyledBox4 key={index} index={index}>
                {tool.image &&
                  <StyledBox3 component="img" src={tool.image} alt={tool.name} />
                }
                  <ToolNameTypography>
                  {tool.name}
                </ToolNameTypography>
              </StyledBox4>
            ))}
    
    </StyledBox>
  
    
  );
};

export default ToolCarousel;

const ToolNameTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary, 
  lineHeight: 1,
}));

const StyledBox4 = styled(Box)(({ theme, isVisible, index }) => ({
      display: 'inline-flex',
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center', 
      padding: '10px',
      borderRadius:'10px',
      gap:'5px',
      margin:'0.5rem 5px',
      width: '120px',         
      height: 'auto',         
      maxWidth: '120px',     
      maxHeight: '45px',   
      zIndex:'100',
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      backdropFilter: 'blur(10px)', 
      boxShadow: theme.palette.mode === 'dark' 
          ? '0 2px 3px rgba(0, 0, 0, 0.5)' 
          : '0 2px 3px rgba(0, 0, 0, 0.5)', 


      [theme.breakpoints.down('lg')]: {
        margin:'10px 5px'
      },
      [theme.breakpoints.down('sm')]: {
        width: '89px',         
        height: '35px',  
      },
}));

const StyledBox3 = styled(Box)(({ theme }) => ({
      width: '25px', 
      height: '25px', 
      display: 'block',
      [theme.breakpoints.down('lg')]: {
        width: '25px', 
        height: '25px', 
      },

}));

const StyledBox2 = styled(Box)(({ theme, isExtraSmall, animate }) => ({
      display: 'flex',
      flexWrap: isExtraSmall ? 'wrap' : 'nowrap', 
      justifyContent: 'space-around',
      width: '100%',
      opacity: animate ? 1 : 0, 
      transition: 'opacity 3.5s ease',
     

}));
  

const StyledBox = styled(Box)(({ theme, animate }) => ({
  width: '100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'felx-start',
  alignItems:' center',
  flexWrap:'wrap',
  margin:'1rem 0',
  animation: animate && `${slideInLeftAnimation} 2.8s ease forwards`,
  [theme.breakpoints.down('lg')]: {
    justifyContent:'center',
},
}));

const StyledBoxBg = styled(Box)(({ theme }) => ({
  padding: '10px 0',
  width: '100%',
  overflow: 'hidden',
  background:theme.palette.mode === 'dark' ? 'rgb(206,144,242,0.2)' : 'rgb(228,76,131,0.2)',
 
}));

const NameTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Outfit, sans-serif',
  fontWeight: '600',
  textAlign: 'center',
  color: theme.palette.text.primary,
  position: 'relative', 

  '&::before, &::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '50%', 
    width: '200px', 
    height: '1px', 
    backgroundColor: theme.palette.text.primary, 
  },
  '&::before': {
    left: '-250px', 
  },
  '&::after': {
    right: '-250px', 
  },
}));
  

const SecondTypography = styled(Typography)(({ theme,animate }) => ({
  color: theme.palette.text.third,
  textAlign: 'center',
  marginBottom:'1rem',
  opacity: animate ? 1 : 0, 
    transition: 'opacity 3.5s ease',
}));

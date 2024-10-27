import Slider from 'react-slick';
import React, { useState, useContext, useEffect } from 'react';
import { styled, useTheme, keyframes } from '@mui/material/styles';
import { slideToolsInAnimation } from '../styles/animations';
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

const tools = [
  { name: 'Python', image: pythonLogo },
  { name: 'C#', image: csharpLogo },
  { name: 'HTML', image: htmlLogo },
  { name: 'CSS', image: cssLogo },
  { name: 'SQL', image: sqlLogo },
  { name: 'React', image: reactLogo },
  { name: 'JavaScript', image: jsLogo },
  {name: 'GitHub', image: githubLogo},
  { name: 'XAML', image: xamlLogo },
  { name: 'XML', image: xmlLogo },
  { name: 'Figma', image: figmaLogo },
  { name: 'AutoCAD', image: autocadLogo },
  { name: 'AxureRP', image: axureRPLogo },
  { name: 'CMD', image: cmdLogo },
  { name: 'ChatGPT', image: chatgptLogo },
];

const ToolCarousel = () => {
  const { t } = useTranslation();
  const theme = useTheme();


  const [autoplay, setAutoplay] = useState(false);


  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: isExtraSmall ? 4 : (isMedium ? 6 : 10),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    autoplaySpeed: 50,
    cssEase: 'linear',
    pauseOnHover: true,
    draggable: true
  };

  // useEffect(() => {
  //   if (isVisible) {
  //     const timer = setTimeout(() => {
  //       setAutoplay(true); // Įjunkite autoplay po 2 sekundžių (arba kitokio laiko, jei animacija ilgesnė)
  //     }, 3000); // Laikas turi būti tas pats, kaip ir animacijos trukmė
  
  //     return () => clearTimeout(timer); // Išvalykite timer
  //   }
  // }, [isVisible]);

  // Group tools based on screen size
  const groupedTools = tools.reduce((acc, tool, index) => {
        const groupIndex = Math.floor(index / (isMedium || isExtraSmall ? 2 : 1)); // 2 tools per row for small screens
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(tool);
        return acc;
      }, []); // Single group for large screens (1 row with all tools)

  return (
    <StyledBox id="about-skills">
      <NameTypography variant="h2">
        {t('aboutPage.skills.title')}
      </NameTypography>
      <SecondTypography variant='body1'>
        {t('aboutPage.skills.subtitle')}
      </SecondTypography>
      <Slider {...settings}>
        {/* Use flexbox layout to make sure the tools align in rows and columns */}
        {groupedTools.map((group, groupIndex) => (
          <StyledBox2 key={groupIndex} isExtraSmall={isExtraSmall}>
            {group.map((tool, index) => (
              <StyledBox4 key={index} index={index}>
                <StyledBox3 component="img" src={tool.image} alt={tool.name} />
                
              </StyledBox4>
            ))}
          </StyledBox2>
        ))}
      </Slider>
    </StyledBox>
  );
};

export default ToolCarousel;

const ToolNameTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary
}));

const StyledBox4 = styled(Box)(({ theme, isVisible, index }) => ({
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center', 
      padding: '10px',
      
}));

const StyledBox3 = styled(Box)(({ theme }) => ({
      width: '80px', 
      height: '80px', 
      marginBottom: '5px', 
      display: 'block',
      [theme.breakpoints.down('lg')]: {
        width: '60px', 
        height: '60px', 
      },
}));

const StyledBox2 = styled(Box)(({ theme, isExtraSmall }) => ({
      display: 'flex',
      flexWrap: isExtraSmall ? 'wrap' : 'nowrap', // Allow wrapping on small screens, no wrap on large screens
      justifyContent: 'space-around',
      width: '100%',
}));
  

const StyledBox = styled(Box)(({ theme }) => ({
padding: '2rem 0',
backgroundColor:  theme.palette.background.paper, 
width: '100%', 
overflow: 'hidden',
}));

const NameTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

  

const SecondTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.third,
  textAlign: 'center',
  marginBottom:'1rem',
}));

import Slider from 'react-slick';
import React, { useState, useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
    const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));
  
    const settings = {
      infinite: true,
      speed: 5000,
      slidesToShow: isExtraSmall ? 4 : 14, // Show 2 slides on extra small screens
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      pauseOnHover: true,
    };
  
    const groupedTools = isExtraSmall 
      ? tools.reduce((acc, tool, index) => {
          const groupIndex = Math.floor(index / 2); // Adjust this number to control the number of tools per row
          if (!acc[groupIndex]) acc[groupIndex] = [];
          acc[groupIndex].push(tool);
          return acc;
        }, [])
      : [tools]; // Keep single row for larger screens
  
    return (
      <StyledBox>
        <NameTypography variant="h4" gutterBottom>
          {t('aboutPage.skills.title')}
        </NameTypography>
        <Slider {...settings}>
          {groupedTools.map((group, groupIndex) => (
            <Box key={groupIndex} sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', width: '100%' }}>
              {group.map((tool, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center', 
                    padding: '10px',
                  }}
                >
                  <Box
                    component="img"
                    src={tool.image}
                    alt={tool.name}
                    sx={{ 
                      width: '60px', 
                      height: '60px', 
                      marginBottom: '5px', 
                      display: 'block',
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ fontSize: '0.8rem', color: theme.palette.text.primary }}>{tool.name}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Slider>
      </StyledBox>
    );
  };
  
  export default ToolCarousel;


  

const StyledBox = styled(Box)(({ theme }) => ({
padding: '2rem 0',
backgroundColor:  theme.palette.background.paper, 
width: '100%', 
overflow: 'hidden',
}));

const NameTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Noto Sans, sans-serif',
    fontWeight: '500',
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));
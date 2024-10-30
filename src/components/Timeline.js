import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { slideInRightAnimation, slideInLeftAnimation, slideUpAnimation, fadeInAnimation } from '../styles/animations';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useVisibility } from '../context/VisibilityContext';


const colorsDark = ['#19121d', '#211925', '#19121d', '#211925'];
const colorsLight = ['#f4c9cd', '#E1BFC2', '#f4c9cd', '#E1BFC2'];

const Timeline = () => {
  const { t } = useTranslation();
  const workExperience = t('aboutPage.workExperience.experiences', { returnObjects: true });
  const isArray = Array.isArray(workExperience);
  const [lineY, setLineY] = useState({ top: 0, bottom: 0 });

  const initialExpandedIndexes = [0, 1];
  const [expandedIndex, setExpandedIndex] = useState(initialExpandedIndexes);

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setExpandedIndex((prev) => {
      if (prev.includes(index)) {
        // Jei indeksas jau atidarytas, jį uždarome
        return prev.filter((i) => i !== index);
      } else {
        // Pridėti naują indeksą
        return [...prev, index];
      }
    });
  };
  
  const accordionRefs = useRef([]);
  const { visibleElements } = useVisibility();
  const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const isVisible = visibleElements.has("about-timeline");
    if (isVisible && !hasAnimated) {
      setAnimate(true);
      setHasAnimated(true);
    }
  }, [visibleElements, hasAnimated]);


  const [lineHeights, setLineHeights] = useState(Array(workExperience.length).fill('0px'));

  useEffect(() => {
    const updateLineHeights = () => {
      const dots = document.getElementsByClassName('dot'); // Suraskite visus dot elementus
      const newLineHeights = [...lineHeights]; // Sukuriame naują masyvą
  
      Array.from(dots).forEach((dot, index) => {
        const nextElement = dots[index + 1]; // Gauti kitą elementą
  
        if (dot && nextElement) {
          // Apskaičiuokite aukštį
          const dotBottom = dot.getBoundingClientRect().bottom;
          const nextElementTop = nextElement.getBoundingClientRect().top;
          const heightBefore = nextElementTop - dotBottom;
  
          newLineHeights[index] = `${heightBefore + 30}px`; // Nustatykite atitinkamą aukštį
        } else {
          newLineHeights[index] = '0px'; // Jei kito elemento nėra, nustatykite 0
        }
      });
  
      setLineHeights(newLineHeights); // Nustatykite masyvą
    };
  
    updateLineHeights();
    window.addEventListener('resize', updateLineHeights);
  
    return () => {
      window.removeEventListener('resize', updateLineHeights);
    };
  }, [workExperience]); // Priklausomybė, jei workExperience keičiasi
  
  
  
  
  
  
  
  


  return (
    <StyledTimeline id='about-timeline' className="track-visibility" animate={animate}>
      <NameTypography variant="h2">
        {t('aboutPage.workExperience.title')}
      </NameTypography>
      <SecondTypography variant='body1'>
        {t('aboutPage.workExperience.subtitle')}
      </SecondTypography>
      <StyledTimelineContainer>

        {isArray && workExperience.map((exp, index) => (
          <Box key={index} display="flex" flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'} justifyContent={'center'} alignItems="center">
            <StyledAccordion expanded={expandedIndex.includes(index)} onChange={handleAccordionChange(index)} animate={animate} ref={el => (accordionRefs.current[index] = el)} index={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box>
                  <PrimaryTypography variant='h6'>
                    {exp.title}
                  </PrimaryTypography>
                  <ThirdTypography variant='body1'>
                    {exp.company}
                  </ThirdTypography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <DescriptionTypography variant="subtitle2">
                  {exp.description.join(', ')}
                </DescriptionTypography>
                <SkillsTypography variant="subtitle2" component="div">
                  {exp.skills.map((skill, skillIndex) => (
                    <InnerTypography key={skillIndex} variant="subtitle2">
                      {skill}
                    </InnerTypography>
                  ))}
                </SkillsTypography>
              </AccordionDetails>
            </StyledAccordion>

            <YearDotContainer 
              className={`year-container ${index % 2 === 0 ? 'left' : 'right'}`} 
              index={index}
              isLast={index === workExperience.length - 1} // Pridedame sąlygą paskutiniam elementui
            >
              <StyledDot 
                className={`dot ${index % 2 === 0 ? 'left' : 'right'}`} 
                index={index} 
                isLast={index === workExperience.length - 1} 
              />
                <LineBefore className="line-before" height={lineHeights[index]} index={index} />

              <YearTypography 
                variant='h6' 
                index={index}
              >
                {new Date(exp.startDate).toLocaleString('default', { year: 'numeric', month: 'short' })}
              </YearTypography>
            </YearDotContainer>
          </Box>
        ))}
      </StyledTimelineContainer>
    </StyledTimeline>
  );
};

export default Timeline;

const YearDotContainer = styled(Box)(({ theme, index}) => ({
  display: 'flex',
  flexDirection: 'row', // Horizontaliam išdėstymui
  alignItems: 'center', // Vertikaliai centruoti
  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', // Išdėstyti dešinėje pusėje
  position: 'relative', 
  height: 'auto', 
  width: '232px',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
     width: '160px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100px'
 },
}));


const StyledImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: theme.palette.mode === 'dark' ? '0.1' : '0.1',
  zIndex:'-5',
  opacity:'0.4',
  borderRadius:'10px'
  
}));

const SkillsTypography = styled(Typography)(({ theme }) => ({
  display: 'flex', 
  flexWrap: 'wrap', 
  gap: '8px',
  lineHeight: '1.2', 
  marginTop: '0.5rem', 
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.third,
    lineHeight: 1.2, 
    paddingBottom:'0.5rem'
  }));

const InnerTypography = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgb(206,144,242,0.2)' : 'rgb(121,76,79,0.2)',
    padding: '2px 10px',
    margin:'0.1rem 0',
    borderRadius: '24px',
    color: theme.palette.mode === 'dark' ? '#CE90F2' : '#794C4F',
  }));

  const StyledAccordion = styled(Accordion)(({ theme, index, animate }) => ({
    position: 'relative',
    width: '40%',
    height: 'auto',
    borderRadius: '24px !important', // Suapvalina visus kampus
    background: theme.palette.mode === 'dark' ? colorsDark[index %  colorsDark.length] : colorsLight[index %  colorsLight.length],
    alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
    margin: '2rem 0',
    zIndex: '100',
    // animation: animate && `${index % 2 === 0 ? slideInLeftAnimation : slideInRightAnimation} 2.5s ease both`,
    // animationDelay: animate && `${index * 0.3}s`,
    boxShadow: theme.palette.mode === 'dark' 
        ? '0 7px 6px -2px rgba(0, 0, 0, 0.5), 7px 0 6px -2px rgba(0, 0, 0, 0.5)' 
        : '0 7px 6px -2px rgba(0, 0, 0, 0.2), 7px 0 6px -2px rgba(0, 0, 0, 0.2)',
    
    [theme.breakpoints.down('md')]: {
        width: '40%',
        margin: '1rem 0',
        // transform: index % 2 === 0 ? 'translateX(-8%)' : 'translateX(8%)',
        alignSelf: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0',
  },
    
}));

const PrimaryTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  fontFamily: 'Outfit, sans-serif', 
  color: theme.palette.text.primary,
  marginBottom: '-4px',
  lineHeight: '1.2', 
  [theme.breakpoints.down('sm')]: {
    marginBottom: '-1px',
 },
}));

const ThirdTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '300 !important',
  lineHeight: '1.2', 
  color: theme.palette.text.third,
  marginTop: '0',
}));

const SecondTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.third,
  textAlign: 'center',
  marginBottom:'3rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom:'1rem',
},
}));

const StyledTimeline = styled(Box)(({ theme, animate }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '0 0',
  width: '100%',
  padding: '3rem 0 3rem 0',
  opacity: animate ? 1 : 0, 
  transition: 'opacity 1.5s ease',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 0 0 0',
},
  
}));

const StyledTimelineContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    paddingBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom:'1rem',
      margin:'0',
  },
    
}));

// const StyledLine = styled(Box)(({ theme, top, bottom, animate }) => ({
//   position: 'absolute',
//   left: 'calc(50% - 4px)',
//   width: '8px',
//   height: `calc(${bottom}px - ${top}px)`, // Nustatykite aukštį
//   borderRadius: '50px',
//   backgroundColor: theme.palette.mode === 'dark' ? 'rgb(29,29,29,0.5)' : 'rgb(255,249,242,0.9)',
//   top: top, 
//   bottom: `calc(100% - ${bottom}px)`,
//   animation: animate && `${slideUpAnimation} 2.5s ease forwards`,
//   [theme.breakpoints.down('md')]: {
//       display: 'none',
//   },
// }));

const StyledDot = styled(Box)(({ theme, index, isLast }) => ({
  position: 'relative',
  width: '100px',
  height: '100px',
  backgroundColor: theme.palette.mode === 'dark' ? colorsDark[index %  colorsDark.length] : colorsLight[index %  colorsLight.length],
  border: theme.palette.mode === 'dark' ? colorsDark[index %  colorsDark.length] : colorsLight[index %  colorsLight.length],
  borderRadius: '59% 41% 55% 45% / 48% 59% 41% 52%', // Unified border radius for all dots

  // Horizontal line
  // '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   width: '5px', // Linijos plotis
  //   height: 'auto',
  //   background: theme.palette.mode === 'dark' ? colorsDark[index %  colorsDark.length] : colorsLight[index %  colorsLight.length], 
  //   top: '0',
  //   left: '50%', // Centruoja horizontalioje ašyje
  //   transform: 'translateX(-50%)',
  //   zIndex: -1, // Įsitikinkite, kad linija yra po dotu
  //   display: isLast ? 'none' : 'block',
  // },

  // Vertical line
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '350%', // Ilgis, kad padengtų dotą
    height: '5px', // Linijos aukštis
    background: theme.palette.mode === 'dark' ? colorsDark[index %  colorsDark.length] : colorsLight[index %  colorsLight.length], 
    top: '50%', // Centruoja vertikalioje ašyje
    right: index % 2 === 0 ? '0' : 'none',
    left: index % 2 === 0 ? 'none' : '0',
    transform: 'translateY(-50%)',
    zIndex: -1, // Įsitikinkite, kad linija yra po dotu
    
  },

  [theme.breakpoints.down('md')]: {
    // display:'none'
    width: '80px',
    height: '80px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
 },

}));

const LineBefore = styled(Box)(({ height, theme, index }) => ({
  position: 'absolute',
  width: '5px', // Linijos plotis
  height: height || '0px', // Aukštis gali būti perduotas kaip prop
  backgroundColor: theme.palette.mode === 'dark' ? colorsDark[index % colorsDark.length] : colorsLight[index % colorsLight.length],
  left: index % 2 === 0 ? '78%' : 'none',
  right: index % 2 === 0 ? 'none' : '78%',
  transform: 'translateX(-50%)', // Centruoja horizontaliai
  zIndex: -1,
  top: '100%', // Pradeda nuo dot apatinės dalies
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


const YearTypography = styled(Typography)(({ theme, index }) => ({
  position: 'absolute',
  top: '50%', 
  right: index % 2 === 0 ? '12%' : 'auto', 
  left: index % 2 === 1 ? '12%' : 'auto', 
  transform: 'translateY(-50%)',
  fontWeight: 'bold',
  width:'50px',
  textAlign: 'center', 
  lineHeight: '1',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('md')]: {
    right: index % 2 === 0 ? '7%' : 'auto', 
  left: index % 2 === 1 ? '7%' : 'auto', 
  },
  
}));
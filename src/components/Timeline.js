import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { slideInRightAnimation, slideInLeftAnimation, slideUpAnimation } from '../styles/animations';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import useOnScreen from '../styles/useOnScreen';

const Timeline = () => {
  const { t } = useTranslation();
  const workExperience = t('aboutPage.workExperience.experiences', { returnObjects: true });             //gt reikai useEffect kad atidaryti pirma experienca ant uzkrovimo
  const isArray = Array.isArray(workExperience);
  const [lineY, setLineY] = useState({ top: 0, bottom: 0 });
  
  const accordionRefs = useRef([]);

  const [ref, isVisible] = useOnScreen({ threshold: 0 });

  const calcLineTopBottom = () => {
    if (accordionRefs.current.length > 0) {
      const timelineContainer = accordionRefs.current[0].parentElement.getBoundingClientRect();
      const firstDot = accordionRefs.current[0].querySelector('.dot').getBoundingClientRect();
      const lastDot = accordionRefs.current[accordionRefs.current.length - 1].querySelector('.dot').getBoundingClientRect();

      setLineY({
        top: firstDot.top - timelineContainer.top + firstDot.height / 2, 
        bottom: lastDot.top - timelineContainer.top + lastDot.height / 2, 
      });
    }
  };
  
  

  useEffect(() => {
    calcLineTopBottom();
  }, [workExperience]);

  return (
    <StyledTimeline ref={ref}>
      <NameTypography variant="h2">
        {t('aboutPage.workExperience.title')}
      </NameTypography>
      <SecondTypography variant='body2'>
        I love working! Sometimes even more than eating chocolate...
      </SecondTypography>
      <StyledTimelineContainer>
        <StyledLine top={lineY.top} bottom={lineY.bottom} isVisible={isVisible}/>
        {isArray && workExperience.map((exp, index) => (
          <StyledAccordion key={index} ref={el => (accordionRefs.current[index] = el)} index={index} isVisible={isVisible}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box>
                <PrimaryTypography variant='body1'>
                  {exp.title}
                </PrimaryTypography>
                <ThirdTypography variant='body2'>
                  {exp.company}
                </ThirdTypography>
              </Box>
              <YearTypography variant='body1' className={`year ${index % 2 === 0 ? 'left' : 'right'}`}>
                {new Date(exp.startDate).toLocaleString('default', { year: 'numeric', month: 'short' })}
              </YearTypography>
              <StyledDot className={`dot ${index % 2 === 0 ? 'left' : 'right'}`} />
            </AccordionSummary>
            <AccordionDetails>
            <DescriptionTypography variant="subtitle2">
                {exp.description.join(', ')}
            </Typography>
              <SkillsTypography variant="subtitle2" component="div">
                    {exp.skills.map((skill, index) => (
                        <InnerTypography
                        key={index}
                        variant="subtitle2">
                        {skill}
                        </InnerTypography>
                    ))}
                    </Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </StyledTimelineContainer>
    </StyledTimeline>
  );
};

export default Timeline;

const SkillsTypography = styled(Typography)(({ theme }) => ({
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '8px'
  }));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
    lineHeight: 1.2, 
    paddingBottom:'0.5rem'
  }));

const InnerTypography = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgb(152,94,44,0.2)' : 'rgb(10,130,182,0.2)',
    padding: '2px 10px',
    borderRadius: '24px',
    color: theme.palette.mode === 'dark' ? '#985E2C' : '#0A82B6',
  }));

  const StyledAccordion = styled(Accordion)(({ theme, index, isVisible }) => ({
    width: '40%',
    height: 'auto',
    background: 'rgba(0, 0, 0, 0.02)',  // Permatomas fonas
    alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
    padding: '0',
    animation: isVisible ? `${index % 2 == 0 ? slideInLeftAnimation : slideInRightAnimation} 2s ease forwards` : 'none',
    boxShadow: theme.palette.mode === 'dark' 
  ? '0 7px 6px -2px rgba(0, 0, 0, 0.5), 7px 0 6px -2px rgba(0, 0, 0, 0.5)' 
  : '0 7px 6px -2px rgba(0, 0, 0, 0.2), 7px 0 6px -2px rgba(0, 0, 0, 0.2)',

    '&:last-of-type': {
    borderBottomLeftRadius: '10px', // Užtikrina, kad paskutinis elementas turės apvalius kampus
    borderBottomRightRadius: '10px',
  },
    border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)',  // Šviesus rėmelis
    borderRadius: '10px',  // Švelnūs kampai, kad atrodytų kaip stiklas
    '&::before': {
        content: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30%',
    },
    [theme.breakpoints.down('md')]: {
      width: '40%',
      transform: index % 2 === 0 ? 'translateX(-8%)' : 'translateX(8%)',
    },
}));

const PrimaryTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontFamily: 'Outfit, sans-serif', 
  color: theme.palette.text.primary
}));

const ThirdTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  color: theme.palette.text.primary,
}));

const SecondTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.third,
  textAlign: 'center',
  marginBottom:'3rem',
}));

const StyledTimeline = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '0 0',
  width: '100%',
  padding: '7rem 0 7rem 0',
  
}));

const StyledTimelineContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
 
    paddingBottom: '3rem',
    
}));

const StyledLine = styled(Box)(({theme, top, bottom, isVisible }) => ({
    position: 'absolute',
    left: 'calc(50% - 4px)',
    width: '8px',
    borderRadius: '50px',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgb(29,29,29,0.5)' : 'rgb(255,249,242,0.9)',
    top: top, 
    bottom: `calc(100% - ${bottom}px)`,
    animation: isVisible ? `${slideUpAnimation} 2s ease forwards` : 'none',
  }));

const StyledDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '25px',
  height: '25px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgb(29,29,29,0.9)' : 'rgb(254,249,242,0.9)',
  border: theme.palette.mode === 'dark' ? '5px solid #1D1D1D' : '5px solid #FEF9F2',
  borderRadius: '50%',
  top: 'calc(50% - 12.5px)', 
  transform: 'translateX(-50%)',
  zIndex: 1,
  '&.left': {
    left: '125.5%', 
  },
  '&.right': {
    right: '119.6%', 
  },
  [theme.breakpoints.down('lg')]: {
    '&.right': {
      right: '118%', 
    },
  },
  [theme.breakpoints.down('md')]: {
    '&.left': {
    left: '133%', 
    },
    '&.right': {
      right: '121.5%', 
    },
  },
}));


const NameTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Outfit, sans-serif',
  fontWeight: '600',
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const YearTypography = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%', 
  transform: 'translateY(-50%)',
  fontWeight: 'bold',
  '&.left': {
    left: 'calc(100% + 0.4rem)', 
  },
  '&.right': {
    right: 'calc(100% + 0.4rem)', 
  },
  
  
}));

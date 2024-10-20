import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const Timeline = () => {
  const { t } = useTranslation();
  const workExperience = t('aboutPage.workExperience.experiences', { returnObjects: true });
  const isArray = Array.isArray(workExperience);
  const [lineY, setLineY] = useState({ top: 0, bottom: 0 });
  
  const accordionRefs = useRef([]);

  const calcLineTopBottom = () => {
    if (accordionRefs.current.length > 0) {
      // Get the timeline container's Y position
      const timelineContainer = accordionRefs.current[0].parentElement.getBoundingClientRect();
  
      // Get the first and last dots' Y positions relative to the container
      const firstDot = accordionRefs.current[0].querySelector('.dot').getBoundingClientRect();
      const lastDot = accordionRefs.current[accordionRefs.current.length - 1].querySelector('.dot').getBoundingClientRect();
  
      // Calculate the line positions based on the dots' positions relative to the container
      setLineY({
        top: firstDot.top - timelineContainer.top + firstDot.height / 2,  // Adjusted for the container
        bottom: lastDot.top - timelineContainer.top + lastDot.height / 2, // Adjusted for the container
      });
    }
  };
  
  

  useEffect(() => {
    calcLineTopBottom();
  }, [workExperience]);

  return (
    <StyledTimeline>
      <NameTypography variant="h4" gutterBottom>
        {t('aboutPage.workExperience.title')}
      </NameTypography>
      <StyledTimelineContainer>
        <StyledLine top={lineY.top} bottom={lineY.bottom} />
        {isArray && workExperience.map((exp, index) => (
          <StyledAccordion key={index} ref={el => (accordionRefs.current[index] = el)} index={index}>
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
                {new Date(exp.startDate).getFullYear()}
              </YearTypography>
              <StyledDot className={`dot ${index % 2 === 0 ? 'left' : 'right'}`} />
            </AccordionSummary>
            <AccordionDetails>
            <Typography
                variant="subtitle2"
                sx={{ lineHeight: 1.2, paddingBottom:'0.5rem' }} 
                >
                {exp.description.join(', ')}
            </Typography>
              <Typography variant="subtitle2" component="div" sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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



const InnerTypography = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgb(152,94,44,0.2)' : 'rgb(10,130,182,0.2)',
    padding: '2px 10px',
    borderRadius: '24px',
    color: theme.palette.mode === 'dark' ? '#985E2C' : '#0A82B6',
    fontSize: '14px',
  }));

const StyledAccordion = styled(Accordion)(({ theme, index }) => ({
    width: '40%',
    height: 'auto',
    background: theme.palette.mode === 'dark' ? 'linear-gradient(90deg, #313131 40%, #3D3D3D 100%)' : 'linear-gradient(90deg, #C4E1F6 40%, #93CAF6 100%)',
    alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
    padding: '0',
    boxShadow: theme.palette.mode === 'dark' ? '0 4px 6px -2px rgba(0, 0, 0, 0.5)' : '0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    '&::before': {
        content: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30%',
    },
    [theme.breakpoints.down('md')]: {
      width: '40%',
       transform: index % 2 === 0 ? 'translateX(-8%)' : 'translateX(8%)'
    },

    
}));

const PrimaryTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  color: theme.palette.mode === 'dark' ? '#985E2C' :'#0A82B6'
}));

const ThirdTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  color: theme.palette.text.primary,
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

const StyledLine = styled(Box)(({theme, top, bottom }) => ({
    position: 'absolute',
    left: 'calc(50% - 4px)',
    width: '8px',
    borderRadius: '50px',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgb(10,130,182,0.2)' : '#FFBD73',
    top: top, 
    bottom: `calc(100% - ${bottom}px)`,
    
  }));

const StyledDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '25px',
  height: '25px',
  backgroundColor: theme.palette.mode === 'dark' ? '#85C0DA' : '#FFBD73',
  border: theme.palette.mode === 'dark' ? '5px solid #0A82B6' : '5px solid #FF9D3D',
  borderRadius: '50%',
  top: 'calc(50% - 12.5px)', 
  transform: 'translateX(-50%)',
  zIndex: 1,
  '&.left': {
    left: '125%', 
  },
  '&.right': {
    right: '119.5%', 
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
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '500',
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: '0 0 3rem 0',
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

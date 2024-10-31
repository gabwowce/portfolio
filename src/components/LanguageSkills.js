import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';
import { slideInRightAnimation, slideInLeftAnimation, slideUpAnimation } from '../styles/animations';
import { useVisibility } from '../context/VisibilityContext';

const LanguageSkills = () => {
    const { t } = useTranslation();

    const { visibleElements } = useVisibility();
    const languageSkills = t('aboutPage.languages', { returnObjects: true });

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      const isVisible = visibleElements.has("about-languages");
      if (isVisible) {
          setAnimate(true);
      }
  }, [visibleElements]);

    return (
        <StyledBackgroundBox id="about-languages" className="track-visibility" animate={animate}>
            {/* Title separated from the details */}
            <NameTypography variant="h2" >
                {languageSkills.title}
            </NameTypography>
            <SecondTypography variant='body1'>
                {languageSkills.subtitle}
            </SecondTypography>
            <StyledBox>
                    {Object.entries(languageSkills.details).map(([language, skills], index) => (
                        <StyledSkillBox key={language}>
                            <SecondTypography2 animate={animate} variant="h5"  index={index}>
                                {language.charAt(0).toUpperCase() + language.slice(1)}
                            </SecondTypography2>
                            <StyledBox2>
                                {Object.entries(skills).map(([skill, level]) => (
                                    <StyledProgressContainer animate={animate} key={skill} index={index}>
                                    <StyledCircularProgress variant="determinate" value={level} size={70} level={level} />
                                        <StyledProgressText variant="body1">{level}%</StyledProgressText>
                                        <ThirdTypography variant="body1">{skill.charAt(0).toUpperCase() + skill.slice(1)}</ThirdTypography>
                                    </StyledProgressContainer>
                                ))}
                            </StyledBox2>
                        </StyledSkillBox>
                    ))}
                </StyledBox>
            
        </StyledBackgroundBox>
    );
};

export default LanguageSkills;

const StyledBox2 = styled(Box)(({ theme, isVisible, index }) => ({
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: '1rem' ,
    
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '7rem',
    [theme.breakpoints.down('md')]: {
        gap: '4rem',
      },

    [theme.breakpoints.down('sm')]: {
        gap: '2rem',
    },
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme, level }) => ({
    color: level > 75 ? (theme.palette.mode === 'dark' ? '#6d2531' : '#f2a7b0') : 
           level > 50 ? (theme.palette.mode === 'dark' ? '#50254e' : '#d7aace') : 
           (theme.palette.mode === 'dark' ? '#392660' : '#d2d2fc'),
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
    [theme.breakpoints.down('lg')]: {
        '&::before, &::after': {
            width: '130px', 
        },
        '&::before': {
          left: '-200px', 
        },
        '&::after': {
          right: '-200px', 
        },
      },

      [theme.breakpoints.down('md')]: {

        '&::before, &::after': {
           display:'none'
        },
      },
  }));


const SecondTypography2 = styled(Typography)(({ theme, index, animate }) => ({
    textAlign: 'center',
    color: theme.palette.text.primary,
    animation: animate &&`${slideUpAnimation} 1.5s ease both`,
    animationDelay: animate && `${index * 0.3}s`,
    
  }));

  const ThirdTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.third,
  }));

  const SecondTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.third,
    textAlign: 'center',
    marginBottom:'3rem',
  }));

const StyledBackgroundBox = styled(Box)(({ theme, animate }) => ({
    // width: '100%',
    // background: theme.palette.background.paper,
    // padding: '8rem 0 8rem 0',
    // opacity: animate ? 1 : 0, 
    // transition: 'opacity 1.5s ease',
    // position:'relative'

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

const StyledSkillBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}));

const StyledProgressContainer = styled(Box)(({ theme, index, animate }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1rem',
    position: 'relative',
    animation: animate && `${index % 2 == 0 ? slideUpAnimation : slideUpAnimation} 2s ease both`,
    animationDelay: animate && `${index * 0.3}s`,
}));

const StyledProgressText = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    fontWeight: 'bold',
    top:'25%',
    color: theme.palette.text.primary,
}));

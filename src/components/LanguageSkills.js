import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';
import { slideInRightAnimation, slideInLeftAnimation } from '../styles/animations';
import useOnScreen from '../styles/useOnScreen';

const LanguageSkills = () => {
    const { t } = useTranslation();
    const [ref, isVisible] = useOnScreen({ threshold: 0 });
    // Get the language skills object from the translation
    const languageSkills = t('aboutPage.languages', { returnObjects: true });

    return (
        <StyledBackgroundBox ref={ref}>
            {/* Title separated from the details */}
            <NameTypography variant="h2" align="center" gutterBottom >
                {languageSkills.title}
            </NameTypography>
            <SecondTypography variant='body2'>
            Languages are my passion! I mean programming languages. Who wants to talk when you can write code?
            </SecondTypography>
            <StyledBox>
                {Object.entries(languageSkills.details).map(([language, skills]) => (
                    <StyledSkillBox key={language}>
                        <SecondTypography2 variant="h6">
                            {language.charAt(0).toUpperCase() + language.slice(1)}
                        </SecondTypography2>
                        <StyledBox2>
                            {Object.entries(skills).map(([skill, level]) => (
                                <StyledProgressContainer key={skill}>
                                   <StyledCircularProgress variant="determinate" value={level} size={70} level={level} />
                                    <StyledProgressText variant="body2">{level}%</StyledProgressText>
                                    <ThirdTypography variant="body2">{skill.charAt(0).toUpperCase() + skill.slice(1)}</ThirdTypography>
                                </StyledProgressContainer>
                            ))}
                        </Box>
                    </StyledSkillBox>
                ))}
            </Box>
        </StyledBackgroundBox>
    );
};

export default LanguageSkills;

const StyledBox2 = styled(Box)(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: '1rem' 
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '2rem'
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
  }));


const SecondTypography2 = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.primary,
    
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

const StyledBackgroundBox = styled(Box)(({ theme }) => ({
    width: '100%',
    background: theme.palette.background.paper,
    padding: '8rem 0 8rem 0',
}));

const StyledSkillBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}));

const StyledProgressContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1rem',
    position: 'relative',
});

const StyledProgressText = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    fontWeight: 'bold',
    top:'25%',
    color: theme.palette.text.primary,
}));

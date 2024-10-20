import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';



const LanguageSkills = () => {
    const { t } = useTranslation();

    // Get the language skills object from the translation
    const languageSkills = t('aboutPage.languages', { returnObjects: true });

    return (
        <StyledBackgroundBox>
            {/* Title separated from the details */}
            <NameTypography variant="h4" align="center" gutterBottom>
                {languageSkills.title}
            </NameTypography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {Object.entries(languageSkills.details).map(([language, skills]) => (
                    <StyledSkillBox key={language}>
                        <SecondTypography variant="h6">
                            {language.charAt(0).toUpperCase() + language.slice(1)}
                        </SecondTypography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
                            {Object.entries(skills).map(([skill, level]) => (
                                <StyledProgressContainer key={skill}>
                                    <CircularProgress variant="determinate" value={level} size={70} />
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

const SecondTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

  const ThirdTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.third,
  }));

const NameTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Noto Sans, sans-serif',
    fontWeight: '500',
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: '0 0 3rem 0',
  }));

const StyledBackgroundBox = styled(Box)(({ theme }) => ({
    width: '100%',
    background: theme.palette.background.paper,
    padding: '0',
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

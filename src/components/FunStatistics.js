import React, { useState, useContext, useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 

const statisticsData = [
    { key: 'linesOfCode' },
    { key: 'codeFirstTry' },
    { key: 'bugsSquashed' },
    { key: 'monitorsUsed' },
];

const Statistics = () => {
    const { t } = useTranslation();
    const { themeMode } = useContext(ThemeContext); 
    const theme = useTheme();

    return (
        <StyledBox>
                <NameTypography variant="h2" animate={animate}>
                    {t('aboutPage.stats.title')}
                  </NameTypography>
                  
                <StyledBox>
                    {statisticsData.map((stat) => (
                        <StyledCard key={stat.key}>
                            <CardContent>
                                <Typography variant="h6">{t(`statistics.${stat.key}.title`)}</Typography>
                                <Typography variant="body1">{t(`statistics.${stat.key}.number`)}</Typography>
                            </CardContent>
                        </StyledCard>
                    ))}
                </StyledBox>
        </StyledBox>
    );
};

export default Statistics;

const NameTypography = styled(Typography)(({ theme, animate }) => ({
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: theme.palette.text.primary,
    opacity: animate ? 1 : 0, 
    transition: 'opacity 3.5s ease',
  }));


const StyledCard = styled(Card)(({ theme }) => ({
  mb: 2, 
  width: 300, 
  textAlign: 'center'
 
}));  

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mt: 4,
 
}));  

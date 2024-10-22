import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';

const statisticsData = [
    { key: 'linesOfCode' },
    { key: 'codeFirstTry' },
    { key: 'bugsSquashed' },
    { key: 'monitorsUsed' },
];

const Statistics = () => {
    const { t } = useTranslation();

    return (
        <StyledBox>
            {statisticsData.map((stat) => (
                <StyledCard key={stat.key}>
                    <CardContent>
                        <Typography variant="h6">{t(`statistics.${stat.key}.title`)}</Typography>
                        <Typography variant="body1">{t(`statistics.${stat.key}.number`)}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default Statistics;

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

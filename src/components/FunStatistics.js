import React, { useState, useContext, useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 
import { slideUpAnimation, slideInLeftAnimation } from '../styles/animations'; // Import both animations
import { useVisibility } from '../context/VisibilityContext';

import CodeIcon from '@mui/icons-material/Code';
import ErrorIcon from '@mui/icons-material/Error';
import BugReportIcon from '@mui/icons-material/BugReport';
import MonitorIcon from '@mui/icons-material/Monitor';

const statisticsData = [
    { key: 'linesOfCode', icon: CodeIcon },
    { key: 'codeFirstTry', icon: ErrorIcon },
    { key: 'bugsSquashed', icon: BugReportIcon },
    { key: 'monitorsUsed', icon: MonitorIcon },
];

const Statistics = () => {
    const { t } = useTranslation();
    const { themeMode } = useContext(ThemeContext); 
    const theme = useTheme();
    const { visibleElements } = useVisibility(); // Extract visibleElements from context

    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const isStatsVisible = visibleElements.has("about-stats");
        if (isStatsVisible) setAnimate(true);
    }, [visibleElements]);

    return (
        <StyledBox id="about-stats" className="track-visibility" animate={animate}>
            {/* <NameTypography variant="h2" animate={animate}>
                {t('aboutPage.stats.title')}
            </NameTypography>
             */}
            <StyledBox>
                {statisticsData.map((stat, index) => {
                    const IconComponent = stat.icon;

                    return (
                        <StyledCard key={stat.key} animate={animate} index={index}>
                            <StyledCardContent>

                                <NumberTypography variant="h2">{t(`statistics.${stat.key}.number`)}</NumberTypography>
                                <TitleTypography variant="body1">{t(`statistics.${stat.key}.title`)}</TitleTypography>
                                
                            </StyledCardContent>
                        </StyledCard>
                    );
                })}
            </StyledBox>
        </StyledBox>
    );
};

export default Statistics;



const StyledCardContent = styled(CardContent)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    position:'relative'
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: '300 !important',
  lineHeight: '1.2', 
  color: theme.palette.text.third,
  marginTop: '0',
}));
const NumberTypography = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
  fontFamily: 'Outfit, sans-serif', 
  color: theme.palette.text.primary,
 
}));

const StyledIconComponent = styled(Box)(({ theme }) => ({
    fontSize: "2rem",
    color: theme.palette.text.primary,
    
}));

const NameTypography = styled(Typography)(({ theme, animate }) => ({
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: theme.palette.text.primary,
    opacity: animate ? 1 : 0, 
    transition: 'opacity 3.5s ease',
}));

const StyledCard = styled(Box)(({ theme, animate, index }) => ({
    textAlign: 'center',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    borderRadius: '10px',
    margin: '10px',
    flexBasis: 'calc(25% - 20px)',
    flexGrow: 1,
    minWidth: '200px',
    height: '150px',
    display: 'flex',               
    justifyContent: 'center',       
    alignItems: 'center',
    opacity: animate ? 1 : 0, 
    transition: 'opacity 1.5s ease',


    [theme.breakpoints.down('sm')]: {
        minWidth: '155px',
        height: '120px',
        margin: '4px',
    },
   
}));

const StyledBox = styled(Box)(({ theme, animate }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.paper2,
    padding:'0 5px',
    
}));

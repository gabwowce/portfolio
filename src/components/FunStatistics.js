import React, { useState, useContext, useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 
import { slideInRightAnimation, slideInLeftAnimation } from '../styles/animations'; // Import both animations
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
        <StyledBox id="about-stats" className="track-visibility">
            {/* <NameTypography variant="h2" animate={animate}>
                {t('aboutPage.stats.title')}
            </NameTypography>
             */}
            <StyledBox>
                {statisticsData.map((stat, index) => {
                    const IconComponent = stat.icon;

                    return (
                        <StyledCard key={stat.key} animate={animate} index={index}>
                            <CardContent>
                                <StyledIconComponent as={IconComponent} />
                                <Typography variant="h6">{t(`statistics.${stat.key}.title`)}</Typography>
                                <Typography variant="body1">{t(`statistics.${stat.key}.number`)}</Typography>
                            </CardContent>
                        </StyledCard>
                    );
                })}
            </StyledBox>
        </StyledBox>
    );
};

export default Statistics;

const StyledIconComponent = styled(Box)(({ theme }) => ({
    fontSize: "3rem",
    color: theme.palette.primary.main,
    position: 'absolute',
    left: '50%',
    top: "-50%",
}));

const NameTypography = styled(Typography)(({ theme, animate }) => ({
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: theme.palette.text.primary,
    opacity: animate ? 1 : 0, 
    transition: 'opacity 3.5s ease',
}));

const StyledCard = styled(Card)(({ theme, animate, index }) => ({
    mb: 2, 
    width: '100%', 
    textAlign: 'center',
    animation: animate && `${slideInLeftAnimation} 2.5s ease forwards`,
    animationDelay: animate && `${index * 0.3}s`,
    position: 'relative',
    borderTop: `2px solid gray`, 
    paddingTop: '20px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
}));

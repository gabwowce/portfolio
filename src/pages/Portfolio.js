import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const Portfolio = () => {
    const { t } = useTranslation();
    const projects = t('portfolioPage.projects', { returnObjects: true });

    const ProjectCard = ({ project }) => {
        return (
            <StyledCard>
                <StyledBefore />
                <StyledAfter />
                <CardMedia
                    component="img"
                    image="https://assets.codepen.io/4164355/shoes.png" // Replace with project.image if available
                    alt="Project Image"
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                        {project.description}
                    </Typography>
                    <ToolsContainer>
                        {project.tools.map((tool, index) => (
                            <Chip key={index} label={tool} color="primary" />
                        ))}
                    </ToolsContainer>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        View Project
                    </Button>
                </CardContent>
                <ImageBox>
                    <img src="https://assets.codepen.io/4164355/shoes.png" alt="Project" />
                </ImageBox>
                <ContentBox>
                    <Typography variant="h6">Size</Typography>
                    <SizeContainer>
                        <SizeSpan>38</SizeSpan>
                        <SizeSpan>40</SizeSpan>
                        <SizeSpan>42</SizeSpan>
                    </SizeContainer>
                    <Typography variant="h6">Color</Typography>
                    <ColorContainer>
                        <ColorSpan />
                        <ColorSpan color="#9bdc28" />
                        <ColorSpan color="#03a9f4" />
                        <ColorSpan color="#e91e63" />
                    </ColorContainer>
                </ContentBox>
            </StyledCard>
        );
    };

    return (
        <PageContainer>
            <HeroSection>
                <Typography variant="h2" gutterBottom>{t('portfolioPage.title')}</Typography>
                <Typography variant="body1">{t('portfolioPage.description')}</Typography>
            </HeroSection>

            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mt={4}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </Box>
        </PageContainer>
    );
};

export default Portfolio;

// Styled components

const StyledCard = styled(Card)(({ theme }) => ({
    width: 320,
    height: 450,
    backgroundColor: '#232323',
    color: '#ffffff',
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    textAlign: 'center',
    transition: '0.5s',
    '&:hover': {
        transform: 'translateY(-10px)',
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#9bdc28',
        clipPath: 'circle(150px at 80% 20%)',
        transition: '0.5s ease-in-out',
    },
    '&:hover:before': {
        clipPath: 'circle(300px at 80% -20%)',
    },
}));

const StyledBefore = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#9bdc28',
    clipPath: 'circle(150px at 80% 20%)',
    transition: '0.5s ease-in-out',
    zIndex: 0,
}));

const StyledAfter = styled('div')(({ theme }) => ({
    content: '""',
    position: 'absolute',
    top: '30%',
    left: '-20%',
    fontSize: '12em',
    fontWeight: 800,
    fontStyle: 'italic',
    color: 'rgba(255,255,25,0.05)',
    zIndex: 1,
}));

const ImageBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10000,
    width: '100%',
    height: '220px',
    transition: '0.5s',
    '&:hover': {
        top: '0%',
        transform: 'translateY(0%)',
    },
}));

const ContentBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100px',
    textAlign: 'center',
    transition: '1s',
    zIndex: 10,
    '&:hover': {
        height: '210px',
    },
}));

const ToolsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
}));

const PageContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
}));

const HeroSection = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

const SizeContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
}));

const SizeSpan = styled('span')(({ theme }) => ({
    width: 26,
    height: 26,
    textAlign: 'center',
    lineHeight: '26px',
    fontSize: 14,
    background: '#fff',
    margin: '0 5px',
    borderRadius: 4,
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
        background: '#9bdc28',
    },
}));

const ColorContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
}));

const ColorSpan = styled('span')(({ color = '#ff0' }) => ({
    width: 20,
    height: 20,
    background: color,
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
}));


import React from 'react';
import { Box, Typography, Container, Grid, Button, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useTranslation } from 'react-i18next';

import project1Image1 from '../assets/project1-image1.png';
import project1Image2 from '../assets/project1-image2.png';
import project2Image1 from '../assets/project2-image1.png';
import project2Image2 from '../assets/project2-image2.png';

const Portfolio = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const projects = [
    {
      title: t('portfolioPage.projects.project.title'), 
      description: t('portfolioPage.projects.project.description'),
      images: [project1Image1, project1Image2],
      tools: [
        t('portfolioPage.projects.project.tools.1'),
        t('portfolioPage.projects.project.tools.2'),
        t('portfolioPage.projects.project.tools.3'),
        t('portfolioPage.projects.project.tools.4'),
      ],
      link: "/project/library-management"
    },
    {
      title: t('portfolioPage.projects.project.title'), 
      description: t('portfolioPage.projects.project.description'),
      images: [project2Image1, project2Image2],
      tools: [
        t('portfolioPage.projects.project.tools.1'),
        t('portfolioPage.projects.project.tools.2'),
        t('portfolioPage.projects.project.tools.3'),
        t('portfolioPage.projects.project.tools.4'),
      ],
      link: "/project/real-estate"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          padding: '50px 20px',
          textAlign: 'center',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" sx={{ fontFamily: 'Six Caps, sans-serif' }}>
            {t('portfolioPage.title')}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            {t('portfolioPage.description')}
          </Typography>
        </Box>
      </Box>

      {/* Portfolio Section */}
      <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
        {projects.map((project, index) => (
          <Grid container spacing={4} key={index} sx={{ marginBottom: '50px' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">{project.title}</Typography>
              <Typography variant="body1" sx={{ marginTop: '10px' }}>
                {project.description}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                {t('portfolioPage.toolsTitle')}: {project.tools.join(', ')}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '20px' }}
                href={project.link}
              >
                {t('portfolioPage.viewProject')}
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Carousel>
                {project.images.map((image, imgIndex) => (
                  <Box key={imgIndex} component="img" src={image} alt={project.title} sx={{ width: '100%', height: 'auto' }} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  );
};

export default Portfolio;

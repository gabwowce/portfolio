import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';


import project1Image1 from '../assets/light-phone.png';
import project1Image2 from '../assets/dark-phone.png';
import project2Image1 from '../assets/light-phone.png';
import project2Image2 from '../assets/dark-phone.png';

const Portfolio = () => {
  const { t } = useTranslation();

  // const projects = [
  //   {
  //     title: t('portfolioPage.projects.project.title', 'Default Project Title'),
  //     description: t('portfolioPage.projects.project.description', 'Default Project Description'),
  //     images: [project1Image1, project1Image2],
  //     link: "/project/library-management"
  //   },
  //   {
  //     title: t('portfolioPage.projects.project.title', 'Default Project Title'),
  //     description: t('portfolioPage.projects.project.description', 'Default Project Description'),
  //     images: [project2Image1, project2Image2],
  //     link: "/project/real-estate"
  //   },
  // ];
  

  return (
    <Box sx={{ p: 4 }}>
      {/* {projects.map((project, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Box>
              <Typography variant="h4">{project.title}</Typography>
              <Typography variant="body1">{project.description}</Typography>
            </Box>
            <Button variant="contained" href={project.link}>Plačiau</Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {project.images.map((image, imgIndex) => (
              <img key={imgIndex} src={image} alt={`Project image ${imgIndex + 1}`} style={{ width: '32%' }} />
            ))}
          </Box>
        </Box>
      ))} */}
    </Box>
  );
};

export default Portfolio;

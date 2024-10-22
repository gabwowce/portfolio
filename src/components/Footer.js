import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//npm install @mui/icons-material instaliuoti reikia

export default function Footer() {
  const { t } = useTranslation(); // Kalbų vertimų hooks

  return (
    <StyledBox component="footer">
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="body1">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </Typography>
        </Grid>
        <Grid item>
          <PageLinksBox>
            <Link href="#about" color="inherit" underline="none">
              {t('footer.about')}
            </Link>
            <Link href="#portfolio" color="inherit" underline="none">
              {t('footer.portfolio')}
            </Link>
            <Link href="#contact" color="inherit" underline="none">
              {t('footer.contact')}
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <SocialMediaBox>
            <IconButton color="inherit" component="a" href="https://www.facebook.com/gabriele.tamaseviciute" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/gabrielė-tamaševičiūtė-06712526b" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://github.com/gabwowce" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const SocialMediaBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  gap: 1
}));

const PageLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  gap: 2
}));

const StyledBox = styled(Box)(({ theme }) => ({
  py: 2,
  px: 4,
  mt: 'auto',
  backgroundColor: (theme) => theme.palette.footer.background, 
  color: (theme) => theme.palette.footer.text,
}));

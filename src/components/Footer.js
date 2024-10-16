import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation(); // Kalbų vertimų hooks

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 4,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.footer.background, // Naudojame temoje apibrėžtą spalvą
        color: (theme) => theme.palette.footer.text, // Naudojame temoje apibrėžtą spalvą
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item>
          <Typography variant="body1">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', gap: 2 }}>
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
      </Grid>
    </Box>
  );
}

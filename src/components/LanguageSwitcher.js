// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper
} from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [checked, setChecked] = React.useState(i18n.language === 'en');

  const handleChange = (event) => {
    const lang = event.target.checked ? 'en' : 'lt';
    i18n.changeLanguage(lang);
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          color="primary"
        />
      }
      label={
      <Typography variant="body1">
        {checked ? 'EN' : 'LT'}
      </Typography>
    }
    />
  );
};

export default LanguageSwitcher;

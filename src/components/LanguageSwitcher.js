// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

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
      label={checked ? 'EN' : 'LT'}
    />
  );
};

export default LanguageSwitcher;

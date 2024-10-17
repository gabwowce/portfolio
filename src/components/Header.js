import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Menu, MenuItem, Switch, useMediaQuery } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext'; 
import { useTranslation } from 'react-i18next'; 
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom'; 
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { toggleTheme, themeMode } = useContext(ThemeContext); 
  const { t, i18n } = useTranslation(); 
  const [anchorEl, setAnchorEl] = useState(null); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleMenuClose();
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <StyledAppBar position="fixed"> 
      <StyledToolbar>
        {isMobile && (
          <IconButton color="inherit" onClick={handleMobileMenuOpen}>
            &#9776; {/* Hamburger icon */}
          </IconButton>
        )}

        {/* Centered Menu Items for Larger Screens */}
        <StyledBoxMenu>
          {!isMobile && (
            <>
              <StyledButton component={Link} to="/about">{t('header.about')}</StyledButton>
              <StyledButton component={Link} to="/portfolio">{t('header.portfolio')}</StyledButton>
              <StyledButton component={Link} to="/contact">{t('header.contact')}</StyledButton>
            </>
          )}
        </StyledBoxMenu>

        {/* Mobile Menu Items */}
        {isMobile && mobileMenuOpen && 
            <StyledMobileMenu open={mobileMenuOpen}>
            <IconButton onClick={handleMenuClose} sx={{ alignSelf: 'flex-start', color: 'inherit' }}>
            <CloseIcon /> 
            </IconButton >
            <StyledButton component={Link} to="/about" onClick={handleMenuClose}>{t('header.about')}</StyledButton>
            <StyledButton component={Link} to="/portfolio" onClick={handleMenuClose}>{t('header.portfolio')}</StyledButton>
            <StyledButton component={Link} to="/contact" onClick={handleMenuClose}>{t('header.contact')}</StyledButton>
            </StyledMobileMenu>
        }

        {/* Language Switch and Theme Toggle */}
        <StyledBox>
            <IconButton onClick={handleMenuClick}>
                <LanguageIcon />
            </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={() => changeLanguage('en')}>EN</MenuItem>
            <MenuItem onClick={() => changeLanguage('lt')}>LT</MenuItem>
          </Menu>

          <Switch checked={themeMode === 'dark'} onChange={toggleTheme} />
        </StyledBox>
        
      </StyledToolbar>
    </StyledAppBar>
  );
}


const StyledAppBar = styled(AppBar)(({ theme }) => ({
    transition: 'background-color 0.3s ease, color 0.3s ease',
}));
  
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));
  
const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    fontSize: '1rem', 
    transition: 'color 0.3s ease',
    '&:hover': {
        backgroundColor: theme.palette.background.hover
    },
}));
  
const StyledBoxMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center', 
    flexGrow: 1,
}));
  
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));
  
const StyledMobileMenu = styled(Box)(({ theme, open }) => ({
    position: 'absolute',
    color: theme.palette.text.primary,
    top: '0',
    left: open ? '0' : '-100%', // Move off-screen when closed
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    display: 'flex',
    flexDirection: 'column', 
    padding: theme.spacing(1),
    zIndex: 1000, 
    transition: 'left 0.3s ease', // Smooth transition
}));

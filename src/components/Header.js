import React, { useState, useContext, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Menu, MenuItem, Switch, useMediaQuery } from '@mui/material';
import { slideDownAnimation } from '../styles/animations';
import { ThemeContext } from '../context/ThemeContext'; 
import { useTranslation } from 'react-i18next'; 
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import { Link, useLocation } from 'react-router-dom'; 
import LanguageSwitcher from './LanguageSwitcher';
import { useVisibility } from '../context/VisibilityContext';

export default function Header() {
  const { toggleTheme, themeMode } = useContext(ThemeContext); 
  const { t, i18n } = useTranslation(); 
  const [anchorEl, setAnchorEl] = useState(null); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const { visibleElements } = useVisibility();
  const [animate, setAnimate] = useState(false);
  const location = useLocation(); 

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
    <StyledAppBar position="fixed" id='header'> 
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
              <StyledLanguageIcon />
            </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ zIndex: 999999}}>
            <MenuItem onClick={() => changeLanguage('en')}>EN</MenuItem>
            <MenuItem onClick={() => changeLanguage('lt')}>LT</MenuItem>
          </Menu>

          <StyledSwitch checked={themeMode === 'dark'} onChange={toggleTheme}/>
        </StyledBox>
        
      </StyledToolbar>
    </StyledAppBar>
  );
}

const StyledSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.switch.thumb
  },
}));

const StyledLanguageIcon = styled(LanguageIcon)(({ theme }) => ({
  color: theme.palette.switch.thumb,
  width:'2rem',
  height:'2rem'
}));


const StyledAppBar = styled(AppBar)(({ theme, animate }) => ({
  position: 'fixed',
  top: '1rem', 
  left: '2rem', 
  right: '2rem', 
  borderRadius: '24px', 
  width: 'calc(100% - 4rem)',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)', 
  backdropFilter: 'blur(10px)', 
  transition: 'background-color 0.3s ease, color 0.3s ease',
  boxShadow: theme.shadows[10], 
  zIndex: 99999, 
  animation: `${slideDownAnimation} 2.5s ease forwards`,
}));

  
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem', 
}));
  
const StyledButton = styled(Button)(({ theme }) => ({
    fontFamily: 'Outfit, sans-serif', 
    fontWeight:'600',
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
    left: open ? '0' : '-100%', 
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    display: 'flex',
    flexDirection: 'column', 
    padding: theme.spacing(1),
    zIndex: 1000, 
    transition: 'left 0.3s ease', 
}));

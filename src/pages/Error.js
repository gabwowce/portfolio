import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ErrorPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <StyledContainer>
      <StyledBox sx={{ p: 4, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {t('error.text')}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleGoHome}
          sx={{ mt: 3 }}
        >
          {t('error.btn')}
        </Button>
      </StyledBox>
    </StyledContainer>
  );
}

export default ErrorPage;

const StyledBox = styled(Box)(({ theme, animate }) => ({
  textAlign: 'center', 
  marginTop: '10vh'
  
}));

const StyledContainer = styled(Container)(({ theme, animate }) => ({
  textAlign: 'center', 
  marginTop: '10vh'
  
}));

import React, { useContext, useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Box, TextField, Button } from '@mui/material';
import { slideInRightAnimation, slideInLeftAnimation, slideUpAnimation } from '../styles/animations';
import { blue, green } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 
import starImage from '../assets/stars2.png';
import { fadeInAnimation } from '../styles/animations';
import { useVisibility } from '../context/VisibilityContext';

const ChatCards = () => {
    const { visibleElements } = useVisibility();
    const { t } = useTranslation();
    const messages = t('messages', { returnObjects: true });
    const { themeMode } = useContext(ThemeContext); 
    const languageSkills = t('aboutPage.languages', { returnObjects: true });
    const chatMessages = {
        chat1: messages.filter((msg) => msg.sender === 'Rusų kalba' || msg.sender === 'Russian'),
        chat2: messages.filter((msg) => msg.sender === 'Lietuvių kalba' || msg.sender === 'Lithuanian'),
        chat3: messages.filter((msg) => msg.sender === 'Anglų kalba' || msg.sender === 'English')
    };
    

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      const isVisible = visibleElements.has("Styled-Chat-Container");
      if (isVisible) {
          setAnimate(true);
      }
  }, [visibleElements]);

    return (
        <StyledContainer className='custom-container' animate={animate}>
        <NameTypography variant="h2" animate={animate}>
                {languageSkills.title}
            </NameTypography>
            <SecondTypography variant='body1' animate={animate}> 
                {languageSkills.subtitle}
            </SecondTypography>
            <StyledChatRow>
            
            {['chat1', 'chat2', 'chat3'].map((chatId, index) => (
                <StyledChatContainer key={chatId} index={index} className="track-visibility" id="Styled-Chat-Container" animate={animate}>
                   
                 {chatMessages[chatId].map((msg) => (
                        <StyledHeaderBox key={msg.id}> {/* Pridėkite unikalų raktą */}
                            <StyledAvatar textItem={msg.text[0]}> {/* Naudokite tik pirmą textItem, kad gautumėte avatarą */}
                                {msg.sender.charAt(0)}
                            </StyledAvatar>
                            <StyledBox>
                                <Typography variant='body1' sx={{fontFamily: 'Outfit, sans-serif'}}>
                                    {msg.sender}
                                </Typography>
                                <Typography variant='body2'>
                                    Active 1h ago
                                </Typography>
                            </StyledBox>

                            
                        </StyledHeaderBox>
                    ))}
                    <StyledCard>
                        
                    <CardContent>
                        <Box display="flex" flexDirection="column" gap={2}>
                            {chatMessages[chatId].map((msg) => (
                                msg.text.map((textItem, index) => (
                                    <StyledMessage key={index} isSent={textItem.type === 'sent'}>
                                       
                                        
                                        <StyledTextBox ml={2} display="inline-block" isSent={textItem.type === 'sent'}>
                                            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>{textItem.content}</Typography>
                                        </StyledTextBox>
                                    </StyledMessage>
                                ))
                            ))}
                        </Box>
                    </CardContent>
                    </StyledCard>
                    <StyledInputContainer>
                        <StyledTextField
                            variant="outlined"
                            fullWidth
                            placeholder="Type a message..."
                        />
                        <StyledButton variant="contained" color="primary">
                            Send
                        </StyledButton>
                    </StyledInputContainer>
                </StyledChatContainer>
            ))}
        </StyledChatRow>
        </StyledContainer>
        
    );
};

export default ChatCards;

// const StyledContainer = styled(Box)(({ theme }) => ({
//     width: '100%',
//     position: 'relative',
//     display: 'flex',
//     flexDirection: 'column',
//     alignSelf: 'center',
//     paddingBottom: '3rem',
//     paddingTop:'3rem',
//     [theme.breakpoints.down('sm')]: {
//       marginBottom:'1rem',
//       margin:'0',
//   },
    
// }));

const StyledContainer = styled(Box)(({ theme, animate }) => ({
    display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '0 0',
  width: '100%',
  padding: '3rem 0 3rem 0',
  opacity: animate ? 1 : 0, 
  transition: 'opacity 1.5s ease',

}));

const NameTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: theme.palette.text.primary,
    position: 'relative', 
    marginBottom:'5px',
  
    '&::before, &::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '50%', 
      width: '200px', 
      height: '1px', 
      backgroundColor: theme.palette.text.primary, 
    },
    '&::before': {
      left: '-250px', 
    },
    '&::after': {
      right: '-250px', 
    },
    [theme.breakpoints.down('lg')]: {
        '&::before, &::after': {
            width: '130px', 
        },
        '&::before': {
          left: '-200px', 
        },
        '&::after': {
          right: '-200px', 
        },
      },

      [theme.breakpoints.down('md')]: {

        '&::before, &::after': {
           display:'none'
        },
      },
  }));

  const SecondTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.third,
    textAlign: 'center',
    marginBottom:'3rem',
  }));

const StyledImage = styled('img')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: theme.palette.mode === 'dark' ? '0.1' : '0.1',
    zIndex: '-5',
    opacity:'0.4',
    borderRadius:'10px'
  }));
  


const StyledBox = styled(Box)(({ theme,textItem }) => ({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    padding:'0 1rem',
    color: theme.palette.mode === 'dark' ? 'white' : 'black',
}));

const StyledHeaderBox = styled(Box)(({ theme }) => ({
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:'0.6rem 1rem',
    backgroundColor: theme.palette.mode === 'dark' ? "rgba(0, 0, 0, 0.6)" : "rgba(235, 229, 220, 0.9)", 
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px'
}));


const StyledTextBox = styled(Box)(({ theme, isSent }) => ({
    display: 'inline-block',
    background: 'transparent',
    padding: '0.7rem 1rem',
    marginLeft:'0.3rem',
    maxWidth: '80%',
    borderRadius: '24px',
    borderBottomRightRadius: isSent ? 0 : '24px',
    borderBottomLeftRadius: isSent ? '24px' : 0,
    background: isSent 
        ? theme.palette.mode === 'dark' ? 'rgb(206,144,242,0.2)' : 'rgb(228,76,131,0.2)'
        : theme.palette.mode === 'dark' 
            ? 'rgba(0, 0, 0, 0.6)' 
            : 'rgba(235, 229, 220, 0.9)',
    color: isSent ?  theme.palette.mode === 'dark' ? 'white' : 'black' : theme.palette.mode === 'dark' ? 'white' : 'black',
    fontWeight:'500',
    fontFamily: 'Outfit, sans-serif', 
    position:'relative',
    // '&::after': {
    //     content: '""',
    //     position: 'absolute',
    //     bottom: '6px',
    //     left: isSent ? 'auto' : '-4px',
    //     right: isSent ? '-4px' : 'auto',
    //     width: 0,
    //     height: 0,
    //     borderLeft: isSent ? '10px solid transparent' : '10px solid transparent',
    //     borderRight: isSent ? '10px solid transparent' : '10px solid transparent',
    //     borderTop: isSent ? `10px solid rgb(206,144,242,0.2)` : theme.palette.mode === 'dark' ? `10px solid rgba(0, 0, 0, 0.6)` : `10px solid rgba(235, 229, 220, 0.9)`,
    //     transform: isSent ? 'translateY(50%) rotate(90deg)' : 'translateY(50%) rotate(270deg)', // Rotacija 90 laipsnių
       
    // },
}));


const StyledAvatar = styled(Avatar)(({ theme,textItem }) => ({
    background: theme.palette.mode === 'dark' ? '#CE90F2' : '#E44C83',
    borderRadius: '50px'
}));

const StyledCard = styled(Card)(({ theme }) => ({
    
    background: 'transparent',
    boxShadow:'none'
}));



const StyledChatRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center', 
    width: '100%',
    height:'auto',
    margin:"3rem 0",
    gap:'3rem',
    flexWrap:'wrap',
    // gap:"3rem"
    [theme.breakpoints.down('lg')]: {
        gap:'2rem',
    },
}));

const StyledChatContainer = styled(Box)(({ theme, animate, index }) => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: 'auto', 
    maxWidth: '460px',
    // minWidth:'450px',
    background: theme.palette.mode === 'dark' ? 'linear-gradient(45deg, #1d1d1d, #181818)' : 'linear-gradient(45deg, #FEF9F2, #F6F0E7)',
    borderRadius: "10px",
    position: 'relative',
    boxShadow: theme.palette.mode === 'dark' 
        ? '0 7px 6px -2px rgba(0, 0, 0, 0.5), 7px 0 6px -2px rgba(0, 0, 0, 0.5)' 
        : '0 7px 6px -2px rgba(0, 0, 0, 0.2), 7px 0 6px -2px rgba(0, 0, 0, 0.2)',
    opacity: animate ? 1 : 0, 
    transition: animate ? `opacity 2.5s ease ${index * 0.3}s` : 'none',

    // Add media query
    [theme.breakpoints.down('lg')]: {
        maxWidth: '430px',
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '90%',
    },
}));

const StyledMessage = styled(Box)(({ isSent }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: isSent ? 'flex-end' : 'flex-start',
    margin: '8px 0',
    flexDirection: 'row',
    
}));


const StyledInputContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
    backgroundColor: theme.palette.mode === 'dark' ? "rgba(0, 0, 0, 0.6)" : "rgba(235, 229, 220, 1)", 
    borderBottomLeftRadius:'10px',
    borderBottomRightRadius:'10px'
  
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    flexGrow: 4,
    background: 'transparent', 
  
    '& .MuiInputBase-input': { 
        padding: '1rem 0 1rem 1rem',           
        border: 'none',         
        background: 'transparent', 
        outline: 'none',        
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',         
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none',         
    },
}));


const StyledButton = styled(Button)(({ theme }) => ({
    flexGrow:1,
    borderRadius:'10px',
    margin:'0 0.6rem',
    color: theme.palette.mode === 'dark' ? "rgba(0, 0, 0, 0.6)" : "rgba(235, 229, 220, 0.9)", 
    backgroundColor:theme.palette.mode === 'dark' ? '#CE90F2' : '#E44C83',
    transition: 'color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
    
    '&:hover': {
        backgroundColor: theme.palette.background.hover,
        boxShadow: theme.shadows[4], 
        transform: 'scale(1.05)',
    },
}));
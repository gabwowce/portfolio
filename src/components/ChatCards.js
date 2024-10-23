import React, { useContext, useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box, TextField, Button } from '@mui/material';
import { blue, green } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 
import starImage from '../assets/stars2.png';


const ChatCards = () => {
    const { t } = useTranslation();
    const messages = t('messages', { returnObjects: true });
    const { themeMode } = useContext(ThemeContext); 
    
    const chatMessages = {
        chat1: messages.filter((msg) => msg.sender === 'Draugas'),
        chat2: messages.filter((msg) => msg.sender === 'Mama'),
        chat3: messages.filter((msg) => msg.sender === 'Tetis')
    };

    return (
        <>
        <NameTypography variant="h2">
                Fun Chats From Developer Life
            </NameTypography>
            <SecondTypography variant='body1'>
                Kad nepavargtumete scrollinti - pasijuokite
            </SecondTypography>
            <StyledChatRow>
            
            {['chat1', 'chat2', 'chat3'].map((chatId) => (
                <StyledChatContainer key={chatId}>
                    <StyledImage src={starImage} alt="Stars" />
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
        </>
        
    );
};

export default ChatCards;


const NameTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: theme.palette.text.primary,
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
    backgroundColor: theme.palette.mode === 'dark' ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.85)", 
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px'
}));


const StyledTextBox = styled(Box)(({ theme, isSent }) => ({
    display: 'inline-block',
    background: 'transparent', // Nustatykite norimą foną
    padding: '0.7rem 1rem',
    marginLeft:'0.3rem',
    maxWidth: '80%',
    borderRadius: '24px',
    background: isSent 
        ? 'linear-gradient(to right, rgba(230, 100, 101, 0.8), rgba(145, 152, 229, 0.95))' 
        : theme.palette.mode === 'dark' 
            ? 'rgba(0, 0, 0, 0.6)' 
            : 'rgba(255, 255, 255, 0.85)',
    color: isSent ?  theme.palette.mode === 'dark' ? 'white' : 'black' : theme.palette.mode === 'dark' ? 'white' : 'black',
    fontWeight:'500',
    fontFamily: 'Outfit, sans-serif', 
    position:'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '6px',
        left: isSent ? 'auto' : '-4px',
        right: isSent ? '-4px' : 'auto',
        width: 0,
        height: 0,
        borderLeft: isSent ? '10px solid transparent' : '10px solid transparent',
        borderRight: isSent ? '10px solid transparent' : '10px solid transparent',
        borderTop: isSent ? `10px solid rgba(145, 152, 229, 1)` : theme.palette.mode === 'dark' ? `10px solid rgba(0, 0, 0, 0.6)` : `10px solid rgba(255, 255, 255, 0.85)`,
        transform: isSent ? 'translateY(50%) rotate(90deg)' : 'translateY(50%) rotate(270deg)', // Rotacija 90 laipsnių
       
    },
}));


const StyledAvatar = styled(Avatar)(({ theme,textItem }) => ({
    background: theme.palette.mode === 'dark' ? '#50254e' : '#d7aace',
    borderRadius: '50px'
}));

const StyledCard = styled(Card)(({ theme }) => ({
    
    background: 'transparent',
    boxShadow:'none'
}));



const StyledChatRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center', 
    flexWrap:'wrap',
    width: '100%',
    height:'auto',
    margin:"3rem 0",
    gap:"1rem"
}));

const StyledChatContainer = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: 'auto', 
    maxWidth:'370px',
    background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.4)',
    borderRadius:"10px",
    position:'relative',
    boxShadow: theme.palette.mode === 'dark' 
  ? '0 7px 6px -2px rgba(0, 0, 0, 0.5), 7px 0 6px -2px rgba(0, 0, 0, 0.5)' 
  : '0 7px 6px -2px rgba(0, 0, 0, 0.2), 7px 0 6px -2px rgba(0, 0, 0, 0.2)',
    
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
    backgroundColor: theme.palette.mode === 'dark' ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.85)", 
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
    color: theme.palette.text.primary,
    backgroundColor:'rgba(230, 100, 101, 0.8)',
    transition: 'color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
    
    '&:hover': {
        backgroundColor: theme.palette.background.hover,
        boxShadow: theme.shadows[4], // Pridėkite šešėlį ant hover
        transform: 'scale(1.05)', // Šiek tiek padidinkite mygtuką ant hover, kad sukurtumėte efekto jausmą
    },
}));
import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { blue, green } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext'; 

const ChatCard = () => {
    const { t } = useTranslation();
    const messages = t('messages', { returnObjects: true });

    const { themeMode } = useContext(ThemeContext); 
    const theme = useTheme();

    return (
        <StyledBox>
            {messages.map((msg) =>
                msg.text.map((textItem, index) => (
                    <StyledCard key={`${msg.id}-${index}`}>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <StyledAvatar>
                                    {msg.sender.charAt(0)}
                                </Avatar>
                                <Box ml={2}>
                                    <Typography variant="subtitle2">{msg.sender}</Typography>
                                    <Typography variant="body1">{textItem.content}</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))
            )}
        </Box>
    );
};

export default ChatCard;

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  bgcolor: textItem.type === 'sent' ? green[500] : blue[500]
 
})); 

const StyledCard = styled(Card)(({ theme }) => ({
  mb: 2, 
  bgcolor: textItem.type === 'sent' ? green[100] : blue[100] 
 
})); 

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 500,
  mx: 'auto', 
  mt: 4
 
}));  

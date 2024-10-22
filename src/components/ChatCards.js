import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { blue, green } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

const ChatCard = () => {
    const { t } = useTranslation();
    const messages = t('messages', { returnObjects: true });

    return (
        <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto', mt: 4 }}>
            {messages.map((msg) =>
                msg.text.map((textItem, index) => (
                    <Card key={`${msg.id}-${index}`} sx={{ mb: 2, bgcolor: textItem.type === 'sent' ? green[100] : blue[100] }}>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <Avatar sx={{ bgcolor: textItem.type === 'sent' ? green[500] : blue[500] }}>
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

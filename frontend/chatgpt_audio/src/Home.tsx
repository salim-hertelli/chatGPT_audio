import React from 'react';
import logo from './logo.svg';
import Box from '@mui/material/Box';
import AudioRecorder from './AudioRecorder';

function Chat() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100vh', backgroundColor: '#2A2D34' }}>
      <AudioRecorder />
    </Box>
  );
}

export default Chat;

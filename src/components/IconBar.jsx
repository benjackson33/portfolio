import React from 'react';
import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function IconBar () {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
        padding: '0px',
        backgroundColor: '#44156A',
      }}
    >
      <IconButton
        aria-label="GitHub"
        component="a"
        href="https://github.com/benjackson33"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'white' }}
      >
        <GitHub />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        component="a"
        href="https://www.linkedin.com/in/benjacksonsoftware/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'white' }}
      >
        <LinkedIn />
      </IconButton>
    </Box>
  );
};



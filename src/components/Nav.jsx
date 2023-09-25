import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Button, Toolbar } from '@mui/material';



  const handleEmailClick = () => {
    const recipient = 'benjacksonsmail@gmail.com';
    const subject = 'Working with you';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  }



const Nav = () => {

  const handleEmailClick = () => {
    const recipient = 'benjacksonsmail@gmail.com';
    const subject = 'Working with you';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  }

  const pdfUrl = "https://drive.google.com/file/d/1S7EK3McZAOBjmKyfvKO1PhWQWXOy0y8r/view?usp=sharing"

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
          ben jackson.
        </Typography>
        <div>
          <Button href={pdfUrl} target="_blank" rel="noopener noreferrer" sx={{fontWeight: 'bold'}} color="inherit">CV</Button>
          
          <Button onClick={handleEmailClick} sx={{fontWeight: 'bold'}} color="inherit">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

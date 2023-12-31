import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Skill.css';

export default function Skills() {
    const images = [
        './logos/javascript.svg',
        './logos/html-5.svg',
        './logos/css-3.svg',
        './logos/react.svg',
        './logos/expressjs-icon.svg',
        './logos/nodejs-icon.svg',
        './logos/postgresql.svg',
        './logos/material-ui.svg',
        './logos/svelte-icon.svg',
    ];

    return (
        <>
            <Typography variant='h2' style={{ textAlign: 'right', margin: '1rem', marginBottom: 50 }}>
                tech skills.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={10}>
                    {images.map((image, index) => (
                        <Grid item key={index}>
                            <div className='img-container'>
                                <img className='skill-img' src={image} alt={`Skill ${index + 1}`} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

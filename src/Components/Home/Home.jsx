import { Box, Container, Grid, Input, InputLabel, Paper, TextField } from '@mui/material';
import React from 'react';  
import BlogFeed from './BlogFeed/AddPost/BlogFeed';
import Issues from './Issues/Issues';

const Home = () => {
    return (
        <Container maxWidth="lg" sx={{mt:2}}>
            <Grid container spacing={2} sx={{ pt: 10 }}>
                <Grid item xs={8} sx={{}}>
                    <Box sx={{ px: 2  }}>
                        <BlogFeed /> 
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{}} >
                    <Box sx={{ position: 'fixed',width:'24rem'}}>
                    <Issues/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
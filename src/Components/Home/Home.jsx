import { Box, Container, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import BlogFeed from './BlogFeed/BlogFeed';

const Home = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={8}>
                    <Box sx={{ px: 2 }}>
                        <BlogFeed/>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ p: 2 }}>
                        <h2>second half</h2>
                        <input type="file" style={{
                            border:'none'
                        }} />
                        <TextField type='file' />

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
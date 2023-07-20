import { Box, Container, FormControl, Grid, Input, InputLabel, Paper, TextField } from '@mui/material';
import React from 'react';
import BlogFeed from './BlogFeed/BlogFeed';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

const Home = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={8}>
                    <Box sx={{ px: 2 }}>
                        <BlogFeed />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ p: 2 }}>
                        <h2>second half</h2>
                        <input type="file" style={{
                            border: 'none'
                        }} />
                        <TextField type='file' />


                        <hr />
                        <br />
                        <Box>
                            <InputLabel htmlFor="input-with-icon-adornment">
                            <InsertPhotoOutlinedIcon />
                            </InputLabel>
                            <Input style={{ visibility: 'hidden' }}
                                id="input-with-icon-adornment" type='file' variant='outlined' />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
import { Box, Container, Grid, Input, InputLabel, Paper, TextField } from '@mui/material';
import React from 'react'; 
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'; 
import BlogFeed from './BlogFeed/AddPost/BlogFeed';

const Home = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} sx={{ pt: 9 }}>
                <Grid item xs={8} sx={{}}>
                    <Box sx={{ px: 2  }}>
                        <BlogFeed /> 
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{}} >
                    <Box sx={{ position: 'fixed',width:'24rem'}}>
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
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
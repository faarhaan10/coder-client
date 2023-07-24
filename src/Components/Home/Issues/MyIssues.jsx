import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const MyIssues = () => {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} sx={{ mt:.4}}>
                <Grid item xs={6}>
                    <Box style={{
                        width: '100%',
                        height: '100px',
                        background: '#ddd',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin:'0 auto'
                    }}>
                        <Typography variant="h3">
                            2
                        </Typography>
                        <Typography variant="caption">
                            Inprogress
                        </Typography>
                    </Box>
                </Grid>
                
                <Grid item xs={6}>
                    <Box style={{
                        width: '100%',
                        height: '100px',
                        background: '#ddd',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin:'0 auto'
                    }}>
                        <Typography variant="h3">
                            2
                        </Typography>
                        <Typography variant="caption">
                            Inprogress
                        </Typography>
                    </Box>
                </Grid>
                
                <Grid item xs={6}>
                    <Box style={{
                        width: '100%',
                        height: '100px',
                        background: '#ddd',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin:'0 auto'
                    }}>
                        <Typography variant="h3">
                            2
                        </Typography>
                        <Typography variant="caption">
                            Inprogress
                        </Typography>
                    </Box>
                </Grid>
                
                <Grid item xs={6}>
                    <Box style={{
                        width: '100%',
                        height: '100px',
                        background: '#ddd',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin:'0 auto'
                    }}>
                        <Typography variant="h3">
                            2
                        </Typography>
                        <Typography variant="caption">
                            Inprogress
                        </Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </>
    );
};

export default MyIssues;
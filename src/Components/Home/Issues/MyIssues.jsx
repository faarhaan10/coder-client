import { Box, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useProgressCount from '../../../hooks/useProgressCount';
import useProgress from '../../../hooks/useProgress';

const MyIssues = () => {
    const {user}=useContext(AuthContext)
    // const { data, loading } = useProgressCount();
    // // const [progress, setProgress] = useState({});
    // console.log(data);
    // useEffect(() => {
    //     setProgress({...data});
    // },[user.email,loading])
    const {progress,progressLoading}=useProgress()


    if(progressLoading) return <h1>loading...</h1>
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
                            {(!user.isAdmin&&user.email)?progress?.totalPosts:progress?.unresolvedCount ||0}
                            
                        </Typography>
                        <Typography variant="caption">
                        {(!user.isAdmin&&user.email)?'My Post':'Unresolved'}
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
                        {(!user.isAdmin&&user.email)?progress?.resolvedCount:progress?.inProgressCount || 0}
                        </Typography>
                        <Typography variant="caption">
                            {(!user.isAdmin&&user.email) ? 'Resolved' : 'Inprogress'}
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
                           
                        {(!user.isAdmin&&user.email)?progress?.unresolvedCount:progress?.investigateCount ||0}
                        </Typography>
                        <Typography variant="caption">
                            {(!user.isAdmin&&user.email)?'Unresolved':'Investigate'}
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
                            
                        {(!user.isAdmin&&user.email)?progress?.rejectCount:progress?.testingCount ||0}
                        </Typography>
                        <Typography variant="caption">
                            {(!user.isAdmin&&user.email)?'Rejected':'Testing'}
                        </Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </>
    );
};

export default MyIssues;
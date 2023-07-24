import { Paper, Typography } from '@mui/material';
import React from 'react';
import Issue from './Issue';
import MyIssues from './MyIssues';
import useAxios from '../../../hooks/useAxios';

const Issues = () => {

    const { data:issues=[], loading } = useAxios('get', 'post/trending');
     return (
        <>
            <Paper sx={{ p: 2.5 }}>
                <Typography variant='h6' style={{padding:0}}>
                    Trending Issues
                </Typography>
                <hr />
                {
                    issues?.map(issue => <Issue key={'issue'+issue._id} issue={issue} />)
                }
            </Paper>
            <Paper sx={{ p: 2.5, mt:2 }}>
                <Typography variant='h6'>
                    My Progress
                </Typography>
                <hr />
                <MyIssues/>
            </Paper>
        </>
    );
};

export default Issues;
import { Paper, Typography } from '@mui/material';
import React from 'react';
import Issue from './Issue';
import MyIssues from './MyIssues';

const Issues = () => {
    return (
        <>
            <Paper sx={{ p: 1 }}>
                <Typography variant='h6' style={{padding:0}}>
                    Top Issues
                </Typography>
                <hr />
                {
                    [...Array(5)].map(issue=><Issue/>)
                }
            </Paper>
            <Paper sx={{ p: 1, mt:2 }}>
                <Typography variant='h6'>
                    My Issues
                </Typography>
                <hr />
                <MyIssues/>
            </Paper>
        </>
    );
};

export default Issues;
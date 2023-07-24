import { Paper, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Issue from './Issue';
import MyIssues from './MyIssues';
import useAxios from '../../../hooks/useAxios';
import { AuthContext } from '../../../context/AuthProvider';

const Issues = () => {
const {user}=useContext(AuthContext)
    const { data: issues = [] } = useAxios('get', 'post/trending');
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
                    {(!user.isAdmin&&user.email)?'My':'Overall'} Progress
                </Typography>
                <hr />
                <MyIssues/>
            </Paper>
        </>
    );
};

export default Issues;

import React, { useContext, useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import { AuthContext } from '../../../../context/AuthProvider';
import Blogs from '../../Blogs/Blogs';
import useAxios from '../../../../hooks/useAxios';
import PostTab from '../PostTab/PostTab';
import Loading from '../../../Shared/Loading';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';
import useBlogs from '../../../../hooks/useBlogs';

const BlogFeed = () => {
    const { user, loading } = useContext(AuthContext);
    const [value, setValue] = React.useState('all');
    const [query, setQuery] = React.useState('');
    const [filter, setFilter] = React.useState('') 
  
    const { blogs, blogsRefetch,blogsLoading } = useBlogs(query, filter);
    const handleChange = (e, newValue) => {
        setFilter('')
        setValue(newValue); 
    };

    if (loading) return <Loading />

    return (
        <>
            {
                user?.email && <>
                    <CreatePost user={user} blogRefetch={blogsRefetch} />
                    <PostTab handleChange={handleChange} value={value} handleQuery={setQuery} handleFilter={setFilter} />
                </>
            }
            {
               blogsLoading&& <Box sx={{height:200, display: 'flex',justifyContent:'center',alignItems:'center' }}>
                    <CircularProgress />
                    </Box>
            }
            <Blogs blogs={blogs} loading={loading}/>
            {!blogs?.length && <Paper sx={{
                    p: 2,
                    mb: 2,
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant='h5'>
                        No Posts Found
                    </Typography>

                </Paper>
            }
            
        </>
    );
};

export default BlogFeed;

import React, { useContext, useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import { AuthContext } from '../../../../context/AuthProvider';
import Blogs from '../../Blogs/Blogs';
import useAxios from '../../../../hooks/useAxios';
import PostTab from '../PostTab/PostTab';
import Loading from '../../../Shared/Loading';
import { Paper, Typography } from '@mui/material';

const BlogFeed = () => {
    const { user, loading } = useContext(AuthContext);
    const [value, setValue] = React.useState('all');
    const [query, setQuery] = React.useState('');
    const [filter, setFilter] = React.useState('')
    const [batch, setBatch] = React.useState(user.batch || localStorage.getItem('batch') || '')


    const route1 = `post?batch=${batch}&${query}${filter ? '&' + filter : ''}`
    const route2 = `post?${query}&${filter}`


    const { data: blogs = [], loading: blogLoading, error, refetch } = useAxios('get', user?.isAdmin ? route2 : route1, value);

    console.log(blogs);

    const handleChange = (e, newValue) => {
        setFilter('')
        setValue(newValue);
    };




    if (loading) return <Loading />




    return (
        <>
            {
                user?.email && <>
                    <CreatePost user={user} blogRefetch={refetch} />
                    <PostTab handleChange={handleChange} value={value} handleQuery={setQuery} handleFilter={setFilter} />
                </>
            }
            {blogs?.length ? <Blogs blogs={blogs} loading={loading} blogRefetch={refetch} />
                :
                <Paper sx={{
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
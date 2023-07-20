
import React, { useContext, useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import { AuthContext } from '../../../../context/AuthProvider';
import Blogs from '../../Blogs/Blogs';
import useAxios from '../../../../hooks/useAxios';

const BlogFeed = () => { 
    const { user } = useContext(AuthContext);
    const { data:blogs=[], loading, error,refetch } = useAxios('get', 'post');
    if (loading) return <h1>loading....</h1>;

 
    console.log(blogs);
    return (
        <>
            {
                user?.email && <CreatePost user={user} blogRefetch={refetch } />
            }

            <Blogs blogs={blogs} loading={loading} />
        </>
    );
};

export default BlogFeed;
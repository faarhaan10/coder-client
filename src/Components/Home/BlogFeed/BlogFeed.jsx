import { Box } from '@mui/material';
import React, { useContext } from 'react';
import CreatePost from './CreatePost';
import { AuthContext } from '../../../context/AuthProvider';

const BlogFeed = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {
                user?.email && <CreatePost user={user} />
            }
        </>
    );
};

export default BlogFeed;
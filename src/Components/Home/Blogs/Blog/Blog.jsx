import React from 'react';
import BlogHead from './BlogHead';
import BlogBody from './BlogBody';
import BlogEnd from './BlogEnd';
import { Paper } from '@mui/material'; 

const Blog = ({blog}) => {

    return (
        <Paper sx={{ p: 2, mt: 2 }}>
           {/* head  */}
            <BlogHead
                blog={blog}
            />

            {/* body  */}
            <BlogBody blog={blog}/>

            {/* card footer  */}
            <BlogEnd blog={blog}/>
        </Paper>
    );
};

export default Blog;
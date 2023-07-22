import React from 'react';
import BlogHead from './BlogHead';
import BlogBody from './BlogBody';
import BlogEnd from './BlogEnd';
import { Paper } from '@mui/material'; 

const Blog = ({blog,blogRefetch}) => {

    return (
        <Paper sx={{ p: 2,mb:2 }}>
           {/* head  */}
            <BlogHead
                blog={blog}
                blogRefetch={ blogRefetch}
            />

            {/* body  */}
            <BlogBody blog={blog}/>

            {/* card footer  */}
            <BlogEnd blog={blog} blogRefetch={ blogRefetch} />
        </Paper>
    );
};

export default Blog;
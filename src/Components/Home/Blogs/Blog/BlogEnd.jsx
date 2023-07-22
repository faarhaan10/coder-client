import { Avatar, Box, Button, Stack, TextField, Typography } from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import axios from 'axios';
import Comments from '../Comments/Comments';
import useAxios from '../../../../hooks/useAxios';
import Likes from '../Comments/Likes';

const BlogEnd = ({ blog ,blogRefetch}) => {
    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(blog.comments);


    const { data: allComments = [], refetch } = useAxios('post', 'comment/ids', { commentIds: comments });



    const handleSubmit = (e) => {
        e.preventDefault();
        const doc = {
            user: user._id,
            post: blog._id,
            commentBody: comment
        }
        setComment('');
        axios.post('http://localhost:3000/api/comment', doc)
            .then(res => {
                setComment('');
                if (res.data.success) {
                    setComments([...comments, res.data.comment._id]);
                    refetch();
                }
            })
    }

    return (
        <>
            <Box>
                {/* <Typography variant="body1" gutterBottom> 
                <Stack variant='row' sx={{ justifyContent: 'space-around' }}>*/}
                <Likes blog={blog} />
                    <Button variant='text' sx={{ width: '50%' }}><MessageOutlinedIcon sx={{ mr: 1 }} />{allComments?.length ? blog.comments?.length + '+' : '0'} Comments </Button>
                {/*  </Stack>
               </Typography> */}
                <hr />
                <Stack direction='row' spacing={2} sx={{ my: 1 }} as={'form'} onSubmit={handleSubmit}>
                    <Avatar alt={user?.name} src={user?.image} size='small' sx={{ border: '1px solid limegreen', width: 28, height: 28 }} />
                    <TextField
                        placeholder="Whats on your mind?"
                        size='small'
                        fullWidth
                        defaultValue={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        sx={{ background: '#ddd' }}
                    />
                    <Button variant='text' type='submit' size='small'>Comment</Button>
                </Stack>

                <Comments comments={allComments} refetchComment={refetch} />

            </Box>
        </>
    );
};

export default BlogEnd;
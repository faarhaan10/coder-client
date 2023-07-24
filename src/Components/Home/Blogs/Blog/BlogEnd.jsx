import { Avatar, Box, Button, Stack, TextField, Typography } from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import axios from 'axios';
import Comments from '../Comments/Comments';
import useAxios from '../../../../hooks/useAxios';
import Likes from '../Comments/Likes';
import { toast } from 'react-hot-toast';
import useComments from '../../../../hooks/useComments';

const BlogEnd = ({ blog }) => {

    const { user, url } = useContext(AuthContext);
    const [comment, setComment] = useState(''); 
    
    // const { comments,refetch }=useComments({ commentIds: blog.comments });
    const { data: comments = [], refetch } = useAxios('post', 'comment/ids', { commentIds: blog.comments })
    console.log(comments);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user.email) {
            toast.error('Please login first');
            return;
        }
        const doc = {
            user: user._id,
            post: blog._id,
            commentBody: comment
        }
        setComment('');
        axios.post(`${url}/comment`, doc)
            .then(res => {
                setComment(''); 
                if (res.data.success) {
                    refetch();
                }
            })
    } 
    return (
        <>
            <Box>
                <Likes blog={blog} />
                <Button variant='text' sx={{ width: '50%' }}><MessageOutlinedIcon sx={{ mr: 1 }} />{comments?.length ? blog.comments?.length + '+' : '0'} Comments </Button>
              
                
                <hr />
                {blog.isComment ? <Stack direction='row' spacing={2} sx={{ my: 1 }} as={'form'} onSubmit={handleSubmit}>
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
                </Stack> :
                    <Typography variant='subtitle2'>Comments turned off by user</Typography>
                }

                {
                    blog.isComment && <Comments comments={comments} refetchComment={refetch} />
                }

            </Box>
        </>
    );
};

export default BlogEnd;
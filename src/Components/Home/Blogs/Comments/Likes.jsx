import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useBlogs from '../../../../hooks/useBlogs';

const Likes = ({ blog }) => {
    const { user, url } = useContext(AuthContext);
    const {blogsRefetch}=useBlogs()
    const [likes, setLikes] = useState([...blog.upvotes])
    const liked = likes.includes(user._id);


    const handleLike = () => {
        if (!user.email) {
            toast.error('Please login first');
            return;
        }

        axios.post(`${url}/post/like/${blog._id}`, { userId: user._id })
            .then(res => {
                if (res.data.success) {
                    toast.success('Like updated');
                    if (liked) {
                        const rest = likes.filter(item => item !== user._id);
                        setLikes(rest);
                        blogsRefetch()
                    }
                }
                else {
                    toast.error(res.data.message)
                }

            })
            .catch(() => toast.error('Something went wrong'))

    }

    return (
        <>
            <Button variant='text' sx={{ width: '50%', color: liked ? 'crimson' : '' }} onClick={handleLike}>{likes.length ? likes.length : ''} Likes</Button>
        </>
    );
};

export default Likes;
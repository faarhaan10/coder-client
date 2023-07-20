import { Avatar, Badge, Box, Button, Paper, Stack, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'; 
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'; 
import AddTags from './AddTags';
import AddCategory from './AddCategory';
import ImageUploader from '../../../Shared/ImageUploader';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { AuthContext } from '../../../../context/AuthProvider';



const CreatePost = ({blogRefetch}) => {
    const [showOption, setShowOption] = useState(false);
    const [image, setImage] = useState('');
    const [postBody, setPostBody] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState([]);
    const { user, url } = useContext(AuthContext)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !category || !tags) {
            toast.error('Please add some tags & category');
            return
        }
        const doc = {
            postBody,
            category,
            tags,
            authorId: user._id,
            postImage: image
        };

        axios.post(`${url}/post`, doc)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Post created!");
                    blogRefetch()
                    setImage('')
                    setPostBody('')
                    setCategory('')
                    setTags([])
                    setShowOption(false)
                }
            })

    }
    return (
        <Paper sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
                <Stack direction='row' spacing={2} sx={{ mb: 1 }} >
                    <Avatar alt={user.name} src={user.image} /> 
                    <TextField 
                        placeholder="Whats on your mind?" 
                        fullWidth
                        multiline
                        minRows={3}
                        onChange={(e) => setPostBody(e.target.value)}
                        
                    />
                </Stack>
                {
                    image && <Box>
                        <img src={image} alt="" style={{ width: '250px', height: 'auto', objectFit: 'cover' }} />
                        <br />
                        <Button variant='text' size='small' onClick={() => setImage('')}>
                            remove
                        </Button>

                    </Box>
                }
                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack direction='row' spacing={2}>
                        <CameraAltOutlinedIcon />
                        <ImageUploader setUrl={setImage} />
                    </Stack>
                    {
                        !showOption ? <Button variant='text' size='small' onClick={() => setShowOption(true)}>Category & Tags</Button>
                            :
                            <Stack direction='row' spacing={1} sx={{ alignItems: "center" }}>
                                <AddTags setTags={setTags} />
                                <AddCategory setCategory={setCategory} />
                            </Stack>
                    }
                    <Box>
                        <Stack direction='row' spacing={2}>

                            <Button variant='text' size='small'><DriveFileRenameOutlineOutlinedIcon /> Draft</Button>
                            <Button variant='outlined' type='submit' size='small'>Create post</Button>
                        </Stack>
                    </Box>
                </Stack>

            </form>
        </Paper>
    );
};

export default CreatePost;
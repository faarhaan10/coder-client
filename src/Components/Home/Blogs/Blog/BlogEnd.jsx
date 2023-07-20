import { Avatar, Box, Button, Stack, TextField, Typography } from '@mui/material';  
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'; 
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const BlogEnd = ({ blog }) => {
    const {user}=useContext(AuthContext)
    return (
        <>
            <Box>
                <Typography variant="body1" gutterBottom>
                    <Button variant='text'><MessageOutlinedIcon sx={{ mr: 1 }} />{blog.comments?.length?blog.comments?.length+'+':'0'} Comments </Button>
                </Typography>
                <hr />
                <Stack direction='row' spacing={2} sx={{ my: 1 }}>
                    <Avatar alt={user?.name} src={user?.image} size='small'/>
                    <TextField 
                        placeholder="Whats on your mind?"
                        size='small'
                        fullWidth
                        multiline
                        
                    />
                </Stack>


            </Box> 
        </>
    );
};

export default BlogEnd;
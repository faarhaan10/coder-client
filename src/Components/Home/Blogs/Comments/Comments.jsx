import React, { useContext } from 'react';
import { Avatar, Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AuthContext } from '../../../../context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const Comments = ({ comments ,refetchComment}) => {
    const { user, url } = useContext(AuthContext);

    const handleDelete = (id) => {
        axios.delete(`${url}/comment/${id}`)
            .then(res => {
                if (res.data.success) {
                    refetchComment();
                }
                else {
                    toast.error(res.data.message);
                }
        })

    }
    return (
        <>
            {
                comments?.map((comment) => <Box key={comment._id}>
                    <Stack direction='row' spacing={2} sx={{ my: 1, }} >
                        <Avatar alt={comment?.user?.name} src={comment?.user?.image} size='small' sx={{ width: 24, height: 24 }} />
                        <Stack direction='column' sx={{ alignItems: 'start', justifyContent: 'center', background: '#ddd', p: 1, borderRadius: 2 }} >
                            <Stack direction='row' sx={{ justifyContent: 'space-between', width: '100%' }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }} >
                                    {comment?.user?.name}
                                </Typography>
                                {
                                    user.name == comment?.user?.name && <Tooltip title="Delete">
                                        <Button variant='text' size='small' sx={{ m: 0, p: 0, justifyContent: 'end', alignItems: 'start' }}
                                            onClick={() => handleDelete(comment._id)}
                                        >
                                            <MoreHorizIcon />
                                        </Button>
                                    </Tooltip>
                                }
                            </Stack>
                            <Typography variant="body2" sx={{ py: 0 }}>
                                {comment.commentBody}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>)
            }
        </>
    );
};

export default Comments;
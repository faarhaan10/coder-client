import { Avatar, Button, Chip,  Stack, Typography } from '@mui/material'; 
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'; 
import useDateNTime from '../../../../hooks/useDateNTime';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';





const BlogHead = ({ blog }) => {
    const {user}=useContext(AuthContext)
    const userType = blog?.adminPost ? 'admin' : blog.authorId._id === user._id ? 'author' : null;
    const { timeAgo, formattedDate } = useDateNTime(blog.timestamp)
     return (
        <>
            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
                    <Avatar alt={blog?.authorId.name} src={blog?.authorId.image} />

                    <Stack spacing={1}>
                        <Typography variant='span' sx={{ fontWeight: "bold" }}>
                        {blog?.authorId.name} {userType && <Chip label={userType} color="primary" size="small" variant="outlined" sx={{ py: .3 }} />}
                        </Typography>
                        <Typography variant="caption" display="block" sx={{
                            display: 'flex', alignItems: 'center', p: 0, color: 'gray'
                        }}>
                             <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><AccessTimeOutlinedIcon /> {timeAgo}</p>
                            <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><CalendarTodayOutlinedIcon /> {formattedDate} </p>
                            <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><GroupOutlinedIcon /> Batch - {blog.authorId.batch} </p>
                        </Typography>


                    </Stack>
                </Stack>
                <Stack direction='row'>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <Chip label={blog?.status} color="primary" size="small" variant="outlined" sx={{ py: .3 }} />
                        <Button variant='text' size='small'><BookmarkBorderOutlinedIcon /></Button>
                        <Button variant='text' size='small'><MoreHorizIcon /></Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default BlogHead;
import { Avatar, Button, Chip, Stack, Typography } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import useDateNTime from '../../../../hooks/useDateNTime';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider'; 
import UpdateModal from './UpdateModal';





const BlogHead = ({ blog ,blogRefetch }) => {
    const { user } = useContext(AuthContext)
    const userType = blog?.adminPost ? 'admin' : blog.authorId === user._id ? 'author' : null;
    const { timeAgo, formattedDate } = useDateNTime(blog.timestamp)
    return (
        <>
            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
                    <Avatar alt={blog?.author} src={blog?.authorImage} />

                    <Stack spacing={1}>
                        <Typography variant='span' sx={{ fontWeight: "bold" }}>
                            {blog?.author} {userType && <Chip label={userType} color="primary" size="small" variant="outlined" sx={{ py: .3 }} />}
                        </Typography>
                        <Typography variant="caption" display="block" sx={{
                            display: 'flex', alignItems: 'center', p: 0, color: 'gray'
                        }}>
                            <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><AccessTimeOutlinedIcon /> {timeAgo}</p>
                            <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><CalendarTodayOutlinedIcon /> {formattedDate} </p>
                            <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><GroupOutlinedIcon /> Batch - {blog.authorBatch ||blog.batch} </p>
                        </Typography>


                    </Stack>
                </Stack>
                <Stack direction='row'>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <UpdateModal blog={blog} blogRefetch={ blogRefetch}/>
                        <Button variant='text' size='small'><BookmarkBorderOutlinedIcon /></Button>
                        <Button variant='text' size='small'><MoreHorizIcon /></Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default BlogHead;
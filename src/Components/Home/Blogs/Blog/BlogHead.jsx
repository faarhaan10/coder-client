import { Avatar, Button, Chip, Stack, Typography } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import useDateNTime from '../../../../hooks/useDateNTime';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import BlogOptions from './BlogOptions';





const BlogHead = ({ blog, blogRefetch }) => {
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
                            {blog?.author} {userType && <span
                        style={{fontSize:7,border:'1px solid #1976d2',borderRadius:10,padding:'1px 1px' ,color:'#1976d2'}}
                            >{userType}</span>}
                        </Typography>
                        <Typography variant="caption" display="block" sx={{
                            display: 'flex', alignItems: 'center', p: 0, color: 'gray'
                        }}>
                            <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><AccessTimeOutlinedIcon /> {timeAgo}</p>
                            <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><CalendarTodayOutlinedIcon /> {formattedDate} </p>
                            <p style={{ py: 0, my: 0, mr: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><GroupOutlinedIcon /> Batch - {blog.authorBatch || blog.batch} </p>

                        </Typography>


                    </Stack>
                </Stack>
                <Stack direction='row'>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        {/* <Chip label={blog?.status} color="primary" size="small" variant="outlined" sx={{ py: .1,fontSize:10 }} /> */}
                        <span
                        style={{fontSize:10,border:'1px solid #1976d2',borderRadius:10,padding:'1px 3px' ,color:'#1976d2'}}
                        >{blog?.status}</span>
                        <Button variant='text' size='small'><BookmarkBorderOutlinedIcon /></Button>
                        <BlogOptions blog={blog} blogRefetch={ blogRefetch} />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default BlogHead;
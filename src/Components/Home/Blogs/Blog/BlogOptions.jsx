import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UpdateBlogModal from './UpdateBlogModal';
import axios from 'axios';
import { AuthContext } from '../../../../context/AuthProvider';
import { toast } from 'react-hot-toast'; 
import useBlogs from '../../../../hooks/useBlogs';



export default function BlogOptions({ blog }) {
    const { user, url } = React.useContext(AuthContext)
const {blogsRefetch} =useBlogs()


    const [anchorEl, setAnchorEl] = React.useState(null); 
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleDelete = () => {
        axios.delete(`${url}/post/${blog._id}`)
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    toast.success('Post deleted')
                    blogsRefetch();
                    handleClose()
                }
            })
    }
    const handleOffComment = () => {
        axios.put(`${url}/post/${blog._id}`, { isComment: false })
            .then(res => {
                if (res.data.success) {
                    toast.success('Comment off')
                    blogsRefetch();
                    handleClose()
                }
            })
    }
    const handleStatusResolved = () => {
        axios.put(`${url}/post/${blog._id}`, { status: 'resolved' })
            .then(res => {
                if (res.data.success) {
                    toast.success('Resolved')
                    blogsRefetch(); 
                    handleClose();
                }
            })
    }


    const handleCopy = () => {
        const location = window.location.href;
        navigator.clipboard.writeText(location + 'post/' + blog._id);
        toast.success('Copied');
        handleClose();

    }


    return (
        <div>
            <Button
                variant='text' size='small'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

            >
                <MoreHorizIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {user.email && <div>
                    {user.isAdmin && <div>
                        <UpdateBlogModal handleClose={ handleClose} blogRefetch={blogsRefetch} blog={blog} />
                        <MenuItem onClick={handleDelete}>Delete</MenuItem>
                    </div>
                    }

                    {
                        user._id == blog.authorId && <div>
                            <MenuItem onClick={handleOffComment}>Turn off comment</MenuItem>
                            {blog.status !== 'resolved' && <MenuItem onClick={handleStatusResolved}>Mark as resolved</MenuItem>}
                        </div>
                    }
                </div>}
                <MenuItem onClick={handleCopy}>Copy the link</MenuItem> 
            </Menu>
        </div>
    );
}
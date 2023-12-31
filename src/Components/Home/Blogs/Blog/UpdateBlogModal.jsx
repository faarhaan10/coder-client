import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import axios from 'axios';
import { AuthContext } from '../../../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import useProgress from '../../../../hooks/useProgress'; 
import AddTags from '../../BlogFeed/AddPost/AddTags';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const UpdateBlogModal = ({ blog, blogRefetch, handleClose }) => {
    const { user, url } = React.useContext(AuthContext)
    const [status, setStatus] = React.useState(blog.status)
    const [priority, setPriority] = React.useState(blog.priority)
    const [updateTags, setUpdateTags] = React.useState([...blog.tags]);
    const { progressRefetch } = useProgress()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const doc = {
            status,
            priority,
            tags:updateTags
        }
        axios.put(`${url}/post/${blog._id}`, doc)
            .then(res => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    blogRefetch();
                    progressRefetch();
                    handleClose();
                };
            })
    }


    return (
        <>
            <MenuItem onClick={handleOpen}>Status Update</MenuItem>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title1"
            >
                <Box sx={style} component='form' onSubmit={handleSubmit}>
                    <Typography id="modal-modal-title1" variant="h6" component="h2">
                        Status Update
                    </Typography>
                    <FormControl fullWidth size='small' sx={{ mb: 1 }} >
                        <InputLabel id="demo-simple-select-label1">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label1"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={e => setStatus(e.target.value)}
                        >

                            {
                                ["new", "inprogress", "investigate", "resolved", "unresolved", "rejected", "testing"].map(item => <MenuItem key={'stutus' + item} value={item}>{item}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl fullWidth size='small' sx={{ mb: 1 }}>
                        <InputLabel id="demo-simple-select-label12">Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-label12"
                            id="demo-simple-select2"
                            value={priority}
                            label="priority"
                            onChange={e => setPriority(e.target.value)}
                        >

                            {
                                ["high", "medium", "low"].map(item => <MenuItem key={'status' + item} value={item}>{item}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <AddTags setTags={setUpdateTags} tags={updateTags} />
                    <br />
                    <Stack spacing={2} direction='row' sx={{ justifyContent: 'space-around' }}>
                        <Button variant='text' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant='filled' type='submit'>
                            Update
                        </Button>

                    </Stack>

                </Box>
            </Modal>
        </>
    );
};

export default UpdateBlogModal;
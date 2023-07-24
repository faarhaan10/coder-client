import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as locales from 'react-date-range/dist/locale';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { MenuItem } from '@mui/material';
import AddTags from '../../AddPost/AddTags';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const SelectTags = ({ handleClose, setFilter, handleQuery }) => {
    const [tags, setTags] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);


    const handleTags = () => {
        let tagStr = ''
        tags.forEach(tag => {
            tagStr += `tags=${tag}&`;
        })
        handleQuery(tagStr);
        handleClose();
        setFilter('Tags')
    }
    return (
        <>
            <MenuItem
                onClick={() => handleOpen()}
                sx={{ py: 0, my: 0 }}
            >By Tags</MenuItem>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Select Tags
                    </Typography>
                    <Box style={{ display: 'flex', flexFlow: 'column nowrap' }}>

                        <AddTags setTags={setTags} />
                        <br />
                        <Button onClick={handleTags}>Done</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default SelectTags;
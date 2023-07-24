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


const SelectDate = ({ handleClose, setFilter, handleQuery }) => {
    const [date, setDate] = React.useState(new Date(Date.now()));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);


    return (
        <>
            <MenuItem
                onClick={() => handleOpen()}
                sx={{ py: 0, my: 0 }}
            >By Date</MenuItem>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Select date
                    </Typography>
                    <Box style={{ display: 'flex', flexFlow: 'column nowrap' }}>

                        <Calendar onChange={item => { handleQuery(`timestamp=${item}`); handleClose(); setFilter('date') }}
                            locale={locales['enUS']} date={date} />
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default SelectDate;
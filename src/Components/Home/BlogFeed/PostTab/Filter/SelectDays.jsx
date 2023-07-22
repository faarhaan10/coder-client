import React from 'react';
import Box from '@mui/material/Box'; 
import Modal from '@mui/material/Modal'; 
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { Button, MenuItem, Typography } from '@mui/material';

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


const SelectDays = ({ handleQuery, setFilter, handleClose }) => {
    const [days, setDays] = React.useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true); 

     return (
        <>
            <MenuItem
                onClick={handleOpen}
                sx={{ py: 0, my: 0 }}
            >By Days</MenuItem>
            <Modal
                open={open}
                 onClose={() => { handleClose(); setFilter('days')}}
            >
                
                <Box sx={style}>
                <Typography  variant="h6" component="h2">
                        Select days
                    </Typography>
                    <Box style={{ display: 'flex', flexFlow: 'column nowrap' }}>

                        <DateRange
                            editableDateInputs={false}
                            onChange={item => setDays([item.selection])}
                            moveRangeOnFirstSelection={true}
                            ranges={days}
                         />
                         <Button onClick={()=>{ handleQuery(`fromDate=${days[0].startDate}&endDate=${days[0].endDate}`); handleClose(); setFilter('date')}}>Done</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default SelectDays;
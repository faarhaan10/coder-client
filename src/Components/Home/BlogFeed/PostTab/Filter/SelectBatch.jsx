import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';  

const SelectBatch = ({handleQuery,setFilter,handleClose}) => {
    const [batch, setBatch] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
 
    return (
        <>
            <MenuItem
                onClick={handleClick}
                sx={{ py: 0, my: 0 }}
            > 
                {batch?'Batch: '+batch:'By Batch'}
            </MenuItem>
            <Menu 
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                
            >  
                {
                    [...Array(8)].map((e,index) => <MenuItem
                        key={'batch' + index}
                        onClick={() => { handleQuery(`batch=${index + 1}`); setFilter('Batch'); handleClose()}}>
                    Batch-{index+1}
                </MenuItem> )
                }
            </Menu>
        </>
    );
};

export default SelectBatch;
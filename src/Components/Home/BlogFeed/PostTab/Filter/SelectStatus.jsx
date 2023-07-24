import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 

const SelectStatus = ({ handleQuery,setFilter,handleClose}) => {
    const [status, setStatus] = React.useState('');
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
                {status?'Status: '+status:'By Status'}
            </MenuItem>
            <Menu 
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >  
                {
                    ["inprogress", "investigate", "resolved", "unresolved", "rejected","testing"].map(item => <MenuItem
                        key={item}
                        onClick={() => { handleQuery(`status=${item}`); handleClose(); setFilter('status')}}
                    >
                        {item.toUpperCase()}
                    </MenuItem>)
                }
            </Menu>
        </>
    );
};

export default SelectStatus;
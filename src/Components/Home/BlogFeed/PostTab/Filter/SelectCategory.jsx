import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';  

const SelectCategory = ({ setFilter,handleClose,handleQuery}) => {
    const [category, setCategory] = React.useState('');
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
                By Category
            </MenuItem>
            <Menu 
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                
            >  
                {
                    ["assignment", "github", "quiz", "support-session", "other","module"].map((e,index) => <MenuItem
                        key={e + index}
                        onClick={() => { handleQuery(`category=${e}`); setFilter('category'); handleClose()}}>
                    {e.toUpperCase()}
                </MenuItem> )
                }
            </Menu>
        </>
    );
};

export default SelectCategory;
import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import SelectDate from './SelectDate';
import SelectDays from './SelectDays';
import SelectStatus from './SelectStatus';
import SelectBatch from './SelectBatch';
import SelectCategory from './SelectCategory';
// import AddTags from '../../AddPost/AddTags';



const FilterMenu = ({handleQuery}) => {
    const [filter, setFilter] = React.useState('filter') 
   


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button variant="outlined" size="small"
                onClick={handleClick}
                sx={{ py: 0, my: 0 }}

            >
                {filter}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                style={{
                    width: '280px'
                }}

            >
                {/* <AddTags setTags={setTags} label='By Tags' /> */}

                <SelectDate   handleQuery={handleQuery} handleClose={handleClose} setFilter={setFilter} />
                <SelectDays   handleQuery={handleQuery} handleClose={handleClose} setFilter={setFilter} />
                <SelectStatus   handleQuery={handleQuery} handleClose={handleClose} setFilter={setFilter} />
                <SelectBatch  handleQuery={handleQuery} handleClose={handleClose} setFilter={setFilter} />
                <SelectCategory  handleQuery={handleQuery} handleClose={handleClose} setFilter={setFilter} />

            </Menu>
        </>
    );
};

export default FilterMenu;
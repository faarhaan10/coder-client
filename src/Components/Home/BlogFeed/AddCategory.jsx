import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const AddCategory = ({setCategory}) => {
    const category = ["assignment", "github", "quiz", "support session", "other"];
 
    return (
        <FormControl  as={Box} sx={{width: '8rem' , }} required>
                            <InputLabel sx={{ width: '100%' }} id="demo-simple-select-label">Category</InputLabel>
                            <Select onChange={(e)=>setCategory(e.target.value)}
                                defaultValue={9}
                                label="Category"
                size='small' 
                
                            >
                                {category.map((i, index) => <MenuItem key={index} value={i}>{i.toUpperCase()}</MenuItem>)}
                            </Select>
                        </FormControl>
    );
};

export default AddCategory;
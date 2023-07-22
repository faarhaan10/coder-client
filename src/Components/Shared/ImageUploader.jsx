import { Box, Button, Input, InputLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { lightGreen } from '@mui/material/colors';

const ImageUploader = ({ setUrl, fullWidth }) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUpload = (event) => {
        setImage(event.target.files[0]);
    };

    useEffect(() => {
        if (image) {
            setLoading(true);
            let payload = new FormData()
            payload.append('image', image)

            axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_SECRET_KEY}`, payload)
                .then((response) => {
                    setLoading(false)
                    setUrl(response.data.data.image.url) 
                    console.log(response.data.data.image.url) 
                })
                .catch((error) => {
                    console.log('error', error)
                })

        }
        setLoading(false)
    }, [image])
    return (
        < >
            <Box sx={{my:0,display:'flex'}}>
                {fullWidth ? <InputLabel htmlFor="input-with-icon-adornment"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid #c4c4c4',
                        py: 1,
                        px:5,
                        width: '100%',
                        borderRadius:'5px'
                    }}>
                    Upload photo <InsertPhotoOutlinedIcon />
                </InputLabel>
                    :
                <InputLabel htmlFor="input-with-icon-adornment">
                    <InsertPhotoOutlinedIcon />
                </InputLabel>}
                <Input style={{ display: 'none' }} onChange={handleUpload}
                    id="input-with-icon-adornment" type='file' variant='outlined' />
            </Box>
        </>
    );
};

export default ImageUploader;
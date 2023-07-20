import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'; 

const ImageUploader = ({ setUrl,fullWidth }) => {
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
                })
                .catch((error) => {
                    console.log('error', error)
                }) 
            
            }
            setLoading(false)
    }, [image])
    return (
        < >
        <TextField style={{width:fullWidth?'100%':'50%'}} type='file' variant="outlined" size='small' onChange={handleUpload}  
            />
            {loading&&  <p>uploading...</p>}
        </>
    );
};

export default ImageUploader;
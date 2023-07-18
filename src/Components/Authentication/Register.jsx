import { Box, Paper, TextField, Typography, Button, InputLabel, Select, MenuItem, FormControl, Input } from '@mui/material';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ImageUploader from '../Shared/ImageUploader';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const [batch, setBatch] = React.useState(8);
    const [image, setImage] = React.useState(''); 
    const { registerUser, setToken } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

     
    const onSubmit = data => {
        const doc = {
            ...data,
            image,
            batch
        };
        registerUser(doc)
            .then(res => {
                console.log(res.data);
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    setToken(res.data.token);
                    navigate('/')
                }

            })
    };

    const handleChange = (event) => {
        setBatch(event.target.value);
    };


    return (
        <Box>
            <Box style={{
                height: '90svh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Paper sx={{ width: '18rem', padding: 5 }}>
                    <Typography variant="h4" gutterBottom >
                        Register
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, },
                        }}
                        style={{ width: '100%' }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField style={{ width: '100%' }} label="Full Name" type='text' required variant="outlined" size='small'
                            {...register("name", { required: true })}
                        />
                        <FormControl as={Box} sx={{ width: '100%' }}>
                            <InputLabel sx={{ width: '100%' }} id="demo-simple-select-label">Batch</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={batch}
                                label="Batch"
                                size='small'
                                onChange={handleChange}
                            >
                                {[...Array(8)].map((i, index) => <MenuItem key={index} value={index + 1}>Batch-{index + 1}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <TextField style={{ width: '100%' }} label="Email" type='email' required variant="outlined" size='small'
                            {...register("email", { required: true })}
                        />
                        <TextField style={{ width: '100%' }} label="Password" type='password' variant="outlined" size='small' required
                            {...register("password", { required: true })}
                        />
                        <ImageUploader setUrl={setImage} />
                        <Link to='/login'>
                            <Typography variant="subtitle2" gutterBottom>
                                Already have an account?
                            </Typography>
                        </Link>
                        {image ?<Button style={{ width: '100%' }} variant="contained" type='submit'>Register</Button>
                            :
                        <Button disabled style={{ width: '100%' }} variant="contained" type='submit'>Register</Button>}
                    </Box>
                </Paper>

            </Box>
        </Box>
    );
};

export default Register;
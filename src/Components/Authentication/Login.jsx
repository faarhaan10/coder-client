import { Box, Paper, TextField, Typography,Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
        <Box>
            <Box style={{
                height: '90svh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Paper sx={{ width: '18rem',padding:5 }}>
                    <Typography variant="h4" gutterBottom >
                        Login
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField label="Email" variant="outlined" size='small' {...register("email", { required: true })}/>
                        <TextField label="Password" variant="outlined" size='small' {...register("password", { required: true })}/>
                        <Link to='/register'>
                        <Typography variant="subtitle2" gutterBottom>
                            Create an account?
                            </Typography>
                        </Link>
                            <Button variant="contained" type='submit'>Login</Button>
                    </Box>
                </Paper>

            </Box>
        </Box>
    );
};

export default Login;
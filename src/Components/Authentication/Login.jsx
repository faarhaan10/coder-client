import { Box, Paper, TextField, Typography,Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { login,setToken } = useContext(AuthContext);
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        login(data)
            .then(res => { 
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    setToken(res.data.token);
                    navigate('/')
                }

        })
    };
     
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
                        <TextField style={{width:'100%'}} label="Email" variant="outlined" size='small' {...register("email", { required: true })}/>
                        <TextField style={{width:'100%'}} label="Password" variant="outlined" size='small' type='password' {...register("password", { required: true })}/>
                        <Link to='/register'>
                        <Typography variant="subtitle2" gutterBottom>
                            Create an account?
                            </Typography>
                        </Link>
                        <Button style={{ width: '100%' }} variant="contained" type='submit'
                             
                        >Login</Button>
                    </Box>
                </Paper>

            </Box>
        </Box>
    );
};

export default Login;
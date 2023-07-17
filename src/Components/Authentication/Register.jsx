import { Box, Paper, TextField, Typography, Button, InputLabel, Select, MenuItem, FormControl, Input } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {
    const [age, setAge] = React.useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value);
    };
    const handleUpload= (event) => { 
        console.log(event.target.files[0]);
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
                        <TextField label="Full Name" type='text' required variant="outlined" size='small'
                            {...register("name", { required: true })}
                        /> 
                        <FormControl as={Box} sx={{width:'100%'}}>
                            <InputLabel sx={{width:'100%'}} id="demo-simple-select-label">Batch</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                size='small'
                                onChange={handleChange} 
                            >
                                {[...Array(8)].map((i, index) => <MenuItem key={index} value={index+1}>Batch-{index+1}</MenuItem>) }
                            </Select>
                        </FormControl>
                        <TextField label="Email" type='email' required variant="outlined" size='small'
                            {...register("email", { required: true })}
                        />
                        <TextField label="Password" type='password' variant="outlined" size='small'
                            {...register("password", { required: true })}
                        />
                        <TextField type='file' variant="outlined" size='small' onChange={handleUpload}
                        />
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

export default Register;
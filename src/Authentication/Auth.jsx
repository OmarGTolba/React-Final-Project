import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

export default function Login() {
    const [isSwitched, setIsSwitched] = useState(false);
    const [signUpForm, setsignUpForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignUpForm({
            ...signUpForm,
            [name]: value
        });
    };

    const handleSwitch = () => {
        setIsSwitched(!isSwitched);
    };


    const handleSignUp = async () => {
        console.log(signUpForm);
        // try {
        //     const response = await axios.post('http://localhost:3000/auth/signup', signUpForm);
        //     console.log(response.data); 
        // } catch (error) {
        //     console.error('Signup failed:', error); 
        // }
    };

    return (
        <>
        <Container  className="d-flex mx-auto" sx={{marginTop:'15px' , width:'75%'}} >
            <Box
                className="image"
                sx={{
                    transform: isSwitched ? 'translateX(100%)' : 'none',
                    transition: 'transform 0.5s ease-in-out',
                    zIndex: isSwitched ? '2' : '1',
                    backgroundColor: '#ccc',
                    width: '50%',
                    height: '90vh',
                    padding:'30px'
                }}
            >
                <Typography variant="h4" margin='0 0px 16px' textAlign='center'>Sign Up</Typography>

                {isSwitched ? (
                    <Box className='inputs w-100 m-auto'>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'16px' }}>
                            <TextField sx={{ width: 'calc(50% - 5px)' }} label="First Name" name="firstName" value={signUpForm.firstName} onChange={handleInputChange} />
                            <TextField sx={{ width: 'calc(50% - 5px)' }} label="Last Name" name="lastName" value={signUpForm.lasstName} onChange={handleInputChange} />
                        </Box>

                        <TextField sx={{ width: '100%',marginBottom:'16px' }} label="Email" name="email" value={signUpForm.email} onChange={handleInputChange} />
                        <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="phoneNumber" name="phoneNumber" value={signUpForm.phoneNumber} onChange={handleInputChange} />
                        <TextField sx={{ width: '100%',marginBottom:'16px' }} label="password" name="password" value={signUpForm.password} onChange={handleInputChange} />
                        <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="confirmPassword" name="confirmPassword" value={signUpForm.confirmPassword} onChange={handleInputChange} />
                        <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="birthday" name="birthday" value={signUpForm.birthday} onChange={handleInputChange} />

                        <Button onClick={handleSignUp} variant="contained" sx={{ width: '50%', margin: 'auto', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>register</Button>
                    </Box>
                ) : (
                    <Box className='inputs'>
                        <Box sx={{ opacity: 0 }}>
                            <TextField fullWidth label="Name" />
                        </Box>

                        <TextField fullWidth label="User / Email" />
                        <TextField fullWidth label="Password" />
                        <TextField fullWidth label="Re-password" />
                    </Box>
                )}
            </Box>
            <Box
                className="image"
                style={{
                    transform: isSwitched ? 'translateX(-100%)' : 'none',
                    transition: 'transform 0.5s ease-in-out',
                    zIndex: isSwitched ? '2' : '1',
                    backgroundColor: '#ccc',
                    width: '50%',
                    height: '90vh',
                }}
            >
                <Typography variant="h6"></Typography>
            </Box>
        </Container>
            <Button variant="contained" onClick={handleSwitch}>Switch</Button>
    </>
        );
}

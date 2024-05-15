import React, { useContext, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import UserContext from '../contexts/UserContext';

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
    const [signInForm, setsignInForm] = useState({
        email: '',
        password: '',
    });
    const handleSignUpInputChange = (e) => {
        const { name, value } = e.target;
        setsignUpForm({
            ...signUpForm,
            [name]: value
        });
    };

    
    const handleSignInInputChange = (e) => {
        const { name, value } = e.target;
        setsignInForm({
            ...signInForm,
            [name]: value
        });
    };
    const handleSwitch = () => {
        setIsSwitched(!isSwitched);
    };


    const handleSignUp = async () => {
        console.log(signUpForm);
        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/signup', signUpForm);
            console.log(response.data); 
        } catch (error) {
            console.error('Signup failed:', error); 
        }
    };
    const { setToken } = useContext(UserContext)
    const handleSignIn = async () => {
        console.log(signInForm);
        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/login', signInForm);
            console.log(response.data.token); 
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
        } catch (error) {
            console.error('Signup failed:', error); 
        }
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

                {isSwitched ? (
                    <Box className='inputs w-100 m-auto'>
                        <Typography variant="h4" margin='0 0px 16px' textAlign='center'>Sign Up</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'16px' }}>
                            <TextField sx={{ width: 'calc(50% - 5px)' }} label="First Name" name="firstName" value={signUpForm.firstName} onChange={handleSignUpInputChange} />
                            <TextField sx={{ width: 'calc(50% - 5px)' }} label="Last Name" name="lastName" value={signUpForm.lasstName} onChange={handleSignUpInputChange} />
                        </Box>

                        <TextField sx={{ width: '100%',marginBottom:'16px' }} label="Email" name="email" value={signUpForm.email} onChange={handleSignUpInputChange} />
                        <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="phoneNumber" name="phoneNumber" value={signUpForm.phoneNumber} onChange={handleSignUpInputChange} />
                        <TextField sx={{ width: '100%',marginBottom:'16px' }} label="password" name="password" value={signUpForm.password} onChange={handleSignUpInputChange} />
                        <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="confirmPassword" name="confirmPassword" value={signUpForm.confirmPassword} onChange={handleSignUpInputChange} />
                        <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="birthday" name="birthday" value={signUpForm.birthday} onChange={handleSignUpInputChange} />

                        <Button onClick={handleSignUp} variant="contained" sx={{ width: '50%', margin: 'auto', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>register</Button>
                    </Box>
                ) : (
                    <Box className='inputs' sx={{ height:'100%', display:'flex' , flexDirection:'column', justifyContent:'center' }} >

                        <Typography variant="h4" margin='0 0px 16px' textAlign='center'>Sign In</Typography>


                        <TextField sx={{ width: '100%',marginBottom:'16px' }} label="Email" name="email" value={signInForm.email} onChange={handleSignInInputChange} />
                        <TextField sx={{ width: '100%',marginBottom:'16px' }} label="password" name="password" value={signInForm.password} onChange={handleSignInInputChange} />

                        <Button onClick={handleSignIn} variant="contained" sx={{ width: '50%', margin: 'auto', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>register</Button>
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

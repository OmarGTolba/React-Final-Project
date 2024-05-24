/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import "./Auth.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import UserContext from "../contexts/UserContext";
import axios from "axios";
export default function Auth() {
  const handleSignUp = async () => {
    console.log(signUpForm);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signup",
        signUpForm
      );
      console.log(response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const { setToken } = useContext(UserContext);
  const handleSignIn = async () => {
    console.log(signInForm);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        signInForm
      );
      console.log(response.data.token);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const [isSwitched, setIsSwitched] = useState(false);
  const [signUpForm, setsignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [signInForm, setsignInForm] = useState({
    email: "",
    password: "",
  });
  const handleSignUpInputChange = (e) => {
    const { name, value } = e.target;
    setsignUpForm({
      ...signUpForm,
      [name]: value,
    });
  };

  const handleSignInInputChange = (e) => {
    const { name, value } = e.target;
    setsignInForm({
      ...signInForm,
      [name]: value,
    });
  };

  const [moveToRegister, setmoveToRegister] = useState(true);
  const [moveToLogin, setMoveToLogin] = useState(false);
  const [moveToOtp, setMoveToOtp] = useState(false);
  const [moveToforget, setMoveToForget] = useState(false);
  const [moveToReset, setMoveToReset] = useState(false);
  const [fade, setFade] = useState(false);

  const handleToLogin = () => {
    setFade(true);

    setMoveToLogin(true);
    setmoveToRegister(false);
    setMoveToForget(false);
    setMoveToOtp(false);
    setMoveToReset(false);

    setTimeout(() => {
      setMoveToLogin(true);
    }, 200);

    setTimeout(() => {
      setFade(false);
    }, 500);
  };

  const handleToRegister = () => {
    setFade(true);

    setTimeout(() => {
      setMoveToLogin(false);
      setmoveToRegister(true);
      setMoveToForget(false);
      setMoveToOtp(false);
      setMoveToReset(false);
    }, 200);

    setTimeout(() => {
      setFade(false);
    }, 500);
  };

  const handleToForget = () => {
    setFade(true);
    setTimeout(() => {
      setMoveToLogin(false);
      setmoveToRegister(false);
      setMoveToForget(true);
      setMoveToOtp(false);
      setMoveToReset(false);
    }, 200);
    setTimeout(() => {
      setFade(false);
    }, 300);
  };

  const handleToOtp = () => {
    setFade(true);
    setTimeout(() => {
      setMoveToLogin(false);
      setmoveToRegister(false);
      setMoveToForget(false);
      setMoveToOtp(true);
      setMoveToReset(false);
    }, 200);
    setTimeout(() => {
      setFade(false);
    }, 300);
  };

  const handleToReset = () => {
    setFade(true);
    setTimeout(() => {
      setMoveToLogin(false);
      setmoveToRegister(false);
      setMoveToForget(false);
      setMoveToOtp(false);
      setMoveToReset(true);
    }, 200);
    setTimeout(() => {
      setFade(false);
    }, 300);
  };

  return (
    <Box className="container d-flex align-items-center text-center">
      <Box
        className={`clipped-element ${moveToRegister ? "move-bottom" : ""}`}
      ></Box>

      {/* registeration Box */}
      <Box
        className={`inputs  ${moveToRegister ? "d-block" : "d-none"} ${
          fade ? "fade-out" : "fade-in"
        }`}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          width: "75%",
          margin: "auto",
        }}
      >
        <Typography variant="h5" margin={1}>
          Vibe Verse
        </Typography>
        <Typography variant="h5" margin={1}>
          creaate your account
        </Typography>
        <Box margin={3}>
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
              "& .MuiInput-underline:after": {
                borderBottomColor: "rgb(150, 187, 124)",
                color: "rgb(150, 187, 124)",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(150, 187, 124)",
                },
              },
            }}
            InputLabelProps={{ style: { color: "#79987a" } }}
            label="Email"
            name="email"
            value={signUpForm.email}
            onChange={handleSignUpInputChange}
          />
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="phoneNumber"
            name="phoneNumber"
            value={signUpForm.phoneNumber}
            onChange={handleSignUpInputChange}
          />
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="password"
            name="password"
            value={signUpForm.password}
            onChange={handleSignUpInputChange}
          />
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="confirmPassword"
            name="confirmPassword"
            value={signUpForm.confirmPassword}
            onChange={handleSignUpInputChange}
          />
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="birthday"
            name="birthday"
            value={signUpForm.birthday}
            onChange={handleSignUpInputChange}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#76a85f",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#76a85f",
              outline: "2px solid #76a85f",
            },
          }}
          onClick={handleSignUp}
        >
          Register
        </Button>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          margin={2}
        >
          {" "}
          have an account?{" "}
          <Typography
            marginX={1}
            sx={{
              color: "#76a85f",
              "&:hover": { cursor: "pointer", textDecoration: "underline" },
            }}
            onClick={handleToLogin}
          >
            Login{" "}
          </Typography>{" "}
        </Typography>
        <img src="bro.png" className="regImg" alt="" />
      </Box>

      {/* Login Box */}
      <Box
        className={`inputs  ${moveToLogin ? "d-block" : "d-none"} ${
          fade ? "fade-out" : "fade-in"
        }`}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          width: "75%",
          margin: "auto",
        }}
      >
        <Typography variant="h5">Vibe Verse</Typography>
        <Typography variant="h5">Welcome Back!</Typography>
        <Box margin={3}>
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="Email"
            name="email"
            value={signInForm.email}
            onChange={handleSignUpInputChange}
          />
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="password"
            name="password"
            value={signInForm.password}
            onChange={handleSignUpInputChange}
          />
          <Typography
            sx={{ color: "#76a85f", textAlign: "end" }}
            onClick={handleToForget}
          >
            forget Password?{" "}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#76a85f",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#76a85f",
              outline: "2px solid #76a85f",
            },
          }}
          onClick={handleSignIn}
        >
          login
        </Button>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          margin={2}
        >
          {" "}
          Don't have an account?{" "}
          <Typography
            marginX={1}
            sx={{
              color: "#76a85f",
              "&:hover": { cursor: "pointer", textDecoration: "underline" },
            }}
            onClick={handleToRegister}
          >
            {" "}
            Register{" "}
          </Typography>{" "}
        </Typography>
        <img src="bro1.png" className="logImg" alt="" />
      </Box>

      {/* forget password Box  */}
      <Box
        className={`inputs  ${moveToforget ? "d-block" : "d-none"}  ${
          fade ? "fade-out" : "fade-in"
        }`}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          width: "75%",
          margin: "auto",
        }}
      >
        <Typography variant="h5" margin={1}>
          Vibe Verse
        </Typography>
        <Typography variant="h5" margin={1}>
          Forget Password?
        </Typography>
        <Box margin={3}>
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="password"
            name="password"
            value={signInForm.password}
            onChange={handleSignUpInputChange}
          />
          <Typography
            sx={{
              color: "#76a85f",
              textAlign: "end",
              display: "flex",
              justifyContent: "flex-start",
            }}
            onClick={handleToLogin}
          >
            Back to login?{" "}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#76a85f",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#76a85f",
              outline: "2px solid #76a85f",
            },
          }}
          onClick={handleToOtp}
        >
          Send
        </Button>
      </Box>

      {/* Check OTP  */}
      <Box
        className={`inputs  ${moveToOtp ? "d-block" : "d-none"}  ${
          fade ? "fade-out" : "fade-in"
        }`}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          width: "75%",
          margin: "auto",
        }}
      >
        <Typography variant="h5" margin={1}>
          Vibe Verse
        </Typography>
        <Typography variant="h5" margin={1}>
          Reset Password
        </Typography>
        <Box margin={3}>
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="password"
            name="password"
            value={signInForm.password}
            onChange={handleSignUpInputChange}
          />
          <Typography
            sx={{
              color: "#76a85f",
              textAlign: "end",
              display: "flex",
              justifyContent: "flex-start",
            }}
            onClick={handleToForget}
          >
            Back{" "}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#76a85f",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#76a85f",
              outline: "2px solid #76a85f",
            },
          }}
          onClick={handleToReset}
        >
          Verify
        </Button>
      </Box>

      {/* Check Reset  */}
      <Box
        className={`inputs  ${moveToReset ? "d-block" : "d-none"}  ${
          fade ? "fade-out" : "fade-in"
        }`}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          width: "75%",
          margin: "auto",
        }}
      >
        <Typography variant="h5" margin={1}>
          Vibe Verse
        </Typography>
        <Typography variant="h5" margin={1}>
          Reset Password
        </Typography>
        <Box margin={3}>
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="password"
            name="password"
            value={signInForm.password}
            onChange={handleSignUpInputChange}
          />
          <TextField
            sx={{
              width: "100%",
              marginBottom: "16px",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            }}
            label="password"
            name="password"
            value={signInForm.password}
            onChange={handleSignUpInputChange}
          />
          <Typography
            sx={{
              color: "#76a85f",
              textAlign: "end",
              display: "flex",
              justifyContent: "flex-start",
            }}
            onClick={handleToForget}
          >
            Back{" "}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#76a85f",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#76a85f",
              outline: "2px solid #76a85f",
            },
          }}
          onClick={handleToLogin}
        >
          Go to Login
        </Button>
      </Box>
    </Box>
  );
}

// const handleSwitch = () => {
//     setIsSwitched(!isSwitched);
// };

// return (
//     <>
//     <Container  className="d-flex mx-auto" sx={{marginTop:'15px' , width:'75%'}} >
//         <Box
//             className="image"
//             sx={{
//                 transform: isSwitched ? 'translateX(100%)' : 'none',
//                 transition: 'transform 0.5s ease-in-out',
//                 zIndex: isSwitched ? '2' : '1',
//                 backgroundColor: '#ccc',
//                 width: '50%',
//                 height: '90vh',
//                 padding:'30px'
//             }}
//         >

//             {isSwitched ? (
//                 <Box className='inputs w-100 m-auto'>
//                     <Typography variant="h4" margin='0 0px 16px' textAlign='center'>Sign Up</Typography>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'16px' }}>
//                         <TextField sx={{ width: 'calc(50% - 5px)' }} label="First Name" name="firstName" value={signUpForm.firstName} onChange={handleSignUpInputChange} />
//                         <TextField sx={{ width: 'calc(50% - 5px)' }} label="Last Name" name="lastName" value={signUpForm.lasstName} onChange={handleSignUpInputChange} />
//                     </Box>

//                     <TextField sx={{ width: '100%',marginBottom:'16px' }} label="Email" name="email" value={signUpForm.email} onChange={handleSignUpInputChange} />
//                     <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="phoneNumber" name="phoneNumber" value={signUpForm.phoneNumber} onChange={handleSignUpInputChange} />
//                     <TextField sx={{ width: '100%',marginBottom:'16px' }} label="password" name="password" value={signUpForm.password} onChange={handleSignUpInputChange} />
//                     <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="confirmPassword" name="confirmPassword" value={signUpForm.confirmPassword} onChange={handleSignUpInputChange} />
//                     <TextField sx={{ width: '100%' ,marginBottom:'16px'}} label="birthday" name="birthday" value={signUpForm.birthday} onChange={handleSignUpInputChange} />

//                     <Button onClick={handleSignUp} variant="contained" sx={{ width: '50%', margin: 'auto', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>register</Button>
//                 </Box>
//             ) : (
//                 <Box className='inputs' sx={{ height:'100%', display:'flex' , flexDirection:'column', justifyContent:'center' }} >

//                     <Typography variant="h4" margin='0 0px 16px' textAlign='center'>Sign In</Typography>

//                     <TextField sx={{ width: '100%',marginBottom:'16px' }} label="Email" name="email" value={signInForm.email} onChange={handleSignInInputChange} />
//                     <TextField sx={{ width: '100%',marginBottom:'16px' }} label="password" name="password" value={signInForm.password} onChange={handleSignInInputChange} />

//                     <Button onClick={handleSignIn} variant="contained" sx={{ width: '50%', margin: 'auto', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>register</Button>
//                 </Box>
//             )}
//         </Box>
//         <Box
//             className="image"
//             style={{
//                 transform: isSwitched ? 'translateX(-100%)' : 'none',
//                 transition: 'transform 0.5s ease-in-out',
//                 zIndex: isSwitched ? '2' : '1',
//                 backgroundColor: '#ccc',
//                 width: '50%',
//                 height: '90vh',
//             }}
//         >
//             <Typography variant="h6"></Typography>
//         </Box>
//     </Container>
//         <Button variant="contained" onClick={handleSwitch}>Switch</Button>

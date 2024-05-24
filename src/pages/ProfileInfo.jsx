import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, TextField, Typography } from "@mui/material"
import StyledComponents from "../components/StyedButton"
import ManIcon from '@mui/icons-material/Man';
import Woman2Icon from '@mui/icons-material/Woman2';

function ProfileInfo({ handleOpen,
    handleClose,
    handleChange,
    handleConfirm,
    userData,
    open,
    selectedIndex }) {
    return (
        <>
            {/* Profile-Section */}
            <Stack Box
                component="main"
                sx={{
                    // margin: '0 auto',
                    width: '60%',
                    marginTop: '7%',
                    marginBottom: '9%',
                    position: "absolute",
                    left: '35.5%'
                }
                }
            >
                {
                    selectedIndex === 0 && (
                        <>
                            <Container>
                                {/* profile-Avatar */}
                                <Box sx={{ textAlign: 'center', backgroundColor: '#F4F4F4', marginTop: '5%', boxShadow: '2', padding: '20px' }}>
                                    <img style={{ cursor: 'pointer' }} src="../../public/profile3.png" alt="" />
                                    <Typography variant="h6" sx={{ color: 'black' }}>Omar Hassan</Typography>
                                    <Typography variant="h6" sx={{ color: 'black' }}>Ismailia, EG</Typography>
                                    <StyledComponents />
                                </Box>
                                {/* Profile-Info */}
                                <Box
                                    component="main"
                                    sx={{
                                        marginTop: '30px'
                                    }}
                                >
                                    {
                                        selectedIndex === 0 && (
                                            <Box bgcolor={'#F4F4F4'} sx={{ boxShadow: '2', padding: '20px' }} >
                                                <Box >
                                                    <Typography
                                                        variant="h4"
                                                        gutterBottom
                                                        color={"black"}
                                                        display={"flex"}
                                                        justifyContent={"flex-start"}
                                                        fontWeight={"bold"}
                                                        margin={0}
                                                        marginBottom={4}
                                                    >
                                                        Profile info
                                                    </Typography>
                                                </Box>


                                                {/* 1 */}
                                                <Grid container spacing={2} display={"flex"} marginBottom={5} >
                                                    <Grid item xs={4} sm={4}>
                                                        <TextField
                                                            // readOnly
                                                            id="email"
                                                            label="Email"
                                                            placeholder='oh.22697@gmail.com'
                                                            value={userData.email}
                                                            variant="outlined"
                                                            InputLabelProps={{ style: { color: "#6A7575" } }}
                                                            sx={{
                                                                "& .MuiOutlinedInput-root": {
                                                                    color: "#6A7575",
                                                                    borderColor: "#6A7575",
                                                                    "&:hover fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "& fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "&.Mui-focused fieldset": {
                                                                        borderColor: "black"
                                                                    }
                                                                },
                                                                width: "100%",
                                                                textAlign: "center",
                                                                "& input": {
                                                                    height: "15px" // Set your desired height
                                                                }// Align text center
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} sm={4}>
                                                        <TextField
                                                            id="firstName"
                                                            label="First Name"
                                                            placeholder='Omar'
                                                            value={userData.firstName}
                                                            variant="outlined"
                                                            InputLabelProps={{ style: { color: "#6A7575" } }}
                                                            sx={{
                                                                "& .MuiOutlinedInput-root": {
                                                                    color: "#6A7575",
                                                                    borderColor: "#6A7575",
                                                                    "&:hover fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "& fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "&.Mui-focused fieldset": {
                                                                        borderColor: "black"
                                                                    }
                                                                },
                                                                width: "100%",
                                                                textAlign: "center",
                                                                "& input": {
                                                                    height: "15px" // Set your desired height
                                                                }// Align text center
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} sm={4}>
                                                        <TextField
                                                            id="lastName"
                                                            label="Last Name"
                                                            placeholder='Hassan'
                                                            variant="outlined"
                                                            InputLabelProps={{ style: { color: "#6A7575" } }}
                                                            sx={{
                                                                "& .MuiOutlinedInput-root": {
                                                                    color: "#6A7575",
                                                                    borderColor: "#6A7575",
                                                                    "&:hover fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "& fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "&.Mui-focused fieldset": {
                                                                        borderColor: "black"
                                                                    }
                                                                },
                                                                width: "100%",
                                                                textAlign: "center",
                                                                "& input": {
                                                                    height: "15px" // Set your desired height
                                                                }// Align text center
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>


                                                {/* 2 */}
                                                <Grid container spacing={2} display={"flex"} marginBottom={5}>
                                                    <Grid item xs={4} sm={4}>
                                                        <TextField
                                                            // readOnly
                                                            id="phoneNumber"
                                                            label="Phone Number"
                                                            placeholder='+201066035716'
                                                            variant="outlined"
                                                            InputLabelProps={{ style: { color: "#6A7575" } }}
                                                            sx={{
                                                                "& .MuiOutlinedInput-root": {
                                                                    color: "#6A7575",
                                                                    borderColor: "#6A7575",
                                                                    "&:hover fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "& fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "&.Mui-focused fieldset": {
                                                                        borderColor: "black"
                                                                    }
                                                                },
                                                                width: "100%",
                                                                textAlign: "center",
                                                                "& input": {
                                                                    height: "15px"
                                                                }
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} sm={4}>
                                                        <TextField
                                                            id="birthday"
                                                            label="Birthday"
                                                            placeholder='06|22|1997'
                                                            variant="outlined"
                                                            InputLabelProps={{ style: { color: "#6A7575" } }}
                                                            sx={{
                                                                "& .MuiOutlinedInput-root": {
                                                                    color: "#6A7575",
                                                                    borderColor: "#6A7575",
                                                                    "&:hover fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "& fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "&.Mui-focused fieldset": {
                                                                        borderColor: "black"
                                                                    }
                                                                },
                                                                width: "100%",
                                                                textAlign: "center",
                                                                "& input": {
                                                                    height: "15px" // Set your desired height
                                                                }// Align text center
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} sm={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Button variant="contained" href="#contained-buttons" sx={{ backgroundColor: '#606060', textAlign: 'center' }}>
                                                            <ManIcon color='black' />
                                                            Male
                                                        </Button>
                                                        <Button variant="contained" href="#contained-buttons" sx={{ backgroundColor: '#606060', textAlign: 'center', marginLeft: '5%' }}>
                                                            <Woman2Icon color='black' />
                                                            Female
                                                        </Button>
                                                    </Grid>
                                                </Grid>


                                                {/* 3 */}
                                                <Grid container spacing={2} display={"flex"} marginBottom={5}>
                                                    <Grid item xs={4} sm={4}>
                                                        <TextField
                                                            // readOnly
                                                            id="nationality"
                                                            label="Nationality"
                                                            placeholder='Egyptian'
                                                            variant="outlined"
                                                            InputLabelProps={{ style: { color: "#6A7575" } }}
                                                            sx={{
                                                                "& .MuiOutlinedInput-root": {
                                                                    color: "#6A7575",
                                                                    borderColor: "#6A7575",
                                                                    "&:hover fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "& fieldset": {
                                                                        borderColor: "black"
                                                                    },
                                                                    "&.Mui-focused fieldset": {
                                                                        borderColor: "black"
                                                                    }
                                                                },
                                                                width: "100%",
                                                                textAlign: "center",
                                                                "& input": {
                                                                    height: "15px" // Set your desired height
                                                                }
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>



                                                {/* 4 */}
                                                <Grid container spacing={2} display={"flex"}>
                                                    <Grid item xs={4} sm={4} >
                                                        <Button onClick={handleOpen} variant="contained" href="#contained-buttons" sx={{ backgroundColor: '#606060', textAlign: 'center', width: '100%', height: '45px' }}>
                                                            Update Profile
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                </Box>
                            </Container>
                        </>
                    )
                }

                {/* Confirm Profile Updates */}
                {
                    open && (
                        <div>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Edit Data</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        autoFocus
                                        // margin="dense"
                                        id="name"
                                        label="Name"
                                        name='firstName'
                                        type="text"
                                        fullWidth
                                        value={userData.firstName}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        // margin="dense"
                                        id="name"
                                        label="Email"
                                        name='email'
                                        type="text"
                                        fullWidth
                                        value={userData.email}
                                        onChange={handleChange}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleConfirm}>Confirm</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    )
                }
            </Stack>
        </>
    )
}

export default ProfileInfo

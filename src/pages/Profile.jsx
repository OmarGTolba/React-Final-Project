// import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import Sidebar from '../components/Sidebar';
import Address from './Address';
import Orders from './Orders';
import Payment from './Payment';
import { Stack } from '@mui/material';


const drawerWidth = 300;

export default function Profile() {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: ''
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData, [name]: value
        }));
    };

    const handleConfirm = (event) => {
        const { name, value } = event.target;
        console.log('Confirmed:', userData);
        setUserData((prevData) => ({
            ...prevData, [name]: value
        }));
        handleClose();
    };

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };


    return (
        <Stack sx={{ display: 'flex', minHeight: '89vh' }}>
            <CssBaseline />
            <Sidebar drawerWidth={drawerWidth} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex} />
            <ProfileInfo
                handleOpen={handleOpen}
                handleClose={handleClose}
                handleChange={handleChange}
                handleConfirm={handleConfirm}
                userData={userData}
                open={open}
                selectedIndex={selectedIndex}
            />


            {/* Order-Section */}
            {
                selectedIndex === 1 && (
                    <>
                        <Sidebar drawerWidth={drawerWidth} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex} />
                        <Orders />
                    </>
                )
            }
            {/* Address-Section */}

            {
                selectedIndex === 2 && (
                    <>
                        <Sidebar drawerWidth={drawerWidth} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex} />
                        <Address />
                    </>
                )
            }
            {/* Payment-Section */}
            {
                selectedIndex === 3 && (
                    <>
                        <Sidebar drawerWidth={drawerWidth} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex} />
                        <Payment />
                    </>
                )
            }
        </Stack>
    );
}

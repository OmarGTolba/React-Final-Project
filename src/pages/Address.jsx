import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Modal,
    TextField,
    Button,
    IconButton,
} from '@mui/material';
import { AddCircleOutline, Close, Delete, Edit } from '@mui/icons-material';
import { styled } from '@mui/system';
import EditAddressForm from '../components/EditAddressForm';
import { useNavigate } from 'react-router-dom';

const AddAddressCard = styled(Card)({
    border: '2px dashed #66BB6A    ',
    padding: '20px',
    width: '200px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'center',
});

const AddressContainer = styled(Box)({
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px',
});

const AddressCard = styled(Card)({
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

const ModalContent = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: 24,
    borderRadius: '8px',
});

function Address() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            street: '123 Main St',
            city: 'Anytown',
            zone: 'ABC',
            country: 'XYZ',
        },
        {
            id: 2,
            street: '456 Elm St',
            city: 'Othertown',
            zone: 'DEF',
            country: 'UVW',
        },
    ]);
    const [newAddress, setNewAddress] = useState({
        street: '',
        city: '',
        zone: '',
        country: '',
    });

    const [editingAddress, setEditingAddress] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the new address
        setAddresses([...addresses, newAddress]);
        // Reset the form fields
        setNewAddress({
            street: '',
            city: '',
            zone: '',
            country: '',
        });
        handleClose();
    };

    const handleDelete = (id) => {
        // Remove the address with the given id
        setAddresses(addresses.filter((address) => address.id !== id));
    };

    const handleEdit = (address) => {
        const editedAddress = { ...address };
        setEditingAddress(editedAddress);
        setOpen(true);
    };
    

    const handleSaveEdit = () => {
        if (editingAddress) {
            // Update the address in the addresses array
            setAddresses(addresses.map((address) => {
                if (address.id === editingAddress.id) {
                    return editingAddress;
                }
                return address;
            }));
            // Clear the editingAddress state
            setEditingAddress(null);
            // Close the modal
            handleClose();
        }
    };

    return (
        <Box>
            {/* <EditAddressForm/> */}
            <Typography sx={{ marginTop: '6%', padding: '10px', textAlign: 'left' }} variant="h4" component="h1" align="center">
                Your Addresses
            </Typography>
            <AddressContainer sx={{ padding: '10px' , display:'flex', flexWrap:'wrap', justifyContent:'flex-start'}}>
            <AddAddressCard><AddCircleOutline onClick={handleOpen} sx={{ color: '#66BB6A', fontSize: '80px', cursor: 'pointer' }} /></AddAddressCard>
                {addresses.map((address) => (
                    <AddressCard key={address.id} sx={{display:'flex' ,flexDirection:'column', width:'280px' , height:'280px', padding:'10px', border:'3px solid #66BB6A'}}>
                        <CardContent sx={{lineHeight:'40px'}}>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Typography sx={{color:'#66BB6A', fontWeight:'bold'}} gutterBottom variant="p" component="div">
                                Street
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold'}} gutterBottom variant="p" component="div">
                                {address.street}
                            </Typography>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Typography sx={{color:'#66BB6A', fontWeight:'bold'}} gutterBottom variant="p" component="div">
                                City
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold'}} gutterBottom variant="p" component="div">
                                {address.city}
                            </Typography>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Typography sx={{color:'#66BB6A', fontWeight:'bold'}} gutterBottom variant="p" component="div">
                                Zone
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold'}} gutterBottom variant="p" component="div">
                                {address.zone}
                            </Typography>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Typography sx={{color:'#66BB6A', fontWeight:'bold'}} gutterBottom variant="p" component="div">
                                Country
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold'}} gutterBottom variant="p" component="div">
                                {address.country}
                            </Typography>
                            </Box>

                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Button sx={{color:'#fff', backgroundColor:'#66BB6A', '&:hover':{color:'#66BB6A', backgroundColor:'#fff', border:'2px solid #66BB6A'}}} onClick={() => handleEdit(address)}>
                                Edit
                            </Button>
                            <IconButton color="error" onClick={() => handleDelete(address.id)}>
                                <Delete />
                            </IconButton>
                        </Box>
                    </AddressCard>
                ))}
            </AddressContainer>
            <Modal open={open} onClose={handleClose}>
                <ModalContent>
                    <IconButton
                        style={{ position: 'absolute', right: 10, top: 10 }}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>
                    <Typography variant="h6" component="h2">
                        {editingAddress ? 'Edit Address' : 'Add New Address'}
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                        <TextField
                            fullWidth
                            label="Street"
                            name="street"
                            margin="normal"
                            required
                            value={editingAddress ? editingAddress.street : newAddress.street}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            margin="normal"
                            required
                            value={editingAddress ? editingAddress.city : newAddress.city}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Zone"
                            name="zone"
                            margin="normal"
                            required
                            value={editingAddress ? editingAddress.zone : newAddress.zone}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            margin="normal"
                            required
                            value={editingAddress ? editingAddress.country : newAddress.country}
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }} onClick={handleSaveEdit}>
                            {editingAddress ? 'Save Changes' : 'Add Address'}
                        </Button>
                    </form>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default Address;

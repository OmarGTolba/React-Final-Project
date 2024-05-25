import React, { useState } from 'react';
import { Modal, TextField, Button, IconButton, Typography, Box } from '@mui/material';
import { Close } from '@mui/icons-material';

const AddAddressForm = ({ open, handleClose, handleSubmit }) => {
    const [newAddress, setNewAddress] = useState({
        id: '',
        street: '',
        city: '',
        zone: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(newAddress);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <IconButton style={{ position: 'absolute', right: 10, top: 10 }} onClick={handleClose}>
                    <Close />
                </IconButton>
                <Typography variant="h6" component="h2">
                    Add New Address
                </Typography>
                <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
                    <TextField fullWidth label="ID" name="id" margin="normal" required value={newAddress.id} onChange={handleChange} />
                    <TextField fullWidth label="Street" name="street" margin="normal" required value={newAddress.street} onChange={handleChange} />
                    <TextField fullWidth label="City" name="city" margin="normal" required value={newAddress.city} onChange={handleChange} />
                    <TextField fullWidth label="Zone" name="zone" margin="normal" required value={newAddress.zone} onChange={handleChange} />
                    <TextField fullWidth label="Country" name="country" margin="normal" required value={newAddress.country} onChange={handleChange} />
                    <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                        Add Address
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default AddAddressForm;

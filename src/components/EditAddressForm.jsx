import React, { useState, useEffect } from 'react';
import { Modal, TextField, Button, IconButton, Typography, Box } from '@mui/material';
import { Close } from '@mui/icons-material';

const EditAddressForm = ({ open, handleClose, address, handleSaveEdit }) => {
    const [editingAddress, setEditingAddress] = useState({ ...address });

    useEffect(() => {
        setEditingAddress({ ...address });
    }, [address]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSaveEdit(editingAddress);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <IconButton style={{ position: 'absolute', right: 10, top: 10 }} onClick={handleClose}>
                    <Close />
                </IconButton>
                <Typography variant="h6" component="h2">
                    Edit Address
                </Typography>
                <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
                    <TextField fullWidth label="ID" name="id" margin="normal" required value={editingAddress.id} onChange={handleChange} />
                    <TextField fullWidth label="Street" name="street" margin="normal" required value={editingAddress.street} onChange={handleChange} />
                    <TextField fullWidth label="City" name="city" margin="normal" required value={editingAddress.city} onChange={handleChange} />
                    <TextField fullWidth label="Zone" name="zone" margin="normal" required value={editingAddress.zone} onChange={handleChange} />
                    <TextField fullWidth label="Country" name="country" margin="normal" required value={editingAddress.country} onChange={handleChange} />
                    <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                        Save Changes
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default EditAddressForm;

import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Modal, Button, IconButton } from '@mui/material';
import { AddCircleOutline, Close, Delete } from '@mui/icons-material';
import { styled } from '@mui/system';
import AddAddressForm from '../components/AddAddressForm';
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

const Address = () => {
    const navigate = useNavigate();
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
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
    const [editingAddress, setEditingAddress] = useState(null);

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const handleOpenEdit = (address) => {
        setEditingAddress(address);
        setOpenEdit(true);
    };

    const handleCloseEdit = () => setOpenEdit(false);

    const handleAddAddress = (newAddress) => {
        setAddresses([...addresses, newAddress]);
    };

    const handleEditAddress = (editedAddress) => {
        setAddresses(addresses.map((address) => (address.id === editedAddress.id ? editedAddress : address)));
        setEditingAddress(null);
    };

    const handleDelete = (id) => {
        setAddresses(addresses.filter((address) => address.id !== id));
    };

    return (
        <Box>
            <Typography sx={{ marginTop: '6%', padding: '10px', textAlign: 'left' }} variant="h4" component="h1" align="center">
                Your Addresses
            </Typography>
            <AddressContainer sx={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <AddAddressCard onClick={handleOpenAdd}>
                    <Typography sx={{ color: '#66BB6A', fontSize: '80px', cursor: 'pointer' }} >+</Typography>
                </AddAddressCard>
                {addresses.map((address) => (
                    <AddressCard key={address.id} sx={{display:'flex',height:'auto'}}>
                        <CardContent>
                            <Typography sx={{ color: '#66BB6A', fontWeight: 'bold' }} gutterBottom variant="p" component="div">
                                Street
                            </Typography>
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }} gutterBottom variant="p" component="div">
                                {address.street}
                            </Typography>
                            <Typography sx={{ color: '#66BB6A', fontWeight: 'bold' }} gutterBottom variant="p" component="div">
                                City
                            </Typography>
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }} gutterBottom variant="p" component="div">
                                {address.city}
                            </Typography>
                            <Typography sx={{ color: '#66BB6A', fontWeight: 'bold' }} gutterBottom variant="p" component="div">
                                Zone
                            </Typography>
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }} gutterBottom variant="p" component="div">
                                {address.zone}
                            </Typography>
                            <Typography sx={{ color: '#66BB6A', fontWeight: 'bold' }} gutterBottom variant="p" component="div">
                                Country
                            </Typography>
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }} gutterBottom variant="p" component="div">
                                {address.country}
                            </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Button onClick={() => handleOpenEdit(address)} sx={{ color: '#fff', backgroundColor: '#66BB6A', '&:hover': { color: '#66BB6A', backgroundColor: '#fff', border: '2px solid #66BB6A' } }}>
                                Edit
                            </Button>
                            <IconButton color="black" onClick={() => handleDelete(address.id)}>
                                <Delete />
                            </IconButton>
                        </Box>
                        </CardContent>
                    </AddressCard>
                ))}
            </AddressContainer>
            <AddAddressForm open={openAdd} handleClose={handleCloseAdd} handleSubmit={handleAddAddress} />
            {editingAddress && <EditAddressForm open={openEdit} handleClose={handleCloseEdit} address={editingAddress} handleSaveEdit={handleEditAddress} />}
        </Box>
    );
};

export default Address;


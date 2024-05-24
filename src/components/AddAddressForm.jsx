import React, { useState } from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardActions } from '@mui/material';
import { Link, Route,} from 'react-router-dom';
// import AddAddressForm from './AddAddressForm';
import EditAddressForm from './EditAddressForm';

function AddAddressForm() {
    const [addresses, setAddresses] = useState([
        {
            name: 'Mohamed Ayman Mostafa',
            street: 'Shbeen street',
            city: 'Jasmine Tower',
            zone: 'Ismailia Free zone',
            country: 'Egypt'
        }
    ]);

    // const history = useHistory();

    const addAddress = (newAddress) => {
        setAddresses([...addresses, newAddress]);
        // history.push('/address');
    };

    const editAddress = (index, editedAddress) => {
        const updatedAddresses = [...addresses];
        updatedAddresses[index] = editedAddress;
        setAddresses(updatedAddresses);
        // history.push('/address');
    };

    const deleteAddress = (index) => {
        const updatedAddresses = addresses.filter((address, i) => i !== index);
        setAddresses(updatedAddresses);
    };

    return (
        <Container sx={{ width: '100%', marginTop: "10%" }}>
            <Typography sx={{ padding: '10px' }} variant="h5" gutterBottom>
                Your Addresses
            </Typography>
            <Box sx={{ display: 'flex', p: 3, gap: '20px', padding: '10px' }}>
                {/* <Link to="/address/add"> */}
                    <Button variant="outlined">Add Address</Button>
                {/* </Link> */}
                {/* <Switch> */}
                    {/* <Route path="/address/add"> */}
                        <AddAddressForm  />
                    {/* </Route> */}
                    {/* <Route path="/address/edit/:index"> */}
                        {/* <EditAddressForm addresses={addresses}  /> */}
                    {/* </Route> */}
                {/* </Switch> */}
                {addresses.map((address, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {address.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {address.street}
                                <br />
                                {address.city}
                                <br />
                                {address.zone}
                                <br />
                                {address.country}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/address/edit/${index}`}>
                                <Button size="small">Edit</Button>
                            </Link>
                            <Button size="small" color="error" onClick={() => deleteAddress(index)}>Remove</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>
    );
}

export default AddAddressForm;
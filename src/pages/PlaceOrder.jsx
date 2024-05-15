import React, { useState } from 'react';
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Box,
    Paper,
    Grid,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Avatar,
    Card,
    CardContent,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';

const PlaceOrder = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'T-Shirt', color: 'White', size: 'L', price: 300, quantity: 1, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Skirt', color: 'Black', size: 'L', price: 600, quantity: 2, image: 'https://via.placeholder.com/150' }
    ]);

    const [addresses, setAddresses] = useState([
        { id: 1, name: 'Mohamed Ayman Mostafa', address: 'Shbein town, Jasmine Tower, Ismailia Free Zone, Egypt' },
    ]);

    const [cards, setCards] = useState([
        { id: 1, name: 'Mohamed Ayman Mostafa', number: '4556 - 5642 - 0695 - 5168', cvv: '123' },
    ]);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [openAddressDialog, setOpenAddressDialog] = useState(false);
    const [newAddress, setNewAddress] = useState('');
    const [openCardDialog, setOpenCardDialog] = useState(false);
    const [newCard, setNewCard] = useState({ name: '', number: '', cvv: '' });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const handleDelete = id => {
        setDeleteItemId(id);
        setOpenDeleteDialog(true);
    };

    const confirmDelete = () => {
        setCartItems(cartItems.filter(item => item.id !== deleteItemId));
        setOpenDeleteDialog(false);
        setDeleteItemId(null);
    };

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
        setDeleteItemId(null);
    };

    const handleAddAddress = () => {
        setAddresses([...addresses, { id: addresses.length + 1, name: 'New Address', address: newAddress }]);
        setNewAddress('');
        setOpenAddressDialog(false);
    };

    const handleAddressDialogClose = () => {
        setNewAddress('');
        setOpenAddressDialog(false);
    };

    const handleAddCard = () => {
        setCards([...cards, { id: cards.length + 1, ...newCard }]);
        setNewCard({ name: '', number: '', cvv: '' });
        setOpenCardDialog(false);
    };

    const handleCardDialogClose = () => {
        setNewCard({ name: '', number: '', cvv: '' });
        setOpenCardDialog(false);
    };

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Box mt={4}>
                <Typography variant="h5" mb={2}>
                    <HomeIcon /> Shipping Address
                </Typography>
                <Grid container spacing={2}>
                    {addresses.map(address => (
                        <Grid item xs={12} md={4} key={address.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1">{address.name}</Typography>
                                    <Typography variant="body2">{address.address}</Typography>
                                    <Button variant="contained" color="primary" sx={{ mt: 1 }}>Choose</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item xs={12} md={4}>
                        <Button variant="outlined" color="primary" startIcon={<AddIcon />} onClick={() => setOpenAddressDialog(true)}>
                            Add new address
                        </Button>
                    </Grid>
                </Grid>

                <Box mt={4}>
                    <Typography variant="h5" mb={2} display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="h5" ml={2}><ShoppingCartIcon /> Your Order</Typography>  <Typography variant="h6" ml={2}>Items</Typography>
                    </Typography>
                    {cartItems.map(item => (
                        <Paper key={item.id} sx={{ p: 2, mb: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} md={1}>
                                    <Avatar variant="square" src={item.image} sx={{ width: 56, height: 56 }} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography>Color: {item.color}</Typography>
                                    <Typography>Size: {item.size}</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h6">{item.price} EGP</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextField
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                        inputProps={{ min: 1 }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h6">{item.price * item.quantity} EGP</Typography>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                    <IconButton color="secondary" onClick={() => handleDelete(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                    <Box mt={4}>
                        <Typography variant="h5">Total: {totalPrice} EGP</Typography>
                    </Box>
                </Box>

                <Box mt={4}>
                    <Typography variant="h5" mb={2}>
                        <PaymentIcon /> Payment
                    </Typography>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Select Payment Method</FormLabel>
                        <RadioGroup aria-label="payment-method" name="payment-method" value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
                            <FormControlLabel value="card" control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
                            <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                        </RadioGroup>
                    </FormControl>

                    {selectedPaymentMethod === 'card' && (
                        <Grid container spacing={2} mt={2}>
                            {cards.map(card => (
                                <Grid item xs={12} md={4} key={card.id}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="body1">{card.name}</Typography>
                                            <Typography variant="body2">Number: {card.number}</Typography>
                                            <Typography variant="body2">CVV: {card.cvv}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                            <Grid item xs={12} md={4}>
                                <Button variant="outlined" color="primary" startIcon={<AddIcon />} onClick={() => setOpenCardDialog(true)}>
                                    Add new card
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </Box>

                <Box mt={4}>
                    <Button variant="contained" color="primary">
                        Place order
                    </Button>
                </Box>
            </Box>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this item from the cart?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Add Address Dialog */}
            <Dialog open={openAddressDialog} onClose={handleAddressDialogClose}>
                <DialogTitle>Add New Address</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="New Address"
                        type="text"
                        fullWidth
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddressDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddAddress} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Add Card Dialog */}
            <Dialog open={openCardDialog} onClose={handleCardDialogClose}>
                <DialogTitle>Add New Card</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name on Card"
                        type="text"
                        fullWidth
                        value={newCard.name}
                        onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Card Number"
                        type="text"
                        fullWidth
                        value={newCard.number}
                        onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="CVV"
                        type="text"
                        fullWidth
                        value={newCard.cvv}
                        onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCardDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddCard} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default PlaceOrder;

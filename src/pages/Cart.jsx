import { useContext, useEffect, useState } from 'react';
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
    Avatar
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const Cart = () => {

const {token} = useContext(UserContext)


useEffect(() => {
    console.log(token);
  }, []); 



    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'T-Shirt', color: 'White', size: 'L', price: 300, quantity: 1, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Skirt', color: 'Black', size: 'L', price: 600, quantity: 2, image: 'https://via.placeholder.com/150' }
    ]);
    const [openDialog, setOpenDialog] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    };





    const handleDelete = id => {
        setDeleteItemId(id);
        setOpenDialog(true);
    };

    const confirmDelete = () => {
        setCartItems(cartItems.filter(item => item.id !== deleteItemId));
        setOpenDialog(false);
        setDeleteItemId(null);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setDeleteItemId(null);
    };

    const navigate = useNavigate();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Container sx={{ marginTop: '70px' }}>
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
                <Box display="flex" alignItems="center" mb={2} justifyContent={'space-between'} borderBottom={'2px solid black'}>
                    <Box sx={{ display: 'flex' }}>
                        <ShoppingCartIcon fontSize="large" />
                        <Typography variant="h4" ml={1}>Shopping Cart</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ width: "26px", height: '35px', backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                            {totalItems}
                        </Box>
                        <Typography variant="h4" ml={1}>Items</Typography>
                    </Box>
                </Box>
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={1}>
                            <Typography variant="h6">Image</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6">Product Details</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6">Price</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6">Quantity</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6">Total</Typography>
                        </Grid>
                        <Grid item xs={12} md={1}>
                            <Typography variant="h6">Action</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                {cartItems.map(item => (
                    <Paper key={item.id} sx={{ p: 2, mt: 2 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={1}>
                                <Avatar variant="square" src={item.image} sx={{ width: 56, height: 56 }} />
                            </Grid>
                            <Grid item xs={12} md={2}>
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
                <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Box>
                        <Typography variant="h5">Total: {totalPrice} EGP</Typography>
                    </Box>
                    <Box>
                        <Button onClick={() => navigate('/placeOrder')} variant="contained" color="primary" sx={{ mt: 2 }}>
                            Checkout
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this item from the cart?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmDelete} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Cart;

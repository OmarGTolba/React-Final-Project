import React from 'react';
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
import { AddCircleOutline, Close } from '@mui/icons-material';
import { styled } from '@mui/system';

const PaymentMethodsContainer = styled(Box)({
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px',
});

const AddMethodCard = styled(Card)({
    border: '2px dashed #ccc',
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

const PaymentCard = styled(Card)({
    padding: '20px',
    width: '200px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

function Payment() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box position={"fixed"} left={'40%'} top={"5%"} >
            <Typography variant="h4" component="h1" align="center">
                Your Payment Methods
            </Typography>
            <PaymentMethodsContainer>
                <AddMethodCard onClick={handleOpen}>
                    <AddCircleOutline fontSize="large" />
                    <Typography>Add Method</Typography>
                </AddMethodCard>
                <PaymentCard>
                    <CardContent>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Credit Card"
                            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                        />
                        <Typography variant="body1">John Doe</Typography>
                        <Typography variant="body2">1234 5678 9012 3456</Typography>
                    </CardContent>
                </PaymentCard>
            </PaymentMethodsContainer>
            <Modal open={open} onClose={handleClose}>
                <ModalContent>
                    <IconButton
                        style={{ position: 'absolute', right: 10, top: 10 }}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>
                    <Typography variant="h6" component="h2">
                        Add New Payment Method
                    </Typography>
                    <form style={{ marginTop: '20px' }}>
                        <TextField
                            fullWidth
                            label="Name on Card"
                            name="cardName"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Card Number"
                            name="cardNumber"
                            margin="normal"
                            required
                        />
                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        >
                            Upload Card Image
                            <input
                                type="file"
                                name="cardImage"
                                hidden
                                accept="image/*"
                                required
                            />
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        >
                            Add Card
                        </Button>
                    </form>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default Payment;

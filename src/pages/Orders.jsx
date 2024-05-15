import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    Card,
    CardContent,
    CardActions,
    Modal,
    TextField,
    Grid,
    Paper,
} from '@mui/material';

function Address() {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRateChange = (event) => {
        setRating(event.target.value);
    };

    const handleRateSubmit = () => {
        console.log(`Rating submitted: ${rating}`);
        handleClose();
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Container sx={{}}>
            <Box sx={{ p: 3, width: '70%', position: 'relative', left: '30%', marginTop: '8%' }}>
                <Typography variant="h5" gutterBottom>
                    Orders
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    View the delivery status for items and your order history
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Completed
                    </Typography>
                    <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Card sx={{ display: 'flex', width: '100%' }}>
                                <Box
                                    component="img"
                                    sx={{ width: 150, height: 150, bgcolor: 'grey.300', alignSelf: 'center', m: 2 }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto', p: 2 }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                            Delivered on Sunday, 28th Apr
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            Galaxy A14 Dual Sim Black 4GB RAM
                                            <br />
                                            128GB 4G - Middle East Version
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button sx={{ backgroundColor: '#494949' }} variant="contained" onClick={handleOpen}>
                                            Rate the seller
                                        </Button>
                                    </CardActions>
                                </Box>
                            </Card>
                        </Box>
                    </Paper>
                </Box>

                <Box>
                    <Typography variant="h6" gutterBottom>
                        Bids
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Active
                    </Typography>
                    <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Card sx={{ display: 'flex', width: '100%' }}>
                                <Box
                                    component="img"
                                    sx={{ width: 150, height: 150, bgcolor: 'grey.300', alignSelf: 'center', m: 2 }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto', p: 2 }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography variant="h6" component="div">
                                            Galaxy A14 Dual Sim Black 4GB RAM
                                            <br />
                                            128GB 4G - Middle East Version
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                            Your last bid: <Box component="span" sx={{ fontWeight: 'bold' }}>$20</Box>
                                            <br />
                                            Highest bid: <Box component="span" sx={{ fontWeight: 'bold' }}>$25</Box>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button sx={{ backgroundColor: '#494949' }} variant="contained">Go to bid page</Button>
                                    </CardActions>
                                </Box>
                            </Card>
                        </Box>
                    </Paper>
                </Box>
            </Box>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Rate the Seller
                    </Typography>
                    <TextField
                        fullWidth
                        label="Rating"
                        variant="outlined"
                        value={rating}
                        onChange={handleRateChange}
                    />
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item>
                            <Button sx={{ backgroundColor: '#494949' }} variant="contained" onClick={handleRateSubmit}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button sx={{ backgroundColor: '#494949' }} variant="outlined" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Container>
    );
}

export default Address;

import { Container, Typography, Box, Button, Card, CardContent, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Address() {
    return (
        <Container sx={{ margin: '100px 0 auto', position: 'fixed', left: '40%', width: '100%' }}>
            <Typography variant="h5" gutterBottom>
                Your Addresses
            </Typography>
            <Box sx={{ p: 3, display: 'flex', gap: '20px' }}>
                <Box sx={{ display: 'flex' }}>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{ width: '100%', height: '100%', borderStyle: 'dashed' }}>
                        Add Address
                    </Button>
                </Box>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Mohamed Ayman Mostafa
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Shbeen street
                            <br />
                            Jasmine Tower
                            <br />
                            Ismailia Free zone
                            <br />
                            Egypt
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" startIcon={<EditIcon />}>Edit</Button>
                        <Button size="small" color="error" startIcon={<DeleteIcon />}>Remove</Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
}

export default Address;

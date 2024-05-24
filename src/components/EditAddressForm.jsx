import React, { useState } from 'react';
import { Container, CssBaseline, Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, ShoppingCart, Home, Payment } from '@mui/icons-material';

export default function EditAddressForm({ addresses, editAddress, match }) {
    
      return (
        <Container component="main">
          <CssBaseline />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Paper style={{ padding: 20 }}>
                <Typography variant="h5" gutterBottom>
                  Edit address
                </Typography>
                <form noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="addressName"
                    label="Address name"
                    name="addressName"
                    defaultValue="My home"
                    InputProps={{ style: { color: 'green' } }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="governorate"
                    label="Governorate"
                    name="governorate"
                    defaultValue="Ismailia"
                    InputProps={{ style: { color: 'green' } }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="street"
                    label="Street"
                    name="street"
                    defaultValue="Shebeen st"
                    InputProps={{ style: { color: 'green' } }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="building"
                    label="Building"
                    name="building"
                    defaultValue="Jasmine tower"
                    InputProps={{ style: { color: 'green' } }}
                  />
                  <Button type="submit" fullWidth variant="contained" color="primary">
                    Edit address
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      );
    }

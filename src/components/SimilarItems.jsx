/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Badge, Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SimilarItems = ({ items }) => {
    return (
        <Box display="flex" justifyContent="space-between" mt={4} sx={{marginBottom:'40px'}}>
            {items.map((item, index) => (
                <Card key={index} sx={{ width: '23%' ,'&:hover':{boxShadow: " 0px 0px 5px 5px rgba(0, 0, 0, .2)"}}}>
                    <CardMedia component="img" height="270" image={item.image} alt={item.title} />
                    <CardContent sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
                        <Typography variant="subtitle1">{item.title}</Typography>
                        <IconButton color="inherit">
                        <Badge  sx={{color:'green'}}>
                            <FavoriteBorderIcon />
                        </Badge>
                    </IconButton>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default SimilarItems;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BuildIcon from '@mui/icons-material/Build';
import { FaHammer } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function ProductCard({ product ,addToCart }) {
    const navigate = useNavigate()
   const navigateToBidDetail=(id)=>{
console.log(product)
    navigate(`/bid/${id}`)
    }
    return (
        <Card sx={{ width: '30%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', margin: 1, height: 330 , position:'relative' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="../public/PlaceholderGlossary.svg"
               
            />
        {!product.expirationDate && (
                    <FaHammer sx={{ marginRight: 1 }} style={{ position: 'absolute', top: '10px', right: '5px' }} />
                )}    <CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary"></Typography>
                    <Typography variant="body2" color="text.secondary">$</Typography>
                </CardActions>
                <Typography gutterBottom variant="h5" component="div"></Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
            
            {!product.expirationDate && (
                  
                <Button sx={{ width: '100%', backgroundColor: '#ccc' }} onClick={addToCart}>Add to Cart</Button>
                )}
            


            {product.expirationDate && (
                  
                  <Button sx={{ width: '100%', backgroundColor: '#ccc' }} onClick={()=>{
                    navigateToBidDetail(product._id)
                  }}>Place Bid</Button>
                  )}
              


            </CardActions>
        </Card>
    );
}

import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onMouseEnter={handleCardFlip}
      onMouseLeave={handleCardFlip}
      style={{
        perspective: '1000px', 
      
        margin:'15px',
      }}
    >
      <Card
        sx={{
          width: '300px',
          transformStyle: 'preserve-3d', 
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', 
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
         
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FlipCard;

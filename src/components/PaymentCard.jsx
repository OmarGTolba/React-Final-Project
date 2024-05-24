import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '180px',
  borderRadius: '15px',
  background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
  color: 'white',
  padding: '20px',
  position: 'relative',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}));

const Shape1 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-50px',
  left: '-50px',
  width: '200px',
  height: '200px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
}));

const Shape2 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-50px',
  right: '-50px',
  width: '200px',
  height: '200px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
}));

const PaymentCard = ({ name, number, cards, selectedCard, setSelectedCard, handleCardClick }) => {
  const [cvv, setCvv] = useState('');
  const [isEditingCvv, setIsEditingCvv] = useState(false);

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
    console.log(event.target.value);
  };

  const handleCardClickWithCvv = (cardId) => {
    if (isEditingCvv) {
      // Finish editing CVV before toggling the card state
      setIsEditingCvv(false);
      return;
    }

    if (selectedCard === cardId) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardId);
    }
  };

  return (
    <CardContainer onClick={() => handleCardClickWithCvv(cards.id)} sx={{cursor:'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {selectedCard === cards.id ? (
        <TextField
          id="cvv"
          label="CVV"
          variant="outlined"
          InputLabelProps={{ style: { color: 'black' } }}
          value={cvv}
          onChange={handleCvvChange}
          onFocus={() => setIsEditingCvv(true)}
          onBlur={() => setIsEditingCvv(false)}
          sx={{
            "& .MuiOutlinedInput-root": {
              fontWeight: 'bold',
              color: 'black',
              // zIndex:'5555555555555',
              borderColor: '#aea',
              '&:hover fieldset': {
                borderColor: '#5DAA60',
              },
              '& fieldset': {
                borderColor: '#aea',
                backgroundColor: '',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#5DAA60',
              },
            },
            width: '95%',
          }}
        />
      ) : (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
            <Shape1 />
            <Shape2 />
            <Typography variant="body2" sx={{ marginBottom: '20px' }}>
              Name
            </Typography>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="h6">{cards.name}</Typography>
            <Typography variant="h6">{cards.number}</Typography>
            <Box sx={{ position: 'absolute', top: '20px', right: '20px' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" width="40" />
            </Box>
            <Typography variant="body2" sx={{ position: 'absolute', bottom: '20px', left: '20px' }}>
              {number}
            </Typography>
            <Typography variant="body2" sx={{ position: 'absolute', bottom: '20px', left: '20px' }}>
              CVV : {cvv}
            </Typography>
            <Typography variant="body2" sx={{ position: 'absolute', bottom: '20px', right: '20px' }}>
              09/27
            </Typography>
          </Box>
        </>
      )}
    </CardContainer>
  );
};

export default PaymentCard;

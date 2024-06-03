/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
// import Navbar from './components/Navbar';
import BidCard from '../components/BidCard';
import SimilarItems from '../components/SimilarItems';
import AuctionContext from '../contexts/AuctionContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const items = [
    { title: 'MacBook Pro MNEH3', image: '../public/villa2.jpg' },
    { title: 'MacBook Pro MNEH3', image: '../public/villa3.jpg' },
    { title: 'MacBook Pro MNEH3', image: '../public/vila.jpg' },
    { title: 'MacBook Pro MNEH3', image: '../public/laptop.jpg' },
];

const BidPage = () => {
    const{id}= useParams()
    console.log(id);
    useEffect(() => {
        const fetchBid = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/v1/get-auction-by-id/${id}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'jwt': localStorage.getItem('token')
                    }
                });

                const data = response.data;
                console.log(data);
                // Handle the response data as needed
            } catch (error) {
                console.error('Error fetching bid:', error);
            }
        };

        fetchBid();
    }, [id]);

    const [highestBid, setHighestBid] = useState(2500);
    const [heartCount, setHeartCount] = useState(0);

const{auction}= useContext(AuctionContext)
// console.log(auction);

    const handleBid = (amount) => {
        setHighestBid((prev) => prev + amount);
    };

    return (
        <div>
            <CssBaseline />
            {/* <Navbar  /> */}
            <Container>
                <BidCard onBid={handleBid} highestBid={highestBid} />


                <Typography variant="h6" mt={4}>
                    You May Also Like:
                </Typography>
                <SimilarItems items={items} />
            </Container>
        </div>
    );
};

export default BidPage;
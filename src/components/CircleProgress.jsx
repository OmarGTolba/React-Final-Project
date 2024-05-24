/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";

function CircularProgressWithLabel(props) {
    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width:'100%'
            }}
        >
            <CircularProgress
                variant="determinate"
                value={props.value}
                style={{ width: "400px", height: "400px" ,
                '& circle[stroke-width]': { // Target the circle element with a stroke-width attribute
                  strokeWidth: '2px' // Adjust the strokeWidth as needed
                }}}
                thickness={2}
                strokeLinecap={'rounded'}
            />
            <Box
                sx={{
                    top: 30,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Typography variant="subtitle1" sx={{ marginBottom: "15px" }}>
                    Highest Bidder: {props.bidderName}
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "15px" }}>
                    Highest Bid: {props.highestBid}$
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "15px" }}>
                    Time left
                </Typography>
                <Typography
                    sx={{
                        fontSize: "30px",
                        padding: "0px 60px",
                        margin: "0",
                        borderRadius: "10px",
                        marginBottom: "15px"
                    }}
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >
                    {`${props.hours}:${props.minutes}:${props.seconds}`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
    bidderName: PropTypes.string.isRequired,
    highestBid: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired
};

export default function AuctionCard() {
    const [progress, setProgress] = useState({
        hours: 6,
        minutes: 0,
        seconds: 10
    });
    const [bidderName, setBidderName] = useState("Mohamed Ayman");
    const [bidAmount, setBidAmount] = useState('');
    const [highestBid, setHighestBid] = useState(2500);
    const [confirmBid, setConfirmBid] = useState(false);

    const handleOneBid = () => {
        setConfirmBid(true);
    };

    const handleBid = (amount) => {
        setHighestBid((prev) => prev + amount);
    };

    const confirmBidHandler = () => {
        handleBid(parseInt(bidAmount));
        setBidAmount('');
        setConfirmBid(false);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prevProgress => {
                const { hours, minutes, seconds } = prevProgress;
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return prevProgress;
                }
                let newSeconds = seconds - 1;
                let newMinutes = minutes;
                let newHours = hours;
                if (newSeconds < 0) {
                    newMinutes -= 1;
                    newSeconds = 59;
                    if (newMinutes < 0) {
                        newHours -= 1;
                        newMinutes = 59;
                    }
                }
                return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const totalSeconds =
        progress.hours * 3600 + progress.minutes * 60 + progress.seconds;
    const progressValue = (12 * 3600 - totalSeconds) / (12 * 3600) * 100;

    return (
        <Box sx={{}}>
            <CircularProgressWithLabel
                bidderName={bidderName}
                highestBid={highestBid}
                value={progressValue}
                hours={progress.hours}
                minutes={progress.minutes}
                seconds={progress.seconds}
            />
            <Box sx={{display:"flex",flexDirection:'column', alignItems:'center'}}>
            <TextField
                label="Place Bid"
                variant="outlined"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
            />
            <Box display="flex" alignItems="center" mt={2} >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={confirmBid ? confirmBidHandler : handleOneBid}
                >
                    {confirmBid ? "Confirm" : "Place Bid"}
                </Button>
            </Box>
            </Box>
        </Box>
    );
}

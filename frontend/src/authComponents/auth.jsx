import "./auth.css";
import React from "react";
import {Box, Button, ThemeProvider} from "@mui/material";
import { GrClose } from "react-icons/gr";
import { theme } from "./theme";
import { useNavigate } from "react-router-dom";

export const Auth = () => {

    const navigate = useNavigate()

    const HandleClick = () => {
        navigate("/auth/verify")
    }
    
    return (
        <ThemeProvider theme={theme}>

        <Box id="auth" className="container">

            <GrClose size={20} />
            <h1 style={{fontSize:"36px", marginBottom:"0px"}}>Sign in</h1>
            <p className="text">To quickly find your favourites items, saved addresses and payments.</p>
            <hr/>
            <p className="text">Register and earn 2000 reward points</p>
            <img alt="Reward Gifts" src="https://blog.corecentive.com/hs-fs/hubfs/corporate%20rewards.png?width=1200&name=corporate%20rewards.png" style={{width:"100%", marginTop:"30px"}}></img>
            <Button onClick={HandleClick} variant="contained" sx={{width:'100%', height:"42px", marginTop:'30px', fontSize:'15px', fontFamily:"inherit" }}>Enter Phone Number or Email</Button>
            {/* eslint-disable-next-line */}
            <p className="text">By continuing, you agree that you have read and accept our <a href="#" className="anchor" >T&Cs</a> and <a href="#" className="anchor" >Privacy Policy</a>.</p>

        </Box>
        </ThemeProvider>

    )
}
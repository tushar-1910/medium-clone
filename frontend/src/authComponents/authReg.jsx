import React from "react";
import "./auth.css"
import { GrClose } from "react-icons/gr";
import {Box, Button, ThemeProvider} from "@mui/material";
import { TextField } from "@mui/material";
import { theme } from "./theme";

export const AuthReg = () => {
    
    return (
        <ThemeProvider theme={theme}>
        <Box id="auth" className="container">
            
            <Box sx={{display:"flex", alignItems:'center', justfyContent:"center", margin:0}}>
            <GrClose size={20} />
            <h4 className="logReg">Register</h4>
            </Box>

            <hr/>

            <TextField
                id=""
                // error={click?true:false}
                color="secondary"
                placeholder="Enter Email ID or Phone Number"
                // helperText={message}
                sx={{width:"100%"}}
                size="small"
            />


            <Button variant="contained" sx={{width:"100%", height:'45px', marginTop:"100px", marginBottom:"30vh"}}>PROCEED</Button>

        </Box>
        </ThemeProvider>
    )
}
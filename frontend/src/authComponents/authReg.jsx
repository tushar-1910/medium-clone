import React from "react";
import "./auth.css"
import { GrClose } from "react-icons/gr";
import {Box, Button, ThemeProvider } from "@mui/material";
import { TextField } from "@mui/material";
import { theme } from "./theme";
import { useSelector } from "react-redux";

export const AuthReg = () => {

    
    const [numBool, setNumBool] = React.useState(false)
    const [ emailBool , setEmailBool ] = React.useState(false)

    const [first_name, setFirstName] = React.useState("")
    const [Last_name, setLastName] = React.useState("")
    const [number, setNumber] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const { Input } = useSelector((state) => state.Input)
    const [ inputBool , setInputBool ] = React.useState(false)

    

    React.useEffect(() => {
        
        // eslint-disable-next-line
        if(+Input/1 == Input){
            setNumBool(true)
        }else{
            setEmailBool(true)
        }
        
        if(Input === null || Input === ""){
            setNumBool(false)
            setEmailBool(false)
        }
    },[numBool,emailBool, Input])
    
    return (
        <ThemeProvider theme={theme}>
        <Box id="auth" className="container">
            
            <Box sx={{display:"flex", alignItems:'center', justfyContent:"center", margin:0}}>
            <GrClose size={20} />
            <h4 className="logReg" style={{marginRight:"30px"}}>Register</h4>
            </Box>

            <hr/>

            <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"25px"}}>
            <p className="text" style={{fontSize:"15px", marginRight:"5px"}}>Register to Earn </p><p style={{color:"#fc2779", fontSize:"15px"}}> 2000  Reward Points!</p>
            </Box>


            <Box sx={{width:"90%", margin:"auto"}}>

            <TextField
                required
                id="standard-required"
                label="First Name"
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
                required
                id="standard-required"
                label="Last Name"
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
                required
                id="standard-required"
                label="Phone Number"
                type={"number"}
                disabled={numBool}
                value={numBool?Input:null}
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => {setNumber(e.target.value)}}
            />

            <TextField
                required
                id="standard-required"
                label="Email"
                disabled={emailBool}
                value={emailBool?Input:null}
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                required
                id="standard-required"
                label="Create Password"
                type={"password"}
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => setPassword(e.target.value)}
            />


            </Box>


            <Button variant="contained" sx={{width:"100%", height:'45px', marginTop:"40px", marginBottom:"2vh"}}>Register</Button>

        </Box>
        </ThemeProvider>
    )
}
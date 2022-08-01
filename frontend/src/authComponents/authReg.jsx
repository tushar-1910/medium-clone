import React from "react";
import "./auth.css"
import { GrClose } from "react-icons/gr";
import {Box, Button, ThemeProvider } from "@mui/material";
import { TextField } from "@mui/material";
import { theme } from "./theme";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {BsExclamationLg} from "react-icons/bs"
import { Api_Url } from "../App";

export const AuthReg = () => {

    const navigate = useNavigate()
    const { Input } = useSelector((state) => state.Input)
    
    const [numBool, setNumBool] = React.useState(false)
    const [ emailBool , setEmailBool ] = React.useState(false)

    const [first_name, setFirstName] = React.useState("")
    const [last_name, setLastName] = React.useState("")
    const [number, setNumber] = React.useState(Input)
    const [email, setEmail] = React.useState(Input)
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("")


    const HandleNavigate = () => {
        navigate('/auth/verify')
    }

    function isValidEmail(email) {
        if(/\S+@\S+\.\S+/.test(email)){
            return true
        }else{
            return false
        }
    }

    async function HandleRegister(){
        
        const ReqDataBody = {
            "first_name": first_name,
            "last_name": last_name,
            "phone_number": number,
            "email": email,
            "password":password
        }
        
        if(first_name !== "" && last_name !== "" && password !== "" && number !== "" && number.length === 10 && email !== "" && isValidEmail(email)){
        
        try {
            const response = await fetch(`${Api_Url}/auth/register`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({"ReqDataBody": ReqDataBody})
            })

            if(response.status === 201){
                setError(false)
                navigate("/auth/login")
            }else if(response.status === 502){
                isValidEmail(email)
                setError(true)
                setErrorMessage("Email / Phone Number aleady Registered")
            }
            
        } catch (error) {
            return error
        }

        }else{
            setError(true)
            setErrorMessage("Please Provide Correct Credentials")
        }
    }

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
            navigate("/auth")
            // eslint-disable-next-line
        }else if(+Input/1 == Input){
            setNumBool(true)
        }else{
            setEmailBool(true)
        }

        // eslint-disable-next-line
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
            <p className="text" style={{fontSize:"15px", marginRight:"5px"}}>Register to Earn </p><p className="text" style={{color:"#fc2779", fontSize:"15px"}}> 2000  Reward Points!</p>
            </Box>

            {error?
            <Box sx={{display:"flex", justifyContent:'center'}}>
                <p style={{color:"red", fontSize:"14px"}}>{errorMessage}</p>
                <BsExclamationLg style={{color:"red"}} />
            </Box>
            :null}


            <Box sx={{width:"90%", margin:"auto"}}>

            <TextField
                required
                label="First Name"
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
                required
                label="Last Name"
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
                required
                label="Phone Number"
                type={"number"}
                disabled={numBool}
                value={numBool?Input:null}
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => {setNumber(e.target.value)}}
                onClick={numBool?HandleNavigate:null}
            />

            <TextField
                required
                label="Email"
                disabled={emailBool}
                value={emailBool?Input:null}
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => setEmail(e.target.value)}
                onClick={emailBool?HandleNavigate:null}
            />

            <TextField
                required
                label="Create Password"
                type={"password"}
                variant="standard"
                size="small"
                sx={{width:"100%", marginBottom:"15px"}}
                onChange={(e) => setPassword(e.target.value)}
            />


            </Box>


            <Button onClick={HandleRegister} variant="contained" sx={{width:"100%", height:'45px', marginTop:"40px", marginBottom:"2vh"}}>Register</Button>

        </Box>
        </ThemeProvider>
    )
}
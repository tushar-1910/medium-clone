import React from "react";
import "./auth.css"
import { GrClose } from "react-icons/gr";
import { Box , Button, ThemeProvider, TextField} from "@mui/material"
import { theme } from "./theme";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Api_Url } from "../App";

export const AuthLog = () => {

    const navigate = useNavigate()
    const { Input } = useSelector((state) => state.Input)

    
    const [password, setPassword] = React.useState("")
    const [passBool , setPassBool] = React.useState(false)
    const [incorrectPass, setincorrectPass] = React.useState(false)

    const HandleNavigate = () => {
        navigate("/auth/verify")
    }

    const HandleChange = (e) => {
        setPassword(e.target.value)
    }

    async function HandleLogin(){

        try {
            const response = await fetch(`${Api_Url}/auth/login`,{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    "input": Input,
                    "password": password
                })
            })

            if(response.status === 202){
                let ResData = await response.json()
                localStorage.setItem("token", JSON.stringify(ResData.encryptionToken))

                setincorrectPass(false)
                navigate("/")
            }else if( response.status === 406){
                setincorrectPass(true)
            }
    
        } catch (error) {
            console.log(error)
        }
    }





    React.useEffect(() => {
        if(Input === null || Input === ""){
            navigate('/auth')
        }
        // eslint-disable-next-line
    },[])

    React.useEffect(() => {

        if(password === "" || password === null){
            setPassBool(true)
        }else{
            setPassBool(false)
        }

    },[password])


    
    return (
        <ThemeProvider theme={ theme }>
        <Box id="auth" className="container">
            
            <Box sx={{display:"flex", alignItems:'center', justfyContent:"center", margin:0}}>
            <GrClose size={20} />
            <h4 className="logReg" style={{marginRight:"30px"}}>Login</h4>
            </Box>

            <hr/>

            <Box className="centerDiv">
            <TextField
                disabled
                value={Input}
                color="secondary"
                placeholder="Enter Email ID or Phone Number"
                sx={{width:"80%"}}
                size="small"
                onClick={HandleNavigate}
            />
            </Box>

            <Box className="centerDiv">
            <p style={{margin:0, marginTop:"50px"}}>Welcome Back</p>
            <p style={{margin:0}}>Please enter your password to continue</p>

            <TextField
            label="Password"
            variant="standard"
            type={"password"}
            error={incorrectPass}
            helperText={incorrectPass?"Wrong Password":null}
            sx={{width:"80%", marginTop:"30px", color:"(0, 0, 0, 0.75)"}}
            onChange={HandleChange}
            />

            <Button onClick={HandleLogin} variant="contained" disabled={passBool} sx={{width:"80%", marginTop:"30px", marginBottom:"30vh", fontSize:"20px"}}>LOGIN</Button>
            </Box>

        </Box>
        </ThemeProvider>
    )
}
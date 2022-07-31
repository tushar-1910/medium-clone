import React from "react";
import "./auth.css"
import {Box, Button, ThemeProvider} from "@mui/material"
import { GrClose } from "react-icons/gr";
import { TextField } from "@mui/material";
import { theme } from "./theme";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { InputData } from "../redux/authRedux/action";
import { Api_Url } from "../App";

export const AuthVerify = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { Input } = useSelector((state) => state.Input)

    
    const [input,setInput] = React.useState(Input)
    const [click, setClick] = React.useState(false)
    const [message, setMessage] = React.useState("")

    const [verifyNumber, setVerifyNumber] = React.useState(false)
    const [verifyEmail, setVerifyEmail] = React.useState(false)


    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const HandleClick = () => {
        setClick(true)
    }
    
    
    const HandleChange = (e) => {
        setInput(e.target.value)
        dispatch(InputData(e.target.value))
    }
    
    async function HandleProceed(){
        
        if(!verifyNumber && !verifyEmail){

            console.log("Please Enter Valid Details")

        }else if( verifyNumber && !verifyEmail){
            

            try {

                const response = await fetch(`${Api_Url}/auth/verify`,{
                    method: "POST",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify({
                        "input": +input
                    })
                })

                if(response.status === 302){
                    navigate("/auth/login")
                }else if (response.status === 404){
                    navigate("/auth/register")
                }
            }catch(err) {
                console.log(err)
            }
            
        }else if( !verifyNumber && verifyEmail){
            
            try {

                const response = await fetch(`${Api_Url}/auth/verify`,{
                    method: "POST",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify({
                        "input": input
                    })
                })

                
                if(response.status === 302){
                    navigate("/auth/login")
                }else if (response.status === 404){
                    navigate("/auth/register")
                }
            }catch(err) {
                console.log(err)
            }
            

        }
    }


    React.useEffect(() => {
        
        if(click && (input === null || input === undefined || input === "")){
            setMessage("Required")
        }else{
            // eslint-disable-next-line
        if(+input/1 == input){

            if(+input.length === 10){
                setVerifyNumber(true)
                setClick(false)
                setMessage("")
            }else{
                setVerifyNumber(false)
                setClick(true)
                setMessage("Please Enter A Valid Number")
            }

        }else{
            
            if(isValidEmail(input)){
                setVerifyEmail(true)
                setClick(false)
                setMessage("")
            }else{
                setVerifyEmail(false)
                setClick(true)
                setMessage("Please Enter A Valid Email")
            }

        }
    }
    },[input,click])



    
    return (
        <>
        <ThemeProvider theme={theme}>
        <Box id="auth" className="container">

            <Box sx={{display:"flex", alignItems:'center', justfyContent:"center", margin:0}}>
            <GrClose size={20} />
            <h4 className="logReg">Login / Register</h4>
            </Box>

            <hr/>

            <TextField
                id=""
                error={click?true:false}
                color="secondary"
                placeholder="Enter Email ID or Phone Number"
                helperText={message}
                sx={{width:"100%"}}
                size="small"
                value={Input}
                onClick = {HandleClick}
                onChange = {HandleChange}
            />


            <Button onClick={HandleProceed} variant="contained" sx={{width:"100%", height:'45px', marginTop:"100px", marginBottom:"30vh"}}>PROCEED</Button>

        </Box>
        </ThemeProvider>
        </>
    )
}
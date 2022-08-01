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
import { gapi } from "gapi-script"
import SocialButton from "./SocialButton";
import {FcGoogle} from "react-icons/fc"
import { Client_ID } from "./auth";

export const AuthVerify = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { Input } = useSelector((state) => state.Input)

    
    const [input,setInput] = React.useState(Input)
    const [click, setClick] = React.useState(false)
    const [message, setMessage] = React.useState("")

    const [verifyNumber, setVerifyNumber] = React.useState(false)
    const [verifyEmail, setVerifyEmail] = React.useState(false)

    const [GoogleBool, setGoogleBool] = React.useState(false)

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const HandleClick = () => {
        setClick(true)
        setGoogleBool(false)
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
                    if(!checkData(+input) === false){
                        setVerifyNumber(false)
                        navigate("/auth/login")
                    }
                }else if (response.status === 404){
                    setVerifyNumber(false)
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
                    if(!checkData(input) === false){
                        setVerifyEmail(false)
                        navigate("/auth/login")
                    }
                }else if (response.status === 404){
                    setVerifyEmail(false)
                    navigate("/auth/register")
                }
            }catch(err) {
                return err
            }
            

        }
    }

    async function checkData(input){

        try {
            
        const response = await fetch(`${Api_Url}/auth/login`,{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "input": input,
                "password":"randompasswordforgooglelogin"
            })
        })

        if(response.status === 202){
            setGoogleBool(true)
            return true
        }else{
            return false
        }

        } catch (error) {
            return false
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


    // Google Login


    async function GoogleRegister(userDetails){

        try {

            const ReqDataBody = {
                "first_name": userDetails.profile.firstName,
                "last_name": userDetails.profile.lastName,
                "email": userDetails.profile.email,
                "password":"randompasswordforgooglelogin"
            }

            const response = await fetch(`${Api_Url}/auth/register`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({"ReqDataBody": ReqDataBody})
            })

            if(response.status === 201){
                GoogleLogin(userDetails)
            }
            
        } catch (error) {
            return error
        }
    }

    async function GoogleLogin(userDetails){

        try {
            const response = await fetch(`${Api_Url}/auth/login`,{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    "input": userDetails.profile.email,
                    "password": "randompasswordforgooglelogin"
                })
            })

            const ResData = await response.json()
            
            if(response.status === 202){
                localStorage.setItem("token", ResData.encryptionToken)
                navigate("/")
            }
            
        } catch (error) {
            return null
        }
    }

    const handleSocialLogin = (user) => {
        
        GoogleLogin(user)
        .then((res) => {
            if(res === null){
                localStorage.setItem("token","")
                GoogleRegister(user)
            }
        })
        .catch((err) => {return err})
    };
      
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };



    React.useEffect(() => {

        function start(){
            gapi.client.init({
                clientId: Client_ID,
                cookiepolicy: 'single_host_origin',
                scope:""
            })
        }

        gapi.load("client:Nykaa Clone", start)
    })


    
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
                disabled={GoogleBool}
                color="secondary"
                placeholder="Enter Email ID or Phone Number"
                helperText={message}
                sx={{width:"100%"}}
                size="small"
                value={Input}
                onClick = {HandleClick}
                onChange = {HandleChange}
            />

            { GoogleBool ?
            <>
            <p style={{textAlign:'center', color:"rgba(0,0,0,0.7)", fontSize:"15px", marginTop:"70px"}}>You have already registered this Email Address or Number with us using Google</p>

            <SocialButton
            provider= "google"
            appId={Client_ID}
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
            className="googleButton"
            style={{marginBottom:"30vh"}}
            >
            <FcGoogle size={25} style={{marginRight:"8px"}} />
            Google
            </SocialButton>
            </> :
            <Button onClick={HandleProceed} variant="contained" sx={{width:"100%", height:'45px', marginTop:"100px", marginBottom:"30vh"}}>PROCEED</Button>
            }

        </Box>
        </ThemeProvider>
        </>
    )
}
import "./auth.css";
import React from "react";
import {Box, Button, ThemeProvider} from "@mui/material";
import { GrClose } from "react-icons/gr";
import { theme } from "./theme";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script"
import SocialButton from "./SocialButton";
import {FcGoogle} from "react-icons/fc"
import { Api_Url } from "../App";


// {"web":{"client_id":"918616545429-9bg6ehmr9mce8o2fss6mhmafvc6vl5k4.apps.googleusercontent.com","project_id":"nykaa-clone-358007","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:3000/auth","http://localhost:3000/auth/login"],"javascript_origins":["http://localhost:3000"]}}
export const Client_ID = "918616545429-9bg6ehmr9mce8o2fss6mhmafvc6vl5k4.apps.googleusercontent.com"

export const Auth = () => {

    const navigate = useNavigate()

    const HandleClick = () => {
        navigate("/auth/verify")
    }

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
        <ThemeProvider theme={theme}>

        <Box id="auth" className="container">

            <GrClose size={20} />
            <h1 style={{fontSize:"36px", marginBottom:"0px", marginTop:"10px"}}>Sign in</h1>
            <p className="text">To quickly find your favourites items, save addresses and payments.</p>
            <hr/>
            <p className="text">Register and earn 2000 reward points</p>
            <img alt="Reward Gifts" src="https://blog.corecentive.com/hs-fs/hubfs/corporate%20rewards.png?width=1200&name=corporate%20rewards.png" style={{width:"100%", marginTop:"30px"}}></img>


            <Button onClick={HandleClick} variant="contained" sx={{width:'100%', height:"42px", marginTop:'30px', fontSize:'15px', fontFamily:"inherit" }}>Enter Phone Number or Email</Button>

            <SocialButton
                provider= "google"
                appId={Client_ID}
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
                className="googleButton"
            >
                <FcGoogle size={25} style={{marginRight:"8px"}} />
                Google
            </SocialButton>

            {/* eslint-disable-next-line */}
            <p className="text">By continuing, you agree that you have read and accept our <a href="#" className="anchor" >T&Cs</a> and <a href="#" className="anchor" >Privacy Policy</a>.</p>

        </Box>
        </ThemeProvider>

    )
}
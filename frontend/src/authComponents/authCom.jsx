import React from 'react';
import {Button, Popover} from '@mui/material';
import { useNavigate } from 'react-router';
import jwt_decode from "jwt-decode";


export function AuthCom() {

    const navigate = useNavigate()
    
    const [loggedin , setLoggedin] = React.useState(false)
    const [name, setName] = React.useState("")
    
    const [anchorEl, setAnchorEl] = React.useState()
    
    
    const handleClick = (event) => {
        
        if(loggedin){
            setAnchorEl(event.currentTarget);
        }else{
            navigate('/auth')
        }
    };

    const HandleLogout = () => {
        localStorage.removeItem("token")
        setLoggedin(false)
    }


    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    
    const token = localStorage.getItem("token")
    
    React.useEffect(() => {
        
        if(token !== null && token !== "" && token !== undefined){
            setLoggedin(true)
            const decoded = jwt_decode(token);
            setName(decoded.first_name)
        }else{
            setName("Account")
            setLoggedin(false)
        }
    },[token])

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="inherit"  onClick={handleClick}
      sx={{display:"flex", width:"100px", backgroundColor:"white", boxShadow:"none" }}>
        {name}
      </Button>

      {loggedin?
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Button size='small' sx={{padding:"4px", width:"100px"}} variant="text" color="inherit" onClick={HandleLogout} >Logout</Button>
      </Popover>:
      null}
    </div>
  );
}
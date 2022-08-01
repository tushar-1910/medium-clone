import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import styled from 'styled-components'
import './address.css'
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'



export default function MultilineTextFields() {
  const [addressData, setaddress] = React.useState({
  name:"",
  number:"",
  address:""
  });
  const navigate = useNavigate();

  const handleChange = (e) =>{
    const {name,value} = e.target;
  // setValue(e.target.value)
setaddress(addressData=>({
    ...addressData,[name]:value
}))
console.log(name,value)
  }
  
const addressChange = async (e)=>{
  e.preventDefault()
  let {address,name,number} = addressData;
  let token = localStorage.getItem('token');
  console.log(addressData)
  if (address && name && number){
   
  let res = await fetch("http://localhost:8080/address",{
    method:"POST",
    body:JSON.stringify(addressData),
    headers:{
      "Content-Type":"application/json",
      'token' : token
    }
  })
  let data =await res.json();
  console.log(data);
  navigate("/payment")
  
  alert("posted")
   }
   else{
    // ("not posted")
   }
}

// const {name,number,address} = addressData;

  return (
    <Box
      className = "box"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {console.log(addressData)}
<div><h3 className = "heading"> NEW ADDRESS</h3></div>
      <div >
        <TextField
          label="select Country"
          value="India"
        //   onChange={handleChange}
          variant="standard"
        />
       </div>
       <div>
        <TextField
          label="name"
          value={addressData.name}
          name="name"
          type = "text"
          required
          onChange={handleChange}
          variant="standard"
        />
        </div>
        <div>
        <TextField
        type = "number"
          label="PhoneNumber"
          value ={addressData.number}
          required
          name = "number"
          onChange={handleChange}
          placeholder="Placeholder"
          variant="standard"
        />
        </div>
        <div>
        <TextField
        type = "text"
          label="Address"
          required
          name = "address"
          value = {addressData.address}
          onChange={handleChange}

           //   defaultValue="Address"
          variant="standard"
        />
      </div>
      <button className='addressButton' onClick = {addressChange}>SHIP TO THIS ADDRESS </button>

    </Box>

  );
}

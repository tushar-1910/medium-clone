import React from 'react';
//import './App.css';
import { Haircare } from './components/haircare';
import { Moisturizers } from './components/moisturizers';
import { ProductDescription } from './components/productdesc';
import { Routes, Route } from "react-router-dom"
import { Auth } from './authComponents/auth';
import { AuthVerify } from './authComponents/authVerify';
import { AuthReg } from './authComponents/authReg';
import { AuthLog } from './authComponents/authLogin';
import {Home} from './components/home/Home';
import { Homepage } from './components/Homepage/Homepage';
import MultilineTextFields from './components/AddressComponents/Address';

// import  CartNavbar  from './components/Cart/navbar/CartNavbar';

export const Api_Url = "http://localhost:8080"


function App() {
  return (
    <div className="App">
      {/* <CartNavbar/> */}
      <Home />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={< Homepage />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/auth/verify' element={<AuthVerify />}></Route>
        <Route path='/auth/register' element={ <AuthReg />  }></Route>
        <Route path='/auth/login' element={ <AuthLog /> }></Route>
        <Route path="/Moisturizers" element={<Moisturizers />} ></Route>
        <Route path="/productdesc/:productId" element={<ProductDescription />} ></Route>
        <Route path="/haircare" element={<Haircare />} ></Route>
        <Route path = "/address" element = {<MultilineTextFields/>}></Route>
        </Routes>
    </div>
  );
}

export default App


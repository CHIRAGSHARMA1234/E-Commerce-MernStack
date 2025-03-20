import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './Pages/login';
import Signup from './Pages/SignUp';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './Component/Navbar';
// import Home from './Pages/Home';
// import Products from './Pages/Products';
// import Contact from './Pages/Contact'

import './App.css'
import Contact from './Pages/Contact';

function App() {


  return (
    <>
    <Navbar/>
    {/* <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<welcomePage/>}/>
      <Route path="/product" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>




    </Routes>
    </BrowserRouter> */}
 


    </>
  )
}

export default App

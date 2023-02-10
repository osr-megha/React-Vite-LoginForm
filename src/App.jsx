import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { AppBar, Toolbar } from '@mui/material';
import Header from './Component/Header';
import Home from './Component/Home';
import Login from './Component/Login';
import Details from "./Component/Details";
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  

  return (
    <React.Fragment>
    
    <AppBar position='static' sx={{bgcolor:"#fff", minHeight:'100vh'}}>
    <Toolbar>
    <Header />
    </Toolbar>

    <Routes>
    <Route exact path="/" element={<Home/>}/>

    <Route exact path="/login" element={<Login/>}/>

    <Route element={<PrivateRoutes />}>
    <Route exact path="/detail" element={<Details/>}/>
    </Route>
    
    </Routes> 
  
    </AppBar>
    
    </React.Fragment>
  )
}

export default App

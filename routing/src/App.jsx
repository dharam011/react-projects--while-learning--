

import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import React from 'react'
import Router from "./components/Router";  
import Footer from './components/Footer'
import Context from './components/Context';


const App = () => {
  return (
    <Context>
  <BrowserRouter>
    <Nav />
    <Router />
    <Footer/>
  
  </BrowserRouter> 
  </Context>
  )
}

export default App
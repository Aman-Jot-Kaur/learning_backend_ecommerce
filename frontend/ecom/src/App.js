import React from 'react'
import Signup from './components/Signuppage'
import Login from './components/Loginpage'
import Page from './components/Adminpage'
import Vendorpage from './components/Vendorpage'
import CustomerPage from './components/Customerpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className='app' >
      <BrowserRouter>
      <Routes>
        <Route element={<Signup/>} path="/signup"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Page/>} path="/adminpage"></Route>
        <Route element={<Vendorpage/>} path="/vendorpage"></Route>
        <Route element={<CustomerPage/>} path="/customerpage"></Route>
        </Routes></BrowserRouter>
 
   
    </div>
  )
}

export default App

import { useState } from 'react'
 
import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Singup'
import Login from './Components/Login'
 

function App() {

  return (
     <>
     <Home/>
     <Routes>
      
      <Route path="/singup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
 
     </Routes>
     </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
  <>
    <Navbar />
    <Route path='/' element={<Home />} />

  </>
  )
}

export default App



import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'

function App() {

  return (
    <>
       <Navbar />
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/register' element={<Register />} />
       <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
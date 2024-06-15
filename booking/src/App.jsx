import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layot from './Layot'
import Register from './pages/Register'
import axios from 'axios'
const App = () => {
  axios.defaults.baseURL = 'http://localhost:4000'
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Layot />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>

  )
}

export default App
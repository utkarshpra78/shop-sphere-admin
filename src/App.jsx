import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddFood from './pages/AddFood/AddFood'
import ListFood from './pages/ListFood/ListFood'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/add' element={<AddFood/>}></Route>
        <Route path='/list' element={<ListFood/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/' element={<ListFood/>}></Route>
      </Routes>
       
        
        
    </div>
  )
}

export default App


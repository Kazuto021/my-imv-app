import React from 'react'

// import Product from './views/components/Product.jsx'

import MyApp from '../../myapp.jsx'
import Signup from '../screen/Signup.jsx'
import Login from '../screen/Login.jsx'
import Admin from '../screen/Admin.jsx'
import ProductScreen from '../screen/ProductScreen.jsx'
import Nav2 from '../components/Nav2.jsx'
import InventoryScreen from '../screen/InventoryScreen.jsx'
import ProductDetails from '../screen/ProductDetails.jsx'

// import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' Component={MyApp} /> */}
      <Route path='/' Component={Login} />
      <Route path='/signup' Component={Signup} />
      <Route path='/admin' Component={Admin } />
      <Route path='/product' Component={ProductScreen} />
      <Route path='/testing' Component={Nav2} />
      <Route path='/inventory' Component={InventoryScreen} />
      <Route path='/ProductDetails' Component={ProductDetails}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default MainRoutes
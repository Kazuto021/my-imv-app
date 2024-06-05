import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signup from './views/screen/Signup.jsx'
import Login from './views/screen/Login.jsx'
import Admin from './views/screen/Admin.jsx'
// import Product from './views/components/Product.jsx'
import ProductScreen from "./views/screen/ProductScreen.jsx"
import Nav2 from "./views/components/Nav2.jsx"


import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InventoryScreen from './views/screen/InventoryScreen.jsx'
import MyApp from './myapp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={MyApp} />
      <Route path='/signup' Component={Signup} />
      <Route path='/login' Component={Login} />
      <Route path='/admin' Component={Admin } />
      <Route path='/product' Component={ProductScreen} />
      <Route path='/testing' Component={Nav2} />
      <Route path='/inventory' Component={InventoryScreen} />
    </Routes>
  </BrowserRouter>
)

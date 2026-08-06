import React from 'react'
import Navigation from './customer/components/navigation/Navigation'
import HomeCarosel from "./customer/components/HomeCarosel/HomeCarosel"
import HomePage from './customer/components/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from "./customer/components/Cart/Cart"
import CheckOut from './customer/components/CheckOut/CheckOut'
import Order from "./customer/components/Order/Order"
import OrderDetails from './customer/components/Order/OrderDetails'
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './customer/Routers/CustomerRouters'



function App() {
  return (
    <div className=''>
      
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
     
     
    
      
    </div>
  )
}

export default App
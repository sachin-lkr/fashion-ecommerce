import React from 'react'
import Navigation from './customer/components/navigation/Navigation'
import HomeCarosel from "./customer/components/HomeCarosel/HomeCarosel"
import HomePage from './customer/components/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from "./customer/components/Cart/Cart"
import CheckOut from './customer/components/CheckOut/CheckOut'



function App() {
  return (
    <div className=''>
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <CheckOut/>
        
      </div>
      <Footer/>
    
      
    </div>
  )
}

export default App
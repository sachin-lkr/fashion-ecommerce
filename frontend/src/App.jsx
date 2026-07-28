import React from 'react'
import Navigation from './customer/components/navigation/Navigation'
import HomeCarosel from "./customer/components/HomeCarosel/HomeCarosel"
import HomePage from './customer/components/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'




function App() {
  return (
    <div className=''>
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        <Product/>
      </div>
      <Footer/>
    
      
    </div>
  )
}

export default App
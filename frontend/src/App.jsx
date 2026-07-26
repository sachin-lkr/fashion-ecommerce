import React from 'react'
import Navigation from './customer/components/navigation/Navigation'
import HomeCarosel from "./customer/components/HomeCarosel/HomeCarosel"
import HomePage from './customer/components/pages/HomePage/HomePage'




function App() {
  return (
    <div className=''>
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    
      
    </div>
  )
}

export default App
import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes ,Router} from 'react-router-dom'
import Shop from '../../pages/Shop/Shop'


const Ecommerce = () => {
  return (
    <div>
     

      <Navbar/>
      <Routes>
      
      <Route path="/" element={<Shop/>}/>
      </Routes>
      
      
   
    </div>
  )
}

export default Ecommerce
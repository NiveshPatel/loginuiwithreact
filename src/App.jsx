import React, { useEffect, useState } from 'react'
import LoginForm from './Components/LoginForm'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Ecommerce from './Components/Ecommerce/Ecommerce'
import { auth } from './firebase'
import Cart from "../src/pages/cart/cart"
import ShopContextProvider from './Context/shopcontext'
// import Shop from './pages/shop/shop'

// import Navbar from './Components/Navbar'
const App = () => {
  const [userName, setuserName] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setuserName(user.displayName)
      }else setuserName("")
      console.log(user)
    })
  },[])
  return (
    < >
    <ShopContextProvider>

     <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route  path="/Ecommerce" element={<Ecommerce/>}

      />
      {/* <Route path="/" element={<Shop/>}/> */}

      <Route path="/Ecommerce/cart" element={<Cart/>}/>
      
     </Routes>
    </ShopContextProvider>
     
   
    </>
  )
}

export default App
import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar'
import {PRODUCTS} from '../../products'
import { Box, Button, Typography } from '@mui/material'
import { ShopContext } from '../../Context/shopcontext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';

const cart = () => {
    const {cartItems,getTotalCartAmount}= useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
  return (
    <div>
        <Navbar/>
        <Box>
            <Typography variant='h3'>
Your Cart Items
            </Typography>
                </Box>
            <div>
                {PRODUCTS.map((product)=>{
if(cartItems[product.id] !== 0){
    return <CartItem data = {product}/>
}
                }

                )}
            </div>

<div>
    <h1>Subtotal: Rs {totalAmount}</h1>
<Link to="/Ecommerce"><Button  sx={{padding:"5px 10px"}}>Continue Shopping</Button></Link>
<Button>Checkout</Button>
</div>
    </div>
  )
}

export default cart
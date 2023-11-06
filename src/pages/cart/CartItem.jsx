import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shopcontext';
import { Box, Button, Typography } from '@mui/material';

const CartItem = (props) => {
    const {id,productName,productImage,price}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext)
  return (
    <>
       <Box
       component='img'
       src={productImage}
       sx={{width:'400px',height:'400px',marginLeft:{xs:'-5px',lg:'0px'},lg:{position:'absolute',left:'0%'}}}
       >

       </Box>
      <Box sx={{marginLeft:{xs:'130px'},fontSize:{xs:'20px'},alignItems:'center',justifyContent:'center'}}>

            <Typography  variant='h4'>
{productName}
            </Typography >
            <Typography sx={{marginLeft:'18px'}} variant='h6'>
{price}
            </Typography>
        
      </Box>
           
                <Button sx={{marginLeft:{xs:'80px'}}} onClick={()=>removeFromCart(id)}>-</Button>
                <input
                style={{padding:'3px 20px',textAlign:'center',width:'35px',borderRadius:'10px'}}
                 onchange={(e)=>updateCartItemCount(Number(e.target.value),id)} value={cartItems[id]} />
                <Button onClick={()=>addToCart(id)}> + </Button>
            </>
       
   
  )
}

export default CartItem
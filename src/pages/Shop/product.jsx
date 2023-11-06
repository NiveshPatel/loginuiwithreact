import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shopcontext'

const Product = (props) => {
    const {id,productName,price,productImage}=props.data
    const {addToCart,cartItems}=useContext(ShopContext)
    const cartItemAmount =cartItems[id]
  return (
    < >
   
   <Box
   sx={{width:{xs:'400px',height:"400px"},marginLeft:{lg:'550px'}}}
   component='img'
   src={productImage}
   >

   </Box>
     <Typography sx={{display:'flex',alignItems:"center",justifyContent:'center',marginBottom:"20px",marginTop:'-5px'}} variant='h6'>
        {productName}
     </Typography>
     <Typography sx={{display:'flex',alignItems:"center",justifyContent:'center',marginBottom:"20px",marginTop:'-5px'}} variant='h6'>
        Rs. {price}
     </Typography>
     <Button onClick={()=>addToCart(id)} sx={{display:'flex',alignItems:"center",justifyContent:'center',marginBottom:"20px",marginTop:{xs:'-25px',lg:'0px'},marginLeft:{lg:'695px',xs:'135px'}}}>Add to Cart {cartItemAmount>0 && <> ({cartItemAmount})</>}</Button>
       
        
      
    </>

   
   
  )
}

export default Product
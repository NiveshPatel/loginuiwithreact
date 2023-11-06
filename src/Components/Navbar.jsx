import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
const Navbar = () => {
  return (
    <Box>
        <Box sx={{display:'flex',alignItems:'center',textAlign:'center',textDecoration:'none',width:'100vw',justifyContent:'end',marginLeft:"-10px",height:'50px',backgroundColor:"black",color:"#fff",gap:'20px',fontSize:'20px'}}>
            <Link style={{textDecoration:"none",color:"white"}} to='/Ecommerce'>Shop</Link>
            <Link style={{color:'white',marginRight:'15px'}} to='/Ecommerce/cart'>{""}
            <ShoppingCart size={32}/>
            </Link>
        </Box>
    </Box>
  )
}

export default Navbar
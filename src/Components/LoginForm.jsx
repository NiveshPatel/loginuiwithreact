import { Box,  Paper, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import MailLockRoundedIcon from '@mui/icons-material/MailLockRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';
import { auth, provider } from '../firebase';
import Ecommerce from './Ecommerce/Ecommerce';
const LoginForm = () => {
const [value, setvalue] = useState('')
const navigate = useNavigate();
const [action, setaction] = useState("Login")
const [values, setvalues] = useState({
  Name:"",
  Email:'',
  Password:"",

})
const handelclick = ()=>{
  signInWithPopup(auth,provider).then((data)=>{
    setvalue(data.user.email)
    localStorage.setItem("email",data.user.email)
  })
}
  useEffect(()=>{
    setvalue(localStorage.getItem('email'))
  })
    
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const submithandel = (e)=>{
    setvalues()
    e.preventDefault()
    
    if(!values.Email || !values.Password){
      toast.error('Details required', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
      

    }else{
      // toast.success('Login Successfully', {
      
        createUserWithEmailAndPassword(auth,values.Email,values.Password).then(async(res)=>{
          const user = res.user;
         await updateProfile(user,{
            displayName:values.Name
          })
         navigate('/Ecommerce')
  }).catch((err)=>{
    toast.error(err.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  })
  setvalues("")

    }
    // console.log(values)
  }
  return (
    <Box
    style={{position:'absolute',top:"0%",width:'100%',overflow:'hidden',height:"100%",left:'0%',backgroundColor:'#ddf3ff'}}
    >
        <Box
    sx={{alignItems:'center',justifyContent:"center",display:"flex",marginTop:{lg:'50px',xs:'80px',sm:'210px'}}}
    >

<Paper
 style={{alignItems:"center",justifyContent:'center',postion:"relative"}}
sx={{width:{lg:'400px',xs:'70%'},backgroundColor:'rgb(255,255,255,29)',boxShadow:"2px 2px 40px 1px royalBlue",borderRadius:'10px'}}>
<Avatar
   className='avatar'
  sx={{width:{lg:'80px',xs:'65px',sm:'105px'},height:{lg:"80px",xs:'65px',sm:'105px'},marginLeft:{lg:'160px',xs:'105px',sm:"240px"},marginTop:{lg:'25px',xs:'30px'}}}
style={{backgroundColor:"#1565C0"}} src="/broken-image.jpg" />

{/* usernamefield */}

      {action==='Login'?<Box></Box>: <Box sx={{ display: 'flex', alignItems: 'flex-end',marginLeft:{lg:'60px',xs:'35px',sm:'100px'},marginTop:{lg:'13px',xs:'10px'} }}>
        <AccountCircle  sx={{ color: 'action.active', mr: 1, my: 0.5,fontSize:{lg:'40px',xs:'30px',sm:"55px"} }} />
        <TextField onChange={(e)=>setvalues((prev)=>({...prev,Name:e.target.value}))} sx={{padding:{lg:'5px 0px',xs:'0px 0px',sm:'10px 2px'},width:{lg:'205px',xs:"140px",sm:'300px'}}}  id="input-with-sx" label="Name" variant="standard" />
      </Box>
      
      }
      


     {/* email */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end',marginLeft:{lg:'62px',xs:'35px',sm:'100px'},marginTop:{lg:'10px',xs:'10px'} }}>
        <MailLockRoundedIcon  sx={{ color: 'action.active', mr: 1, my: 0.5,fontSize:{lg:'35px',xs:'30px',sm:"55px"} }} />
        <TextField onChange={(e)=>setvalues((prev)=>({...prev,Email:e.target.value}))} sx={{padding:{lg:'5px 0px',xs:'0px 0px',sm:'10px 2px'},width:{lg:'205px',xs:"140px",sm:'300px'}}}  id="input-with-sx" label="Email" variant="standard" />
      </Box>



{/* password */}
<Box sx={{ display: 'flex',marginLeft:{lg:'60px',xs:'35px',sm:'100px'} ,marginTop:{lg:'10px',xs:'10px',sm:'20px'}}}>
<h1>
    <LockResetRoundedIcon sx={{color: '#757575',  my: 0.5,fontSize:{lg:'40px',xs:'30px',sm:'55px'},marginTop:{lg:'-5px',xs:'-1px',sm:'-13px'}}}/>
</h1>

      <FormControl  sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
          
          onChange={(e)=>setvalues((prev)=>({...prev,Password:e.target.value}))}
          sx={{width:{lg:'205px',xs:"140px",sm:'300px'}}}  
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
</Box>



<Box >
<Button onClick={submithandel}  sx={{padding:{lg:"8px 110px",xs:'5px 60px',sm:"10px 55px"},postion:'absolute',left:'50%',transform:'translate(-50%,-50%)',marginTop:{lg:'20px',xs:"20px"}}} style={{textTransform:'none',fontWeight:'bold',marginBottom:"10px"}} variant="contained">{action}</Button>
   
</Box>


<Box sx={{border:"1px solid gray",width:{lg:'120px',xs:'80px'},marginLeft:{lg:'35px',xs:'20px'},opacity:"0.3"}}>

</Box>
<Typography variant='h6' sx={{position:"absolute",left:"50%",transform:'translate(-50%,-50%)',fontWeight:'700',fontStyle:"italic",opacity:"0.7"}}>
OR 
</Typography>
<Box sx={{border:"0.5px solid gray",width:{lg:'120px',xs:'80px'},marginLeft:{lg:'250px',xs:"180px"},opacity:"0.3"}}>

</Box>


<a href="" style={{textDecoration:'none',color:'black'}}>

  {/* google login */}
  {value?<Home/>:<button onClick={handelclick} style={{border:'none',backgroundColor:'rgb(255,255,255,29)',cursor:'pointer'}}>
<Box sx={{display:'flex',alignItems:'center',textAlign:'center',marginLeft:{lg:'110px',xs:'50px'},marginTop:"25px",marginBottom:'10px'}}>

<GoogleIcon  sx={{color:'#b342fe',fontSize:'27px'}}/>
<Typography variant='h3'
 sx={{fontSize:'15px',marginLeft:'10px',color:'royalblue',opacity:'0.8'}}
>
Log In with google
</Typography>
</Box>
</button>}


{action==='Login'?<Typography variant='h6' sx={{fontSize:'11px',marginLeft:{lg:'160px',xs:'95px'},opacity:'0.5',fontStyle:'italic'}}>forgot password?</Typography>:<Typography></Typography>}

</a>


{action==="Login"?<Box sx={{display:'flex',alignItems:'center',textAlign:'center',marginTop:{lg:'20px',xs:'12px'},marginBottom:'30px',marginLeft:'15px',justifyContent:'center'}}>
<Typography variant='h5' sx={{fontSize:'13px',marginRight:{lg:'5px',xs:'1px'}}}>
  Don't have an account ? 
</Typography>



<button style={{border:"none",backgroundColor:'rgb(255,255,255,29)',cursor:'pointer'}} onClick={()=>setaction('sign up')}>

<Typography  style={{color:'royalblue'}} sx={{fontSize:{lg:"19px",xs:'15px'}}}>Sign up</Typography>
</button>


</Box>:<Box sx={{display:'flex',alignItems:'center',textAlign:'center',marginTop:{lg:'20px',xs:'5px'},marginBottom:'30px',marginLeft:'15px',justifyContent:'center'}}>
<Typography variant='h5' sx={{fontSize:'13px',marginRight:{lg:'5px',xs:'1px'}}}>
  Already have an account?
</Typography>




  
<button  style={{border:"none",backgroundColor:'rgb(255,255,255,29)',cursor:'pointer'}} onClick={()=>setaction('Login')}>

<Typography  style={{color:'royalblue'}} sx={{fontSize:{lg:"19px",xs:'15px'}}}>Login</Typography>
</button>



</Box>}



</Paper>
    </Box>
    <ToastContainer/>
    </Box>
        
    
  )
}

export default LoginForm
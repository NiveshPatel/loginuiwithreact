import { Box, Paper } from '@mui/material'
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
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
const [TextFeild, setTextFeild] = useState([])
const [Password, setPassword] = useState([])
    const notify = () => {
        if(TextFeild.length>0 && Password.length>0){

            toast.success('Login Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
                
                setPassword("")
                setTextFeild("")
            }
        else{
            toast.error('Username and Password did not match', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTextFeild("")
                setPassword("")

        };
        }
    
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
    style={{position:'absolute',top:"0%",width:'100%',overflow:'hidden',height:"100%",left:'0%',backgroundColor:'#ddf3ff'}}
    >
        <Box
    sx={{alignItems:'center',justifyContent:"center",display:"flex",marginTop:{lg:'100px',xs:'120px',sm:'210px'}}}
    >

<Paper
 style={{alignItems:"center",justifyContent:'center',postion:"relative"}}
sx={{width:{lg:'400px',xs:'70%'},height:{lg:'440px',xs:'340px',sm:'450px'},backgroundColor:'rgb(255,255,255,29)',boxShadow:"2px 2px 40px 1px royalBlue",borderRadius:'10px'}}>
<Avatar
   className='avatar'
  sx={{width:{lg:'80px',xs:'65px',sm:'105px'},height:{lg:"80px",xs:'65px',sm:'105px'},marginLeft:{lg:'160px',xs:'105px',sm:"240px"},marginTop:{lg:'40px',xs:'30px'}}}
style={{backgroundColor:"#1565C0"}} src="/broken-image.jpg" />
<Box sx={{ display: 'flex', alignItems: 'flex-end',marginLeft:{lg:'70px',xs:'35px',sm:'100px'},marginTop:{lg:'30px',xs:'10px'} }}>
        <AccountCircle  sx={{ color: 'action.active', mr: 1, my: 0.5,fontSize:{lg:'40px',xs:'30px',sm:"55px"} }} />
        <TextField onChange={(e)=>setTextFeild(e.target.value)} sx={{padding:{lg:'5px 0px',xs:'0px 0px',sm:'10px 2px'},width:{lg:'205px',xs:"140px",sm:'300px'}}}  id="input-with-sx" label="Username" variant="standard" />
      </Box>

<Box sx={{ display: 'flex',marginLeft:{lg:'70px',xs:'35px',sm:'100px'} ,marginTop:{lg:'19px',xs:'10px',sm:'20px'}}}>
<h1>
    <LockResetRoundedIcon sx={{color: '#757575',  my: 0.5,fontSize:{lg:'40px',xs:'30px',sm:'55px'},marginTop:{lg:'-5px',xs:'-1px',sm:'-13px'}}}/>
</h1>

      <FormControl  sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
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
<Button  sx={{padding:{lg:"10px 60px",xs:'5px 27px',sm:"10px 55px"},postion:'absolute',left:'50%',transform:'translate(-50%,-50%)',marginTop:{lg:'40px',xs:"30px"}}} style={{textTransform:'none',fontWeight:'bold'}} variant="contained" onClick={notify}>Login</Button>
   
</Box>
</Paper>
    </Box>
    <ToastContainer/>
    </Box>
        
    
  )
}

export default LoginForm
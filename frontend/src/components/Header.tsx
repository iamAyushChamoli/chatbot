import React from 'react'
import  AppBar  from '@mui/material/AppBar'
import  Toolbar  from '@mui/material/Toolbar'
import Logo from './shared/Logo'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{bgcolor:"transparent",
      position:"static",
      boxShadow:"none",
    }}>
      <Toolbar sx={{display:"flex"}}>
        <Logo/>
        <div>
          {auth?.isLoggedIn ? <></>:<></>}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar,Button,IconButton,Toolbar,Typography} from '@material-ui/core';
import MenuIcon  from "@material-ui/icons/Menu";
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import Login from './login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Admin_header(){

  
  
  return (
    
    
<div>

<AppBar position="static">
  <Toolbar>
    
    <Typography variant="h6" className={""}>
      2F 
    </Typography>
    <div ClassName="header_right">
    <IconButton edge="start" className="" component={Link} to="/home" color="inherit" aria-label="menu">
        <HomeIcon />Home
    </IconButton>
    
    <IconButton edge="start" className="" component={Link} to="/login" color="inherit" aria-label="menu">
      <LockOpenIcon />Login
    </IconButton>
    </div>
            
          
        <Switch>
          <Route path="/login">
           
          </Route>
          
        </Switch>
            
  </Toolbar>
  
</AppBar>

</div>
  )
  
}

export default  Admin_header
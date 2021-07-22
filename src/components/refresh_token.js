import React,{useState} from 'react';
import axios from 'axios';
import {useQuery,useMutation} from "react-query";
// import Login from './login' login.token_data
import {createAuthProvider} from 'react-token-auth';

function  Reset_token(refresh_){
    const [access_token_info, setaccess_token]=useState({access_token_data:null});
    var refresh_='Bearer ' +`${localStorage.getItem('refresh_token_login')}` 
        axios({
        
        
            method: 'post',
            url: 'https://138.68.163.236/api/v1/users/refreshToken',
            data: {
            
            },
            headers: {'Authorization': refresh_}
        })
        
            .then((res) =>{
                
                
            console.log(res.data.data.access_token)
            setaccess_token({access_token_data:res.data.data.access_token})
            
            console.log(access_token_info.access_token_data)
            localStorage.setItem('access_token',access_token_info.access_token_data);
            var access_info=localStorage.getItem('access_token')
            console.log("Ermiasajdbsja",access_info)
           
           
           
              
        
              })
            .catch((e=>{
                console.log(e.response)
                
            }))
    
}
export default Reset_token
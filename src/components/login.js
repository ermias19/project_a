import React,{useState} from 'react';
import { Redirect } from 'react-router';
import {useHistory} from 'react-router-dom';
import Admin_header from './Admin_header';
import {TextField,Button,IconButton,Toolbar,Typography} from '@material-ui/core';
import PasswordField from 'material-ui-password-field';
import {useQuery,useMutation} from "react-query";
import axios from 'axios';
import { useForm } from "react-hook-form";
import Reset_token from './refresh_token'

function Login(){
    let history=useHistory();
  
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [login, setlogininfo]=useState({token_data:null});
    const [access_token_, setaccess]=useState({access:null});
  
   
    const [form,setformvalue]=useState({email:'',password:''});
  
    const input=(e)=>{
   const {name,value}=e.target;
   setformvalue((prevformvalue)=>({
       ...prevformvalue,
       [name]:value,
   }));
};
const  refresh_token=(email,password)=>{
    axios.post("https://138.68.163.236/api/v1/users/login?",{
            password:password,
            email:email
       
         } ).then((res) =>res.data)
          .then((res) =>{
              
        //   setlogininfo({token_data:res.sign_in.refresh_token})
        //   console.log(res.sign_in.refresh_token)
         localStorage.setItem('refresh_token_login', res.sign_in.refresh_token);
          
          
        })
        // var refresh_token='Bearer ' +`${localStorage.getItem('refresh_token_login')}` 
        // console.log(refresh_token)
        // var access_info=localStorage.getItem('access_token')
    
}

const access_token=()=>{

 
    var refresh_='Bearer ' +`${localStorage.getItem('refresh_token_login')}` 
    console.log(refresh_)
        axios({
        
        
            method: 'post',
            url: 'https://138.68.163.236/api/v1/users/refreshToken',
            data: {
            
            },
            headers: {'Authorization': refresh_}
        })
        .then((res)=> res.data)
        
            .then((res) =>{
                
                
            console.log(res.data.access_token)
            // setaccess({access:res.data.access_token})
            
            // console.log(access_token_.access)
            localStorage.setItem('access_token',res.data.access_token);
            var access_info=localStorage.getItem('access_token')
            if(access_info!=null){
                history.push("/admin_dashboard")
            }
            console.log("Ermiasajdbsja",access_info)
           
           
           
              
        
              })
            .catch((e=>{
                console.log(e.response)
                
            }))
    
}

   const onSubmit=(data_form)=>{
  
    var  email= data_form.email
    var  password=data_form.password
    
    refresh_token(email,password)

   access_token()
       
   

  
    // console.log("ermias",access_token_)
   
    
  
       
                
        
       
    
    
    

}
// var refresh_token='Bearer ' +`${localStorage.getItem('refresh_token_login')}` 

   

      
// const { isLoading, error, data } = useQuery('repoData', () =>

//       )
    // //     const ref_token= 'Bearer '+ login.token_data
    // //     console.log(ref_token)
    // //     const { status ,error, data } = useQuery('repoData', () =>
    // //     axios.get('https://138.68.163.236/api/v1/users/refreshToken',{
    // //      headers:{
    // //        Authorization:ref_token
           
    // //       }
    // //     }).then((res) =>{
    // //     console.log("ermias",res.data.data)
    // //     set_refresh_tk({ref_token:res.data})
    // //    }
     
    //     ))
         
         
        
         
        
    
    
        
    
   
   
  

  

   
  
   
    return(
       
        <div>
             {/* {<Reset_token/>} */}
              {/* <Admin_header/> */}
           
    <form  onSubmit={handleSubmit(onSubmit)}>
       
        <div className=" admin_login row "  >
            <div className="col-md-12">
            <TextField type="text" name="email"placeholder="Email"    {...register('email')}/>
            </div>
      
            <div className="col-md-12">
       <PasswordField type="password" name="password" placeholder="Password"  {...register('password')}/>
       </div>
            
       <Button type="submit" >Sign In</Button>
      
       </div>
    </form>
    </div>    
    
    )

    
}
export default Login




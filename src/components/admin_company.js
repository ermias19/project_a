import React from 'react';
import ReactDOM from 'react-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import { DataGrid } from '@material-ui/data-grid';
import { useQuery } from 'react-query';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import  { useState } from 'react';
import {Button} from '@material-ui/core';
import Change_status from './change_status'
import { useHistory } from "react-router-dom";
export  let  rows = [];
function createData(Name, Balance, Payment_method, Status, change,pay) {
    return { Name, Balance, Payment_method, Status, change,pay };
  }

function Admin_company(){
  let history = useHistory();
  const [conpamy_inf0,setcompany]=useState({com_data:null});
  const [status_change,setstatus]=useState([])
  const [company_num, setcompany_num]=useState([])
  var bearer='Bearer ' +`${localStorage.getItem('access_token')}` 
  console.log(bearer)
// var bearer='Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJjb21wYW55X2lkIjoxLCJleHAiOjE2MjY3MjgxMDUsInJvbGVfaWQiOjEsInVzZXJfaWQiOjF9.WXq04UCjz4a5UbGKm2boJHLKn4vvIQPfAY3zuStmwuI'


const { status ,error, data } = useQuery('repoData', () =>
     axios.get('https://138.68.163.236/api/v1/companies',{
      headers:{
        Authorization:bearer
        
       }
     }).then((res) =>{
     console.log(res.data.data)
  setcompany({com_data:res.data})
 
    }
  
     ))
     var counterr=10; 
     var com_num=0;
     var statuss=null;
    var  newDiv=null;
     const change_status=(e)=>{
      e.preventDefault()
      history.push('/change_status')
      
      // setstatus(  <Change_status/>)
      
     
      
      // while (com_num<counterr-1){
      // const status_id=conpamy_inf0.com_data.data; 
      // statuss=conpamy_inf0.com_data.data[com_num].payment_type
      // const payment_type=conpamy_inf0.com_data.data.payment_type
      // com_num+=1;
      // }
      // console.log(statuss)
      
  }

     if (status === 'loading') {
      return <span>Loading...</span>
    }
  
    if (status === 'error') {
      return <span>Error: {error.message}</span>
    }
     
  
     
     
    
     var com_number=0;
    var count=conpamy_inf0.com_data.data.id
     
      var counter=conpamy_inf0.com_data.data.length; 
      console.log(counter)
     
    var ermias;
    //  setcompany_num([...company_num,{
    //       id:counter,
    //       value:com_id_pass
    //     }])
      while (com_number<=counter-1){
       console.log(com_number)
       var com_id_pass=conpamy_inf0.com_data.data[com_number].id
        ermias=conpamy_inf0.com_data.data[com_number]
       
        // console.log(ermias)
        // console.log(com_number)
       
        com_number+=1;
        rows.push(createData(com_id_pass,ermias.company_name,ermias.balance,ermias.payment_type,ermias.status,
           <Button  type="submit" runat="server" onClick={(event)=>change_status(event)} ><p>change status</p></Button>, <Button  type="submit" value ><p>pay</p></Button>))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
           
           
      }
       const export_row=(rows)=>{
        return (rows);

      };
      
       
      // const{num, value}=rows
      // setcompany_num([...company_num=>{
      //   id:num,
      //   value:value
      // }])
        
    
      

  
return(
 
    <div className="row">
      
     
        <div className="col-md-6">
        <div className=" dash_bard_left col-md-2 col-sm-2 col-xm-2">
            <Link to="admin_dashboard">dashboard</Link> <br></br>
            <Link to="/admin_company">Company</Link>
               
            </div>
            
            
        </div>
            <div className="col-md-10 row">
            <div className="desc_admin col-md-12">
                <h2>Manage Companies</h2>
                <p>you can create, manage, Update, Block and Delete Companies</p>
            </div>

            <div className="desc_admin_table col-md-12 row">
                <div className="col-md-4"></div>
               <div className="col-md-3"><p>Filter </p></div>
               <div className="col-md-3"><p>Export</p></div>

            </div>
            <div className="col-md-3 col-sm-3"></div>
            <div className="col-md-9 col-sm-9 row">
            <TableContainer component={Paper}>
            <div>{status_change}</div>
      <Table className={""} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Payment Method</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Balance}</TableCell>
              <TableCell align="right">{row.Payment_method}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
              <TableCell align="right">{row.pay}</TableCell>
              
            </TableRow>
          ))}
         
        </TableBody>
      </Table>
    </TableContainer>
    

                </div>
            
            
            </div>

    </div>

)
    
}
export default Admin_company 
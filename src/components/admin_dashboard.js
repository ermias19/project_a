import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Admin_header from './Admin_header';
import { Link} from "react-router-dom";
import { useQuery } from 'react-query';
import axios from 'axios';
import  { useState } from 'react';
  
function Admin_dashboard(){
    const [general_report,setreport]=useState({report:null});
    var bearer='Bearer ' +`${localStorage.getItem('access_token')}` 
    console.log(bearer)
// var bearer='Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJjb21wYW55X2lkIjoxLCJleHAiOjE2MjYyOTYxMDEsInJvbGVfaWQiOjEsInVzZXJfaWQiOjF9.qYh70bTldQhvaReujEniqx8rNqhTvWXBhKBfln6H9IM'


const { status ,error, data } = useQuery('repoData', () =>
     axios.get('https://138.68.163.236/api/v1/reports/generalReport',{
      headers:{
        Authorization:bearer
        
       }
     }).then((res) =>{
     console.log(res.data.data)
     setreport({report:res.data.data})
    }
  
     ))

     if (status === 'loading') {
      return <span>Loading...</span>
    }
  
    if (status === 'error') {
      return <span>Error: {error.message}</span>
    }
console.log(general_report.report.total_sms)
     

    return(
        <div className="row" >
            {/* <h2>{general_report.rep_data.success_rate}</h2> */}
            <div className=" dash_bard_left col-md-2 col-sm-2 col-xm-2">
            <Link to="admin_dashboard">dashboard</Link> <br></br>
            <Link to="/admin_company">Company</Link>
               
            </div>
                <div className="top_board col-md-12 row" >
                <div className="col-md-2 col-sm-12"> </div>
                    <div className="col-md-2">
                <Card className={""} variant="outlined">
                    <CardContent>
                     <Typography className={""} color="textSecondary" gutterBottom>
                       Total sms
                        </Typography>
                        <Typography variant="h5" component="h2">
                       <h2>{general_report.report.total_sms} SMS</h2>
                        </Typography>
                        <Typography className={""} color="textSecondary">
                        16% sinse last month
                        </Typography>
                       
                    </CardContent>
                    <CardActions>
                        
                </CardActions>
            </Card>
            </div>
            {/* first card */}
            <div className="col-md-2">
                <Card className={""} variant="outlined">
                    <CardContent>
                     <Typography className={""} color="textSecondary" gutterBottom>
                       Total Cost
                        </Typography>
                        <Typography variant="h5" component="h2">
                       <h2>{general_report.report.total_cost } Birr</h2>
                        </Typography>
                        <Typography className={""} color="textSecondary">
                        16% sinse last month
                        </Typography>
                       
                    </CardContent>
                    <CardActions>
                        
                </CardActions>
            </Card>
            </div>
            {/* second card */}
            <div className="col-md-2">
                <Card className={""} variant="outlined">
                    <CardContent>
                     <Typography className={""} color="textSecondary" gutterBottom>
                       Total Users
                        </Typography>
                        <Typography variant="h5" component="h2">
                       <h2>{general_report.report.total_users} Users</h2>
                        </Typography>
                        <Typography className={""} color="textSecondary">
                        16% sinse last month
                        </Typography>
                       
                    </CardContent>
                    <CardActions>
                        
                </CardActions>
            </Card>
            </div>
            {/* thired card */}
            
            <div className="col-md-2">
                <Card className={""} variant="outlined">
                    <CardContent>
                     <Typography className={""} color="textSecondary" gutterBottom>
                       Success Rate
                        </Typography>
                        <Typography variant="h5" component="h2">
                       <h2>{general_report.report.success_rate}</h2>
                        </Typography>
                        <Typography className={""} color="textSecondary">
                        16% sinse last month
                        </Typography>
                       
                    </CardContent>
                    <CardActions>
                        
                </CardActions>
            </Card>
            </div>
                </div>


        </div>
   )}
export default Admin_dashboard;
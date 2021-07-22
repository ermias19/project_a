import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Admin_company from './admin_company'
import rows from './admin_company'



function Change_status(e){
  const [age, setAge] = React.useState({name:"Active"});
  const [com, setcom_num] = React.useState();
  
  console.log(rows)
  // setcom_num(export_row)
  console.log("ermias",com)
  const handleChange = (event) => {
    setAge(event.target.value);
    
  };
    
    return(
      <div>
        {com}
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4" >
        <Card >
      <CardContent>
        <Typography className={""} color="textSecondary" gutterBottom>
          Change_status
        </Typography>
        <Typography variant="h5" component="h2">
          
         
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            
          }}
        >
          <MenuItem value={10}>Active</MenuItem>
          <MenuItem value={20}>Inactive</MenuItem>
          
        </Select>
       
      </CardContent>
      <CardActions>
        <Button size="small">UPDATE</Button>
      </CardActions>
    </Card>
    </div>
    <div className="col-md-4"></div>
    </div>
   
    </div>
    )
}
export default Change_status
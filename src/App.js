
import './App.css';
import Admin_header from './components/Admin_header'
import Home_page from './components/home_page'
import Login from './components/login'
import Admin_dashboard from './components/admin_dashboard'
import Admin_company from './components/admin_company';
import Change_status from './components/change_status'
import {BrowserRouter as Router, Route} from "react-router-dom";



import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
function App() {
  return(
  <div>
    <QueryClientProvider client={queryClient}>
    <Router>
                <div>
                    <Route path="/" component={Home_page}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin_dashboard" component={Admin_dashboard}/>
                    <Route path="/admin_company" component={Admin_company}></Route>
                    <Route path="/change_status" component={Change_status}></Route>
                    
                 </div>
             </Router>
    {/* <Admin_header/> */}
  </QueryClientProvider>

  
  </div>)
}

export default App;

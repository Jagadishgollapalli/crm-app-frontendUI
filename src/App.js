import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch,Link,NavLink,Redirect} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Register from './Register';
//Switch will allow the omponent to load only once if there are multiple components
// # HASH Router works the same #/
function App() {
  return (
    <BrowserRouter >
    <Link style={{marginLeft:"200px"}} to="/Home">Home</Link>
    <Link style={{marginLeft:"20px"}} to="/Login">Login</Link>
    <Link style={{marginLeft:"20px"}} to="/Register">Register</Link>
    <Switch> 
    <Route path='/Home' component={Home} />
    <Route path='/Login' component={Login} />
    <Route path='/Register' component={Register} />
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;

import React from 'react';
// import {useHistory} from 'react-router-dom';
//in the same way we can use useLocation and useRouteMatch hooks
function Register() {
  return (
   
   <form className=" mt-5 mx-auto form-control" style={{backgroundColor:"#FF994A",width:'30%'}}>
   <h2 style={{textAlign:"center"}}><b>Register User</b></h2>
   <div>
    <label for="Name" >Full Name :</label>
    <input className=" form-control" type="text" placeholder="Enter your name"/>
  </div>
  <div>
    <label for="E-mail">E-Mail :</label>
    <input className=" form-control" type="text" placeholder="Yourname@gmail.com" />
  </div>
  <div>
    <label for="Mobile" >Mobile:</label>
    <input className=" form-control" type="text" placeholder="Your 10 digit mobile number"/>
  </div>
  <div>
    <label for="Password" >Password :</label>
    <input className="form-control" type="email" />
  </div>
  <button type="submit" class="mt-2 btn btn-danger active">SignUp</button>
    </form>
    
  );
}

export default Register;
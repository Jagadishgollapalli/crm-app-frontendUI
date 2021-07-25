import React from 'react';

function Login() {
  return (
   <form className=" mt-5 mx-auto form-control" style={{backgroundColor:"#FF994A",width:'30%'}}>
   <h2 style={{textAlign:"center"}}><b>LOGIN</b></h2>
   <div>
    <label for="Email1" >Email address :</label>
    <input className=" form-control" type="text" placeholder="Yourname@gmail.com" />
    <div className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div>
    <label for="Password" >Password :</label>
    <input className=" form-control" type="text" />
  </div>
  <button type="submit" class=" mt-2 btn btn-danger active">Login</button>
  <button type="submit" class=" ml-2 btn btn-danger active">Forgot Password</button>
    </form>
  );
}

export default Login;


import './../App.css';
import React from "react";

function Login() {
  return (
    <div className="App">
      <div className="Container">
        <h2 className='title text-center mt-50'>Login</h2>
        <form>
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

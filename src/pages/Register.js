import './../App.css';
// import React from "react";
// import axios from 'axios';
// import { render } from '@testing-library/react';
import { Component } from 'react';
// import { render } from '@testing-library/react';

// const EndPoint = 'http://192.168.1.5:8000/account/register'

class Register extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <h2 className='title text-center mt-50'>Register</h2>
          <form>
            <div class="form-group">
              <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email address" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;

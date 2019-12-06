import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div className="forms">
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();
      }} >
       
      <h2>login</h2>
    
        <input name="username"
          type="text"
          placeholder="User name"
          value={props.formData.username}
          onChange={props.handleChange} />
        
        <input name="password"
          type="password"
          placeholder="Password"
          value={props.formData.password}
          onChange={props.handleChange} />
     
        <button>Login</button>

        <Link to="/register">
          <button>
            Register
          </button>
        </Link>

      </form>
    </div>
  );
}

export default Login;
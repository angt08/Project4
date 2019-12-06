import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (

    <div className="auth-container">
   
      <hr />
      <form onSubmit={props.handleRegister} >
     
        <input name="username"
           placeholder="username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange} />
       
        <input name="email"
           placeholder="email"
          type="text"
          value={props.formData.email}
          onChange={props.handleChange} />
       
        <input name="password"
           placeholder="Password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange} />
        <hr />
        <button>Register</button>
      </form>
    </div>

  );
}

export default Register;
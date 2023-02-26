import React from 'react';
import '../App.css';

const LoginPage = () => {
  return (
    <h3> 
       <form className='form'>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <br></br>
          <button type="submit">Submit</button>
        </div>
       </form>
      </h3>
    )
}

export default LoginPage;






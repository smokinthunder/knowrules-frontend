import React, { useState } from 'react';
import './Style/login.css'

function LoginBox({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // ...
    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (

    <div className="overlay" onClick={onClose}>
    <div className="login-box" onClick={(e)=>{e.stopPropagation();}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <button className="close-button" onClick={onClose}>X</button>
    </div>
    </div>
  );
}

export default LoginBox;

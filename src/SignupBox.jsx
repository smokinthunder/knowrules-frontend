import React, { useState } from 'react';
import './Style/signup.css'
import axios from 'axios';
function SignupBox({ onClose }) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName ] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  
    const handleSubmit = (e) => {
  e.preventDefault();

  // Create a data object to send to Django
  const data = {
    first_name: firstname,
    last_name: lastname,
    email: email,
    password: password,
    // You can add more fields if needed
  };

  // Make the POST request to Django using Axios
  axios.post('/api/signup/', data) // Replace '/api/signup/' with the actual endpoint URL on your Django backend
    .then((response) => {
      // Handle the response from Django (if needed)
      console.log(response.data);
    })
    .catch((error) => {
      // Handle errors (if any)
      console.error(error);
    });
    // Reset the form
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    
    <div className="overlay" onClick={onClose}>
    

    <div className="signup-box" onClick={(e)=>{e.stopPropagation();}} >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={handleFirstNameChange}
          required
        />
         <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={handleLastNameChange}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <button className="close-button" onClick={onClose}>X</button>
    </div>
    </div>
  );
}

export default SignupBox;
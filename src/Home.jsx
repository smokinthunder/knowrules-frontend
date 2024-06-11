import React, { useState } from 'react';
import './Style/Home.css';
import LoginBox from './LoginBox'
import SignupBox from './SignupBox'



function Home({  setShowPage }) {
    const [showLoginBox, setShowLoginBox] = useState(false);
    const [showSignupBox, setShowSignupBox] = useState(false);
    
  
    const handleLoginClick = () => {
      setShowLoginBox(!showLoginBox);
      setShowSignupBox(false);
    };
  
    const handleSignupClick = () => {
      setShowSignupBox(!showSignupBox);
      setShowLoginBox(false);
    };
  
    


  return (
    <div className='Home-main' >
        <div className="main-container">
      <div className="left-div">
        <img className='main-image' src="\images\home-chechi.png" alt="" />
      </div>
      <div className="right-div">
        <div className="content">
          <h1>Discover KnowRules</h1>
          <p>Navigating the complexities of law, simplified</p>
          <div className="buttons">
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleSignupClick}>Signup</button>
          </div>
          <button className="try-button"  onClick={() => setShowPage("Category") } >Try KnowRules</button>
        </div>
      </div>
    </div>
    {showLoginBox && (
        <LoginBox onClose={() => setShowLoginBox(false)} />
      )}
  
      {showSignupBox && (
        <SignupBox onClose={() => setShowSignupBox(false)} />
      )}

    </div>
  )
}

export default Home


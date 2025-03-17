import React, { useState } from 'react'

import './Signup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/password.png'

import axios from 'axios'

const Signup = () => {

    const [username, setUsername]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')

    const [showSuccessNotification, setShowSuccessNotification] = useState(false);
    const [showErrorNotification, setShowErrorNotification] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function handleSignup(event) {
        event.preventDefault();
        
        // Create the data object using the state values
        const userData = {
            username: username,
            email: email,
            password: password
        };

         // Make the POST request using axios
        axios.post('http://localhost:8080/signup', userData, {
            headers: {
              "Accept": "*/*",
              "Content-Type": "application/json",
            },
          })
        .then(response => {
            // On success, show notification
            setShowSuccessNotification(true);
            
            // Set a timeout to hide the notification after 4 seconds
            setTimeout(() => {
                setShowSuccessNotification(false);
                // Refresh the page after hiding the notification
                window.location.reload();
            }, 4000);
        })
        .catch(error => {
            // On error, log the error to console
            console.log(error);
            
            // Set error message
            setErrorMessage(error.response?.data?.error || 'An error occurred during signup');
            
            // Show error notification
            setShowErrorNotification(true);
            
            // Hide error notification after 4 seconds
            setTimeout(() => {
                setShowErrorNotification(false);
            }, 4000);
        });
    }

  return (
    <div className='container'>
        <form onSubmit={handleSignup}>
            <div className="header">
                <div className="text">Sign Up</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt='' />
                    <input type='text' placeholder='Username' onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <img src={email_icon} alt='' />
                    <input type='text' placeholder='Email Address' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <div className='forgot-password'>Already have an account? <span>Sign In!</span></div>

            <div className="submit-container">
                <button type="submit" className="submit">Sign Up</button>
            </div>
        </form>
        {showSuccessNotification && (
            <div className="notification success-notification">
                Signup successful!
            </div>
        )}
        {showErrorNotification && (
            <div className="notification error-notification">
                {errorMessage}
            </div>
        )}
    </div>
  )
}

export default Signup
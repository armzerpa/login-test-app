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

    function handleSignup(event) {
        event.preventDefault()
        const requestBody = {email, password}
        axios.post('http://localhost:8081/signup',  requestBody)
        .then(res => console.log(res))
        .catch(err => console.error(err));
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
    </div>
  )
}

export default Signup
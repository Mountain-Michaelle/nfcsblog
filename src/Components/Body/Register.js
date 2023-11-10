import React, { useRef } from 'react'
import '../../Assets/CSS/Register.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {

    const inputRefs = useRef([])

    const handleKeyDown = (e, index) => {
        if(e.key === 'Enter' || e.key === "Tab"){
            e.preventDefault()
            const nextinputRef = inputRefs.current[index + 1];
            
            if(nextinputRef){
                nextinputRef.focus();
            }
        }
    };

    const handleSubmit = e => {
        e.preventDefault()
    }

  return (
    <div className="Register">
        <div className='register__card'>
            <h3> Create NFCS Account</h3>

            <form onSubmit={handleSubmit}>
                <label>Sign Up</label>
                <input type='text' placeholder='Name' enterKeyHint='true' autoFocus="true" 
                ref={(el) => (inputRefs.current[0] = el)}
                onKeyDown={(e) => handleKeyDown(e, 0)} />

                <input type="email" placeholder='Email'  enterKeyHint='true' 
                ref={(el) => (inputRefs.current[1] = el)}
                onKeyDown={(e) => handleKeyDown(e, 1)}
                />

                <input type="password" placeholder='Password'
                ref={(el) => (inputRefs.current[2] = el)}
                onKeyDown={(e) => handleKeyDown(e, 2)}

                />
                <input type="password" placeholder='Confirm Password'
                ref={(el) => (inputRefs.current[3] = el)}
                onKeyDown={(e) => handleKeyDown(e, 3)} 
                />
                <Button type="submit">Register</Button>

                <p>Already Regisered? <Link to="/Login">Login here</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Register
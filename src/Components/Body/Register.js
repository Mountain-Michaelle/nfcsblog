import React, { useEffect, useRef, useState } from 'react'
import '../../Assets/CSS/Register.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {

    const inputRefs = useRef([])
    const [isLong, setIsLong] = useState("")
    const [matchErr, setMatchErr] = useState("");
    const [empty, setEmpty] = useState("");

    const handleKeyDown = (e, index) => {
        if(e.key === 'Enter' || e.key === "Tab"){
            e.preventDefault()
            const nextinputRef = inputRefs.current[index + 1];
            
            if(nextinputRef){
                nextinputRef.focus();
            }
        }
    };

    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "password": "",
        "re_password": "",
    })

    const {name, email, password, re_password} = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(password !== re_password){
            setMatchErr("Password do not match") 
        }else{
            setMatchErr("")
        }
        if(password.length < 8 && password != ""){
            setIsLong("Password should be at least 8 characters")
          } else(
            setIsLong("")
          )

        if(name == ""){
            setEmpty("empty field")
        }else{
            setEmpty("")
        }

    }
  return (
    <div className='AuthRegister'>
       <div className="Register">
        <div className='register__card'>
            <h3> Create NFCS Account</h3>

            <form onSubmit={handleSubmit}>
                <label>Sign Up</label>
                <input type='text' placeholder='Name' enterKeyHint='true' autoFocus="true" 
                ref={(el) => (inputRefs.current[0] = el)}
                onKeyDown={(e) => handleKeyDown(e, 0)}
                onChange={(e) => handleChange(e)}
                name='name'
                value={name}
                />
                <input type="email" placeholder='Email'  enterKeyHint='true' 
                ref={(el) => (inputRefs.current[1] = el)}
                onKeyDown={(e) => handleKeyDown(e, 1)}
                onChange={(e) => handleChange(e)}
                name='email'
                value={email}
                />
                <input type="password" placeholder='Password'
                ref={(el) => (inputRefs.current[2] = el)}
                onKeyDown={(e) => handleKeyDown(e, 2)}
                onChange={(e) => handleChange(e)}
                name='password'
                value={password}
                />
                <input type="password" placeholder='Confirm Password'
                ref={(el) => (inputRefs.current[3] = el)}
                onKeyDown={(e) => handleKeyDown(e, 3)}
                onChange={(e) => handleChange(e)}
                name='re_password'
                value={re_password} 
                />
                {isLong ? <p className="errorMsg">{isLong}</p> : "" }
                {matchErr? <p className="errorMsg">{matchErr}</p> : ""}
                
                <Button type="submit">Register</Button>

                <p>Already Regisered? <Link to="/Login">Login here</Link></p>
            </form>
        </div>
    </div> 
    </div>
    
  )
}

export default Register
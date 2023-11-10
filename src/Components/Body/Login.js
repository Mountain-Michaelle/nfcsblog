import React, {useState} from 'react'
import '../../Assets/CSS/Login.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {

  const [formData, setFormData] = useState({
    "email": "",
    "password": ""
  })

  const {email, password} = formData;
   
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // login(email, password) functonalities#


  }


  return (
    <div className='Login'>
        <div className='login_card'>
                <h3>Welcome Back!</h3>
            <form>
                <span className='field__name'>Sign In</span>
                <input type='email' placeholder='Email' autoFocus="true" required="true"/>
                <input type='password' placeholder='Password' />
                <Button className='login__button'>Login</Button>
                <p>Don't have NFCS acount yet? <Link to='/Register'>Register here</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login
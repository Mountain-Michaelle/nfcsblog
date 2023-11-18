import React, {useState} from 'react'
import '../../Assets/CSS/Login.css';
import { Button } from '@mui/material';
import { Link,  redirect, Redirect,  useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';

import { login } from '../Actions/auth';

function Login({login, isAuthenticated}) { 
   const navigate = useNavigate()
   const [disable, setDisable] = useState(false)
   const [processing, setProcessing] = useState(false)

  if(isAuthenticated === true){
    navigate('/')
   }
  const [formData, setFormData] = useState({
    "email": "",
    "password": ""
  })

  const {email, password} = formData; // Destructure the state

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value}) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // login(email, password) functonalities#
  login(email, password)
  setDisable(true)
  setProcessing(true)
  }



 console.log("How far ", isAuthenticated)
  return (
    <div className='Login'>
        <div className='login_card'>
                <h3>Welcome Back!</h3>
            <form onSubmit={e => handleSubmit(e)}>
                <span className='field__name'>Sign In</span>
                <input onChange={(e) => handleChange(e) } type='email' placeholder='Email' autoFocus="true" required
                  value={email}
                  name='email'
                />
                <input type='password' placeholder='Password'
                onChange={(e) => handleChange(e)} value={password}
                name='password'
                />
                <Button disable={disable && processing} type="submit" className='login__button'>{processing ? "logging..." : "login"}</Button>
                <p>Don't have NFCS acount yet? <Link to='/Register'>Register here</Link></p>
            </form>
        </div>
    </div>
  )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })
 
export default connect(mapStateToProps, {login}) (Login);
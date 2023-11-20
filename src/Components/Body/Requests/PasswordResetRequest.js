import React, {useState} from 'react'
import { Button } from '@mui/material';
import { Link,useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';

function PasswordResetRequest({ isAuthenticated}) { 
   const navigate = useNavigate()
   const [disable, setDisable] = useState(false)
   const [processing, setProcessing] = useState(false)

  const [formData, setFormData] = useState({
    "email": "",
  })

  const {email} = formData; // Destructure the state

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value}) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // login(email, password) functonalities#
  setDisable(true)
  setProcessing(true)
  }



 console.log("How far ", isAuthenticated)
  return (
    <div className='Requests'>
    <div className='cont'>
        <div className='cont_card'>
                <h3>Forgotten Password</h3>
            <form onSubmit={e => handleSubmit(e)}>
                <input onChange={(e) => handleChange(e) } type='email' placeholder='Email' autoFocus="true" required
                  value={email}
                  name='email'
                />
                <Button disable={disable && processing}
                 type="submit" className='login__button'>
                    {processing ? "Sending..." : "Send"}</Button>
            </form>
        </div>
      </div>
    </div>
    
  )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })
 
export default connect(null, {}) (PasswordResetRequest);
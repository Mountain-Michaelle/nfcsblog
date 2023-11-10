import React from 'react'
import '../../Assets/CSS/Mail.css';
import { Link } from 'react-router-dom';

function Mail() {
  return (
    <div className='vert'>
       <h4>Email Verification Link Sent!</h4> 
       <div className='vert__card'>
        <p>
            <strong>A mail was sent to your registration email,</strong>
            {"  "}Please open your mail and click on the link to verify your email;
        </p>
        <article>
            
            Please Don't send mail to the mailing address of your Verification link; If your want to contact Us
            please visit our <Link to="/Contact">Contact Page</Link> for more information. 
            </article>

        <h3>NFCS Cares!</h3>
       </div>
       
       
    </div>
  )
}

export default Mail
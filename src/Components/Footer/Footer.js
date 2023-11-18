import React from 'react'
import '../../Assets/CSS/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer({post}) {
  return (
    <div className='footer'>
        <section className='footer__cont'>
            <ul>
                <li>
                About
                </li>
                <li>
                Contact
                </li>
                <li>
                Donate
                </li>
            </ul>
        </section>
        <section className='footer__cont2'>
            <article>
                When doing research it is important to
            </article>
            <article>
                When doing research it is important to 
            </article>
            <article>
                When doing research it is important to secure
            </article>
        </section>

        <section className="footer__icons">
            <span>
                <EmailIcon />
            </span>
            <span>
                <SettingsPhoneIcon />
            </span>
            <span>
                <FacebookIcon />
            </span>
            <span>
                <TwitterIcon />
            </span>
        </section>
        <section className='code__bottom'>
           <code >Initiated and Donated by NFCS 2022/2023 Session</code> 
        </section>
        
        <section className='bottom'>
           <p><CopyrightIcon/> 2023 St. Augustine Catholic Chaplaincy IMT, Enugu. All rights reserved. </p>
        </section>
    </div>
  )
}

export default Footer
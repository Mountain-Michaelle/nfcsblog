import React from 'react';
import trending from '../Data/trending';
import featured from '../Data/featured';
import { Button } from '@mui/material';
import '../../Assets/CSS/ContactUs.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

const lastImage = trending.slice(-1)[0];

const About = () => {
    const bg = {
        backgroundColor: 'rgba(25, 0, 31, 0.853)',
        color: 'red',
    }
    console.log("last image ", lastImage)
    return(
        <div className='container contact__us'>
           <h2 className='contact__h2'>Contact Us</h2>
           <div className='row container2 contact__container'>
            <div className='cont__image cont__heading'>
                <h3> ST. Augustine Catholic Chaplaincy IMT</h3>
               <p>
               To the best of my knowledge, these rules have been followed.
             There are no commercial interests in this study, the findings 
               </p>
                <div className='contact_cont'>
                    <div className='contacts'><SettingsPhoneIcon /><code className='cont__num'> +2349156084052</code> <button>copy</button></div> 
                    <div className='contacts'><SettingsPhoneIcon /><code className='cont__num'> +2349156084052</code> <button>copy</button></div> 
                    <div className='contacts'><EmailIcon /><code className='cont__num'>staugustine.com</code> <button>copy</button></div> 
                </div>
              
            </div>
            <div className='cont__texts cont__icon'>
               <span><EmailIcon /></span>
               <span><FacebookIcon /></span>
               <span><TwitterIcon /></span>
             </div>
           </div>

           <div className='about__more'>
            <Button >Send Us Message</Button>
           </div>
        </div>
    )
}

export default About;
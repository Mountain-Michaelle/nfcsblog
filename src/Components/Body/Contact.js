import React, { useState } from 'react';
import trending from '../Data/trending';
import featured from '../Data/featured';
import { Button } from '@mui/material';
import '../../Assets/CSS/ContactUs.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import { deepOrange } from '@mui/material/colors';

const lastImage = trending.slice(-1)[0];

const About = () => {
// Handlel copies
   // const [copy, setCopied] = useState(false)
    const [copy1, setCopied1] = useState(false)
    const [copy2, setCopied2] = useState(false)
// Ends here

// number contacts
    const number = "+2349156084052"
    const number1 = "08090743834"
    const [copied, setCopied] = useState(false); 
    const contacts = 
    [
        {
        number: "+2349156084052",
        number2: "08090743834",
        email: 'staugustinechaplaincy.com',
        Address: 'Campus 3 Rectors village'
        }
    ]
// ends here


// Event handlers (onclick one) starts here 
    const handleCopy = (contactCopy) => {
       navigator.clipboard.writeText(contactCopy);
       setCopied(true);

       setTimeout(()=> {
       setCopied(false)
       },2000);

    //    setCopied(true);
    //    setTimeout(() => setCopied(false), 1500);
    };

    const handleCopy1 = (num) => {
        navigator.clipboard.writeText(num)
        setCopied1(true);
        setTimeout(() => setCopied1(false), 1500);
     }
     const handleCopy2 = (num) => {
        navigator.clipboard.writeText(num)
        setCopied(true);
        setTimeout(() => (setCopied2(false)), 1500);
     }

// Ends event handlers heres.

    const bg = {
        backgroundColor: 'rgba(25, 0, 31, 0.853)',
        color: 'red',
    }
    console.log("last image ", lastImage)
    return(
        <div className='container contact__us'>
           <h2 className='contact__h2'>Contact Us</h2>
           <div className='copiedButton'><button>{copied && 'copied'}</button></div>
           <div className='row container2 contact__container'>
            <div className='cont__image cont__heading'>
                <h3> ST. Augustine Catholic Chaplaincy IMT</h3>
               <p>
               To the best of my knowledge, these rules have been followed.
             There are no commercial interests in this study, the findings 
               </p>
                {/* <div className='contact_cont'>
                    <div className='contacts'><SettingsPhoneIcon /><code className='cont__num'>{" "} {number} </code> <button onClick={ (e) => handleCopy(number)}>copy</button> <span className='copied' style={{marginLeft: "1rem", fontWeight:"600", color: "purple"} }>{ copy && "copied!"}</span></div> 
                    <div className='contacts'><SettingsPhoneIcon /><code className='cont__num'>{" "} {number1} </code> <button onClick={ (e) => handleCopy1(number1)}>copy</button> <span style={{marginLeft: "1rem", fontWeight:"600", color: "purple"} }>{copy1 && "copied!"}</span></div> 
                    <div className='contacts'><EmailIcon /><code className='cont__num'>staugustine.com</code> <button>copy</button></div> 
                </div> */}
                <div className='contact_cont'>
                    {contacts.map((contact, index) =>
                        <>
                       
                        <div className='contacts'>
                            <code className="cont__num">{contact.number}</code>
                            <button onClick={() => handleCopy(contact.number)}>copy</button>
                        </div>
                        <div className='contacts'>
                            {contact.number2}
                            <button onClick={() => handleCopy(contact.number2)}>copy</button>
                        </div>
                        <div key={index} className='contacts'>
                            {contact.email}
                        </div>
                        <div className='contacts'>
                            {contact.Address}
                        </div>
                        </>
                    )
                    }
                </div>
              
            </div>
            <div className='cont__texts cont__icon'>
               <span><EmailIcon /></span>
               <span><FacebookIcon /></span>
               <span><TwitterIcon /></span>

             </div>
           </div>

           <div className='about__more'>
            <Button >Message Us</Button>
           </div>
        </div>
    )
}

export default About;
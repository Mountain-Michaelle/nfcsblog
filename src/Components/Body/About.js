import React from 'react';
import trending from '../Data/trending';
import featured from '../Data/featured';
import { Button } from '@mui/material';
import '../../Assets/CSS/AboutUs.css';
import Gallery from './NFCSGallery/Gallery';

const lastImage = trending.slice(-1)[0];

const About = () => {
    const bg = {
        backgroundColor: 'rgba(25, 0, 31, 0.853)',
        color: 'red',
    }
    console.log("last image ", lastImage)
    return(
        <div className='container about__us'>
           <h2>About Us</h2>
           <div className='row container2'>
            <div className='cont__image'><Gallery background={bg} trend={featured} /></div>
            <div className='cont__texts'>
                <p>
                    To the best of my knowledge, these rules have been followed.
             There are no commercial interests in this study, the findings of other researchers are duly noted when used, no judgement have been passed on others research, all methods used and relevant result are accounted for.
                </p>
             </div>
           </div>
           <div className='about__more'>
            <Button >Read More...</Button>
           </div>
        </div>
    )
}

export default About;
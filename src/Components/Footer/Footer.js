import React from 'react'
import '../../Assets/CSS/Footer.css';

function Footer({post}) {
  return (
    <div className='footer'>
        <section className='footer__cont'>
            <ul>
                <li>
                About Us
                </li>
                <li>
                Contact Us
                </li>
                <li>
                Organizations
                </li>
                <li>
                NFCS
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
            <article>
                When doing research it is important to secure the
            </article>
        </section>
    </div>
  )
}

export default Footer
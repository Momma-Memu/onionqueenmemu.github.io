import React from 'react';
// const resume = require('../Miah_Barnes_resume.pdf');


const Footer = () => {

    // console.log(resume)

    return (
        <div className='footer-divider'>
            <div className='contact-me'>Contact Me</div>
            <a href='https://www.linkedin.com/in/miah-barnes-2260111aa/' target='new' className='contact-linked'><i className="fab fa-linkedin"></i></a>
            <a href='https://github.com/OnionQueenMemu' target='new' className='contact-links'><i className="fab fa-github-square"></i></a>
            <a href='https://twitter.com/OnionQueenMemu' target='new' className='contact-twitter'><i className="fab fa-twitter-square"></i></a>
            <a href='https://drive.google.com/file/d/1m9JanZjsQYbpNPPQ25FyD3BP7Ddh2Ktb/view?usp=sharing' className='resume'><i className="far fa-file"></i></a>
            <a className="social-list__link contact-email" href="mailto:miahellenbarnes@gmail.com"><i className="fas fa-envelope-square"></i></a>
        </div>

    )
}

export default Footer;
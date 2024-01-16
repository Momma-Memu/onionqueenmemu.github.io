import React from 'react';


const Footer = () => {

    return (
        <div className='footer-divider'>
            <div className='contact-me'>Contact Me</div>
            <a href='https://www.linkedin.com/in/miah-barnes-2260111aa/' target='_blank' rel='noreferrer' className='contact-linked'><i className="fab fa-linkedin"></i></a>
            <a href='https://github.com/Momma-Memu' target='_blank' rel='noreferrer' className='contact-links'><i className="fab fa-github-square"></i></a>
            <a href='https://drive.google.com/file/d/1CvrS-KG2xZ8fROp4vayq6qpFECSCBVKQ/view?usp=sharing' target='_blank' rel='noreferrer' className='resume'><i className="fas fa-file"></i></a>
            <a className="social-list__link contact-email" href="mailto:miahellenbarnes@gmail.com"><i className="fas fa-envelope-square"></i></a>
        </div>
    )
}

export default Footer;
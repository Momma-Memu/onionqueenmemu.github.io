import React from 'react';


const Footer = () => {

    return (
        <div className='footer-divider'>
            <div className='contact-me'>Contact Me</div>
            <a href='https://www.linkedin.com/in/miah-barnes-2260111aa/' className='contact-linked'><i className="fab fa-linkedin"></i></a>
            <a href='https://github.com/OnionQueenMemu' className='contact-links'><i className="fab fa-github-square"></i></a>
            <a href='https://twitter.com/OnionQueenMemu' className='contact-twitter'><i className="fab fa-twitter-square"></i></a>
            <a class="social-list__link" href="mailto:miahellenbarnes@gmail.com" className='contact-email'><i className="fas fa-envelope-square"></i></a>
        </div>

    )
}

export default Footer;
import React from 'react';
import profile from '../images/profile-pic.jpg';

const Header = () => {

    return (
        <div className='header'>
            <div className='image-title-box'>
                <img className='profile-picture' alt='Image depicting the author/myself, Miah Barnes.' src={profile} />
                <div>Miah Barnes</div>
                <div className='header-quote'>"An hour of refactoring can save you a day of debugging."</div>
            </div>
        </div>
    )
}


export default Header;
import React from 'react';


const TechBar = () => {

    // const logos = [
    //     <div className='html-logo'></div>,
    //     <div className='css-logo'></div>,
    //     <div className='js-logo'></div>,
    //     <div className='mui-logo'></div>,
    //     <div className='pgs-logo'></div>,
    //     <div className='sqlize-logo'></div>,
    //     <div className='react-logo'></div>,
    //     <div className='python-logo'></div>,
    //     <div className='flask-logo'></div>,
    // ];

    // const slideShow = () => {

    // }

    return (
        <div className='tech-bar-wrapper'>
            <div className='html-logo'><span className='tooltiptext'>HTML</span></div>
            <div className='css-logo'><span className='tooltiptext'>CSS</span></div>
            <div className='js-logo'><span className='tooltiptext'>JavaScript</span></div>
            <div className='mui-logo'><span className='tooltiptext'>Material-UI</span></div>
            <div className='pgs-logo'><span className='tooltiptext'>PostgreSQL</span></div>
            <div className='sqlize-logo'><span className='tooltiptext'>Sequelize</span></div>
            <div className='react-logo'><span className='tooltiptext'>React</span></div>
            <div className='python-logo'><span className='tooltiptext'>Python</span></div>
            <div className='flask-logo'><span className='tooltiptext'>Flask</span></div>
        </div>
    )
}

export default TechBar;
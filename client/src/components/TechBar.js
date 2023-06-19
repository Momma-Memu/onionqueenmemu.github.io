import React from 'react';


const TechBar = () => {

    return (
        <div className='tech-bar-wrapper'>
            <div className='html-logo tech-logo'><span className='tooltiptext'>HTML</span></div>
            <div className='css-logo tech-logo'><span className='tooltiptext'>CSS</span></div>
            <div className='js-logo tech-logo'><span className='tooltiptext'>JavaScript</span></div>
            <div className='python-logo tech-logo'><span className='tooltiptext'>Python</span></div>
            <div className='java-logo tech-logo'><span className='tooltiptext'>Java</span></div>
            <div className='mui-logo tech-logo'><span className='tooltiptext'>Material-UI</span></div>
            <div className='pgs-logo tech-logo'><span className='tooltiptext'>PostgreSQL</span></div>
            <div className='sqlize-logo tech-logo'><span className='tooltiptext'>Sequelize</span></div>
            <div className='react-logo tech-logo'><span className='tooltiptext'>React</span></div>
            <div className='flask-logo tech-logo'><span className='tooltiptext'>Flask</span></div>
            <div className='angular-logo tech-logo'><span className='tooltiptext'>Angular</span></div>
        </div>
    )
}

export default TechBar;
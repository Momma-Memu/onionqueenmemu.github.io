import React from 'react';


const TechBar = () => {

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
            {/* <div className='angular-logo'><span className='tooltiptext'>Angular</span></div> */}
        </div>
    )
}

export default TechBar;
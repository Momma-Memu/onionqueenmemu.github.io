import React from 'react';
import html from '../images/techpics/html.png'
import css from '../images/techpics/css.png'
import js from '../images/techpics/javascript.png'
import py from '../images/techpics/python.png'
import java from '../images/techpics/java.png'
import pgs from '../images/techpics/postgre.png'
import sql from '../images/techpics/sequelize.png'
import flask from '../images/techpics/flask.png'
import vue from '../images/techpics/vue.png'
import react from '../images/techpics/react.png'
import angular from '../images/techpics/angular.png'
import bootstrap from '../images/techpics/bootstrap.png'

const TechBar = () => {
    const techMap = [
        { text: 'HTML', logo: html },
        { text: 'CSS', logo: css },
        { text: 'JavaScript', logo: js },
        { text: 'Python', logo: py },
        { text: 'Java', logo: java },
        { text: 'PostgreSQL', logo: pgs },
        { text: 'Sequelize', logo: sql },
        { text: 'Flask', logo: flask },
        { text: 'Vue', logo: vue },
        { text: 'React', logo: react },
        { text: 'Angular', logo: angular },
        { text: 'Bootstrap', logo: bootstrap },
      ]
    return (
        <div className='tech-bar-wrapper'>
            {
                techMap.map((tech) => (
                    <div className='tech-logo-wrapper' key={tech.text}>
                        <div className={`tech-logo ${tech.text.toLowerCase()}-logo`} alt={`${tech.text} logo.`}></div>
                        <div className='tooltip-wrapper'>
                            <div className='tooltiptext'>{tech.text}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TechBar;
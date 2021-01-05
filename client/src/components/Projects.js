import React from 'react';


const Projects = () => {

    return (
        <div className='projects-wrapper'>
            <div className='projects-header'>
                <a href='http://vidalia.herokuapp.com/login' target='new' className='project-title-v'>Vidalia
                    <div className='project-background-v'></div>
                </a>
                <a href='https://jellynettle.herokuapp.com/login' target='new' className='project-title-j'>JellyNettle
                    <div className='project-background-j'></div>
                </a>
                <a href='http://whilesingle.herokuapp.com' className='project-title-w'>While(Single):
                    <div className='project-background-w'></div>
                </a>
            </div>
        </div>
    )
}

export default Projects;
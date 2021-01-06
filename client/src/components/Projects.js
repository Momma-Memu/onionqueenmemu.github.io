import React from 'react';


const Projects = () => {

    return (
        <div className='projects-wrapper'>
            <div className='projects-header'>
                <div className='project-title-v'>Vidalia
                    <a href='http://vidalia.herokuapp.com/login' target='new'><div className='project-background-v'></div></a>
                </div>
                <div className='project-title-j'>JellyNettle
                    <a href='https://jellynettle.herokuapp.com/login' target='new'><div className='project-background-j'></div></a>
                </div>
                <div className='project-title-w'>While(Single):
                    <a href='http://whilesingle.herokuapp.com' target='new'><div className='project-background-w'></div></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;
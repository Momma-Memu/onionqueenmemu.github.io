import React from 'react';


class Beginnings extends React.Component {

    render(){
        return (
            <div className='beginning-body'>
                <div className='fing-background ui-card'>
                    <div className='fing-quote'>Don't be afraid of failure. Failure is your greatest teacher.</div>
                </div>
                <div className='timeline ui-card'>
                    <div className='timeline-header'>Timeline</div>
                    <div className='introduction'>I persued a self driven education in software as a means to satisfy my desire to be creative.</div>
                    
                    <div className='date'>April, 2020</div>
                    <div className='event'>I participated in an open <a href='https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science' target='_blank' rel='noreferrer'>CS50</a> course hosted by EDX and Harvard.</div>
                    
                    <div className='date'>June, 2020</div>
                    <div className='event'>I started a 6 month long, full stack web development program via <a href='https://www.appacademy.io/' target='_blank' rel='noreferrer'>App Academy</a>.</div>
                    
                    <div className='date'>November, 2020</div>
                    <div className='event'>After completing the course, I was brought on as a Teaching Assistant with <a href='https://www.appacademy.io/' target='_blank' rel='noreferrer'>App Academy</a>.</div>
                    
                    <div className='date'>June, 2021</div>
                    <div className='event'>
                        Over the course of 2.5 years I was employed by <a href='https://www.linkedin.com/company/zift-solutions-inc-/mycompany/' target='_blank' rel='noreferrer'>Zift Solutions</a>, 
                        maintaining and extending a large and complex ecosystem of new and existing legacy business and marketing solutions software.
                    </div>
                </div>
            </div>
        )
    }
}

export default Beginnings;
import React from 'react';


class Beginnings extends React.Component {

    render(){
        return (
            <div className='beginning-body'>
                <div className='fing-background'>
                    <div className='fing-quote'>Don't be afraid of failure. Failure is your greatest teacher.</div>
                </div>
                <div className='sliding-story'>
                    <div className='timeline'>Timeline</div>
                    <div className='starting-message'>I persued an education in software as a means to satisfy my desire to be creative.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>April, 2020</div>
                    <div className='edx-part'>I participated in an open <a href='https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science' target='_blank' rel='noreferrer'>CS50</a> course hosted by EDX and Harvard. It was this course that made me fall in love with code.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>June, 2020</div>
                    <div className='edx-part'>I started a 6 month long, full stack web development program via App Academy.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>November, 2020</div>
                    <div className='edx-part'>After completing that program I was promptly hired by App Academy, as a Teaching Assistant.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>June, 2021</div>
                    <div className='edx-part'>I am currently employed as a Software Engineer for <a href='https://www.linkedin.com/company/zift-solutions-inc-/mycompany/' target='_blank' rel='noreferrer'>Zift Solutions.</a></div>
                </div>
            </div>
        )
    }
}

export default Beginnings;
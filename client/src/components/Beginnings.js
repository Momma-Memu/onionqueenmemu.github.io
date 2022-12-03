import React from 'react';



class Beginnings extends React.Component {

    constructor(){
        super()
        this.ani = React.createRef();
        this.state = { scrollTop: 0 }
    }

    render(){
        return (
            <div className='beginning-body'>
                <div className='fing-background'>
                    <div className='fing-quote'>Don't be afraid of failure, failure is your greatest teacher.</div>
                </div>
                <div className='sliding-story'>
                    <div className='timeline'>Timeline</div>
                    <div className='starting-message'>I started my education in software engineering by diving head first.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>April, 2020</div>
                    <div className='edx-part'>I took an open CS50 course hosted by EDX and Harvard. It was this course that made me fall in love with code.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>June, 2020</div>
                    <div className='edx-part'>I started a 6 month long, full stack web development course via App Academy.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>November, 2020</div>
                    <div className='edx-part'>I completed the course and was hired promptly by App Academy, as a Teaching Assistant.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>June, 2021</div>
                    <div className='edx-part'>I am currently employed as a Software Engineer for <a href='https://www.linkedin.com/company/zift-solutions-inc-/mycompany/'>Zift Solutions.</a></div>
                </div>
            </div>
        )
    }
}

export default Beginnings;
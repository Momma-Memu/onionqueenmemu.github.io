import React, { useRef } from 'react';



const Beginnings = () => {

    const ani = useRef();

    return (
        <div className='beginning-body'>
            <div className='fing-background'>
                <div className='fing-quote'>Don't be afraid of failure, failure is your greatest teacher.</div>
            </div>
            <div className='sliding-story' ref={ani}>
                <div className='starting-message'>I started my education in software engineering by diving head first.</div>
                <i className="fas fa-arrow-down down-arrow"></i>
                <div className='arrow-dates'>April 15, 2020</div>
                <div className='edx-part'>I took a CS50 course hosted by EDX and Harvard. It was this course that made me fall in love with code.</div>
                <i className="fas fa-arrow-down down-arrow"></i>
                <div className='arrow-dates'>June 15, 2020</div>
                <div className='edx-part'>App Academy was my second stop. I made it through a 6 month long </div>
            </div>
        </div>
    )
}

export default Beginnings;
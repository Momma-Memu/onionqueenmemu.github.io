import React, { useRef } from 'react';



const Beginnings = () => {

    const ani = useRef();

    return (
        <div className='beginning-body'>
            <div className='fing-background'>
                <div className='fing-quote'>Don't be afraid of failure, failure is your greatest teacher.</div>
            </div>
            <div className='sliding-story' ref={ani}>

            </div>
        </div>
    )
}

export default Beginnings;
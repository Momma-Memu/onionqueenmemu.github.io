import React from 'react';



class Beginnings extends React.Component {

    constructor(){
        super()
        this.ani = React.createRef();
        this.state = { scrollTop: 0 }
    }

    componentDidMount(){
        // this.ani = document.querySelector('.App');
        // console.log(this.ani)
        window.addEventListener("scroll", this.onScroll)
    }

    onScroll = () => {
        const scrollTop = window.scrollY;
        this.setState({scrollTop: scrollTop});
        if(this.state.scrollTop > 300){
            if(this.ani.current.classList.contains('sliding-story')) return;
            this.ani.current.classList.remove('sliding-story-hidden')
            this.ani.current.classList.add('sliding-story')

        }
    }

    render(){

        return (
            <div className='beginning-body'>
                <div className='fing-background'>
                    <div className='fing-quote'>Don't be afraid of failure, failure is your greatest teacher.</div>
                </div>
                <div className='sliding-story-hidden' ref={this.ani}>
                    <div className='timeline'>Timeline</div>
                    <div className='starting-message'>I started my education in software engineering by diving head first.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>April 15, 2020</div>
                    <div className='edx-part'>I took a CS50 course hosted by EDX and Harvard. It was this course that made me fall in love with code.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>June 15, 2020</div>
                    <div className='edx-part'>I started a 6 month long Full Stack Web Development course via App Academy.</div>
                    <i className="fas fa-arrow-down down-arrow"></i>
                    <div className='arrow-dates'>November 25, 2020</div>
                    <div className='edx-part'>I completed the course and was hired promptly by App Academy as a Teaching Assistant.</div>
                </div>
            </div>
        )
    }
}

export default Beginnings;
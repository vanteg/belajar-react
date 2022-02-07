import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className='youtube-wrapper'>
            <div className='img-thumb'>
                <img src="https://i.ytimg.com/vi/SZQKH1cnnNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7XRB4imhe2-Wl2AAu79qLls-AZQ" alt="" />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time : '00.00',
    title : 'Default Title',
    desc : 'xx ditonton x hari yang lalu'
}


export default YoutubeComp;
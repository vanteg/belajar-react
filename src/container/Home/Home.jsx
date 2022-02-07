import React, {Component} from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';

class Home extends Component {
    render (){
        return(
            <div>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp time="9.10" title="tutorial react js"/>
                <YoutubeComp time="0.21" desc="1jt ditonton 1 hari yang lalu"/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
            </div>
            
        )
    }
}

export default Home;
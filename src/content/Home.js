import React, { Component } from 'react';
import TypingEffect from 'react-typing-effect';

import profilePic from '../images/me_in_boston.jpg';



class Home extends Component{
    render(){
        return(
            <div className='condiv home'>
               
                   <div>
                       <div>
                       <img src={profilePic} className='profilePic' alt="Profile"/>
                       </div>
                        <div className="typeEffectContainer">
                        <TypingEffect className='typingEffect' text={["Hi! I'm Jenn. Full Stack Web Programmer."]} speed={100} eraseDelay={3000}/>
                        </div>
                        
                    </div>   
               
            </div>
        )
    }
}

export default Home;
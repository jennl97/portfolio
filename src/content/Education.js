import React, { Component } from 'react';
import Card from '../components/Card';

class Education extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="aboutHeader">Education</h1>
                <Card title="Full Stack Web Development" where="Lambda School of Computer Science and Web Development" from="April 2019" to="Present" degree="Full Stack Web Development Certificate"/>
                <Card title="Web Design and Development" where="McHenry County College" from="June 2015" to="May 2017" degree="AAS Web Design and Development"/>
                <Card title="Digital Media" where="McHenry County College" from="June 2015" to="May 2017" degree="AAS Digital Media"/>
            </div>
        )
    }
}

export default Education;
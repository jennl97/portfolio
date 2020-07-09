import React, { Component } from 'react';

class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            'mySkills': ['HTML/CSS/JS', 'React.js', 'Node.js', 'PHP/SQL', 'WordPress Development', 'BigCommerce Development', 'RESTful API Development']
        }
    }


    render(){
        return(
            <div className="condiv">
                <h3 className="aboutHeader">Skills</h3>
                <ul>
                    {this.state.mySkills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>

            </div>
        )
    }
}

export default Skills;
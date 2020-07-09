import React, { Component } from "react";

class Card extends Component{
    render(){
        return(
            <div className="card">
                <div className="compdet">
                    <h3 className="secondText">{this.props.title}</h3>
                    <h4 className="secondText">{this.props.where}</h4>
                    <h4 className="secondText">{this.props.from} - {this.props.to}</h4>
                    <h4 className="secondText">{this.props.degree}</h4>
                </div>
            </div>
        )
    }
}

export default Card;
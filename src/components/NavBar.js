import React, { Component } from 'react';
import NavItem from './NavItems';
import SocialMedia from '../components/SocalMediaItems';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            'NavItemActive':''
        }
    }

    //function to add CSS class of .active to the NavItem
    activeItem=(item)=>{
        // if(this.state.NavItemId.length > 0){
        //     document.getElementById(this.state.NavItemActive).classList.remove('active');
        // }

        this.setState({'NavItemActive': item}, () =>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };


    render(){
        return(
            <nav>
                <ul>
                    <NavItem item = 'Home' tolink='/' active={this.activeItem}>Home</NavItem>
                    <NavItem item = 'About' tolink='/about' active={this.activeItem}>About</NavItem>
                    <NavItem item = 'Education' tolink='/education' active={this.activeItem}>Education</NavItem>
                    <NavItem item = 'Skills' tolink='/skills' active={this.activeItem}>Skills</NavItem>
                    <NavItem item = 'Projects' tolink='/projects' active={this.activeItem}>Projects</NavItem>
                    <NavItem item = 'Contact' tolink='/contact' active={this.activeItem}>Contact</NavItem>
                    <SocialMedia />
                </ul>
            </nav>
        )
    }
}

export default NavBar;
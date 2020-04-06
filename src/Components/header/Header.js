import React, {Component} from 'react';
import './Header.css';
import top_nav_logo from './logo.PNG';

class Header extends Component{
    render(){
        return(
            <nav className = "App">
                <ul className = "top-nav-ul">
                  <img src= {top_nav_logo} className="top-nav-logo"/>
                  <div className = "icon-container">
                    <li className = "top-nav-li"><a className = "top-nav-text" href="#">Home</a></li>
                    <li className = "top-nav-li"><a className = "top-nav-text" href="#">About Us</a></li>
                    <a href="#"><button className = "top-nav-button">Contact</button></a>
                  </div>
                </ul>
            </nav>
        );
    }
}

export default Header;

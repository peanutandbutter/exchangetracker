import React, {Component} from 'react';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <nav className = "App">
                <ul className = "top-nav-ul">
                    <li className = "top-nav-li"><a className = "top-nav-text" href="#">Home</a></li>
                    <li className = "top-nav-li"><a className = "top-nav-text" href="#">About Us</a></li>

                    <a href="#"><button className = "top-nav-button">Contact</button></a>
                </ul>
            </nav>
        );
    }
}

export default Header;

import React, {Component} from 'react';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <nav className = "App">
                <ul className = "top-nav-ul">
                    <li className = "top-nav-li"><a className = "nav-text" href="#">Home</a></li>
                    <li className = "top-nav-li"><a className = "nav-text" href="#">About Us</a></li>
                    <li className = "top-nav-li"><a className = "nav-text" href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
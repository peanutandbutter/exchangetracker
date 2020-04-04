import React, {Component} from 'react';


export default class Header extends Component{
    render(){
        return(
            <div className = "App">
                <ul className = "topnavul">
                    <li><a href="#">Home</a></li>
                </ul>

                <ul className = "topnavul">
                    <li><a href="#">About Us</a></li>
                </ul>

                <ul className = "topnavul">
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        );
    }
}


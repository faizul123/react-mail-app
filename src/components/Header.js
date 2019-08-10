import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="menu-container">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="#">New Mail</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Inbox</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
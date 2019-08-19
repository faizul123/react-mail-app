import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        console.log("header ===>   ",this.props);
        return (
            <div>
                <nav className="menu-container">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="#">New Mail</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Inbox<span className="badge">{this.props.unreadMessageCount}</span></a>
                        </li>
                        <li className="menu-item" onClick={this.props.logout}>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import MailCompose from './MailCompose'
import MailBox from './MailBox'
import Notification from './Notification'
import './Header.css'

class Header extends Component {

    constructor(props){
        super(props);

        this.state={
            menu:'Inbox'
        }
        this.setPage = this.setPage.bind(this);
    }

    setPage(menuItem){
        console.log(menuItem)
        this.setState((state,props) => ({
            menu:menuItem
        }));
    }

    render() {
       // console.log("header state===>   ",this.state);
        //console.log("header props===>   ",this.props);
       // debugger;
        return (
            <div>
                <nav className="menu-container">
                    <ul className="menu">
                        <li className="menu-item" onClick={() => this.setPage('New Mail')}>
                            <a href="#">New Mail</a>
                        </li>
                        <li className="menu-item" onClick={() => this.setPage('Inbox')}>
                            <a href="#">Inbox<span className="badge">{this.props.unreadMessageCount}</span></a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Sent</a>
                        </li>
                        <li className="menu-item" onClick={this.props.logout}>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>
                { this.state.menu && this.state.menu === 'New Mail' && 
                    <MailCompose />
                }
                { this.state.menu && this.state.menu === 'Inbox' &&
                    <MailBox 
                        loggedIn={this.props.loggedIn} 
                        messages={() => {
                            console.log("Inbox ",this.props.messages)
                            if(this.props.messages)
                                return this.props.messages
                            else {
                                console.log("Inbox else",this.props.messageHandler());
                                return this.props.messageHandler();
                            }
                        }}
                        /> 
                }
            </div>
        );
    }
}

export default Header;
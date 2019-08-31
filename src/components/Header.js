import React, { Component } from 'react';
import MailCompose from './MailCompose'
import {MailBox} from './MailBox'
import {notify} from './Notification'
import './Header.css'
import DataSource from '../service/DataSource';

class Header extends Component {

    constructor(props){
        super(props);

        this.state={
            menu:'Inbox'
        }
        this.setPage = this.setPage.bind(this);
        this.onChangePath.bind(this);
        window.onpopstate = this.onChangePath.bind(this);
        this.mainRef = React.createRef();
        this.timerId = null;
        
    }

    onChangePath(event){
      
        if(event.path[0].history.state){
            this.setState((state,props) => ({
                menu: event.path[0].history.state.menu
            }));
        }
    }


    setPage(event,menuItem){      
        
        window.history.pushState(
            {
                menu:menuItem
            },
            null,
            "/"+menuItem.toLowerCase().replace(" ","_")
        )
        this.setState((state,props) => ({
            menu:menuItem
        }));
        event.preventDefault();
    }

    componentDidUpdate(){
        
        if(this.timerId) clearTimeout(this.timerId);
        if(!this.mainRef.current.classList.contains("main")){
            this.mainRef.current.classList.add("main");
        }
        this.timerId = setTimeout(() => {
            this.mainRef.current.classList.remove("main");
        },500)
        
    }

    componentDidMount(){
        notify("Successfully login","success");
    }

    render() {
       // console.log("header state===>   ",this.state);
        //console.log("header props===>   ",this.props);
        return (
            <div className="main" ref={this.mainRef}>
                <nav className="menu-container">
                    <ul className="menu">
                        <li className="menu-item" onClick={(event) => this.setPage(event,'New Mail')}>
                            <span >New Mail</span>
                        </li>
                        <li className="menu-item" onClick={(event) => this.setPage(event,'Inbox')}>
                            <span >Inbox<span className="badge">{this.props.unreadMessageCount}</span></span>
                        </li>
                        <li className="menu-item" onClick={(event) => this.setPage(event,'Sent')}>
                            <span >Sent</span>
                        </li>
                        <li className="menu-item" onClick={this.props.logout}>
                            <span >Logout</span>
                        </li>
                    </ul>
                </nav>
                { this.state.menu && this.state.menu === 'New Mail' && 
                    <MailCompose />
                }
                { this.state.menu && this.state.menu === 'Inbox' &&
                    <MailBox 
                        type = {this.state.menu}
                        loggedIn={this.props.loggedIn} 
                        messages={
                             DataSource.fetchMessages()
                        }
                        /> 
                }
                { this.state.menu && this.state.menu === 'Sent' &&
                    <MailBox type={this.state.menu}
                        loggedIn={this.props.loggedIn} 
                        messages={
                             DataSource.fetchSentMessages()
                        }
                        /> 
                }
            </div>
        );
    }
}

export default Header;
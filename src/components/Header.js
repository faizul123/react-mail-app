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
        this.onChangePath.bind(this);
        window.onpopstate = this.onChangePath.bind(this);
        console.log(window.onpopstate)
        this.mainRef = React.createRef();
        this.timerId = null;
    }

    onChangePath(event){
        
        console.log(this);
        console.log("history api event ",event)
        if(event.path[0].history.state){
            this.setState((state,props) => ({
                menu: event.path[0].history.state.menu
            }));
        }
    }


    setPage(event,menuItem){
        
        console.log(menuItem)
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
        
        console.log(this.state);
        console.log("main ref",this.mainRef)
        debugger;
        if(this.timerId) clearTimeout(this.timerId);
        if(!this.mainRef.current.classList.contains("main")){
            this.mainRef.current.classList.add("main");
        }
        this.timerId = setTimeout(() => {
            this.mainRef.current.classList.remove("main");
        },500)
        
    }



    render() {
       // console.log("header state===>   ",this.state);
        //console.log("header props===>   ",this.props);
        return (
            <div className="main" ref={this.mainRef}>
                <nav className="menu-container">
                    <ul className="menu">
                        <li className="menu-item" onClick={(event) => this.setPage(event,'New Mail')}>
                            <a href="#">New Mail</a>
                        </li>
                        <li className="menu-item" onClick={(event) => this.setPage(event,'Inbox')}>
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
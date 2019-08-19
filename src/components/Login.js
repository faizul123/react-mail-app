import React, { Component } from 'react';
import './Login.css';
import Header from './Header';
import Inbox from './Inbox';

class Login extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchMessages = this.fetchMessages.bind(this);
        this.checkUserSession = this.checkUserSession.bind(this);
        this.logout = this.logout.bind(this);
        this.username = null;
        this.password = null;
        this.state = {
                isLogin:true,
                username:this.username,
                name:null
            };
        
    }

    handleChange(event){
        if(event.target.name === 'username')
            this.username=event.target.value;
        else if(event.target.name === 'password')
            this.password=event.target.value;
    }

    checkUserSession(){
        return true;
    }

    handleSubmit(event){
        
        if(this.username === 'admin' && this.password === 'test'){
            console.log("Login Successfull")
            this.setState({
                isLogin:true,
                username:'admin',
                name:'Admin'
            })
        }else{
            console.log("username and password is not correct")
        }
        event.preventDefault();
    }

    logout(){
        this.username = null;
        this.password = null;
        this.setState((state,props) => ({
            isLogin:!state.isLogin
        }));
    }


    fetchMessages(){
        return ({
                "messages":[
                            {
                                "id":1,
                                "from":"offers@Flipkart.com",
                                "subject":"Hurry!!! Flipkart announces big billion day!",
                                "receivedTime":"1:15 PM",
                                "isRead":false
                            },
                            {
                                "id":2,
                                "from":"offers@amazon.com",
                                "subject":"Hurry!!! Amazon announces big billion day!",
                                "receivedTime":"1:10 PM",
                                "isRead":true
                            },
                            {
                                "id":3,
                                "from":"fb-networks@fb.com",
                                "subject":"Ramzon has changed his profile",
                                "receivedTime":"1:00 PM",
                                "isRead":true
                            }
                        ],
                "unreadMessageCount":1
                    });
    }

    render() {
        console.log("rendering...",(!this.state.isLogin || !this.checkUserSession()))
        if(!this.state.isLogin || !this.checkUserSession())
            return (
                <div className="login-container">
                <form name="login" onSubmit={this.handleSubmit} autoComplete="off">
                    <div className="form-section">
                            <div className="login-container_form-control">
                                <label>Enter username</label>
                            </div>
                            <div className="login-container_form-control">
                                <input type="text" size="30" name="username" onChange={this.handleChange} className="login-container_form-control_text" />
                            </div>
                        </div>
                        <div className="form-section">
                            <div className="login-container_form-control">
                                <label>Enter password</label>
                            </div>
                            <div className="login-container_form-control">
                                <input type="password" size="30" name="password" onChange={this.handleChange} className="login-container_form-control_text" />
                            </div>
                        </div>
                        <div className="form-section">
                            <div className="login-container_form-control">
                            <button className="btn btn--max btn--active" type="submit">Login</button>
                            <button className="btn btn--max btn--disabled btn--right" type="reset">Cancel</button>
                            </div>
                        </div>
                </form>
                </div>
            );
        else{
            return(
                <InboxPage messages={this.fetchMessages()} loggedIn={this.state.isLogin} logoutHandler={this.logout} />
            );
        }
    }
}

function InboxPage(props){
    console.log(props)
    return (
        <div>
            <Header unreadMessageCount={props.messages.unreadMessageCount} logout={props.logoutHandler}/>
            <Inbox loggedIn={props.loggedIn} messages={props.messages.messages}/>
        </div>
    );
}

export default Login;
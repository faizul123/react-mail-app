import React, { Component } from 'react';
import './Login.css';
import Header from './Header';
import {notify} from './Notification'
import DataSource from '../service/DataSource';

class Login extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkUserSession = this.checkUserSession.bind(this);
        this.logout = this.logout.bind(this);
        this.username = null;
        this.password = null;
        this.state = {
                isLogin:false,
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
       // debugger;
        if(this.username === 'admin' && this.password === 'test'){
            
            //debugger;
            // const notify = <Notification text="Login successfull" />
            // ReactDOM.render(notify,document.getElementsByClassName("App")[0]);
            this.setState({
                isLogin:true,
                username:'admin',
                name:'Admin',
            })
        }else{
            notify("username and password is not correct","error");
        }
        event.preventDefault();
    }

    logout(){
        this.username = null;
        this.password = null;
        this.setState((state,props) => ({
            isLogin:!state.isLogin,
        }));
    }

    componentDidUpdate(){
        if(!this.state.isLogin){
            notify("logout successfully","success");
        }
    }

    render() {
        //console.log("rendering...",(!this.state.isLogin || !this.checkUserSession()))
        //debugger;
        
        if(!this.state.isLogin || !this.checkUserSession())
            return (
                <>
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
                </>
            );
        else{
            return(
                <>
                <InboxPage messages={DataSource.fetchMessages()} messageHandler={DataSource.fetchMessages} loggedIn={this.state.isLogin} logoutHandler={this.logout} />
                
                </>
            );
        }
    }
}

function InboxPage(props){
    //console.log(props)
    return (
        <div>
            <Header unreadMessageCount={props.messages.unreadMessageCount} messageHandler={props.messageHandler} loggedIn={props.loggedIn} logout={props.logoutHandler} messages={props.messages.messages}/>
        </div>
    );
}

export default Login;
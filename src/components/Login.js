import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    
    render() {
        return (
            <div className="login-container">
               <form name="login">
                   <div className="form-section">
                        <div className="login-container_form-control">
                            <label>Enter username</label>
                        </div>
                        <div className="login-container_form-control">
                            <input type="text" size="30" name="username" className="login-container_form-control_text" />
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="login-container_form-control">
                            <label>Enter password</label>
                        </div>
                        <div className="login-container_form-control">
                            <input type="password" size="30" name="password" className="login-container_form-control_text" />
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
    }
}

export default Login;
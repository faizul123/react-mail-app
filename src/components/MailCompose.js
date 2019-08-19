import React, { Component } from 'react';
import './MailComposer.css'
import './Login.css'
class MailCompose extends Component {
    render() {
        
        return (
            <div className="mail-composer">
                
                <form className="compose">
                    <div className="form-section">
                        <label>To:</label>
                        <input className="form-control" type="text" name="to" size="100" />
                    </div>
                    <div className="form-section">
                        <label>Subject</label>
                        <input className="form-control" type="text" name="subject" size="100" />
                    </div>
                    <div className="form-section">
                        <label>Message</label>
                        <textarea className="form-control" rows="15" cols="100" name="message" />
                    </div>
                    <div className="form-section">
                        <button className="btn btn--max btn--active" type="submit">Send</button>
                        <button className="btn btn--max btn--disabled btn--right" type="reset">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MailCompose;
import React, { Component } from 'react';
import './MailBox.css'

class MailBox extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.canWeChangeReadState = this.canWeChangeReadState.bind(this);
        this.state = {
            readMessageIds:[],
            messages:props.messages
        }
    }

    handleClick(messageId){
        //console.log("clicked!",messageId);
        const readMessageIds = this.state.readMessageIds;
        readMessageIds.push(messageId);
        this.setState((state,props) => ({
            readMessageIds:readMessageIds
        }))
    }

    canWeChangeReadState(message){
        //console.log(this.state)
        if(message.isRead) return true;
        if(this.state && this.state.readMessageIds){
            if(this.state.readMessageIds.indexOf(message.id) !== -1)
                return true;
            else return false;
        }
        else return false;
    }

    render() {
        console.log("rendering...");
        return (
            <div className="inbox-container">
                <h2>Inbox</h2>
            {
                
                this.state.messages().map((message) => {
                    return <Message 
                        messageId={message.id}
                        from={message.from}
                        subject={message.subject}
                        receivedTime={message.receivedTime}
                        isRead={this.canWeChangeReadState(message)}
                        onClick={this.handleClick}
                        />
                })
            }        
            </div>
        );
    }
}

 function Message(props){
    return(
        <div onClickCapture={props.onClick.bind(null,props.messageId)} 
        className={props.isRead ? "message-container message-container_read" : "message-container"}>
            <span className="from">{props.from}</span>
            <span className="subject">{props.subject}</span>
            <span className="receivedTime">{props.receivedTime}</span>
        </div>
    );
}



export default MailBox;
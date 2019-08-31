import React, { Component } from 'react';
import './MailBox.css'

export class MailBox extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.canWeChangeReadState = this.canWeChangeReadState.bind(this);
        this.state = {
            readMessageIds:[],
            messages:props.messages.messages
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
        return (
            <div className="inbox-container">
                <h2>{this.props.type}</h2>
            {
                
                this.state.messages.map((message) => {
                    if(this.props.type === 'Inbox')
                        return <Message 
                            key={message.id}
                            messageId={message.id}
                            from={message.from}
                            subject={message.subject}
                            time={message.time}
                            isRead={this.canWeChangeReadState(message)}
                            onClick={this.handleClick.bind(null,message.id)}
                            />
                    else 
                        return <Message 
                        key = {message.id}
                        messageId={message.id}
                        from={"Me"}
                        subject={message.subject}
                        time={message.time}
                        isRead={true}
                        />
                })
            }        
            </div>
        );
    }
}

 export function Message(props){
    return(
        <div onClickCapture={props.onClick} 
        className={props.isRead ? "message-container message-container_read" : "message-container"}>
            <span className="from">{props.from}</span>
            <span className="subject">{props.subject}</span>
            <span className="receivedTime">{props.time}</span>
        </div>
    );
}



export default {Message,MailBox};
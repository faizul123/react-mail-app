import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Notification.css'

export class Notification extends Component {

    constructor(props){
        super(props);
        
        this.setTimeoutId = null;
         this.notificationStyle = {
            position:"absolute",
            padding:"10px",
            border:"1px solid lightblue",
            borderRadius:"10px",
            top: "100px",
            right: "15px"
        }
        this.notificationTextStyle={
            color:"white",
            fontSize:"14px",
            fontWeight:"600"
        }

        this.show = {
            display:"block"
        }

        this.hide = {
            display:"none"
        }

        this.state={
            text:props.text,
            className:props.type === 'error' ? "notification show error" : "notification show",
            show:true
        }
    }

    componentWillReceiveProps(nextProps){
       
        if(!this.state.show){
            this.setState({
                text:nextProps.text,
                show:true,
                className:this.props.type === 'error' ? "notification show error" : "notification show"
            })
        }
    }


    componentDidMount(){
        
        if(this.setTimeoutId == null){
            this.setTimeoutId = setTimeout(() => {
                
                if(this.state.show){
                    this.setState((state,props) => ({
                        className:this.props.type === 'error' ? "notification show error" : "notification show",
                        show:false
                    }));
                }
            },3000);
           
        }
    }

    componentDidUpdate(){
        
        if(this.setTimeoutId && !this.state.show){
                
               ReactDOM.unmountComponentAtNode(document.getElementById("notification"));
               clearTimeout(this.setTimeoutId);
               this.setTimeoutId = null;
        }else if(this.setTimeoutId == null){
            debugger;
            this.setTimeoutId = setTimeout(() => {
                
                if(this.state.show){
                    this.setState((state,props) => ({
                        className:this.props.type === 'error' ? "notification show error" : "notification show",
                        show:false
                    }));
                }
            },3000);
            
        }
    }


    componentWillUnmount(){
        this.setState({})
    }

    render() {
        
        const element = <div className={this.state.className} style={this.notificationStyle} >
                  <p className="notification-text" style={this.notificationTextStyle} >{this.state.text}</p>
        </div>
        
        return (<>{element}</>);
    }
}

export const notify = (message,type) => {
    ReactDOM.render(<Notification text={message} type={type} />,document.getElementById("notification"))
}

export default {Notification,notify};
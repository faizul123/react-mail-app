import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Notification.css'

class Notification extends Component {

    constructor(props){
        super(props);
        console.log("notification constructor")
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

    showNotification(text){
        this.setState((state,props) => ({
            text:text,
            className:"notification show",
            show:true
        }));
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps " , nextProps, " current props text ", this.props.text)
        console.log("current state" , this.state)
        if(!this.state.show){
            this.setState({
                text:nextProps.text,
                show:true,
                className:this.props.type === 'error' ? "notification show error" : "notification show"
            })
        }
    }


    componentDidMount(){
        console.log("componentDidMount.")
        debugger;
        if(this.setTimeoutId == null){
            this.setTimeoutId = setTimeout(() => {
                console.log("Notification test ")
                if(this.state.show){
                    this.setState((state,props) => ({
                        className:this.props.type === 'error' ? "notification show error" : "notification show",
                        show:false
                    }));
                }
            },3000);
            console.log("settimeout id:",this.setTimeoutId)
        }
    }

    componentDidUpdate(){
        console.log("component did update")
        if(this.setTimeoutId && !this.state.show){
                console.log("componentDidMount unmount triggered")
               ReactDOM.unmountComponentAtNode(document.getElementById("notification"));
               clearTimeout(this.setTimeoutId);
               this.setTimeoutId = null;
        }else if(this.setTimeoutId == null){
            debugger;
            this.setTimeoutId = setTimeout(() => {
                console.log("Notification test ")
                if(this.state.show){
                    this.setState((state,props) => ({
                        className:this.props.type === 'error' ? "notification show error" : "notification show",
                        show:false
                    }));
                }
            },3000);
            console.log("settimeout id:",this.setTimeoutId)
        }
    }


    componentWillUnmount(){
        
        console.log("Notification unmount")
        this.state={};
        console.log(this.state)
    }

    render() {
        console.log("render ",this.state," timeoutid ",this.setTimeoutId);
        const element = <div className={this.state.className} style={this.notificationStyle} >
                  <p className="notification-text" style={this.notificationTextStyle} >{this.state.text}</p>
        </div>
        ReactDOM.render(element,document.getElementById("notification"))
        return (<></>);
    }
}

export default Notification;
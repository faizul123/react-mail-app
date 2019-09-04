import React from 'react';
import './Controls.css'

export const DefaultButton = (props) => {
    return (
        <div className="btn btn--default btn__default">
            {props.text}
        </div>
    );
};

export const DefaultButton_SZ2 = (props) => {
    return (
        <div className="btn btn--default btn--sz2 btn__default">
            {props.text}
        </div>
    );
};

export const DefaultButton_SZ3 = (props) => {
    return (
        <div className="btn btn--default btn--sz3 btn__default">
            {props.text}
        </div>
    );
};

export const PrimaryButton = (props) => {
    return (
        <div className="btn btn--default btn__primary">
            {props.text}
        </div>
    );
};

export const PrimaryButton_SZ2 = (props) => {
    return (
        <div className="btn btn--default btn--sz2 btn__primary">
            {props.text}
        </div>
    );
};

export const PrimaryButton_SZ3 = (props) => {
    return (
        <div className="btn btn--default btn--sz3 btn__primary">
            {props.text}
        </div>
    );
};

export const TextBox = (props) => {
    return(
        <div className="form-control">
            <input
                type="text" 
                name={props.name} 
                size={props.size ? props.size : 30} 
                className="text-box font-14px"
                autoComplete="off"
                {...props}
                 />
        </div>
    );
}

export const MaterialTextBox = (props) => {
    return(
        <div className="form-control">
            <input
                type="text" 
                name={props.name} 
                size={props.size ? props.size : 30} 
                className="text-box text-box--material font-14px"
                autoComplete="off"
                {...props}
                 />
        </div>
    );
}

export const TextBoxAndLabel = (props) => {
    return(
        <div className="form-control">
        <span className="form-control--label-holder">
            <span className="form-control--label">{props.label}</span>
            <input 
                type="text" 
                name={props.name} 
                size={props.size ? props.size : 30} 
                className="text-box font-14px"
                autoComplete="off"
                 />
        </span>
        </div>
    );
}

export const TextBoxAndIcon = (props) => {
    return(
        <div className="form-control">
        <span className="form-control--icons-holder">
            <span className={"form-control--icon " + props.icon }>{(!props.icon) && "#" }</span>
            <input 
                type="text" 
                name={props.name} 
                size={props.size ? props.size : 30} 
                className="text-box font-14px"
                autoComplete="off"
                 />
        </span>
        </div>
    );
}

export  class Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:props.list ? props.list : [{key:"1",value:"Item 1"},{key:"2",value:"Item 2"}]
        }
        this.onSelectHandler = this.onSelectHandler.bind(this);
    }

    onSelectHandler(key){
        console.log(key);
        this.setState((state,props) => ({
            value : "Item 3"
        })
    }

    render(){
        console.log("test")
        return(
            <div className="form-control">
            <span className="form-control--icons-holder">
                <span className={"form-control--icon " + props.icon }>{(!props.icon) && "#" }</span>
                    <input 
                        type="text"
                        value={this.state.value}
                        name={props.name} 
                        size={props.size ? props.size : 30} 
                        className="selectbox font-14px"
                        autoComplete="off"
                        />
            <ul className="list-container">
                this.state.list.map(item => {
                    <li className="list-container--item font-14px" onClick={this.onSelectHandler.bind(null,item.key)} key={item.key}>{item.value}</li>
                }
            </ul>
            </span>
            </div>
        );
    }
}

export const CheckBox = (props) => {
    return(
        <div className="checkbox">
            <input type="checkbox" value="1" id="checkboxInput" {...props} />
            <label for="checkboxInput"></label>
        </div>
    );
}

export const CheckBox2 = (props) => {
    return(
        <div className="checkbox2">
            <input type="checkbox" value="1" id="checkboxTwoInput" {...props} />
            <label for="checkboxTwoInput"></label>
        </div>
    );
}



export default {
    DefaultButton,
    DefaultButton_SZ2,
    DefaultButton_SZ3,
    PrimaryButton,
    PrimaryButton_SZ2,
    PrimaryButton_SZ3,

    TextBoxAndLabel,
    TextBoxAndIcon,

    CheckBox,
    CheckBox2
};
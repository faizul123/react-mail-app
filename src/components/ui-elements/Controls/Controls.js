import React from 'react';
import './Controls.css'

export const DefaultButton = (props) => {
    return (
        <div className="btn btn--default btn__default" {...props}>
            {props.text}
        </div>
    );
};

export const DefaultButton_SZ2 = (props) => {
    return (
        <div className="btn btn--default btn--sz2 btn__default" {...props}>
            {props.text}
        </div>
    );
};

export const DefaultButton_SZ3 = (props) => {
    return (
        <div className="btn btn--default btn--sz3 btn__default" {...props}>
            {props.text}
        </div>
    );
};

export const PrimaryButton = (props) => {
    return (
        <div className="btn btn--default btn__primary" {...props}>
            {props.text}
        </div>
    );
};

export const PrimaryButton_SZ2 = (props) => {
    return (
        <div className="btn btn--default btn--sz2 btn__primary" {...props}>
            {props.text}
        </div>
    );
};

export const PrimaryButton_SZ3 = (props) => {
    return (
        <div className="btn btn--default btn--sz3 btn__primary" {...props}>
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
                {...props}
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
                {...props}
                 />
        </span>
        </div>
    );
}

export class Select extends React.Component {
    constructor(props){
        super(props);
        const defaultList = props.list ? props.list : [{key:"1",value:"Item 1"},{key:"2",value:"Item 2"}];
        this.state = {
            key:defaultList[0].key || '',
            value:defaultList[0].value || '',
            list: defaultList || []
        };

        this.onSelectHandler = this.onSelectHandler.bind(this);
    }

    onSelectHandler(key){
         this.setState((state,props) => ({
             key : key,
             value : this.state.list.find((item) => {
                 if(item.key === key) {
                     console.log(item.value)
                     return true;
                 }
                }).value
         }));
    }

    render(){
        console.log("test",this.state)
        return(
            <div className="form-control">
            <span className="form-control--icons-holder">
                <span className={"form-control--icon " + this.props.icon }>{(!this.props.icon) && "#" }</span>
                    <input 
                        type="text"
                        value={this.state.value}
                        name={this.props.name} 
                        size={this.props.size ? this.props.size : 30} 
                        className="selectbox font-14px"
                        autoComplete="off"
                        />
            <ul className="list-container">
             {
                this.state.list.map((item) => {
                    return <li className="list-container--item font-14px" onClick={this.onSelectHandler.bind(this,item.key)} key={item.key}>{item.value}</li>
                })
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
            <label htmlFor="checkboxInput"></label>
        </div>
    );
}

export const CheckBox2 = (props) => {
    return(
        <div className="checkbox2">
            <input type="checkbox" value="1" id="checkboxTwoInput" {...props} />
            <label htmlFor="checkboxTwoInput"></label>
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
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

export default {DefaultButton,DefaultButton_SZ2,DefaultButton_SZ3,PrimaryButton,PrimaryButton_SZ2,PrimaryButton_SZ3};
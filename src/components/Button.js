import React from 'react';
import COLORS_ARRAY from './ColorsArray';

const Button = (props) => (
    <button id="new-quote" onClick={props.clickHandler} style={{backgroundColor: props.accentColor}}>{props.buttonDisplayName}</button>
)

export default Button
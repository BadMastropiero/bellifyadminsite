import React from 'react';

const Input = (props) => (
    <div className={`focusInput ${props.customClass}`}>
        <label className="focusInput-text" htmlFor="input">{props.label}</label>
        <input className={`input facture-font ${props.customClass}`} type="text" value={props.value} />
    </div>
);

export default Input;

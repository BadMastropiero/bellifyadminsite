import React from 'react';

const InputFonts = (props) => (
	<div className={`focusInput ${props.customClass}`}>
		<label className="focusInput-text" htmlFor="input">{props.label}</label>
		<input className="input-facture-font" type="text" value={props.value} />
	</div>
);

export default InputFonts;

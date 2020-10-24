import React from 'react';

import '../../../assets/scss/components/color-picker/color-picker.scss'

const Index = (props) => (
	<div className={`focusInput ${props.customClass}`}>
		<label className="focusInput-text facture-red" htmlFor="input">{props.label}</label>
		<div className="color-picker">
			{props.children}
			<input className="InputColor facture-red" type="text" value={props.value} />
		</div>
	</div>
);

export default Index;

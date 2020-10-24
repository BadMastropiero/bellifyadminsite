import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


export default function Modal(props) {
    return (
        !props.open 
        ? <Fragment />
        : 
        <div className="Modal-shadow">
            <div className={`Modal ${props.customClass}`} >
                {props.children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    cardClass: PropTypes.string
}
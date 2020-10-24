import React from 'react';
import PropTypes from 'prop-types';

export default function Table(props) {
    return (
        <table className={`Table ${props.customClass}`}>   
            {props.children}
        </table>
    )
}

Table.defaultProps = {
    customClass: ""
}

Table.propTypes = {
    Table: PropTypes.string  
}
import React from 'react';
import PropTypes from 'prop-types';

export default function SaveBar(props) {
    return (
        <div style={props.styles} className="SectionTitle-saveBar">
            {props.children}
        </div>
    )
}

SaveBar.propTypes = {
    SaveBar: PropTypes.string
}

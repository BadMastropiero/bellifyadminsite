import React from 'react';
import PropTypes from 'prop-types';

export default function SectionTitle(props) {
    return (
        <div className="SectionTitle Emails">
            {props.children}
        </div>
    )
}

SectionTitle.propTypes = {
    SectionTitle: PropTypes.string
}

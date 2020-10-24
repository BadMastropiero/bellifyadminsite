import React from 'react';
import PropTypes from 'prop-types';

const BSCardBody = (props) => (
    <div className={`BeonshopCard-body ${props.className}`}>
        {props.children}
    </div>
);

BSCardBody.defaultProps = {
    className: ""
}

BSCardBody.propTypes = {
    className: PropTypes.string
}

export default BSCardBody;
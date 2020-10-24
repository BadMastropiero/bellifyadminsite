import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = (props) => (
    <thead className={`TableHeader ${props.customClass}`}>
        {props.children}
    </thead>
);

TableHeader.defaultProps = {
    customClass: ""
}

TableHeader.propTypes = {
    customClass: PropTypes.string
}

export default TableHeader;
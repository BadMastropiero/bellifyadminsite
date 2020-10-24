import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../../../assets/scss/components/card/card.scss';

export default function Card(props) {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    }

    const renderToggle = () => {
        if(props.useButton){
            return <button onClick={toggle} className="Card-buttonLess"><i className={collapsed ? "fas fa-plus" : "fas fa-minus"} /></button>
        }
    }

    return (
        <div className={`BeonshopCard card ${className}`}>
            {renderToggle()}
            <div className={collapsed ? 'BeonshopCard-collapse' : ''}>
                {props.children}
            </div>
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string
}

Card.defaultProps = {
    className: ""
}

import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const Switch = (props) => {
    return(
        <Fragment>
            <input onChange={props.onChange} className="d-none" id={props.id} type="checkbox" checked={props.checked}></input>
            <label htmlFor={props.name} className={`check-trail ${props.customClass}`}>
                <span className={`check-handler ${props.customClass}`}></span>
            </label>
        </Fragment>
    )
}

Switch.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  checked: PropTypes.string
}

export default Switch;

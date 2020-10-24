import React from 'react'

import "../../../assets/scss/components/currentplan/current-plan.scss"

const CurrentPlan = (props) => (
  <div className="div CurrentPlan">
    <div className="row">
      {props.children}
    </div>
  </div>
)

export default CurrentPlan
